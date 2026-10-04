import type { Metadata } from "next";
import { ReactNativePortfolioTemplate } from "@/components/templates/react-native-portfolio-template";

export const metadata: Metadata = {
  title: "React Nativeアプリ制作事例",
  description: "React Native・Expo・TypeScriptを想定し、習慣記録、進捗可視化、通知、アクセシビリティまで設計したモバイルアプリの自主制作事例です。",
  alternates: { canonical: "/react-native-app" },
};

export default function ReactNativeAppPage(){ return <ReactNativePortfolioTemplate/>; }
