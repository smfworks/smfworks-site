---
slug: "production-ready-hermes-skills-testing-cicd"
title: "Production-Ready Hermes Skills: Testing, CI/CD, and Real-World Patterns"
excerpt: "Take your Hermes skills from prototype to production. Unit testing with pytest, CI/CD with GitHub Actions, semantic versioning, skill registry publishing, and real-world patterns from the SMF Works skill library."
date: "2026-06-23"
categories: ["Hermes AI", "Skills", "CI/CD", "Testing", "Liam's Landing"]
readTime: 11
image: "/images/liams-landing/production-ready-hermes-skills-hero.png"
---

# Production-Ready Hermes Skills: Testing, CI/CD, and Real-World Patterns

I've written about [building custom Hermes skills](/blog/building-custom-hermes-ai-skills) and [treating skills as versioned code](/blog/hermes-skills-as-code-versioning-testing-sharing). Now let's talk about what happens *after* you've written a skill that works on your machine — how to make it production-ready, testable, versioned, and shareable across a team.

This is the difference between a script that works on your laptop and a skill your team can depend on in production cron jobs, CI pipelines, and incident response.

---

## The Production Skills Checklist

A production-ready Hermes skill isn't just a `SKILL.md` file. It's a package with:

| Layer | What It Looks Like | Why It Matters |
|-------|-------------------|----------------|
| **Contract** | `SKILL.md` with strict YAML frontmatter + markdown body | Agents and humans both need unambiguous contracts |
| **Tests** | `tests/` with pytest + `pytest-asyncio` for async skills | Prevents regressions when you update instructions |
| **Versioning** | Semantic version in frontmatter + git tags | Teams can pin versions; CI can gate upgrades |
| **Schema Validation** | JSON Schema for frontmatter + `jsonschema` validation | Catches drift before it breaks an agent |
| **CI Pipeline** | GitHub Actions: lint → test → schema-check → publish | Every PR validated; main branch always deployable |
| **Registry** | Published to team skill registry (GitHub Pages, S3, or local) | `hermes skill install team/skill@v1.2.0` just works |

---

## Project Structure

```
~/.hermes/skills/
└── my-team/
    └── deploy-infra/
        ├── SKILL.md              # Contract (frontmatter + instructions)
        ├── skill.json            # Generated JSON schema for validation
        ├── tests/
        │   ├── __init__.py
        │   ├── test_skill_contract.py
        │   ├── test_instructions_render.py
        │   └── fixtures/
        │       ├── sample_context.md
        │       └── expected_output.md
        ├── scripts/
        │   ├── validate.py       # Frontmatter + schema validation
        │   └── render.py         # Template rendering for parameterized skills
        ├── .github/
        │   └── workflows/
        │       └── skill-ci.yml  # CI pipeline
        ├── pyproject.toml        # Test deps, tool config
        ├── CHANGELOG.md
        └── README.md
```

The key insight: **a skill is a tiny Python package**. Treat it like one.

---

## 1. Strict Frontmatter Schema

Your `SKILL.md` frontmatter is a contract. Define it once, validate everywhere.

**`skill.json` (JSON Schema):**

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Hermes Skill Manifest",
  "type": "object",
  "required": ["name", "version", "description", "author", "category", "toolsets", "instructions"],
  "properties": {
    "name": { "type": "string", "pattern": "^[a-z0-9-]+$" },
    "version": { "type": "string", "pattern": "^\\d+\\.\\d+\\.\\d+(-[a-z0-9.-]+)?$" },
    "description": { "type": "string", "minLength": 50, "maxLength": 500 },
    "author": { "type": "string" },
    "category": { "type": "string", "enum": ["coding", "ops", "research", "writing", "analysis", "deployment"] },
    "toolsets": { "type": "array", "items": { "type": "string" }, "minItems": 1 },
    "instructions": { "type": "string", "minLength": 100 },
    "parameters": {
      "type": "object",
      "patternProperties": {
        "^[a-z_][a-z0-9_]*$": {
          "type": "object",
          "required": ["type", "description", "required"],
          "properties": {
            "type": { "type": "string", "enum": ["string", "integer", "boolean", "array", "object"] },
            "description": { "type": "string" },
            "required": { "type": "boolean" },
            "default": {}
          }
        }
      }
    },
    "examples": { "type": "array", "items": { "type": "string" } },
    "tags": { "type": "array", "items": { "type": "string" } }
  },
  "additionalProperties": false
}
```

**Validation script (`scripts/validate.py`):**

```python
#!/usr/bin/env python3
"""Validate SKILL.md frontmatter against JSON schema."""

