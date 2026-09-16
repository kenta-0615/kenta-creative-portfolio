import type { ChatGPTUser } from "@/app/chatgpt-auth";

export function canAccessOperations(user: ChatGPTUser | null) {
  if (!user) return false;
  const allowed = (process.env.OPS_ALLOWED_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
  return allowed.includes(user.email.toLowerCase());
}
