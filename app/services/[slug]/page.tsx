import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { InfoHeader } from "@/components/organisms/info-header";
import { ReliableLink } from "@/components/atoms/reliable-link";
import { serviceDetails } from "@/data/portfolio-content";
import styles from "./service.module.css";

export function generateStaticParams(){return serviceDetails.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const service=serviceDetails.find(item=>item.slug===slug);return service?{title:service.title,description:service.lead,alternates:{canonical:`/services/${slug}`}}:{};}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const service=serviceDetails.find(item=>item.slug===slug);if(!service)notFound();return <main className={styles.page}><InfoHeader/><section className={styles.hero}><small>SERVICE / {service.slug.toUpperCase()}</small><h1>{service.title}</h1><p>{service.lead}</p><ReliableLink href="/#contact">無料で案件相談する <ArrowRight/></ReliableLink></section><section className={styles.content}><article><small>FOR WHO</small><h2>対象となる方</h2><p>{service.audience}</p></article><article><small>COMMON ISSUES</small><h2>よくある課題</h2><ul>{service.issues.map(x=><li key={x}><Check/>{x}</li>)}</ul></article><article><small>SCOPE</small><h2>提供範囲</h2><ul>{service.scope.map(x=><li key={x}><Check/>{x}</li>)}</ul></article><article className={styles.price}><small>PRICE & SCHEDULE</small><h2>{service.price}</h2><p>納期目安：{service.duration}</p><p>正式な料金と納期は、目的・ページ数・素材・機能を確認してお見積もりします。</p></article></section><section className={styles.cta}><h2>未確定の内容があっても、<br/>相談から整理できます。</h2><p>相談のみでも可・無理な営業なし・通常2営業日以内に返信</p><ReliableLink href="/#contact">無料で案件相談する <ArrowRight/></ReliableLink></section></main>}