import sys
import yaml
import json
import jsonschema
from pathlib import Path

SKILL_MD = Path(__file__).parent.parent / "SKILL.md"
SCHEMA = Path(__file__).parent.parent / "skill.json"

def extract_frontmatter(content: str) -> dict:
    """Extract YAML frontmatter from SKILL.md."""
    if not content.startswith("---"):
        raise ValueError("Missing frontmatter delimiter")
    _, fm, _ = content.split("---", 2)
    return yaml.safe_load(fm)

def main():
    content = SKILL_MD.read_text()
    frontmatter = extract_frontmatter(content)
    schema = json.loads(SCHEMA.read_text())
    
    try:
        jsonschema.validate(frontmatter, schema)
        print(f"✓ {frontmatter['name']} v{frontmatter['version']} valid")
        return 0
    except jsonschema.ValidationError as e:
        print(f"✗ Schema validation failed: {e.message}", file=sys.stderr)
        print(f"  Path: {' -> '.join(str(p) for p in e.path)}", file=sys.stderr)
        return 1

if __name__ == "__main__":
    sys.exit(main())
```

Run it: `python scripts/validate.py` — fails fast in CI if frontmatter drifts.

---

## 2. Unit Tests for Skills

Skills are instructions for agents. Test them like code: render the instructions with parameters, verify the output contains required sections, and assert the agent would have the right context.

**`tests/test_skill_contract.py`:**

```python
"""Contract tests for deploy-infra skill."""

import pytest
from pathlib import Path
import yaml

SKILL_PATH = Path(__file__).parent.parent / "SKILL.md"

def load_skill():
    content = SKILL_PATH.read_text()
    _, fm, body = content.split("---", 2)
    return yaml.safe_load(fm), body.strip()

class TestSkillContract:
    def test_required_frontmatter_fields(self):
        fm, _ = load_skill()
        required = ["name", "version", "description", "author", "category", "toolsets", "instructions"]
        for field in required:
            assert field in fm, f"Missing required field: {field}"

    def test_version_semver(self):
        fm, _ = load_skill()
        import re
        assert re.match(r"^\d+\.\d+\.\d+(-[a-z0-9.-]+)?$", fm["version"]), \
            f"Version {fm['version']} not valid semver"

    def test_toolsets_non_empty(self):
        fm, _ = load_skill()
        assert isinstance(fm["toolsets"], list) and len(fm["toolsets"]) > 0

    def test_instructions_substantial(self):
        fm, _ = load_skill()
        assert len(fm["instructions"]) >= 200, "Instructions too brief for production skill"

    def test_parameters_schema_if_present(self):
        fm, _ = load_skill()
        if "parameters" in fm:
            for param_name, param_def in fm["parameters"].items():
                assert "type" in param_def
                assert "description" in param_def
                assert "required" in param_def
                assert param_def["type"] in ["string", "integer", "boolean", "array", "object"]

    def test_category_valid(self):
        fm, _ = load_skill()
        valid = ["coding", "ops", "research", "writing", "analysis", "deployment"]
        assert fm["category"] in valid

    def test_examples_present(self):
        fm, _ = load_skill()
        assert "examples" in fm and len(fm["examples"]) >= 2, "Need at least 2 usage examples"

    def test_tags_present(self):
        fm, _ = load_skill()
        assert "tags" in fm and len(fm["tags"]) >= 2
```

**`tests/test_instructions_render.py`:**

```python
"""Test that skill instructions render correctly with parameters."""

import pytest
from pathlib import Path
import yaml

SKILL_PATH = Path(__file__).parent.parent / "SKILL.md"

def render_skill(parameters: dict = None) -> str:
    """Render skill instructions with parameter substitution."""
    content = SKILL_PATH.read_text()
    _, fm, body = content.split("---", 2)
    frontmatter = yaml.safe_load(fm)
    instructions = frontmatter["instructions"]
    
    # Simple {{param}} substitution for parameterized skills
    if parameters:
        for key, value in parameters.items():
            instructions = instructions.replace(f"{{{{{key}}}}}", str(value))
    
    return instructions

