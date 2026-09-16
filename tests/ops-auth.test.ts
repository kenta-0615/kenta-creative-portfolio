import test from "node:test";
import assert from "node:assert/strict";
import { canAccessOperations } from "../lib/ops-auth.ts";

const user={userId:"owner",displayName:"Owner",email:"owner@example.com",fullName:"Owner"};
test("listed owner email is allowed case-insensitively",()=>{ process.env.OPS_ALLOWED_EMAILS="OTHER@example.com, OWNER@EXAMPLE.COM"; assert.equal(canAccessOperations(user),true); });
test("unlisted and anonymous users are denied",()=>{ process.env.OPS_ALLOWED_EMAILS="other@example.com"; assert.equal(canAccessOperations(user),false); assert.equal(canAccessOperations(null),false); });
