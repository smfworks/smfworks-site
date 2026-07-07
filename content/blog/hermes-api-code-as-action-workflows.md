---
slug: "hermes-api-code-as-action-workflows"
title: "Building Hermes API Workflows: Code as Action, Not Just Conversation"
excerpt: "Stop treating the Hermes API like a chat endpoint. Learn how to build durable, observable workflows where code calls actions, agents handle execution, and your application stays in control."
date: "2026-07-07"
categories: ["Liam's Landing", "Hermes AI", "API Design", "Software Architecture", "Automation"]
readTime: 11
image: "/images/blog/liam-hermes-api-code-as-action-workflows-hero.png"
author: "Liam"
---

# Building Hermes API Workflows: Code as Action, Not Just Conversation

Most people use the Hermes API the wrong way. They send a prompt, get a response, and call it integration. That's not an agent workflow. That's a chatbot with extra steps.

The right way is to treat Hermes as an action runtime. Your code defines the workflow: what to check, what to decide, what to delegate. Hermes executes the messy parts — reading files, running commands, calling subagents, parsing outputs. Your application stays in control. You get determinism where you need it and agentic flexibility where you don't want to write brittle scripts.

This post shows how to build that layer. We'll write a real workflow manager in Python, connect it to Hermes, handle retries and idempotency, and observe what the agent is doing without losing our minds. This is the architecture I use at SMF Works for cron jobs, deploy pipelines, and incident response.

---

## The Wrong Mental Model

Here's the pattern I see in most "Hermes integrations":

```python
import requests

response = requests.post("https://hermes-api.example.com/v1/chat", json={
    "prompt": "Check if the service is healthy and restart it if not",
    "model": "kimi-k2.7-code:cloud"
})
print(response.json()["text"])
```

This fails for the same reason most LLM demos fail in production:

- You can't parse the output reliably.
- You can't retry a failed sub-step without resending the whole prompt.
- You can't audit which commands ran and what they returned.
- You can't inject your own logic between steps.

A real workflow looks more like a state machine than a chat session. Your code owns the state machine. Hermes owns the tool calls.

---

## The Right Shape: Workflow + Steps + Executor

I organize production Hermes integrations around three pieces:

| Component | Responsibility |
|-----------|----------------|
| **Workflow** | The high-level goal and step sequence |
| **Step** | A single action with inputs, expected outputs, and a retry policy |
| **Executor** | The Hermes-backed runner that executes a step and returns structured results |

Your code writes workflows and steps. Hermes runs steps that need agentic execution. Plain Python handles everything else.

Let's build it.

---

## Step 1: Define a Step Contract

Every step has a name, a prompt template, expected output schema, and execution config. Keep this explicit. If you don't define the contract, you can't test or retry the step.

```python
from dataclasses import dataclass, field
from typing import Any, Optional

@dataclass
class Step:
    name: str
    prompt: str
    toolsets: list[str] = field(default_factory=list)
    expected_schema: Optional[dict] = None
    retries: int = 2
    timeout_seconds: int = 120
```

A concrete step looks like this:

```python
health_check = Step(
    name="check_service_health",
    prompt="""
Check if the service at {url} is healthy.
1. Run `curl -s -o /dev/null -w '%{http_code}' {url}/health`
2. If the status is not 200, inspect the last 50 lines of {log_path} for errors.
3. Return a JSON object with keys: `status` ('healthy', 'degraded', 'down'), `http_code`, and `errors` (list of error strings).
Do not output anything outside the JSON object.
""".strip(),
    toolsets=["terminal"],
    expected_schema={
        "type": "object",
        "properties": {
            "status": {"type": "string", "enum": ["healthy", "degraded", "down"]},
            "http_code": {"type": "integer"},
            "errors": {"type": "array", "items": {"type": "string"}}
        },
        "required": ["status", "http_code", "errors"]
    }
)
```

The `expected_schema` is your parsing contract. We'll enforce it later.

---

## Step 2: Build the Executor

The executor is the boundary between your deterministic code and Hermes. It sends the rendered prompt to Hermes, asks for structured output, and validates the result against the schema.

```python
import json
import jsonschema
from hermes_tools import execute_code as hermes_run

class HermesExecutor:
    def __init__(self, model: str = "kimi-k2.7-code:cloud"):
        self.model = model

    def run(self, step: Step, context: dict[str, Any]) -> dict[str, Any]:
        rendered = step.prompt.format(**context)
        # hermes_run is a stand-in for your API call. In production this is
        # Hermes's execute_code / terminal / delegate tool chain.
        for attempt in range(step.retries + 1):
            try:
                result_text = self._call_hermes(rendered, step.toolsets, step.timeout_seconds)
                parsed = self._extract_json(result_text)
                if step.expected_schema:
                    jsonschema.validate(parsed, step.expected_schema)
                return {"ok": True, "data": parsed, "attempt": attempt + 1}
            except Exception as e:
                if attempt == step.retries:
                    return {"ok": False, "error": str(e), "attempt": attempt + 1}
        return {"ok": False, "error": "exhausted retries"}

    def _call_hermes(self, prompt: str, toolsets: list[str], timeout: int) -> str:
        # Replace with your actual Hermes API invocation.
        # In our environment we call the agent via hermes_tools.execute_code
        # or a gateway endpoint. This method isolates that dependency.
        raise NotImplementedError("wire this to your Hermes runtime")

    def _extract_json(self, text: str) -> Any:
        # Sometimes the model wraps JSON in triple backticks.
        text = text.strip()
        if text.startswith("```"):
            lines = text.splitlines()
            if lines[0].startswith("```"):
                lines = lines[1:]
            if lines and lines[-1].startswith("```"):
                lines = lines[:-1]
            text = "
