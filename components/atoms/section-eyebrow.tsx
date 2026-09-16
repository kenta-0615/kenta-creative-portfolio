import styles from "@/app/info.module.css";

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <span className={styles.sectionEyebrow}>{children}</span>;
}
