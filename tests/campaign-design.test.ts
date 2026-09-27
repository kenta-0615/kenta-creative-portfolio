import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(import.meta.dirname, "..");

test("campaign case uses a restrained editorial palette", () => {
  const page = readFileSync(resolve(root, "app/page.tsx"), "utf8");
  const campaign = page.match(/\{ id: "campaign"[^\n]+/)?.[0] ?? "";

  assert.doesNotMatch(campaign, /#FFF200|#FFFF00|#D9FF43/i);
  assert.match(campaign, /surface: "#12151C"/);
  assert.match(campaign, /concept: "東京を、アイデアの会場に。"/);
  assert.match(campaign, /mood: "Editorial festival \/ Wayfinding"/);
});

test("campaign visual reserves yellow for a small date label", () => {
  const page = readFileSync(resolve(root, "app/page.tsx"), "utf8");
  const css = readFileSync(resolve(root, "app/globals.css"), "utf8");

  assert.match(page, /className="campaign-date"/);
  assert.match(page, /className="campaign-display"/);
  assert.match(css, /\.campaign-date \{[^}]*background:#d5b83f/);
  assert.doesNotMatch(css, /generated-visual\.campaign[^}]*#fff200/i);
});
