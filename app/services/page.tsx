import { ServicesTemplate } from "@/components/templates/services-template";

export const metadata = {
  title: "プロフィール・料金・制作条件｜KENTA CREATIVE",
  description: "笠井健太の対応可能業務、制作料金と納期の目安、修正範囲、制作事例、FAQをご案内します。",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesTemplate />;
}
