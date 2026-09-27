import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock3, MapPin, Phone } from "lucide-react";
import { ReliableLink } from "@/components/atoms/reliable-link";
import styles from "@/app/showcase.module.css";

export function IzakayaHomeTemplate() {
  return <main className={`${styles.demoPage} ${styles.izakayaPage}`}>
    <div className={styles.izakayaTop}>架空店舗の体験型ポートフォリオです。実際の予約は成立しません。</div>
    <header className={`${styles.demoHeader} ${styles.izakayaHeader}`}><ReliableLink href="/" className={styles.backLink}><ArrowLeft size={17}/> KENTY CREATIVE</ReliableLink><strong className={styles.izakayaLogo}>炭と酒場<span>宵ノ灯</span></strong><nav><a href="#menu">お品書き</a><a href="#access">店舗情報</a><ReliableLink href="/izakaya/admin">管理画面デモ</ReliableLink><ReliableLink className={styles.reserveNav} href="/izakaya/reserve">席を予約する</ReliableLink></nav></header>
    <section className={styles.izakayaHero}><div className={styles.izakayaImage}><Image src="/food-hero.webp" alt="炭火料理と季節の酒を楽しむ居酒屋のイメージ" fill priority sizes="100vw"/></div><div className={styles.izakayaHeroCopy}><span>炭火と旬菜、旨い酒。</span><h1>今夜の一杯を、<br/>ちゃんと旨く。</h1><p>仕事帰りの一人飲みから、気心知れた仲間との宴まで。旬の食材を炭火で仕上げる、架空の酒場です。</p><ReliableLink href="/izakaya/reserve">空席を見て予約する <ArrowRight/></ReliableLink></div><div className={styles.verticalLabel}>SUMI TO SAKABA / YOINOAKARI</div></section>
    <section className={styles.izakayaIntro}><small>ABOUT US</small><h2>気取らず、<br/>手は抜かず。</h2><p>毎朝届く魚、季節の野菜、店主が選ぶ地酒。素材ごとのいちばん旨い温度を見極め、炭火の香りとともにお出しします。</p></section>
    <section className={styles.menuSection} id="menu"><div className={styles.menuTitle}><small>SEASONAL MENU</small><h2>今月のおすすめ</h2></div><div className={styles.menuGrid}>{[["01","藁焼きかつお 塩たたき","1,280"],["02","奥久慈しゃもの炭火焼き","1,480"],["03","焼き茄子と生雲丹","980"],["04","季節の土鍋ごはん","1,680"]].map(([n,name,price])=><article key={n}><span>{n}</span><h3>{name}</h3><p>¥{price}</p><small>季節・仕入れにより内容が変わります</small></article>)}</div></section>
    <section className={styles.accessSection} id="access"><div><small>SHOP INFORMATION</small><h2>宵ノ灯</h2><p><MapPin/>東京都内・架空住所 1-2-3</p><p><Clock3/>17:00–23:30 / 日曜定休</p><p><Phone/>00-0000-0000</p></div><div className={styles.accessCta}><span>本日の席状況</span><strong>○ 空きあり</strong><p>フォームで日時・人数を選択すると、予約の登録から管理までを体験できます。</p><ReliableLink href="/izakaya/reserve">予約フォームへ <ArrowRight/></ReliableLink></div></section>
    <footer className={styles.demoFooter}><span>© 2026 宵ノ灯 — FICTIONAL RESTAURANT DEMO</span><ReliableLink href="/izakaya/admin">予約管理を体験</ReliableLink></footer>
  </main>;
}

