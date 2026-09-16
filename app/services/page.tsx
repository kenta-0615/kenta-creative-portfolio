import Link from "next/link";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import styles from "../info.module.css";

export const metadata = {
  title: "プロフィール・料金・制作条件｜KENTA CREATIVE",
  description: "笠井健太の対応可能業務、制作料金と納期の目安、修正範囲、制作事例、FAQをご案内します。",
  alternates: { canonical: "/services" },
};

const services = [
  ["01", "Webサイト／HP", "ブランド理解と問い合わせ導線を両立するサイト設計。", ["情報設計・ワイヤー", "UIデザイン", "レスポンシブ実装", "基本SEO"]],
  ["02", "LP制作", "広告・キャンペーンの目的から逆算した縦長ページ。", ["構成・コピー整理", "デザイン", "CTA設計", "計測設計"]],
  ["03", "バナー／広告", "媒体とターゲットに合わせた視線設計。", ["静止画バナー", "SNS広告", "サイズ展開", "簡易AB案"]],
  ["04", "フロントエンド", "デザインを保ちながら、運用しやすい画面へ実装。", ["React / TypeScript", "HTML / CSS / JavaScript", "Tailwind CSS", "アクセシビリティ"]],
  ["05", "予約・フォーム", "予約体験と運用フローを一体で設計。", ["カレンダーUI", "時間枠選択", "入力検証", "管理画面設計"]],
  ["06", "改善・運用", "公開後の計測結果をもとに継続改善。", ["SEO改善", "導線改善", "更新対応", "GitHub運用"]],
];
const prices = [
  ["バナー制作", "¥15,000〜", "3〜7営業日"], ["LPデザイン", "¥80,000〜", "3〜5週間"], ["LPデザイン＋実装", "¥180,000〜", "4〜7週間"], ["Webサイト制作", "¥300,000〜", "1.5〜3か月"], ["予約フォームUI", "¥150,000〜", "3〜6週間"], ["保守・改善", "月額 ¥20,000〜", "内容に応じて調整"],
];
const cases = [
  ["美容", "LUMIÈRE SKIN", "予約獲得を目的に、静かな高級感とカウンセリング導線を設計。", "/#case-study"],
  ["飲食", "季ノ皿 KINOSARA", "旬の物語とコース予約を結びつけたサイト・LP・バナー。", "/#case-study"],
  ["アパレル", "ÉLAN STUDIO", "新作購入へつなげるエディトリアルなECプロモーション。", "/#case-study"],
  ["電気会社", "HIKARI ENERGY", "料金の分かりやすさと信頼性を重視した獲得導線。", "/#case-study"],
  ["キャンペーン", "TOKYO CREATIVE WEEK", "イベント認知と無料登録を促す高コントラスト設計。", "/#case-study"],
  ["予約システム", "SALON BOOKING DEMO", "カレンダー、空き枠、フォーム、確認画面までの操作デモ。", "/booking-demo"],
];
const faq = [
  ["相談前に何を準備すればよいですか？", "目的、対象ユーザー、希望公開時期、参考サイトがあれば十分です。文章や構成が未確定でも、ヒアリングから整理できます。"],
  ["デザインだけ、実装だけでも依頼できますか？", "可能です。既存のワイヤーやFigmaデータ、デザインガイドの有無を確認して制作範囲を決めます。"],
  ["修正は何回までですか？", "基本料金には各工程2回までの修正を含みます。方向性変更や追加ページは別途お見積もりします。"],
  ["素材や原稿がなくても進められますか？", "仮原稿で構成を固めることは可能です。写真撮影、ロゴ制作、専門ライティングが必要な場合は範囲を分けてご案内します。"],
  ["公開後の更新も依頼できますか？", "スポット更新と月次保守の両方に対応可能です。更新頻度と対象範囲を確認してご提案します。"],
  ["独自ドメインにも対応できますか？", "取得済みドメインのDNS設定、SSL、公開先への接続を支援できます。ドメイン購入費と外部サービス料金は実費です。"],
];

