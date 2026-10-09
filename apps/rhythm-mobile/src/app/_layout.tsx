import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { HabitsProvider } from '../context/habits-context';
import { tabColors } from '../components/rhythm-ui';

const icons: Record<string,string>={index:'⌂',progress:'↗',settings:'⚙'};
export default function RootLayout(){
  return <HabitsProvider><StatusBar style="dark"/><Tabs screenOptions={({route})=>({
    headerShown:false,tabBarActiveTintColor:tabColors.active,tabBarInactiveTintColor:tabColors.inactive,
    tabBarStyle:{height:76,paddingTop:8,paddingBottom:12,backgroundColor:tabColors.background,borderTopColor:tabColors.border},
    tabBarLabelStyle:{fontSize:11,fontWeight:'800'},
    tabBarIcon:({color})=><Text style={{fontSize:20,fontWeight:'800',color}}>{icons[route.name]??'•'}</Text>,
  })}><Tabs.Screen name="index" options={{title:'ホーム'}}/><Tabs.Screen name="progress" options={{title:'進捗'}}/><Tabs.Screen name="settings" options={{title:'設定'}}/></Tabs></HabitsProvider>;
}
