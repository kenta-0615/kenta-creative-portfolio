"use client";

import { useState, type ComponentProps, type FormEvent } from "react";
import { ReliableLink } from "@/components/atoms/reliable-link";
import { ja } from "date-fns/locale";
import { ArrowRight, CalendarCheck2, CheckCircle2, Clock3, ShieldCheck, Smartphone } from "lucide-react";
import { Calendar, CalendarDayButton } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import styles from "./booking.module.css";
import { bookingTimeSlots, getAvailabilitySymbol, getAvailableTimeSlots, getBookingAvailability } from "@/lib/booking-availability";

function BookingDayButton({ day, modifiers, ...props }: ComponentProps<typeof CalendarDayButton>) {
  const status = modifiers.available ? "available" : modifiers.limited ? "limited" : modifiers.full ? "full" : "closed";
  const symbol = getAvailabilitySymbol(status);

  return <CalendarDayButton day={day} modifiers={modifiers} {...props}>
    <span>{day.date.getDate()}</span>
    {symbol && <span className={styles.dayStatus} data-status={status} aria-label={status === "available" ? "空きあり" : status === "limited" ? "残りわずか" : "満席"}>{symbol}</span>}
  </CalendarDayButton>;
}

export default function BookingDemoPage(){
  const [date,setDate]=useState<Date>(); const [time,setTime]=useState(""); const [complete,setComplete]=useState(false);
  const today=new Date(); today.setHours(0,0,0,0);
  const availableSlots=date?getAvailableTimeSlots(date,today):[];
  const selectedStatus=date?getBookingAvailability(date,today):undefined;
  const dateLabel=date?.toLocaleDateString("ja-JP",{year:"numeric",month:"long",day:"numeric",weekday:"short"})??"日付を選択してください";
  const submit=(event:FormEvent<HTMLFormElement>)=>{event.preventDefault();if(!date||!time)return;setComplete(true);window.scrollTo({top:0,behavior:"smooth"});};
  return <main className={styles.page}>
    <header className={styles.header}><ReliableLink className={styles.brand} href="/">LUMIÈRE SKIN</ReliableLink><nav><ReliableLink href="/services">制作サービス</ReliableLink><ReliableLink href="/">ポートフォリオ</ReliableLink><span className={styles.demoBadge}>UI DEMO</span></nav></header>
    <section className={styles.intro}><div><small>BOOKING EXPERIENCE / PORTFOLIO</small><h1>迷わず選べる、<br/>予約体験。</h1></div><div><p>美容サロンを想定し、空き日の確認からメニュー選択、予約内容の確認までを一画面で完結させた実装例です。</p><p className={styles.notice}>これは操作デモです。入力内容の送信・保存や実際の予約確定は行いません。</p></div></section>
    <section className={styles.shell} aria-label="予約フォームデモ">
      <div className={styles.panel}><div className={styles.step}><b>01 / DATE & TIME</b><span>日付と時間</span></div><div className={styles.legend} aria-label="カレンダーの空き状況"><span><b data-status="available">○</b>空きあり</span><span><b data-status="limited">△</b>残りわずか</span><span><b data-status="full">×</b>満席</span></div><Calendar mode="single" selected={date} onSelect={(next)=>{setDate(next);setTime("")}} locale={ja} showOutsideDays={false} modifiers={{available:(day)=>getBookingAvailability(day,today)==="available",limited:(day)=>getBookingAvailability(day,today)==="limited",full:(day)=>getBookingAvailability(day,today)==="full"}} disabled={(day)=>getBookingAvailability(day,today)==="closed"||getBookingAvailability(day,today)==="full"} components={{DayButton:BookingDayButton}} className={styles.calendar}/><div className={styles.selection}><small>SELECTED DATE</small><strong>{dateLabel}</strong>{date&&<span className={styles.slotCount}>{selectedStatus==="limited"?`残り${availableSlots.length}枠です`:"ご希望の時間を選択してください"}</span>}<div className={styles.times}>{bookingTimeSlots.map(slot=><Button type="button" key={slot} className={styles.timeButton} data-active={time===slot} disabled={!date||!availableSlots.includes(slot)} onClick={()=>setTime(slot)}>{slot}</Button>)}</div></div></div>
      <div className={styles.panel}>{complete?<div className={styles.success} role="status"><CheckCircle2/><small>DEMO COMPLETED</small><h2>予約フローを<br/>完了しました。</h2><p>{dateLabel} {time}<br/>デモのため予約情報は送信・保存されていません。</p><Button onClick={()=>{setComplete(false);setDate(undefined);setTime("")}}>もう一度試す</Button></div>:<form className={styles.form} onSubmit={submit}><div className={styles.step}><b>02 / YOUR DETAILS</b><span>お客様情報</span></div><h2>予約内容を入力</h2><label>メニュー<NativeSelect required defaultValue=""><NativeSelectOption value="" disabled>選択してください</NativeSelectOption><NativeSelectOption>肌質カウンセリング＋トリートメント</NativeSelectOption><NativeSelectOption>毛穴ケアコース</NativeSelectOption><NativeSelectOption>エイジングケアコース</NativeSelectOption></NativeSelect></label><label>お名前<Input required autoComplete="name" placeholder="例：山田 花子"/></label><label>メールアドレス<Input required type="email" autoComplete="email" placeholder="example@email.com"/></label><label>ご要望・注意事項<Textarea rows={4} placeholder="アレルギーや肌のお悩みなど"/></label><div className={styles.summary}><p><span>予約日</span><b>{dateLabel}</b></p><p><span>時間</span><b>{time||"時間を選択してください"}</b></p></div><Button className={styles.submit} disabled={!date||!time}>入力内容を確認する <ArrowRight/></Button><p className={styles.caption}>ポートフォリオ用のデモ実装です。送信ボタンを押しても個人情報は保存されません。</p></form>}</div>
    </section>
    <section className={styles.features}><small>IMPLEMENTATION POINTS</small><h2>予約システムで設計したこと</h2><div className={styles.featureGrid}>{[[<CalendarCheck2 key="i"/>,"空き日制御","○・△・×で空き状況を可視化し、過去日・定休日・満席日は選択不可に。"],[<Clock3 key="i"/>,"時間枠選択","日付ごとの空き枠だけを選べる段階的な入力。"],[<Smartphone key="i"/>,"レスポンシブ","スマートフォンでもカレンダーと入力欄を操作しやすく設計。"],[<ShieldCheck key="i"/>,"プライバシー","デモでは保存せず、本番では目的明示と安全な管理を前提化。"]].map(([icon,title,text],i)=><article key={String(title)}><b>0{i+1}</b>{icon}<h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <footer className={styles.footer}><span>© 2026 KENTY CREATIVE / BOOKING UI DEMO</span><ReliableLink href="/services">制作条件を見る</ReliableLink></footer>
  </main>
}
