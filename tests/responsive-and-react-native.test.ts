import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root=resolve(import.meta.dirname,"..");
const css=readFileSync(resolve(root,"app/globals.css"),"utf8");
const mobile=readFileSync(resolve(root,"components/templates/react-native-portfolio-template.tsx"),"utf8");
const content=readFileSync(resolve(root,"data/portfolio-content.ts"),"utf8");

test("desktop experience stats keep copy readable",()=>{
  assert.match(css,/\.stats \{[^}]*max-width:1180px/);
  assert.match(css,/\.stats div \{[^}]*grid-template-columns:max-content minmax\(120px,1fr\)/);
  assert.match(css,/word-break:keep-all/);
});

test("experience stats change layout before tablet width",()=>{
  assert.match(css,/@media\(max-width:1180px\)[\s\S]*?\.stats\{grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
  assert.match(css,/@media\(max-width:760px\)[\s\S]*?\.stats\{grid-template-columns:1fr!important/);
  assert.match(css,/\.stats div:last-child strong\{font-size:38px/);
  assert.match(css,/@media\(max-width:480px\)[\s\S]*?grid-template-columns:1fr/);
});

test("React Native case is clearly labeled as self-initiated",()=>{
  assert.match(mobile,/SELF-INITIATED CASE \/ MOBILE APP/);
  assert.match(mobile,/React Native・Expo・TypeScript/);
  assert.match(mobile,/この事例は自主制作です/);
  assert.match(content,/slug:"rhythm-mobile-app"/);
});

test("mobile demo exposes three operable screens",()=>{
  for(const label of ["ホーム","進捗","設定"]) assert.match(mobile,new RegExp(`label:"${label}"`));
  assert.match(mobile,/toggleHabit|setCompleted/);
});
