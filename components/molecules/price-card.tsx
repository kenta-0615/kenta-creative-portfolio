import { PriceDisplay } from "@/components/atoms/price-display";
import type { PricePlan } from "@/types/service";
import styles from "@/app/info.module.css";

export function PriceCard({ plan }: { plan: PricePlan }) {
  return <article className={styles.priceCard}>
    <small>{plan.leadTime}</small>
    <h3>{plan.title}</h3>
    <PriceDisplay price={plan.price} />
    <span className={styles.priceNote}>参考価格・外部費用別／正式見積もりで確定</span>
  </article>;
}
