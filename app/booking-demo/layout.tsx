import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "予約フォーム・カレンダー実装デモ",
  description: "美容サロンを想定した、日付・時間帯選択と予約フォームのインタラクティブ実装例。",
  alternates: { canonical: "/booking-demo" },
};

export default function BookingDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