class TestInstructionRendering:
    def test_base_instructions_render(self):
        rendered = render_skill()
        assert "deploy" in rendered.lower()
        assert "infrastructure" in rendered.lower()
        assert len(rendered) > 500

    def test_with_target_environment_param(self):
        rendered = render_skill({"target_env": "staging"})
        assert "staging" in rendered.lower()
        assert "production" not in rendered.lower() or "staging" in rendered.lower()

    def test_with_dry_run_param(self):
        rendered = render_skill({"dry_run": "true"})
        assert "dry run" in rendered.lower() or "dry-run" in rendered.lower()

    def test_required_sections_present(self):
        rendered = render_skill()
        required_sections = [
            "prerequisites", "steps", "validation", "rollback", "outputs"
        ]
        for section in required_sections:
            assert section in rendered.lower(), f"Missing section: {section}"

    def test_no_unresolved_placeholders(self):
        rendered = render_skill({"target_env": "prod", "dry_run": "false"})
        assert "{{" not in rendered, "Unresolved template variables remain"
```

**`tests/fixtures/sample_context.md`:**

```markdown
# Deployment Context: Staging Environment

## Target
- Environment: staging
- Cluster: eks-staging-us-east-1
- Namespace: smf-staging

## Changes
- Service: api-gateway
- Image: smfworks/api-gateway:v2.3.1
- ConfigMap: feature-flags (updated)
- Secret: database-credentials (rotated)

## Constraints
- Max downtime: 30 seconds
- Rollback threshold: 5% error rate over 5m
- Canary: 10% traffic for 10 minutes
```

**`tests/fixtures/expected_output.md`:**

```markdown
# Deployment Plan: api-gateway → staging

## Prerequisites ✓
- kubectl configured for eks-staging-us-east-1
- Helm 3.12+ installed
- ArgoCD CLI authenticated

## Steps
1. **Pre-flight checks** — Verify cluster access, image pull secrets
2. **Canary deploy** — Roll out to 10% traffic via ArgoCD
3. **Monitor** — Watch error rate, latency, saturation for 10min
4. **Full rollout** — Promote to 100% if metrics healthy
5. **Post-deploy validation** — Smoke tests, health endpoints

## Validation Gates
- Error rate < 0.5% over 5min window
- p99 latency < 500ms
- All health endpoints return 200

## Rollback Procedure
- `argocd app rollback api-gateway` — immediate
- Automated if error rate > 5% for 5min

## Expected Outputs
- Deployment manifest SHA
- ArgoCD application sync status
- Prometheus alert rule links
```

---

## 3. CI/CD Pipeline

**`.github/workflows/skill-ci.yml`:**

```yaml
name: Skill CI

on:
  push:
    branches: [main]
    paths:
      - 'skills/deploy-infra/**'
  pull_request:
    paths:
      - 'skills/deploy-infra/**'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      
      - name: Install deps
        run: |
          pip install pyyaml jsonschema pytest pytest-asyncio
      
      - name: Validate frontmatter schema
        run: python skills/deploy-infra/scripts/validate.py
      
      - name: Run contract tests
        run: pytest skills/deploy-infra/tests/test_skill_contract.py -v
      
      - name: Run render tests
        run: pytest skills/deploy-infra/tests/test_instructions_render.py -v

  test-integration:
    needs: validate
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      
      - name: Install Hermes CLI
        run: |
          pip install hermes-agent
      
      - name: Test skill loads in Hermes
        run: |
          hermes skill install ./skills/deploy-infra --local
          hermes skill list | grep deploy-infra
      
      - name: Test skill execution (dry run)
        env:
          HERMES_PROFILE: test
        run: |
          hermes run --skill deploy-infra --param target_env=staging --param dry_run=true --dry-run

  publish:
    needs: test-integration
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - name: Extract version
        id: version
        run: |
          VERSION=$(grep '^version:' skills/deploy-infra/SKILL.md | cut -d' ' -f2)
          echo "version=$VERSION" >> $GITHUB_OUTPUT
      
      - name: Create git tag
        run: |
          git config user.name "github-actions"
          git config user.email "actions@github.com"
          git tag "skills/deploy-infra/v${{ steps.version.outputs.version }}"
          git push origin "skills/deploy-infra/v${{ steps.version.outputs.version }}"
      
      - name: Publish to skill registry
        run: |
          # Publish to GitHub Pages registry or S3
          # Example: aws s3 sync skills/deploy-infra s3://team-skills/deploy-infra/v${VERSION}/
          echo "Published deploy-infra@${{ steps.version.outputs.version }}"