".join(lines)
        return json.loads(text)
```

Key design decisions:

- **Retries are built in.** Agent outputs are stochastic. Your executor must retry on parse or validation failure.
- **Schema validation happens before your workflow sees the data.** This catches drift early.
- **The JSON extractor is defensive.** Models love to wrap JSON in markdown fences.

---

## Step 3: Wire the Executor to Real Hermes

At SMF Works we usually invoke Hermes through the gateway or the native toolset. Here's a concrete `_call_hermes` implementation using a local Hermes runtime:

```python
import os
import subprocess

class LocalHermesExecutor(HermesExecutor):
    def _call_hermes(self, prompt: str, toolsets: list[str], timeout: int) -> str:
        # Example: hermes CLI if installed
        cmd = [
            "hermes", "run",
            "--model", self.model,
            "--prompt", prompt,
            "--toolsets", ",".join(toolsets),
            "--timeout", str(timeout),
        ]
        env = os.environ.copy()
        env["HERMES_OUTPUT_FORMAT"] = "json"
        result = subprocess.run(cmd, capture_output=True, text=True, env=env, timeout=timeout)
        if result.returncode != 0:
            raise RuntimeError(f"Hermes failed: {result.stderr}")
        return result.stdout
```

If you're using the HTTP gateway, swap `subprocess.run` for an authenticated `requests.post`. The important part is that this method is the only place Hermes is called. The rest of your workflow is decoupled from transport details.

---

## Step 4: Compose Steps into a Workflow

A workflow is just a list of steps with a shared context dict and a decision function after each step.

```python
from dataclasses import dataclass
from typing import Callable

@dataclass
class Workflow:
    name: str
    steps: list[tuple[Step, Callable[[dict], Optional[Step]]]]
    context: dict = field(default_factory=dict)

    def run(self, executor: HermesExecutor) -> dict:
        results = []
        for step, decide in self.steps:
            result = executor.run(step, self.context)
            results.append({"step": step.name, **result})
            if not result["ok"]:
                return {"workflow": self.name, "status": "failed", "results": results}

            self.context[step.name] = result["data"]

            next_step = decide(self.context) if decide else None
            if next_step is None:
                continue
            # If decide returns a new step, insert it dynamically.
            # For simplicity, this example assumes static workflows.

        return {"workflow": self.name, "status": "completed", "results": results}
```

Now we can express the service restart workflow:

```python
restart_service = Step(
    name="restart_service",
    prompt="""
The service at {url} is {status} with HTTP code {http_code}.
Attempt to restart it safely:
1. Run `sudo systemctl restart {service_name}`
2. Wait 5 seconds
3. Run `curl -s -o /dev/null -w '%{http_code}' {url}/health`
4. Return JSON with `restart_status` ('succeeded', 'failed'), `final_http_code`, and `output`.
""".strip(),
    toolsets=["terminal"],
    expected_schema={
        "type": "object",
        "properties": {
            "restart_status": {"type": "string", "enum": ["succeeded", "failed"]},
            "final_http_code": {"type": "integer"},
            "output": {"type": "string"}
        },
        "required": ["restart_status", "final_http_code", "output"]
    }
)

service_workflow = Workflow(
    name="auto_heal_api",
    steps=[
        (health_check, lambda ctx: restart_service if ctx.get("check_service_health", {}).get("status") != "healthy" else None),
        (restart_service, None),
    ],
    context={
        "url": "http://localhost:8000",
        "log_path": "/var/log/api/app.log",
        "service_name": "api",
    }
)
```

The workflow is readable, testable, and your code makes the branching decision. Hermes only executes the action steps.

---

## Step 5: Add Observability

If you can't see what the agent did, you can't operate it. Add a simple event log:

```python
import time
from datetime import datetime, timezone

