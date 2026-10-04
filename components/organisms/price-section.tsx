import { PriceCard } from "@/components/molecules/price-card";
import { SectionHeading } from "@/components/molecules/section-heading";
import { pricePlans } from "@/data/services";
import styles from "@/app/info.module.css";

export function PriceSection() {
  return <section className={`${styles.section} ${styles.sectionDark}`}>
    <SectionHeading eyebrow="02 / PRICE & SCHEDULE" title="料金・納期の目安" description="ページ数、原稿・素材の状況、外部サービス連携によって変動します。以下は初回相談時の参考価格です。" />
    <div className={styles.priceGrid}>{pricePlans.map((plan) => <PriceCard key={plan.title} plan={plan} />)}</div>
    <div className={styles.scopeGrid}><article><h3>基本範囲</h3><dl><div><dt>価格表記</dt><dd>税込の目安。正式金額は見積書で確定</dd></div><div><dt>修正回数</dt><dd>各工程2回まで</dd></div><div><dt>対応環境</dt><dd>最新版のChrome・Safari・Edge／PC・タブレット・スマートフォン</dd></div><div><dt>納品形式</dt><dd>公開作業、GitHubまたはソース一式</dd></div><div><dt>公開後保証</dt><dd>納品後14日間の制作範囲内の不具合修正</dd></div></dl></article><article><h3>契約・お支払い</h3><dl><div><dt>支払時期</dt><dd>原則、着手時50％・納品時50％。少額案件は納品時一括を相談</dd></div><div><dt>キャンセル</dt><dd>着手後は進行済み工程分をご精算</dd></div><div><dt>権利</dt><dd>入金完了後に制作物の利用権を移転。汎用コード・外部素材は各ライセンスに準拠</dd></div><div><dt>実績掲載</dt><dd>事前に許可を確認。非公開・匿名掲載も対応</dd></div><div><dt>秘密保持</dt><dd>NDA締結に対応</dd></div></dl></article><article><h3>保守・外部費用</h3><dl><div><dt>保守時間</dt><dd>平日対応。緊急対応は契約範囲を事前に設定</dd></div><div><dt>追加制作</dt><dd>ページ追加、全面的な方向性変更</dd></div><div><dt>素材</dt><dd>撮影、ロゴ、専門ライティング、翻訳</dd></div><div><dt>実費</dt><dd>ドメイン、サーバー、有料素材・フォント、外部API</dd></div><div><dt>短納期</dt><dd>通常工程を短縮する特急対応</dd></div></dl></article></div>
  </section>;
}
