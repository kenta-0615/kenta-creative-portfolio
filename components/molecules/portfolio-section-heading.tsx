import type { ReactNode } from "react";

type PortfolioSectionHeadingProps = {
  number: string;
  label: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
};

export function PortfolioSectionHeading({
  number,
  label,
  children,
  light = false,
  className = "",
}: PortfolioSectionHeadingProps) {
  const classes = ["section-title", light ? "light" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <span>{number} / {label}</span>
      <h2>{children}</h2>
    </div>
  );
}
