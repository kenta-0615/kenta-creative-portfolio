import type { Metadata } from "next";
import { IzakayaAdminTemplate } from "@/components/templates/izakaya-admin-template";

export const metadata: Metadata = { title:"居酒屋予約管理デモ｜KENTY CREATIVE", robots:{ index:false, follow:false } };
export default function IzakayaAdminPage(){ return <IzakayaAdminTemplate/>; }

