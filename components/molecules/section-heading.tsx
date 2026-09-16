import { SectionEyebrow } from "@/components/atoms/section-eyebrow";
import styles from "@/app/info.module.css";

type Props = { eyebrow: string; title: string; description: string };

export function SectionHeading({ eyebrow, title, description }: Props) {
  return <div className={styles.titleGrid}>
    <SectionEyebrow>{eyebrow}</SectionEyebrow>
    <div><h2>{title}</h2><p>{description}</p></div>
  </div>;
}
