"use client";

import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { ReliableLink } from "@/components/atoms/reliable-link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { createReservation, validateReservation, type IzakayaReservation, type ReservationInput } from "@/lib/izakaya-reservation";
import styles from "@/app/showcase.module.css";

const storageKey = "kenty-izakaya-reservations";

export function IzakayaReservationTemplate() {
  const [complete, setComplete] = useState<IzakayaReservation>();
  const [errors, setErrors] = useState<string[]>([]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const input: ReservationInput = {
      date: String(form.get("date") ?? ""), time: String(form.get("time") ?? ""),
      name: String(form.get("name") ?? ""), email: String(form.get("email") ?? ""), phone: String(form.get("phone") ?? ""),
      partySize: Number(form.get("partySize") ?? 0), course: String(form.get("course") ?? ""), notes: String(form.get("notes") ?? ""),
    };
    const nextErrors = validateReservation(input);
    if (nextErrors.length) { setErrors(nextErrors); return; }
    const reservation = createReservation(input);
    const stored = JSON.parse(localStorage.getItem(storageKey) ?? "[]") as IzakayaReservation[];
    localStorage.setItem(storageKey, JSON.stringify([reservation, ...stored]));
    setComplete(reservation); setErrors([]); window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <main className={`${styles.demoPage} ${styles.reservePage}`}>
    <header className={`${styles.demoHeader} ${styles.izakayaHeader}`}><ReliableLink href="/izakaya" className={styles.backLink}><ArrowLeft size={17}/> 店舗ページへ</ReliableLink><strong className={styles.izakayaLogo}>炭と酒場<span>宵ノ灯</span></strong><span className={styles.demoBadge}>RESERVATION DEMO</span></header>
    <section className={styles.reserveIntro}><small>ONLINE RESERVATION</small><h1>お席のご予約</h1><p>入力内容はこの端末のブラウザ内だけに保存され、管理画面デモで確認できます。実際の店舗への送信や予約確定は行いません。</p></section>
    <section className={styles.reserveShell}>{complete?<div className={styles.reserveComplete}><CheckCircle2/><small>DEMO RESERVATION CREATED</small><h2>予約データを<br/>登録しました。</h2><dl><div><dt>予約番号</dt><dd>{complete.id}</dd></div><div><dt>日時</dt><dd>{complete.date} / {complete.time}</dd></div><div><dt>人数</dt><dd>{complete.partySize}名</dd></div></dl><ReliableLink href="/izakaya/admin">管理画面で確認する <ArrowRight/></ReliableLink><button onClick={()=>setComplete(undefined)}>もう一件試す</button></div>:<form className={styles.reserveForm} onSubmit={submit}>
      <div className={styles.formLead}><b>01</b><div><small>DATE & PARTY</small><h2>来店情報</h2></div></div><div className={styles.formTwo}><label>ご来店日<Input name="date" type="date" required/></label><label>ご来店時間<NativeSelect name="time" required defaultValue=""><NativeSelectOption value="" disabled>選択してください</NativeSelectOption>{["17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00"].map(time=><NativeSelectOption key={time} value={time}>{time}</NativeSelectOption>)}</NativeSelect></label></div><div className={styles.formTwo}><label>人数<NativeSelect name="partySize" defaultValue="2">{Array.from({length:12},(_,i)=><NativeSelectOption key={i+1} value={String(i+1)}>{i+1}名</NativeSelectOption>)}</NativeSelect></label><label>コース<NativeSelect name="course" defaultValue="席のみ"><NativeSelectOption>席のみ</NativeSelectOption><NativeSelectOption>旬菜コース 4,500円</NativeSelectOption><NativeSelectOption>炭火コース 6,000円</NativeSelectOption></NativeSelect></label></div>
      <div className={styles.formLead}><b>02</b><div><small>YOUR DETAILS</small><h2>お客様情報</h2></div></div><div className={styles.formTwo}><label>お名前<Input name="name" autoComplete="name" required placeholder="例：山田 太郎"/></label><label>電話番号<Input name="phone" type="tel" autoComplete="tel" required placeholder="090-0000-0000"/></label></div><label>メールアドレス<Input name="email" type="email" autoComplete="email" required placeholder="example@email.com"/></label><label>ご要望・アレルギー<Textarea name="notes" rows={4} placeholder="任意でご入力ください"/></label>{errors.length>0&&<div className={styles.formErrors} role="alert">{errors.map(error=><p key={error}>{error}</p>)}</div>}<button className={styles.reserveSubmit}>予約データを登録する <ArrowRight/></button><p className={styles.formDisclaimer}>デモ用フォームです。機微な個人情報は入力しないでください。</p>
    </form>}</section>
  </main>;
}

