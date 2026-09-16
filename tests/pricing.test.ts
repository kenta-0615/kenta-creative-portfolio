import assert from "node:assert/strict";
import test from "node:test";
import { pricePlans } from "../data/services.ts";
import { formatPriceLabel } from "../lib/pricing.ts";

test("formats a one-time price without an unnecessary qualifier", () => {
  assert.equal(formatPriceLabel(pricePlans[0].price), "¥15,000〜");
});

test("keeps the monthly qualifier separate while preserving the spoken label", () => {
  const monthly = pricePlans.find((plan) => plan.title === "保守・改善");
  assert.ok(monthly);
  assert.equal(monthly.price.qualifier, "月額");
  assert.equal(monthly.price.amount, "20,000");
  assert.equal(formatPriceLabel(monthly.price), "月額 ¥20,000〜");
});

test("every plan has a numeric grouped amount and a lead time", () => {
  for (const plan of pricePlans) {
    assert.match(plan.price.amount, /^\d{1,3}(,\d{3})*$/);
    assert.ok(plan.leadTime.length > 0);
  }
});
