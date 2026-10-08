import test from "node:test";
import assert from "node:assert/strict";
import { INQUIRY_MESSAGE_MIN_LENGTH, inquiryStatuses, isInquiryStatus, validateInquiryPayload } from "../lib/inquiry-validation.ts";

const valid = { name:" 山田 太郎 ", company:"Example Inc.", email:"taro@example.com", clientType:"企業・団体", projectType:"LP制作", budget:"15〜30万円", schedule:"2〜3か月以内", referenceUrl:"https://example.com/reference", message:"新商品のランディングページ制作について詳しく相談したいです。", website:"", startedAt:Date.now()-5000 };

test("valid inquiry is normalized", () => {
  const result=validateInquiryPayload(valid); assert.equal(result.success,true);
  if(result.success){ assert.equal(result.data.name,"山田 太郎"); assert.equal(result.data.email,"taro@example.com"); }
});
test("required fields identify the missing input",()=>{ assert.deepEqual(validateInquiryPayload({...valid,name:""}),{success:false,error:"お名前を入力してください"}); assert.deepEqual(validateInquiryPayload({...valid,clientType:""}),{success:false,error:"依頼区分を選択してください"}); });
test("invalid email is rejected",()=>{ assert.deepEqual(validateInquiryPayload({...valid,email:"not-an-email"}),{success:false,error:"メールアドレスを確認してください"}); });
test("test inquiry is accepted",()=>{ const result=validateInquiryPayload({...valid,message:"test"}); assert.equal(result.success,true); });
test("message shorter than the visible minimum is rejected specifically",()=>{ const result=validateInquiryPayload({...valid,message:"a".repeat(INQUIRY_MESSAGE_MIN_LENGTH-1)}); assert.deepEqual(result,{success:false,error:`ご相談内容の詳細を${INQUIRY_MESSAGE_MIN_LENGTH}文字以上で入力してください`}); });
test("honeypot payload is silently flagged",()=>{ assert.deepEqual(validateInquiryPayload({...valid,website:"spam.example"}),{success:false,error:"",spam:true}); });
test("too-fast submission is silently flagged",()=>{ const result=validateInquiryPayload({...valid,startedAt:Date.now()}); assert.equal(result.success,false); if(!result.success) assert.equal(result.spam,true); });
test("unsafe reference URL is rejected",()=>{ const result=validateInquiryPayload({...valid,referenceUrl:"javascript:alert(1)"}); assert.equal(result.success,false); });
test("all workflow statuses are accepted and unknown values are rejected",()=>{ for(const status of inquiryStatuses) assert.equal(isInquiryStatus(status),true); assert.equal(isInquiryStatus("deleted"),false); assert.equal(isInquiryStatus(1),false); });
