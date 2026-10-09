export type TabId='home'|'progress'|'settings';
export type Habit={id:string;title:string;completed:boolean;streak:number};
export type AppState={habits:Habit[];largeText:boolean;reminderEnabled:boolean};
export const initialHabits:Habit[]=[
  {id:'water',title:'水を飲む',completed:true,streak:8},{id:'read',title:'15分読む',completed:true,streak:8},
  {id:'exercise',title:'軽く運動する',completed:false,streak:3},{id:'tomorrow',title:'明日の準備',completed:false,streak:1},
];
export const createInitialState=():AppState=>({habits:initialHabits.map(h=>({...h})),largeText:false,reminderEnabled:true});
export const toggleHabit=(habits:Habit[],id:string)=>habits.map(h=>h.id===id?{...h,completed:!h.completed}:h);
export function addHabit(habits:Habit[],rawTitle:string):Habit[]{const title=rawTitle.trim();if(!title)return habits;return [...habits,{id:'habit-'+Date.now()+'-'+Math.random().toString(16).slice(2),title,completed:false,streak:0}]}
export const removeHabit=(habits:Habit[],id:string)=>habits.filter(h=>h.id!==id);
export const getCompletedCount=(habits:Habit[])=>habits.filter(h=>h.completed).length;
export const getCompletionRate=(habits:Habit[])=>habits.length===0?0:Math.round(getCompletedCount(habits)/habits.length*100);
export function isAppState(value:unknown):value is AppState{if(!value||typeof value!=='object')return false;const v=value as Partial<AppState>;return Array.isArray(v.habits)&&v.habits.every(h=>h&&typeof h.id==='string'&&typeof h.title==='string'&&typeof h.completed==='boolean'&&typeof h.streak==='number')&&typeof v.largeText==='boolean'&&typeof v.reminderEnabled==='boolean'}
