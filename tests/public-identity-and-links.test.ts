import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, resolve } from "node:path";
import test from "node:test";

const root = resolve(import.meta.dirname, "..");
const forbiddenIdentity = /笠井|健太|Kenta|Kasai|KENTA|KASAI/;

function sourceFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const path = resolve(directory, entry);
    return statSync(path).isDirectory()
      ? sourceFiles(path)
      : [".ts", ".tsx", ".css", ".md", ".svg"].includes(extname(path))
        ? [path]
        : [];
  });
}

test("public and private source does not expose the previous real name", () => {
  const files = [
    ...sourceFiles(resolve(root, "app")),
    ...sourceFiles(resolve(root, "components")),
    ...sourceFiles(resolve(root, "public")),
    resolve(root, "README.md"),
  ];

  for (const file of files) {
    assert.doesNotMatch(readFileSync(file, "utf8"), forbiddenIdentity, file);
  }
});

test("metadata and structured data publish the Kenty identity", () => {
  const layout = readFileSync(resolve(root, "app/layout.tsx"), "utf8");
  assert.match(layout, /KENTY CREATIVE/);
  assert.match(layout, /name: "ケンティ"/);
  assert.match(layout, /kenty-creative-portfolio\.ka-k-miwa\.chatgpt\.site/);
});

test("portfolio mockup calls to action lead to the contact form", () => {
  const page = readFileSync(resolve(root, "app/page.tsx"), "utf8");
  assert.ok((page.match(/href="#contact"/g) ?? []).length >= 2);
});

test("desktop narrative headings avoid forced line breaks", () => {
  const page = readFileSync(resolve(root, "app/page.tsx"), "utf8");
  const css = readFileSync(resolve(root, "app/globals.css"), "utf8");
  assert.match(page, /<SectionHeading number="03" label="DESIGN PROCESS" light>意図を、形にする。<\/SectionHeading>/);
  assert.match(page, /<SectionHeading number="04" label="SEO & QUALITY">検索にも、人にも、正しく伝わる。<\/SectionHeading>/);
  assert.match(page, /<SectionHeading number="05" label="FRONTEND" light>デザインを、動く品質へ。<\/SectionHeading>/);
  assert.match(css, /\.section-title h2[^}]*text-wrap:balance/);
});

test("all major sections use the same numbered heading component", () => {
  const page = readFileSync(resolve(root, "app/page.tsx"), "utf8");
  const headings = page.match(/<SectionHeading number="0[1-8]"/g) ?? [];
  assert.equal(headings.length, 8);
  for (const number of ["01", "02", "03", "04", "05", "06", "07", "08"]) {
    assert.match(page, new RegExp(`<SectionHeading number="${number}"`));
  }
});

test("home page communicates commercial frontend experience and clear inquiry paths", () => {
  const page = readFileSync(resolve(root, "app/page.tsx"), "utf8");
  assert.match(page, /React・TypeScript<br\/>実務3年/);
  assert.match(page, /HP・LP制作<br\/>1年7か月/);
  assert.match(page, /案件を相談する/);
  assert.match(page, /料金・制作条件を見る/);
});

test("section headings and supporting copy share a left alignment across breakpoints", () => {
  const page = readFileSync(resolve(root, "app/page.tsx"), "utf8");
  const css = readFileSync(resolve(root, "app/globals.css"), "utf8");
  assert.match(css, /\.section-title \{[^}]*grid-template-columns:1fr[^}]*text-align:left/);
  assert.match(css, /\.process-intro \{[^}]*justify-content:flex-start/);
  assert.match(page, /className="deliverable-copy"/);
  assert.match(page, /<small>01 \/ HOMEPAGE<\/small>/);
  assert.match(page, /<small>02 \/ LANDING PAGE<\/small>/);
  assert.match(page, /<small>03 \/ DISPLAY AD<\/small>/);
  assert.match(css, /\.deliverable-copy \{[^}]*max-width:680px/);
  assert.match(css, /\.deliverable-head \{[^}]*display:block/);
});
