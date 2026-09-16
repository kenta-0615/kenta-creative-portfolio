export type Industry = {
  id: 'beauty' | 'food' | 'fashion' | 'energy' | 'campaign';
  name: string;
  conversionGoal: string;
  palette: readonly [string, string, string];
};

export const industries: readonly Industry[] = [
  { id:'beauty', name:'美容', conversionGoal:'カウンセリング予約', palette:['#171713','#D8C29D','#F8F4EC'] },
  { id:'food', name:'飲食', conversionGoal:'コース予約', palette:['#25130F','#B6403A','#FFF8E8'] },
  { id:'fashion', name:'アパレル', conversionGoal:'商品購入', palette:['#0B0B0B','#D9FF43','#214BFF'] },
  { id:'energy', name:'電気会社', conversionGoal:'料金診断', palette:['#071B35','#62E6C7','#3D6CFF'] },
  { id:'campaign', name:'キャンペーン', conversionGoal:'参加登録', palette:['#FFF200','#FF4D00','#6C37FF'] },
] as const;
