import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
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

  test("homepage is the approved single page and the about route is gone", () => {
    const page = read("app/page.tsx");
    assert.match(page, /A human–AI research lab and cooperative\./);
    assert.match(page, /michael@smfworks\.com|Founder/);
    assert.doesNotMatch(page, /hello@smfworks\.com/);
    assert.doesNotMatch(page, /SupportCta/);
    assert.doesNotMatch(page, /Principal AI/);
    assert.equal(existsSync(path.join(repoRoot, "app/about/page.tsx")), false);
    assert.equal(existsSync(path.join(repoRoot, "app/publications/the-edge/page.tsx")), false);
  });

  test("footer uses the approved address and lab links", () => {
    const footer = read("components/Footer.tsx");
    assert.match(footer, /michael@smfworks\.com/);
    assert.match(footer, /https:\/\/github\.com\/smfworks/);
    assert.match(footer, /https:\/\/www\.smfclearinghouse\.com\/blog/);
    assert.match(footer, /https:\/\/smfwisdomforge\.com/);
    assert.match(footer, /All research claims on our sites trace to published sources\./);
    assert.doesNotMatch(footer, /hello@smfworks\.com/);
    assert.doesNotMatch(footer, /SUPPORT_THE_LAB_URL/);
  });
});
