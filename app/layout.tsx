import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kenty-creative-portfolio.ka-k-miwa.chatgpt.site"),
  title: "KENTY CREATIVE｜React・TypeScript／Web制作",
  description: "React・TypeScriptによるEC・Web画面開発と、HP・LP制作。UI設計、レスポンシブ、テスト、公開後の改善まで対応するケンティのポートフォリオ。",
  keywords: ["React", "TypeScript", "ECサイト開発", "Web制作", "LP制作", "フロントエンド", "ポートフォリオ"],
  openGraph: {
    title: "KENTY CREATIVE｜Web Design & Frontend",
    description: "React・TypeScript実装とWeb制作。EC・予約管理の体験型デモ、料金、対応範囲を掲載。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: { card: "summary", title: "KENTY CREATIVE", description: "React / TypeScript & Web Production" },
  alternates: { canonical: "/" },
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
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "ケンティ",
          jobTitle: "Web Designer / Frontend Engineer",
          knowsAbout: ["Web Design", "Landing Page Design", "SEO", "JavaScript", "TypeScript", "Tailwind CSS"]
        }) }} />
      </body>
    </html>
  );
}
