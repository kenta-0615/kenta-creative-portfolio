import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kenta-creative-portfolio.ka-k-miwa.chatgpt.site"),
  title: "KENTA CREATIVE｜Webデザイン・フロントエンド ポートフォリオ",
  description: "美容・飲食・アパレル・電気会社・キャンペーンのHP、LP、バナーデザイン。ワイヤーフレーム、SEO設計、TypeScript実装まで掲載。",
  keywords: ["Webデザイン", "LP制作", "バナーデザイン", "フロントエンド", "TypeScript", "ポートフォリオ"],
  openGraph: {
    title: "KENTA CREATIVE｜Web Design & Frontend",
    description: "5業種・15制作物のデザインと実装プロセスを掲載したポートフォリオ。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: { card: "summary", title: "KENTA CREATIVE", description: "Web Design & Frontend Portfolio" },
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon-kenta.svg",
    shortcut: "/favicon-kenta.svg",
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
          name: "Kenta Kasai",
          jobTitle: "Web Designer / Frontend Engineer",
          knowsAbout: ["Web Design", "Landing Page Design", "SEO", "JavaScript", "TypeScript", "Tailwind CSS"]
        }) }} />
      </body>
    </html>
  );
}
