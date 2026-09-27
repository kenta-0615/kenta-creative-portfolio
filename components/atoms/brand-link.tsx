import { ReliableLink } from "@/components/atoms/reliable-link";
import styles from "@/app/info.module.css";

export function BrandLink() {
  return <ReliableLink className={styles.brand} href="/"><span>K</span>KENTY CREATIVE</ReliableLink>;
}
