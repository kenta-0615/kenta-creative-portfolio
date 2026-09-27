import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(import.meta.dirname, "..");

test("service page follows the Atomic Design component layers", () => {
  const required = [
    "components/atoms/reliable-link.tsx",
    "components/atoms/price-display.tsx",
    "components/molecules/price-card.tsx",
    "components/organisms/price-section.tsx",
    "components/templates/services-template.tsx",
  ];

  for (const file of required) {
    assert.equal(existsSync(resolve(root, file)), true, `${file} should exist`);
  }
});

test("cross-route navigation uses the reliable anchor atom", () => {
  const atom = readFileSync(resolve(root, "components/atoms/reliable-link.tsx"), "utf8");
  const services = readFileSync(resolve(root, "components/templates/services-template.tsx"), "utf8");
  assert.match(atom, /return <a/);
  assert.match(services, /ReliableLink/);
  assert.doesNotMatch(services, /next\/link/);
});

test("route delegates presentation to the service template", () => {
  const route = readFileSync(resolve(root, "app/services/page.tsx"), "utf8");
  assert.match(route, /<ServicesTemplate\s*\/>/);
  assert.doesNotMatch(route, /priceGrid/);
});

test("price typography includes separate qualifier and numeric styles", () => {
  const css = readFileSync(resolve(root, "app/info.module.css"), "utf8");
  assert.match(css, /\.priceQualifier/);
  assert.match(css, /\.priceAmount/);
  assert.match(css, /font-variant-numeric:tabular-nums/);
  assert.match(css, /white-space:nowrap/);
});

test("interactive showcase routes delegate presentation to templates", () => {
  const routes = [
    ["app/vtuber-shop/page.tsx", "VtuberShopTemplate"],
    ["app/izakaya/page.tsx", "IzakayaHomeTemplate"],
    ["app/izakaya/reserve/page.tsx", "IzakayaReservationTemplate"],
    ["app/izakaya/admin/page.tsx", "IzakayaAdminTemplate"],
  ] as const;

  for (const [file, template] of routes) {
    assert.match(readFileSync(resolve(root, file), "utf8"), new RegExp(`<${template}`));
  }
});
