"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, LayoutDashboard, Users } from "lucide-react";
import { ReliableLink } from "@/components/atoms/reliable-link";
import { changeReservationStatus, reservationStatuses, type IzakayaReservation, type ReservationStatus } from "@/lib/izakaya-reservation";
import styles from "@/app/showcase.module.css";

const storageKey = "kenty-izakaya-reservations";
const statusLabels: Record<ReservationStatus,string> = { new:"新規", confirmed:"確認済", visited:"来店済", cancelled:"取消" };
const seed: IzakayaReservation[] = [
  { id:"R-DEMO01",createdAt:"2026-09-25T09:00:00.000Z",date:"2026-09-26",time:"18:00",name:"佐藤 直樹",email:"demo1@example.com",phone:"090-0000-0001",partySize:2,course:"席のみ",notes:"カウンター希望",status:"new" },
  { id:"R-DEMO02",createdAt:"2026-09-25T08:00:00.000Z",date:"2026-09-26",time:"19:00",name:"鈴木 美咲",email:"demo2@example.com",phone:"090-0000-0002",partySize:4,course:"旬菜コース 4,500円",notes:"1名甲殻類アレルギー",status:"confirmed" },
  { id:"R-DEMO03",createdAt:"2026-09-24T11:00:00.000Z",date:"2026-09-27",time:"20:00",name:"高橋 健",email:"demo3@example.com",phone:"090-0000-0003",partySize:3,course:"炭火コース 6,000円",notes:"",status:"confirmed" },
];

export function IzakayaAdminTemplate() {
  const [reservations,setReservations]=useState<IzakayaReservation[]>(seed);
  const [filter,setFilter]=useState<ReservationStatus|"all">("all");
  useEffect(()=>{ const frame=requestAnimationFrame(()=>{const saved=JSON.parse(localStorage.getItem(storageKey)??"[]") as IzakayaReservation[];setReservations([...saved,...seed]);});return()=>cancelAnimationFrame(frame); },[]);
  const visible=filter==="all"?reservations:reservations.filter(item=>item.status===filter);
  const guestCount=useMemo(()=>reservations.filter(item=>item.status!=="cancelled").reduce((total,item)=>total+item.partySize,0),[reservations]);
  const change=(id:string,status:ReservationStatus)=>{setReservations(current=>{const next=changeReservationStatus(current,id,status);localStorage.setItem(storageKey,JSON.stringify(next.filter(item=>!item.id.startsWith("R-DEMO"))));return next;});};

  return <main className={`${styles.demoPage} ${styles.adminPage}`}><aside className={styles.adminSide}><strong>宵ノ灯<small>RESERVATION ADMIN</small></strong><nav><a className={styles.active}><LayoutDashboard/>予約一覧</a><ReliableLink href="/izakaya/reserve"><CalendarDays/>予約登録</ReliableLink><ReliableLink href="/izakaya"><ArrowLeft/>店舗ページ</ReliableLink></nav><div><span>DEMO MODE</span><p>実在顧客データは含まれません。</p></div></aside><section className={styles.adminMain}><header><div><small>RESERVATION CONTROL</small><h1>予約管理</h1></div><span>2026.09.25 / FRI</span></header><div className={styles.adminStats}><article><CalendarDays/><span>全予約</span><strong>{reservations.length}</strong></article><article><Users/><span>予約人数</span><strong>{guestCount}</strong></article><article><Clock3/><span>新規確認</span><strong>{reservations.filter(item=>item.status==="new").length}</strong></article><article><CheckCircle2/><span>確認済</span><strong>{reservations.filter(item=>item.status==="confirmed").length}</strong></article></div><div className={styles.adminToolbar}><div><h2>予約一覧</h2><p>ステータスを選ぶと、その場で表示と件数が更新されます。</p></div><div><button data-active={filter==="all"} onClick={()=>setFilter("all")}>すべて</button>{reservationStatuses.map(status=><button key={status} data-active={filter===status} onClick={()=>setFilter(status)}>{statusLabels[status]}</button>)}</div></div><div className={styles.reservationTable}><div className={styles.tableHead}><span>日時</span><span>お客様</span><span>予約内容</span><span>ステータス</span></div>{visible.map(item=><article key={item.id}><div><b>{item.date}</b><strong>{item.time}</strong><small>{item.id}</small></div><div><b>{item.name}</b><span>{item.phone}</span><small>{item.email}</small></div><div><b>{item.partySize}名 / {item.course}</b><span>{item.notes||"ご要望なし"}</span></div><div><NativeStatusSelect value={item.status} onChange={(status)=>change(item.id,status)}/></div></article>)}</div><p className={styles.adminFootnote}>この画面は管理フローを体験するポートフォリオです。ブラウザ内のデモ予約のみ反映され、外部送信は行いません。</p></section></main>;
}

function NativeStatusSelect({value,onChange}:{value:ReservationStatus;onChange:(status:ReservationStatus)=>void}){return <select className={styles.statusSelect} data-status={value} value={value} onChange={(event)=>onChange(event.target.value as ReservationStatus)}>{reservationStatuses.map(status=><option key={status} value={status}>{statusLabels[status]}</option>)}</select>}
