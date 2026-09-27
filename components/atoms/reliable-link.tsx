import type { AnchorHTMLAttributes, ReactNode } from "react";

type ReliableLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

/** Native navigation avoids framework-router failures in embedded browsers. */
export function ReliableLink({ children, ...props }: ReliableLinkProps) {
  return <a {...props}>{children}</a>;
}
