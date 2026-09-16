import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, test } from "node:test";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DONATE_URL = "https://donate.stripe.com/14A6oGbHv3hHekY2ODew801";

function read(rel) {
  return readFileSync(path.join(repoRoot, rel), "utf8");
}

describe("support the lab CTA", () => {
  test("exports the Stripe donate Payment Link", () => {
    assert.equal(read("content/lib/lab.ts").includes(DONATE_URL), true);
  });

  test("homepage and about render SupportCta", () => {
    assert.match(read("app/page.tsx"), /SupportCta/);
    assert.match(read("app/about/page.tsx"), /SupportCta/);
  });

  test("footer Lab column links out to the donate URL", () => {
    const footer = read("components/Footer.tsx");
    assert.match(footer, /SUPPORT_THE_LAB_URL/);
    assert.match(footer, /Support the lab/);
  });
});