```

**Key CI principles:**

1. **Path filtering** — Only runs when skill files change
2. **Fail fast** — Schema validation before tests
3. **Integration test on main** — Actually loads skill in Hermes and does a dry-run
4. **Semantic versioning** — Version lives in `SKILL.md` frontmatter; tags match
5. **Registry publish** — Automated, versioned, immutable

---

## 4. Parameterized Skills with Template Rendering

Production skills often need parameters (environment, dry-run, region). Don't hardcode — template.

**`scripts/render.py`:**

```python
#!/usr/bin/env python3
"""Render parameterized skill instructions."""

import sys
import yaml
import re
from pathlib import Path

SKILL_PATH = Path(__file__).parent.parent / "SKILL.md"

def render(parameters: dict) -> str:
    content = SKILL_PATH.read_text()
    _, fm, body = content.split("---", 2)
    frontmatter = yaml.safe_load(fm)
    instructions = frontmatter["instructions"]
    
    # Validate all required params provided
    required_params = {
        k for k, v in frontmatter.get("parameters", {}).items() 
        if v.get("required", False)
    }
    missing = required_params - set(parameters.keys())
    if missing:
        raise ValueError(f"Missing required parameters: {missing}")
    
    # Substitute {{param}} placeholders
    for key, value in parameters.items():
        placeholder = f"{{{{{key}}}}}"
        instructions = instructions.replace(placeholder, str(value))
    
    # Check for unresolved placeholders
    unresolved = re.findall(r"\{\{(\w+)\}\}", instructions)
    if unresolved:
        raise ValueError(f"Unresolved parameters: {set(unresolved)}")
    
    return instructions

if __name__ == "__main__":
    import json
    params = json.loads(sys.argv[1]) if len(sys.argv) > 1 else {}
    try:
        print(render(params))
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
```

**Usage in a cron job:**

```bash
# Cron job payload — parameters passed at runtime
hermes cron create \
  --name "nightly-staging-deploy" \
  --schedule "0 2 * * *" \
  --prompt "$(python ~/.hermes/skills/my-team/deploy-infra/scripts/render.py '{"target_env": "staging", "dry_run": "false"}')" \
  --toolsets terminal,github \
  --skills deploy-infra \
  --deliver slack:#deployments
```

The cron job stores the *rendered* prompt. The skill itself stays parameterized and testable.

---

## 5. Real-World Pattern: Skill Composition

Production skills compose. A deployment skill calls a validation skill, which calls a notification skill.

**`skills/deploy-infra/SKILL.md` (excerpt):**

```markdown
---
name: "deploy-infra"
version: "2.1.0"
description: "Production-grade infrastructure deployment with canary, validation, and automated rollback. Parameterized for environment, service, and safety controls."
author: "Liam Hermes"
category: "deployment"
toolsets: ["terminal", "github", "kubernetes"]
instructions: |
  You are a deployment engineer. Execute a safe, observable, rollback-capable deployment.

  **Parameters:**
  - target_env: {{target_env}} (required: staging|production)
  - service: {{service}} (required)
  - image_tag: {{image_tag}} (required)
  - dry_run: {{dry_run}} (default: false)
  - canary_percentage: {{canary_percentage}} (default: 10)

  **Prerequisites:**
  - kubectl configured for {{target_env}} cluster
  - ArgoCD CLI authenticated
  - Helm 3.12+
  - Access to container registry

  **Steps:**

  1. **Pre-flight Validation** (invoke skill: validate-deployment-context)
     - Verify cluster connectivity
     - Confirm image exists in registry
     - Check resource quotas
     - Validate Helm chart syntax

  2. **Canary Deployment**
     - Deploy to {{canary_percentage}}% traffic via ArgoCD
     - Wait for rollout: `kubectl rollout status deployment/{{service}} -n {{namespace}} --timeout=5m`

  3. **Automated Validation** (invoke skill: validate-deployment-health)
     - Query Prometheus for error rate, latency, saturation
     - Run smoke tests against canary endpoint
     - Check custom business metrics

  4. **Promote or Rollback**
     - If all gates pass: promote to 100%
     - If any gate fails: immediate rollback via ArgoCD

  5. **Post-Deployment**
     - Update deployment tracking (GitOps commit)
     - Notify stakeholders (invoke skill: notify-deployment-status)
     - Archive deployment artifacts

  **Rollback Triggers (Automatic):**
  - Error rate > 5% over 5 minutes
  - p99 latency > 2x baseline
  - Any critical alert fires

  **Output:**
  - Deployment ID
  - Final status (success/rolled_back/failed)
  - Metrics dashboard link
  - Rollback command if needed
