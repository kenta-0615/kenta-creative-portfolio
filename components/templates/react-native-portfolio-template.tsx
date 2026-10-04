"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Bell, Check, ChevronRight, CircleUserRound, Home, Plus, Settings, Sparkles, Target, TrendingUp } from "lucide-react";
import { ReliableLink } from "@/components/atoms/reliable-link";
import styles from "@/app/react-native-app/react-native.module.css";

const screens = [
  { id:"home", label:"ホーム", icon:Home },
  { id:"progress", label:"進捗", icon:TrendingUp },
  { id:"settings", label:"設定", icon:Settings },
] as const;

type ScreenId = typeof screens[number]["id"];

function Phone({screen,onChange}:{screen:ScreenId;onChange:(id:ScreenId)=>void}){
  const [completed,setCompleted]=useState([true,true,false,false]);
  const done=completed.filter(Boolean).length;
  const content=useMemo(()=>{
    if(screen==="progress") return <div className={styles.phoneContent}><div className={styles.mobileHead}><div><small>THIS WEEK</small><h3>進捗レポート</h3></div><TrendingUp/></div><div className={styles.score}><span>{Math.round(done/4*100)}%</span><p>週間達成率</p></div><div className={styles.bars}>{[55,80,40,100,75,30,65].map((n,i)=><i key={i} style={{height:`${n}%`}}/>)}</div><div className={styles.insight}><Sparkles/><p><b>続いています</b><br/>朝の習慣は先週より2回増えました。</p></div></div>;
    if(screen==="settings") return <div className={styles.phoneContent}><div className={styles.mobileHead}><div><small>ACCOUNT</small><h3>設定</h3></div><CircleUserRound/></div><div className={styles.settingList}>{["プロフィール","通知の時間","テーマと文字サイズ","データの書き出し"].map(x=><button key={x}>{x}<ChevronRight/></button>)}</div><div className={styles.accessibility}><b>ACCESSIBILITY</b><p>文字拡大、画面読み上げ、動きを減らす設定を想定。</p></div></div>;
    return <div className={styles.phoneContent}><div className={styles.mobileHead}><div><small>GOOD EVENING</small><h3>今日の習慣</h3></div><Bell/></div><div className={styles.progress}><span style={{width:`${done/4*100}%`}}/></div><p className={styles.progressText}>{done} / 4 完了</p><div className={styles.habits}>{["水を飲む","15分読む","軽く運動する","明日の準備"].map((x,i)=><button key={x} onClick={()=>setCompleted(old=>old.map((v,j)=>j===i?!v:v))} className={completed[i]?styles.done:""}><i>{completed[i]?<Check/>:<Target/>}</i><span><b>{x}</b><small>{i<2?"連続 8日":"今日から"}</small></span></button>)}</div><button className={styles.add}><Plus/> 習慣を追加</button></div>;
  },[screen,completed,done]);
  return <div className={styles.phone}><div className={styles.status}><span>9:41</span><i/></div>{content}<nav>{screens.map(item=>{const Icon=item.icon;return <button key={item.id} className={screen===item.id?styles.active:""} onClick={()=>onChange(item.id)}><Icon/><span>{item.label}</span></button>})}</nav></div>;
}

export function ReactNativePortfolioTemplate(){
  const [screen,setScreen]=useState<ScreenId>("home");
  return <main className={styles.page}>
    <header className={styles.header}><ReliableLink href="/"><ArrowLeft/> KENTY CREATIVE</ReliableLink><nav><ReliableLink href="/works">制作事例</ReliableLink><ReliableLink href="/#contact">無料で案件相談する</ReliableLink></nav></header>
    <section className={styles.hero}><div className={styles.heroCopy}><small>SELF-INITIATED CASE / MOBILE APP</small><h1>習慣が、<br/><em>続く体験。</em></h1><p>React Native・Expo・TypeScriptでの実装を想定した習慣管理アプリ「RHYTHM」。毎日の記録、進捗の可視化、設定までを一つの体験として設計しました。</p><div><button onClick={()=>setScreen("home")}>操作デモを試す <ArrowRight/></button><ReliableLink href="#case">設計内容を見る</ReliableLink></div></div><div className={styles.demo}><div className={styles.orbit}/><Phone screen={screen} onChange={setScreen}/><p>画面下のタブや習慣項目を操作できます</p></div></section>
    <section className={styles.summary} id="case"><article><small>01 / PROBLEM</small><h2>記録が面倒で、<br/>三日坊主になる。</h2><p>入力回数を減らし、達成感をすぐ返すことで「記録すること」自体が負担にならない設計にしました。</p></article><article><small>02 / TARGET</small><h2>小さな習慣を<br/>定着させたい人。</h2><p>忙しい社会人を想定。片手操作、短い文章、大きなタップ領域を優先しています。</p></article><article><small>03 / GOAL</small><h2>1日1回の<br/>記録を継続。</h2><p>主要指標は習慣の完了率、翌週継続率、通知から記録までの完了率を想定しています。</p></article></section>
    <section className={styles.architecture}><div><small>IMPLEMENTATION PLAN</small><h2>画面だけでなく、<br/>運用できる構成へ。</h2></div><div className={styles.stack}>{[["APP","React Native / Expo / TypeScript"],["NAVIGATION","Expo Router"],["STATE","React Context + Reducer"],["STORAGE","SecureStore / SQLiteを用途別に選択"],["QUALITY","Jest / React Native Testing Library"],["DELIVERY","EAS Build / Store審査を想定"]].map(([k,v])=><p key={k}><b>{k}</b><span>{v}</span></p>)}</div></section>
    <section className={styles.decisions}><header><small>DESIGN DECISIONS</small><h2>採用した判断と、<br/>採用しなかった案。</h2></header><div><article><b>採用</b><h3>1タップで完了</h3><p>入力フォームを毎回開かず、一覧から直接完了できます。</p></article><article><b>採用</b><h3>色＋アイコン＋文字</h3><p>状態を色だけで表さず、チェックと完了数を併記します。</p></article><article className={styles.rejected}><b>不採用</b><h3>連続日数だけを強調</h3><p>記録が途切れた際に再開しにくくなるため、週間達成率も併用します。</p></article></div></section>
    <section className={styles.code}><div><small>TYPE-SAFE UI</small><h2>状態を型で守る。</h2><p>画面名と習慣データをTypeScriptで定義し、存在しない状態や誤った更新を減らします。</p></div><pre><code>{`type Habit = {\n  id: string;\n  title: string;\n  completed: boolean;\n};\n\ntype AppRoute =\n  | "home"\n  | "progress"\n  | "settings";\n\nconst toggleHabit = (id: string) =>\n  dispatch({ type: "habit/toggle", id });`}</code></pre></section>
    <section className={styles.cta}><small>START A PROJECT</small><h2>モバイルアプリのUI設計・<br/>React Native実装も相談できます。</h2><p>この事例は自主制作です。実在サービスの利用実績や成果としては掲載していません。</p><ReliableLink href="/#contact">無料で案件相談する <ArrowRight/></ReliableLink></section>
  </main>;
}