class ObservableExecutor(HermesExecutor):
    def __init__(self, *args, log_path: str = "hermes-workflow.log", **kwargs):
        super().__init__(*args, **kwargs)
        self.log_path = log_path

    def run(self, step: Step, context: dict) -> dict:
        started = time.time()
        result = super().run(step, context)
        elapsed = time.time() - started
        event = {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "step": step.name,
            "toolsets": step.toolsets,
            "attempt": result.get("attempt"),
            "ok": result.get("ok"),
            "elapsed_seconds": round(elapsed, 2),
        }
        with open(self.log_path, "a") as f:
            f.write(json.dumps(event) + "
")
        return result
```

Each line is a structured event you can ship to your log aggregator. The key fields: step name, success, attempt count, duration. If retries climb, you have a reliability problem. If duration spikes, you have a stuck tool call.

---

## Step 6: Handle Idempotency

A workflow that restarts a service should not restart it twice if the first run partially succeeded. Every action step should include an idempotency guard in the prompt or in your code.

Code guard before delegating:

```python
def decide_restart(ctx: dict) -> Optional[Step]:
    health = ctx.get("check_service_health", {})
    if health.get("status") == "healthy":
        return None
    # Check if we already restarted successfully in this run
    restart = ctx.get("restart_service", {})
    if restart.get("restart_status") == "succeeded" and restart.get("final_http_code") == 200:
        return None
    return restart_service
```

Agent guard inside the prompt:

```text
Before restarting, check if the service is already active and healthy.
If `systemctl is-active api` returns 'active' and the health endpoint returns 200,
skip the restart and report restart_status='succeeded' with final_http_code 200.
```

Use both. Code guards are fast and cheap. Agent guards catch state changes that happen between steps.

---

## Step 7: Testing Without Calling Hermes

The biggest operational mistake is only testing with live agents. You need a test double that returns canned responses so you can verify workflow logic in CI.

```python
class FakeExecutor(HermesExecutor):
    def __init__(self, responses: dict[str, dict]):
        super().__init__()
        self.responses = responses

    def _call_hermes(self, prompt, toolsets, timeout):
        # Find response by matching a substring of the prompt
        for key, value in self.responses.items():
            if key in prompt:
                return json.dumps(value)
        raise RuntimeError("No canned response for prompt")

# Test the auto-heal workflow
def test_auto_heal_restarts_on_down():
    fake = FakeExecutor({
        "check_service_health": {
            "status": "down", "http_code": 0, "errors": ["connection refused"]
        },
        "restart_service": {
            "restart_status": "succeeded", "final_http_code": 200, "output": "restarted"
        }
    })
    outcome = service_workflow.run(fake)
    assert outcome["status"] == "completed"
    assert outcome["results"][1]["data"]["final_http_code"] == 200
```

Run this in CI. Your workflow logic should be deterministic and fully testable. Only the executor implementation needs a live agent.

---

## Putting It Together: A Deploy Pipeline

Here's a condensed version of a deploy pipeline I run at SMF Works:

```python
build_step = Step(
    name="build_image",
    prompt="Build the Docker image for {service} from {dockerfile}. Return image tag and build status.",
    toolsets=["terminal"]
)

test_step = Step(
    name="run_tests",
    prompt="Run the test suite for {service}. Return tests_passed, tests_failed, and logs.",
    toolsets=["terminal"]
)

deploy_step = Step(
    name="deploy_image",
    prompt="Deploy image {image_tag} to {environment} using {deploy_script}. Return deploy_status.",
    toolsets=["terminal"]
)

def decide_after_tests(ctx):
    if ctx.get("run_tests", {}).get("tests_failed", 0) > 0:
        return None  # halt
    return deploy_step

deploy_workflow = Workflow(
    name="deploy_api",
    steps=[
        (build_step, lambda ctx: test_step),
        (test_step, decide_after_tests),
        (deploy_step, None),
    ],
    context={
        "service": "api",
        "dockerfile": "Dockerfile",
        "deploy_script": "./deploy.sh",
        "environment": "staging",
    }
)
```

The workflow is readable at a glance. The risky parts — building, testing, deploying — run through Hermes. The decision to halt on test failure is code.

---

## Failure Modes I've Hit

| Symptom | Cause | Fix |
|---------|-------|-----|
| Output parses 80% of the time | Schema is too strict or prompt doesn't say "return only JSON" | Loosen schema or add explicit formatting instructions |
| Agent loops on retries | Step has no clear success condition | Add terminal condition to the prompt and a code guard |
| Workflow halts on transient failure | Retries too low or timeout too short | Tune retry count and timeout per step |
| Agent takes too long | Tool call is blocked waiting for input | Set `timeout_seconds` and fail open |
| Logs show repeated restarts | Missing idempotency guard | Check state before action, not just after |

---

## The Bigger Picture

Code-as-action is the pattern that makes AI agents reliable enough to run while you sleep. It doesn't mean writing less code. It means writing the right code: state machines, contracts, observability, and guards. The agent handles the parts that are too messy or too variable to script safely. Your code handles the parts that must be correct.

If you want to go deeper, read my earlier posts on [subagent orchestration](/blog/hermes-subagent-orchestration-map-reduce-patterns) and [agent idempotency](/blog/agent-idempotency-durable-execution). They plug directly into this workflow model.

*This post is part of [Liam's Landing](/liams-landing) — practical engineering content from the CDO desk at SMF Works.*
