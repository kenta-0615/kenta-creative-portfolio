import assert from 'node:assert/strict';import test from 'node:test';
import {addHabit,createInitialState,getCompletedCount,getCompletionRate,isAppState,removeHabit,toggleHabit} from '../src/domain/habits.ts';
test('初期状態は4件中2件完了',()=>{const s=createInitialState();assert.equal(getCompletedCount(s.habits),2);assert.equal(getCompletionRate(s.habits),50)});
test('完了を切替',()=>{const next=toggleHabit(createInitialState().habits,'exercise');assert.equal(next.find(h=>h.id==='exercise')?.completed,true);assert.equal(getCompletionRate(next),75)});
test('空白は追加しない',()=>{const h=createInitialState().habits;assert.equal(addHabit(h,'   '),h)});
test('追加時に空白を除去',()=>assert.equal(addHabit([],'  朝の散歩  ')[0].title,'朝の散歩'));
test('指定した習慣を削除',()=>assert.equal(removeHabit(createInitialState().habits,'water').some(h=>h.id==='water'),false));
test('保存データを検証',()=>{assert.equal(isAppState(createInitialState()),true);assert.equal(isAppState({habits:[],largeText:'yes',reminderEnabled:true}),false)});
