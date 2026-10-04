import { getDb } from "@/db";
import { analyticsEvents } from "@/db/schema";

const allowed = new Set(["view_work","view_service","cta_click","contact_start","contact_error","contact_submit","demo_open","booking_complete","add_to_cart"]);
export async function POST(request:Request){
  try {
    const origin=request.headers.get("origin");
    if(origin && new URL(origin).host!==new URL(request.url).host) return Response.json({error:"invalid origin"},{status:403});
    const body=await request.json() as {event?:unknown;path?:unknown};
    if(typeof body.event!=="string"||!allowed.has(body.event)||typeof body.path!=="string") return Response.json({error:"invalid event"},{status:400});
    await getDb().insert(analyticsEvents).values({event:body.event,path:body.path.slice(0,300)});
    return Response.json({ok:true},{status:201});
  } catch { return Response.json({error:"unavailable"},{status:500}); }
}