export default function ServicesPage() {
  return <main className={styles.page}>
    <header className={styles.header}><Link className={styles.brand} href="/"><span>K</span>KENTA CREATIVE</Link><nav><Link href="/">作品</Link><Link href="/booking-demo">予約デモ</Link><Link href="/#contact">相談する</Link></nav></header>
    <section className={styles.hero}><div><span className={styles.eyebrow}>SERVICE GUIDE / 2026</span><h1>仕事の範囲を、<br/><em>明確に。</em></h1></div><aside><p>相談前に知りたいプロフィール、料金、納期、修正範囲をまとめました。正式な内容はヒアリング後のお見積書で確定します。</p><Link href="/#contact">案件について相談する <ArrowRight/></Link></aside></section>
    <section className={styles.section}><div className={styles.titleGrid}><span className={styles.sectionEyebrow}>01 / PROFILE</span><div><h2>笠井 健太</h2><p>Webデザイナー／フロントエンドエンジニア。業種と目的に合わせた情報設計から、UIデザイン、SEO、実装、公開後の運用まで一貫して対応します。</p></div></div><div className={styles.profileGrid}><article className={styles.profileCard}><b>KENTA<br/>KASAI</b><span>WEB DESIGNER / FRONTEND ENGINEER</span><p>「見た目」だけで終わらせず、問い合わせ・予約・購入といった次の行動まで設計します。</p></article><div className={styles.serviceGrid}>{services.map(([n,title,description,items])=><article key={String(n)}><b>{String(n)}</b><h3>{String(title)}</h3><p>{String(description)}</p><ul>{(items as string[]).map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
    <section className={`${styles.section} ${styles.sectionDark}`}><div className={styles.titleGrid}><span className={styles.sectionEyebrow}>02 / PRICE & SCHEDULE</span><div><h2>料金・納期の目安</h2><p>ページ数、原稿・素材の状況、外部サービス連携によって変動します。以下は初回相談時の参考価格です。</p></div></div><div className={styles.priceGrid}>{prices.map(([title,price,time])=><article key={title}><small>{time}</small><h3>{title}</h3><strong>{price}</strong><span>参考価格・外部費用別／正式見積もりで確定</span></article>)}</div><div className={styles.scopeGrid}><article><h3>基本範囲</h3><dl><div><dt>修正回数</dt><dd>各工程2回まで</dd></div><div><dt>対応端末</dt><dd>PC・タブレット・スマートフォン</dd></div><div><dt>納品</dt><dd>公開作業またはソースデータ</dd></div><div><dt>連絡</dt><dd>オンライン打ち合わせ／テキスト</dd></div></dl></article><article><h3>別途お見積もり</h3><dl><div><dt>追加制作</dt><dd>ページ追加、全面的な方向性変更</dd></div><div><dt>コンテンツ</dt><dd>撮影、ロゴ、専門ライティング、翻訳</dd></div><div><dt>外部費用</dt><dd>ドメイン、サーバー、有料素材、外部API</dd></div><div><dt>短納期</dt><dd>通常工程を短縮する特急対応</dd></div></dl></article></div></section>
    <section className={styles.section}><div className={styles.titleGrid}><span className={styles.sectionEyebrow}>03 / CASES</span><div><h2>制作事例</h2><p>現在公開中の事例は、設計力と実装力を示す自主制作です。守秘義務のある案件や許可を得ていない実案件を、実績として偽って掲載しません。</p></div></div><div className={styles.caseGrid}>{cases.map(([industry,title,description,href])=><article key={title}><small>自主制作 / {industry}</small><h3>{title}</h3><p>{description}</p><Link href={href}>事例を見る <ExternalLink size={15}/></Link></article>)}</div><div className={styles.notice}><b>CLIENT VOICE</b><p>公開許可をいただいたお客様の声は現在準備中です。架空のレビューは掲載せず、公開可能な実績が整い次第追加します。</p></div></section>
    <section className={`${styles.section} ${styles.sectionDark}`}><div className={styles.titleGrid}><span className={styles.sectionEyebrow}>04 / FAQ</span><div><h2>よくある質問</h2><p>ご依頼前に多い確認事項です。ここにない内容はお問い合わせフォームからご相談ください。</p></div></div><Accordion type="single" collapsible className={styles.faq}>{faq.map(([q,a],i)=><AccordionItem className={styles.faqItem} value={`faq-${i}`} key={q}><AccordionTrigger className={styles.faqTrigger}>{q}</AccordionTrigger><AccordionContent className={styles.faqContent}>{a}</AccordionContent></AccordionItem>)}</Accordion></section>
    <section className={styles.section}><div className={styles.titleGrid}><span className={styles.sectionEyebrow}>05 / TRUST & DOMAIN</span><div><h2>安心して相談できる情報</h2><p>個人情報の取扱いと販売形態を明確にし、将来の独自ドメイン運用にも対応できる構成です。</p></div></div><div className={styles.legalGrid}><article><h3>プライバシーポリシー</h3><p>問い合わせで取得する氏名・メールアドレスなどの利用目的と管理方針を公開しています。</p><Link href="/privacy">内容を確認する</Link></article><article><h3>特定商取引・事業者情報</h3><p>現在、本サイト上で決済を伴う商品販売は行っていません。オンライン販売開始時は、必要事項を掲載してから販売します。</p></article><article><h3>独自ドメイン</h3><p>取得、DNS設定、SSL、www有無の統一、旧URLからの移行まで対応可能です。ドメイン決定後に接続します。</p></article></div></section>
    <section className={styles.cta}><h2>まずは目的と<br/>課題を聞かせてください。</h2><Link className={styles.primaryLink} href="/#contact">無料で相談する <Check/></Link></section>
    <footer className={styles.footer}><span>© 2026 KENTA CREATIVE</span><div><Link href="/">ポートフォリオ</Link>　<Link href="/privacy">プライバシー</Link></div></footer>
  </main>;
}
