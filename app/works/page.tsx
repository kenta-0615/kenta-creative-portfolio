import { ArrowRight } from "lucide-react";
import { InfoHeader } from "@/components/organisms/info-header";
import { ReliableLink } from "@/components/atoms/reliable-link";
import { works } from "@/data/portfolio-content";
import styles from "./works.module.css";

export const metadata = { title:"制作事例", description:"美容・飲食・アパレル・電気会社・キャンペーンの自主制作を、課題・設計判断・実装・テストとともに紹介します。", alternates:{canonical:"/works"} };

export default function WorksPage(){ return <main className={styles.page}><InfoHeader/><section className={styles.hero}><small>WORKS / CASE STUDIES</small><h1>見た目だけでなく、<br/>判断の理由まで。</h1><p>すべて自主制作です。想定課題、ターゲット、採用しなかった案、実装と確認内容を明示します。</p></section><section className={styles.grid}>{works.map(work=><article key={work.slug}><span>{work.number} / {work.industry}</span><h2>{work.title}</h2><p>{work.summary}</p><dl><div><dt>目的</dt><dd>{work.conversion}</dd></div><div><dt>対象</dt><dd>{work.target}</dd></div></dl><ReliableLink href={`/works/${work.slug}`}>設計内容を見る <ArrowRight/></ReliableLink></article>)}</section><section className={styles.cta}><h2>目的に近い事例から、<br/>制作方法をご説明します。</h2><ReliableLink href="/#contact">無料で案件相談する <ArrowRight/></ReliableLink></section></main> }
