import { desc, eq } from "drizzle-orm";
import { getChatGPTUser } from "@/app/chatgpt-auth";
import { getDb } from "@/db";
import { inquiries } from "@/db/schema";
import { canAccessOperations } from "@/lib/ops-auth";
import { isInquiryStatus, validateInquiryPayload } from "@/lib/inquiry-validation";

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "ログインが必要です" }, { status: 401 });
  if (!canAccessOperations(user)) return Response.json({ error: "権限がありません" }, { status: 403 });
  const rows = await getDb().select().from(inquiries).orderBy(desc(inquiries.createdAt), desc(inquiries.id)).limit(100);
  return Response.json({ inquiries: rows });
}

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");
    if (origin && new URL(origin).host !== new URL(request.url).host) return Response.json({ error:"送信元を確認できません" }, { status:403 });
    if (!request.headers.get("content-type")?.includes("application/json")) return Response.json({ error:"送信形式が不正です" }, { status:415 });
    const validation = validateInquiryPayload(await request.json());
    if (!validation.success && validation.spam) return Response.json({ ok:true }, { status:201 });
    if (!validation.success) return Response.json({ error:validation.error }, { status:400 });
    await getDb().insert(inquiries).values(validation.data);
    return Response.json({ ok: true }, { status: 201, headers:{"Cache-Control":"no-store"} });
  } catch {
    return Response.json({ error: "現在送信できません。時間をおいて再度お試しください" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "ログインが必要です" }, { status: 401 });
  if (!canAccessOperations(user)) return Response.json({ error: "権限がありません" }, { status: 403 });
  const body = await request.json() as { id?: number; status?: string };
  if (!Number.isInteger(body.id) || !isInquiryStatus(body.status)) return Response.json({ error: "更新内容が不正です" }, { status: 400 });
  await getDb().update(inquiries).set({ status: body.status!, updatedAt: new Date().toISOString() }).where(eq(inquiries.id, body.id!));
  return Response.json({ ok: true });
}
