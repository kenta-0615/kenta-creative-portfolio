import type { Metadata } from "next";
import { IzakayaReservationTemplate } from "@/components/templates/izakaya-reservation-template";

export const metadata: Metadata = { title:"居酒屋予約フォームデモ", robots:{ index:false, follow:true } };
export default function IzakayaReservePage(){ return <IzakayaReservationTemplate/>; }
