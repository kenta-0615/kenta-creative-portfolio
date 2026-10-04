import { ServicesTemplate } from "@/components/templates/services-template";

export const metadata = {
  title: "Web制作の料金・納期・対応範囲",
  description: "ケンティが対応するHP・LP制作、React・TypeScript開発、保守改善の料金・納期・修正範囲と、ご依頼前のよくある質問をご案内します。",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesTemplate />;
}
