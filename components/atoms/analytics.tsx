"use client";
import { useEffect } from "react";

const send=(event:string)=>navigator.sendBeacon?.("/api/events",new Blob([JSON.stringify({event,path:location.pathname})],{type:"application/json"}));
export function Analytics(){useEffect(()=>{const onClick=(e:MouseEvent)=>{const link=(e.target as Element).closest("a");if(!link)return;const href=link.getAttribute("href")||"";if(href.includes("#contact"))send("cta_click");else if(href.startsWith("/works/"))send("view_work");else if(href.startsWith("/services/"))send("view_service");else if(["/booking-demo","/vtuber-shop","/izakaya"].some(x=>href.startsWith(x)))send("demo_open");};document.addEventListener("click",onClick);return()=>document.removeEventListener("click",onClick);},[]);return null;}
