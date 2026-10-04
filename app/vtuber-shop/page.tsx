import type { Metadata } from "next";
import { VtuberShopTemplate } from "@/components/templates/vtuber-shop-template";

export const metadata: Metadata = {
  title: "個人VTuber向けECサイト制作事例",
  description: "架空の個人VTuber公式グッズストア。商品絞り込み、カート、購入直前までのEC体験を実装したポートフォリオです。",
  alternates: { canonical: "/vtuber-shop" },
};

export default function VtuberShopPage(){ return <VtuberShopTemplate/>; }