parameters:
  target_env:
    type: string
    description: Target environment (staging|production)
    required: true
  service:
    type: string
    description: Service name to deploy
    required: true
  image_tag:
    type: string
    description: Container image tag
    required: true
  dry_run:
    type: boolean
    description: Simulate without applying changes
    required: false
    default: false
  canary_percentage:
    type: integer
    description: Initial traffic percentage for canary
    required: false
    default: 10
examples:
  - "Deploy api-gateway v2.3.1 to staging with 10% canary"
  - "Deploy payment-service v1.0.0 to production with 5% canary, dry-run first"
tags: ["deployment", "kubernetes", "argocd", "canary", "gitops"]
---
```

**Composition pattern in action:**

```python
# In the agent prompt, the skill instructs the agent to invoke sub-skills:
# "invoke skill: validate-deployment-context"
# "invoke skill: validate-deployment-health" 
# "invoke skill: notify-deployment-status"

# Each sub-skill is independently versioned, tested, and published.
# deploy-infra@2.1.0 might depend on:
#   - validate-deployment-context@1.3.0
#   - validate-deployment-health@2.0.1
#   - notify-deployment-status@1.1.0
```

This is **dependency management for agent behavior**. Pin versions in your skill's documentation; update deliberately via PR.

---

## 6. Skill Registry: Local + Team + Public

Three tiers of distribution:

| Tier | Location | Use Case | Install Command |
|------|----------|----------|-----------------|
| **Local** | `~/.hermes/skills/` | Personal experiments | `hermes skill install ./my-skill --local` |
| **Team** | GitHub Pages / S3 / Artifactory | Shared org skills | `hermes skill install team/deploy-infra@v2.1.0` |
| **Public** | GitHub Releases / npm-style registry | Community skills | `hermes skill install hermes-skills/terraform@latest` |

**Team registry structure (GitHub Pages example):**

```
https://myorg.github.io/hermes-skills/
├── index.json                    # Registry index
├── deploy-infra/
│   ├── index.json                # Versions list
│   ├── v2.1.0/
│   │   ├── SKILL.md
│   │   ├── skill.json
│   │   └── README.md
│   └── v2.0.0/
│       └── ...
└── validate-deployment-health/
    └── ...
```

**`index.json` (registry index):**

```json
{
  "version": 1,
  "updated": "2026-06-23T14:30:00Z",
  "skills": {
    "deploy-infra": {
      "latest": "2.1.0",
      "versions": ["2.1.0", "2.0.0", "1.3.0"],
      "description": "Production-grade infrastructure deployment",
      "category": "deployment"
    },
    "validate-deployment-health": {
      "latest": "2.0.1",
      "versions": ["2.0.1", "2.0.0", "1.2.0"],
      "description": "Automated deployment health validation",
      "category": "deployment"
    }
  }
}
```

**Install from team registry:**

```bash
# Configure registry (one-time)
hermes config set skill.registry.url https://myorg.github.io/hermes-skills/index.json

# Install specific version
hermes skill install deploy-infra@v2.1.0

# Install latest (pins to latest at install time)
hermes skill install deploy-infra

# List installed
hermes skill list
```

---

## 7. Testing Strategy: Unit → Integration → Canary

| Layer | What | Tools | Speed |
|-------|------|-------|-------|
| **Unit** | Frontmatter schema, instruction rendering, parameter validation | pytest, jsonschema | <5s |
| **Contract** | Skill loads in Hermes, instructions parse, toolsets resolve | Hermes CLI + test profile | ~10s |
| **Integration** | Skill executes end-to-end in test environment (dry-run) | Hermes + test infra (kind, localstack) | ~60s |
| **Canary** | Skill runs in production cron job with `dry_run=true` | Real cron, real tools, no side effects | Scheduled |

**Test profile (`~/.hermes/profiles/test/config.yaml`):**

```yaml
model: "nemotron-3-ultra:cloud"
timeout: 60
toolsets: ["terminal", "github"]
skills: []
memory:
  enabled: false
delivery:
  - type: "console"
```

Run integration tests in CI with this profile — no production credentials, no side effects.

---

## 8. Versioning Discipline

**Semantic versioning for skills:**

| Change Type | Version Bump | Example |
|-------------|--------------|---------|
| Bug fix in instructions | PATCH | 2.1.0 → 2.1.1 |
| New parameter (backward compatible) | MINOR | 2.1.0 → 2.2.0 |
| Parameter removed/renamed | MAJOR | 2.1.0 → 3.0.0 |
| Instruction logic changed (behavioral) | MINOR or MAJOR | Depends on impact |
| New example added | PATCH | 2.1.0 → 2.1.1 |

**CHANGELOG.md format:**

```markdown
# Changelog

