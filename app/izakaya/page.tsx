import type { Metadata } from "next";
import { IzakayaHomeTemplate } from "@/components/templates/izakaya-home-template";

export const metadata: Metadata = {
  title: "居酒屋HP・予約システム制作事例",
  description: "居酒屋の店舗紹介、料理、アクセス、予約フォーム、予約管理までを一続きで体験できる架空案件ポートフォリオです。",
  alternates: { canonical: "/izakaya" },
};

export default function IzakayaPage(){ return <IzakayaHomeTemplate/>; }
