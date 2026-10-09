import AsyncStorage from '@react-native-async-storage/async-storage';
import {isAppState,type AppState} from './domain/habits';
const KEY='@rhythm/app-state/v1';
export async function loadAppData():Promise<AppState|null>{try{const value=await AsyncStorage.getItem(KEY);if(!value)return null;const parsed:unknown=JSON.parse(value);return isAppState(parsed)?parsed:null}catch{return null}}
export async function saveAppData(state:AppState):Promise<void>{try{await AsyncStorage.setItem(KEY,JSON.stringify(state))}catch{/* 操作を止めない */}}
export const clearAppData=()=>AsyncStorage.removeItem(KEY);
