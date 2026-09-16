import Link from "next/link";
import styles from "@/app/info.module.css";

export function BrandLink() {
  return <Link className={styles.brand} href="/"><span>K</span>KENTA CREATIVE</Link>;
}
