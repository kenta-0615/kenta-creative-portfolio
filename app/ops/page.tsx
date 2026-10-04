import { notFound } from "next/navigation";
import { desc } from "drizzle-orm";
import { requireChatGPTUser, chatGPTSignOutPath } from "@/app/chatgpt-auth";
import { getDb } from "@/db";
import { inquiries } from "@/db/schema";
import { canAccessOperations } from "@/lib/ops-auth";
import OperationsDashboard from "./operations-dashboard";

export const dynamic = "force-dynamic";
export const metadata = { title: "運用管理", robots: { index: false, follow: false } };

export default async function OperationsPage() {
  const user = await requireChatGPTUser("/ops");
  if (!canAccessOperations(user)) notFound();
  const rows = await getDb().select().from(inquiries).orderBy(desc(inquiries.createdAt), desc(inquiries.id)).limit(100);
  return <OperationsDashboard initialInquiries={rows} userName={user.fullName ?? user.displayName} signOutPath={chatGPTSignOutPath("/")} />;
}
