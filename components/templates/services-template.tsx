import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { ReliableLink } from "@/components/atoms/reliable-link";
import { SectionHeading } from "@/components/molecules/section-heading";
import { InfoHeader } from "@/components/organisms/info-header";
import { PriceSection } from "@/components/organisms/price-section";
import { caseStudies, faqItems, services } from "@/data/services";
import styles from "@/app/info.module.css";

export function ServicesTemplate() {
  return <main className={styles.page}>
    <InfoHeader />
    <section className={styles.hero}><div><span className={styles.eyebrow}>SERVICE GUIDE / 2026</span><h1>仕事の範囲を、<br/><em>明確に。</em></h1></div><aside><p>React・TypeScript実装、Web制作、保守・改善について、相談前に知りたい料金、納期、修正範囲をまとめました。正式な内容はヒアリング後のお見積書で確定します。</p><ReliableLink href="/#contact">無料で案件相談する <ArrowRight/></ReliableLink></aside></section>
    <section className={styles.section}><SectionHeading eyebrow="01 / PROFILE" title="ケンティ" description="React・TypeScriptによるEC開発と、HP・LP制作の両方を経験。情報設計からUI、実装、テスト、公開後の運用まで一貫して対応します。"/><div className={styles.profileGrid}><article className={styles.profileCard}><b>KENTY<br/>CREATIVE</b><span>FRONTEND ENGINEER / WEB DESIGNER</span><p>React・TypeScript実務3年。制作会社でのWeb制作1年7か月。「見た目」だけで終わらせず、問い合わせ・予約・購入といった次の行動まで設計します。</p></article><div className={styles.serviceGrid}>{services.map((service)=><article key={service.number}><b>{service.number}</b><h3>{service.title}</h3><p>{service.description}</p><ul>{service.items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
    <PriceSection />
    <section className={styles.section}><SectionHeading eyebrow="03 / CASES" title="制作事例" description="現在公開中の事例は、設計力と実装力を示す自主制作です。守秘義務のある案件や許可を得ていない実案件を、実績として偽って掲載しません。"/><div className={styles.caseGrid}>{caseStudies.map((item)=><article key={item.title}><small>自主制作 / {item.industry}</small><h3>{item.title}</h3><p>{item.description}</p><ReliableLink href={item.href}>事例を見る <ExternalLink size={15}/></ReliableLink></article>)}</div><div className={styles.notice}><b>CLIENT VOICE</b><p>公開許可をいただいたお客様の声は現在準備中です。架空のレビューは掲載せず、公開可能な実績が整い次第追加します。</p></div></section>
    <section className={`${styles.section} ${styles.sectionDark}`}><SectionHeading eyebrow="04 / FAQ" title="よくある質問" description="ご依頼前に多い確認事項です。ここにない内容はお問い合わせフォームからご相談ください。"/><div className={styles.faq}>{faqItems.map((item)=><details className={styles.faqItem} key={item.question}><summary className={styles.faqTrigger}>{item.question}<span aria-hidden="true">＋</span></summary><div className={styles.faqContent}><p>{item.answer}</p></div></details>)}</div></section>
    <section className={styles.section}><SectionHeading eyebrow="05 / TRUST & DOMAIN" title="安心して相談できる情報" description="個人情報の取扱いと販売形態を明確にし、将来の独自ドメイン運用にも対応できる構成です。"/><div className={styles.legalGrid}><article><h3>プライバシーポリシー</h3><p>問い合わせで取得する氏名・メールアドレスなどの利用目的と管理方針を公開しています。</p><ReliableLink href="/privacy">内容を確認する</ReliableLink></article><article><h3>特定商取引・事業者情報</h3><p>現在、本サイト上で決済を伴う商品販売は行っていません。オンライン販売開始時は、必要事項を掲載してから販売します。</p></article><article><h3>独自ドメイン</h3><p>取得、DNS設定、SSL、www有無の統一、旧URLからの移行まで対応可能です。ドメイン決定後に接続します。</p></article></div></section>
    <section className={styles.cta}><h2>まずは目的と<br/>課題を聞かせてください。</h2><ReliableLink className={styles.primaryLink} href="/#contact">無料で案件相談する <Check/></ReliableLink></section>
    <footer className={styles.footer}><span>© 2026 KENTY CREATIVE</span><div><ReliableLink href="/">ポートフォリオ</ReliableLink>　<ReliableLink href="/privacy">プライバシー</ReliableLink></div></footer>
  </main>;
}
