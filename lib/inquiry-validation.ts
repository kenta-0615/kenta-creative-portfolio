export const inquiryStatuses = ["new", "replied", "hearing", "proposal", "contracted", "production", "review", "delivered", "closed"] as const;
export type InquiryStatus = (typeof inquiryStatuses)[number];

export type InquiryInput = {
  name: string; company: string; email: string; clientType: string; projectType: string;
  budget: string; schedule: string; referenceUrl: string; message: string;
};

export function validateInquiryPayload(payload: unknown):
  | { success:true; data:InquiryInput }
  | { success:false; error:string; spam?:boolean } {
  if (!payload || typeof payload !== "object") return { success:false, error:"必須項目を確認してください" };
  const body = payload as Record<string, unknown>;
  const value = (key:string) => typeof body[key] === "string" ? body[key].trim() : "";
  const website = value("website");
  if (website) return { success:false, error:"", spam:true };
  const startedAt = Number(body.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 2500) return { success:false, error:"", spam:true };
  const name=value("name"), email=value("email"), clientType=value("clientType"), projectType=value("projectType"), message=value("message"), referenceUrl=value("referenceUrl");
  if (!name || !email || !clientType || !projectType || message.length < 20) return { success:false, error:"必須項目を確認してください" };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { success:false, error:"メールアドレスを確認してください" };
  if (referenceUrl) { try { const url=new URL(referenceUrl); if (!["http:","https:"].includes(url.protocol)) throw new Error(); } catch { return {success:false,error:"参考URLを確認してください"}; } }
  return { success:true, data:{ name:name.slice(0,100), company:value("company").slice(0,120), email:email.slice(0,254), clientType:clientType.slice(0,80), projectType:projectType.slice(0,80), budget:value("budget").slice(0,80)||"未定・相談したい", schedule:value("schedule").slice(0,80)||"未定・相談したい", referenceUrl:referenceUrl.slice(0,1000), message:message.slice(0,5000) } };
}

export function isInquiryStatus(value:unknown): value is InquiryStatus {
  return typeof value === "string" && inquiryStatuses.includes(value as InquiryStatus);
}
