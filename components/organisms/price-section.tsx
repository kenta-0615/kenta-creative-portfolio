import { PriceCard } from "@/components/molecules/price-card";
import { SectionHeading } from "@/components/molecules/section-heading";
import { pricePlans } from "@/data/services";
import styles from "@/app/info.module.css";

export function PriceSection() {
  return <section className={`${styles.section} ${styles.sectionDark}`}>
    <SectionHeading eyebrow="02 / PRICE & SCHEDULE" title="料金・納期の目安" description="ページ数、原稿・素材の状況、外部サービス連携によって変動します。以下は初回相談時の参考価格です。" />
    <div className={styles.priceGrid}>{pricePlans.map((plan) => <PriceCard key={plan.title} plan={plan} />)}</div>
    <div className={styles.scopeGrid}><article><h3>基本範囲</h3><dl><div><dt>修正回数</dt><dd>各工程2回まで</dd></div><div><dt>対応端末</dt><dd>PC・タブレット・スマートフォン</dd></div><div><dt>納品</dt><dd>公開作業またはソースデータ</dd></div><div><dt>連絡</dt><dd>オンライン打ち合わせ／テキスト</dd></div></dl></article><article><h3>別途お見積もり</h3><dl><div><dt>追加制作</dt><dd>ページ追加、全面的な方向性変更</dd></div><div><dt>コンテンツ</dt><dd>撮影、ロゴ、専門ライティング、翻訳</dd></div><div><dt>外部費用</dt><dd>ドメイン、サーバー、有料素材、外部API</dd></div><div><dt>短納期</dt><dd>通常工程を短縮する特急対応</dd></div></dl></article></div>
  </section>;
}
