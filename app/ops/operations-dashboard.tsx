"use client";

import { useMemo, useState } from "react";
import { ReliableLink } from "@/components/atoms/reliable-link";
import { ArrowLeft, BriefcaseBusiness, Check, ChevronRight, Clipboard, Clock3, ExternalLink, LayoutDashboard, LogOut, Mail, RefreshCw, Send, Settings2, Sparkles } from "lucide-react";
import styles from "./ops.module.css";

type Inquiry = { id:number; name:string; company:string; email:string; projectType:string; budget:string; schedule:string; message:string; status:string; createdAt:string; updatedAt:string };
const statusOptions = [
  ["new", "新規受付"], ["replied", "初回返信済み"], ["hearing", "ヒアリング"], ["proposal", "見積・提案"], ["contracted", "契約済み"], ["production", "制作中"], ["review", "確認待ち"], ["delivered", "納品済み"], ["closed", "完了"],
] as const;
const flow = [
  ["01", "問い合わせ受付", "内容・予算・納期を確認", "当日〜1営業日"], ["02", "初回返信", "対応可否と打ち合わせ候補を返信", "2営業日以内"], ["03", "ヒアリング", "目的・対象・成果指標・必要素材を整理", "30〜60分"], ["04", "見積・提案", "範囲・納期・修正回数・費用を明文化", "2〜3営業日"], ["05", "契約・着手", "合意内容と支払条件を確認", "着手前"], ["06", "設計・制作", "ワイヤー→デザイン→実装の順で進行", "案件別"], ["07", "確認・修正", "確認点を一括で受領し反映", "1〜2回"], ["08", "納品・振り返り", "公開・データ納品・改善案を共有", "完了時"],
];
const templates = [
  { title:"初回返信", body:"お問い合わせありがとうございます。内容を確認し、対応可否と進め方について2営業日以内にご連絡いたします。" },
  { title:"ヒアリング依頼", body:"制作目的とご希望を詳しく伺うため、30〜60分ほどオンラインでお話しできれば幸いです。候補日時を3つお送りください。" },
  { title:"素材依頼", body:"制作開始にあたり、ロゴデータ・使用画像・掲載文章・参考サイトをご共有ください。未確定の項目はご相談しながら整理できます。" },
];

