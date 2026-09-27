import { BrandLink } from "@/components/atoms/brand-link";
import { ReliableLink } from "@/components/atoms/reliable-link";
import styles from "@/app/info.module.css";

export function InfoHeader() {
  return <header className={styles.header}>
    <BrandLink />
    <nav aria-label="サービスページナビゲーション">
      <ReliableLink href="/">作品</ReliableLink><ReliableLink href="/booking-demo">予約デモ</ReliableLink><ReliableLink href="/#contact">相談する</ReliableLink>
    </nav>
  </header>;
}
