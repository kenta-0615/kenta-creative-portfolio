import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/atoms/analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://kenty-creative-portfolio.ka-k-miwa.chatgpt.site"),
  title: {
    default: "KENTY CREATIVE｜Web制作・React／TypeScript開発",
    template: "%s｜KENTY CREATIVE",
  },
  description: "HP・LP・ECサイト・予約フォームの設計と制作、React・TypeScriptによるフロントエンド開発に対応。UI設計、レスポンシブ、テスト、公開後の改善まで支援するケンティのポートフォリオです。",
  keywords: ["React", "TypeScript", "ECサイト開発", "Web制作", "LP制作", "フロントエンド", "ポートフォリオ"],
  openGraph: {
    title: "KENTY CREATIVE｜Web制作・React／TypeScript開発",
    description: "HP・LP・ECサイト制作とReact・TypeScript開発。体験型デモ、料金、対応範囲を掲載しています。",
    type: "website",
    locale: "ja_JP",
    siteName: "KENTY CREATIVE",
    url: "/",
    images: [{ url:"/og-kenty.svg", width:1200, height:630, alt:"KENTY CREATIVE Web制作・React／TypeScript開発" }],
  },
  twitter: { card: "summary_large_image", title: "KENTY CREATIVE｜Web制作・フロントエンド開発", description: "HP・LP・ECサイト制作とReact・TypeScript開発に対応。", images:["/og-kenty.svg"] },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: {
    google: "geW50Cb_30lZUyOuhJrSK_x1R6R2pMxBOD4lyHhUsJs",
  },
  icons: {
    icon: "/favicon-kenty.svg",
    shortcut: "/favicon-kenty.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Analytics />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "WebSite", "@id": "https://kenty-creative-portfolio.ka-k-miwa.chatgpt.site/#website", url: "https://kenty-creative-portfolio.ka-k-miwa.chatgpt.site/", name: "KENTY CREATIVE", inLanguage: "ja-JP" },
            {
              "@type": ["Person", "ProfessionalService"],
              "@id": "https://kenty-creative-portfolio.ka-k-miwa.chatgpt.site/#kenty",
              name: "ケンティ",
              alternateName: "KENTY CREATIVE",
              url: "https://kenty-creative-portfolio.ka-k-miwa.chatgpt.site/",
              jobTitle: "Webデザイナー・フロントエンドエンジニア",
              areaServed: "日本全国（オンライン対応）",
              knowsAbout: ["Webサイト制作", "ランディングページ制作", "ECサイト開発", "予約フォーム開発", "SEO", "React", "TypeScript"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web制作・フロントエンド開発",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "ホームページ・LP制作" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "React・TypeScriptフロントエンド開発" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Webサイト保守・改善" } }
                ]
              }
            }
          ]
        }) }} />
      </body>
    </html>
  );
}
