const origin = "https://kenty-creative-portfolio.ka-k-miwa.chatgpt.site";

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /ops",
    "Disallow: /api/",
    "Disallow: /izakaya/admin",
    "Disallow: /izakaya/reserve",
    `Sitemap: ${origin}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