export default function OperationsDashboard({ initialInquiries, userName, signOutPath }: { initialInquiries: Inquiry[]; userName:string; signOutPath:string }) {
  const [items, setItems] = useState(initialInquiries); const [filter, setFilter] = useState("all"); const [copied, setCopied] = useState(""); const [updating, setUpdating] = useState<number|null>(null);
  const visible = useMemo(() => filter === "all" ? items : items.filter((item) => item.status === filter), [items, filter]);
  const activeCount = items.filter((i) => !["delivered", "closed"].includes(i.status)).length;
  const updateStatus = async (id:number,status:string) => { const before=items; setUpdating(id); setItems(items.map((i)=>i.id===id?{...i,status}:i)); const res=await fetch("/api/inquiries",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({id,status})}); if(!res.ok) setItems(before); setUpdating(null); };
  const copy = async (title:string,body:string) => { await navigator.clipboard.writeText(body); setCopied(title); window.setTimeout(()=>setCopied(""),1800); };
  return <main className={styles.page}>
    <aside className={styles.sidebar}><ReliableLink className={styles.opsBrand} href="/"><span>K</span><b>KENTY<br/>OPS</b></ReliableLink><nav><a className={styles.active} href="#dashboard"><LayoutDashboard/>概要</a><a href="#inquiries"><Mail/>問い合わせ</a><a href="#workflow"><RefreshCw/>運用フロー</a><a href="#templates"><Clipboard/>定型文</a></nav><div className={styles.sideBottom}><ReliableLink href="/" target="_top"><ExternalLink/>公開サイト</ReliableLink><a href={signOutPath} target="_top"><LogOut/>ログアウト</a></div></aside>
    <div className={styles.main}>
      <header className={styles.topbar}><div><small>PRIVATE OPERATIONS</small><h1>案件運用ボード</h1></div><div className={styles.user}><span>{userName.slice(0,1).toUpperCase()}</span><div><b>{userName}</b><small>OWNER</small></div></div></header>
      <section className={styles.overview} id="dashboard"><div><small>TODAY&apos;S FOCUS</small><h2>{items.some((i)=>i.status==="new") ? "新規相談への返信を\n優先しましょう。" : "進行中案件の\n次の一手を確認。"}</h2><a href="#inquiries">問い合わせを見る <ChevronRight/></a></div><div className={styles.metrics}><article><Mail/><strong>{items.filter((i)=>i.status==="new").length}</strong><span>新規相談</span></article><article><BriefcaseBusiness/><strong>{activeCount}</strong><span>進行中</span></article><article><Clock3/><strong>2</strong><span>返信目安 / 営業日</span></article></div></section>
      <section className={styles.panel} id="inquiries"><div className={styles.panelHead}><div><small>INQUIRIES</small><h2>問い合わせ一覧</h2></div><select value={filter} onChange={(e)=>setFilter(e.target.value)} aria-label="ステータスで絞り込む"><option value="all">すべて</option>{statusOptions.map(([v,l])=><option key={v} value={v}>{l}</option>)}</select></div>{visible.length===0?<div className={styles.empty}><Sparkles/><h3>該当する問い合わせはありません</h3><p>公開フォームから送信されると、ここに表示されます。</p></div>:<div className={styles.inquiryList}>{visible.map((item)=><article key={item.id} className={styles.inquiry}><div className={styles.inquiryTop}><div><span className={`${styles.status} ${styles[item.status]}`}>{statusOptions.find(([v])=>v===item.status)?.[1]??item.status}</span><time>{new Date(item.createdAt).toLocaleDateString("ja-JP")}</time></div><select value={item.status} disabled={updating===item.id} onChange={(e)=>updateStatus(item.id,e.target.value)} aria-label={`${item.name}様の進行状況`}>{statusOptions.map(([v,l])=><option key={v} value={v}>{l}</option>)}</select></div><h3>{item.projectType}<small>#{String(item.id).padStart(4,"0")}</small></h3><div className={styles.client}><p><b>{item.name}</b>{item.company||"個人"}</p><a href={`mailto:${item.email}`}>{item.email}<Send/></a></div><dl><div><dt>予算</dt><dd>{item.budget}</dd></div><div><dt>希望納期</dt><dd>{item.schedule}</dd></div></dl><p className={styles.message}>{item.message}</p></article>)}</div>}</section>
      <section className={styles.workflow} id="workflow"><div className={styles.panelHead}><div><small>STANDARD WORKFLOW</small><h2>受注から納品まで</h2></div><p>案件ごとに範囲は調整しつつ、抜け漏れを防ぐ基本フローです。</p></div><div className={styles.flowGrid}>{flow.map(([n,title,detail,time])=><article key={n}><b>{n}</b><div><h3>{title}</h3><p>{detail}</p><small>{time}</small></div></article>)}</div></section>
      <section className={styles.templates} id="templates"><div className={styles.panelHead}><div><small>MESSAGE TEMPLATES</small><h2>返信テンプレート</h2></div></div><div className={styles.templateGrid}>{templates.map((t)=><article key={t.title}><div><Mail/><h3>{t.title}</h3></div><p>{t.body}</p><button onClick={()=>copy(t.title,t.body)}>{copied===t.title?<><Check/>コピー済み</>:<><Clipboard/>文章をコピー</>}</button></article>)}</div></section>
      <footer className={styles.footer}><ReliableLink href="/"><ArrowLeft/>ポートフォリオへ戻る</ReliableLink><span>PRIVATE / OWNER ONLY</span><Settings2/></footer>
    </div>
  </main>;
}
