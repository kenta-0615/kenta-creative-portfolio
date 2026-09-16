import { formatPriceLabel } from "@/lib/pricing";
import type { Price } from "@/types/service";
import styles from "@/app/info.module.css";

export function PriceDisplay({ price }: { price: Price }) {
  return <div className={styles.price} aria-label={formatPriceLabel(price)}>
    {price.qualifier && <span className={styles.priceQualifier}>{price.qualifier}</span>}
    <span className={styles.priceMain} aria-hidden="true">
      <span className={styles.priceCurrency}>{price.currency}</span>
      <span className={styles.priceAmount}>{price.amount}</span>
      <span className={styles.priceSuffix}>{price.suffix}</span>
    </span>
  </div>;
}
