import * as React from "react";

export interface ILink {
  label: React.ReactNode;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
  highlight?: boolean;
}
export function isLink(x: any): x is ILink {
  return x.label !== undefined;
}
export const Link: React.FC<ILink> = ({
  label,
  href,
  className,
  highlight,
  target = "_blank",
}) => {
  const a = (
    <a target={target} href={href} className={className}>
      {label}
    </a>
  );
  return highlight ? <strong>{a}</strong> : a;
};
