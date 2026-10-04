const origin = "https://kenty-creative-portfolio.ka-k-miwa.chatgpt.site";

const routes = [
  ["/", "1.0", "monthly"],
  ["/services", "0.9", "monthly"],
  ["/services/homepage", "0.8", "monthly"],
  ["/services/landing-page", "0.8", "monthly"],
  ["/services/frontend", "0.8", "monthly"],
  ["/services/booking-system", "0.8", "monthly"],
  ["/services/maintenance", "0.7", "monthly"],
  ["/works", "0.9", "monthly"],
  ["/works/lumiere-skin", "0.8", "monthly"],
  ["/works/kinosara", "0.8", "monthly"],
  ["/works/elan-studio", "0.8", "monthly"],
  ["/works/hikari-energy", "0.8", "monthly"],
  ["/works/tokyo-creative-week", "0.8", "monthly"],
  ["/works/rhythm-mobile-app", "0.8", "monthly"],
  ["/react-native-app", "0.8", "monthly"],
  ["/booking-demo", "0.8", "monthly"],
  ["/vtuber-shop", "0.8", "monthly"],
  ["/izakaya", "0.8", "monthly"],
  ["/privacy", "0.3", "yearly"],
] as const;

export function GET() {
  const urls = routes.map(([path, priority, changefreq]) =>
    `<url><loc>${origin}${path}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`
  ).join("");
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