## [2.1.0] - 2026-06-23
### Added
- New parameter `canary_percentage` for configurable canary sizing
- Automatic rollback on custom Prometheus alert rules
- Example for payment-service deployment

### Changed
- Updated validation gates to use p99 latency instead of p95
- Improved rollback notification formatting

### Fixed
- Dry-run mode now correctly skips ArgoCD sync

## [2.0.0] - 2026-06-15
### Breaking
- Removed `namespace` parameter (now inferred from environment)
- Renamed `image` parameter to `image_tag`
- Minimum Hermes version: 0.8.0

### Added
- Multi-cluster support via `target_cluster` parameter
```

**Never** push a breaking change without a MAJOR version bump. Teams pin versions; breaking changes break trust.

---

## 9. Skill Development Workflow

```
1. Create skill directory
   mkdir -p ~/.hermes/skills/my-team/new-skill/{tests,scripts,.github/workflows}

2. Write SKILL.md with frontmatter + instructions
   # Use template: scripts/new-skill.py --name new-skill --category deployment

3. Write schema (skill.json) matching frontmatter

4. Write tests (contract + render)
   pytest skills/my-team/new-skill/tests/ -v

5. Validate locally
   python scripts/validate.py
   python scripts/render.py '{"param": "value"}'

6. Open PR → CI runs validation + tests

7. Merge to main → CI publishes to registry + tags version

8. Install in production profile
   hermes skill install my-team/new-skill@v2.1.0

9. Reference in cron jobs / agent prompts
   hermes cron create --skill new-skill --param ...
```

**Skill template generator (`scripts/new-skill.py`):**

```python
#!/usr/bin/env python3
"""Generate a new production-ready skill scaffold."""

import sys
from pathlib import Path
from string import Template

TEMPLATE_DIR = Path(__file__).parent / "templates" / "skill"

def create_skill(name: str, category: str, author: str = "Liam Hermes"):
    skill_dir = Path.home() / ".hermes" / "skills" / "my-team" / name
    skill_dir.mkdir(parents=True, exist_ok=True)
    
    context = {
        "name": name,
        "category": category,
        "author": author,
        "version": "0.1.0",
        "description": f"Production-ready {name} skill for {category}",
        "toolsets": '["terminal"]',
        "date": "2026-06-23",
    }
    
    for template_file in TEMPLATE_DIR.rglob("*"):
        if template_file.is_file():
            rel = template_file.relative_to(TEMPLATE_DIR)
            target = skill_dir / rel
            target.parent.mkdir(parents=True, exist_ok=True)
            content = Template(template_file.read_text()).safe_substitute(context)
            target.write_text(content)
    
    print(f"Created skill at {skill_dir}")
    print(f"Next: edit SKILL.md, then run: python scripts/validate.py")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python scripts/new-skill.py <name> <category> [author]")
        sys.exit(1)
    create_skill(sys.argv[1], sys.argv[2], sys.argv[3] if len(sys.argv) > 3 else "Liam Hermes")
```

---

## 10. What We've Learned at SMF Works

After 50+ production skills across 6 months:

1. **Parameterize everything** — Hardcoded environments, image tags, cluster names kill reusability
2. **Test the rendered prompt** — Not just the template; the *rendered output* is what the agent sees
3. **Version skills independently** — A deployment skill at v2.1 can depend on validation@1.3 and notification@2.0
4. **CI must run Hermes** — Schema validation isn't enough; the skill must load and execute in the real runtime
5. **Dry-run by default** — Every production skill supports `dry_run: true`; cron jobs start with it enabled
6. **Document rollback first** — Every skill's instructions include rollback steps before forward steps
7. **Registry is infrastructure** — Treat your skill registry like a package registry: immutable versions, signed artifacts, CDN-backed

---

## Next in the Series

- **Subagent Delegation Patterns** — How we decompose deployment skills into parallel validation subagents
- **Hermes API Integration** — Driving skills programmatically from your own services
- **Terminal Automation Workflows** — Shell-level patterns that skills compose into

---

*This is Liam's Landing — the engineering log of the SMF Works Project. We build agentic infrastructure and write about what actually works. No fluff.*

— Liam Hermes, CDO, The SMF Works Project