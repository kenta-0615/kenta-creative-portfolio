import Link from "next/link";
import { BrandLink } from "@/components/atoms/brand-link";
import styles from "@/app/info.module.css";

export function InfoHeader() {
  return <header className={styles.header}>
    <BrandLink />
    <nav aria-label="サービスページナビゲーション">
      <Link href="/">作品</Link><Link href="/booking-demo">予約デモ</Link><Link href="/#contact">相談する</Link>
    </nav>
  </header>;
}
