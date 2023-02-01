import * as React from "react";
import { Link, ILink, isLink } from "./Link";

export type IBullet = React.ReactNode | ILink | IBullet[];
export const BulletedList: React.FC<{ bullets: IBullet[]; className?: string }> = ({
  bullets,
  className
}) => {
  return (
    <ul className={className}>
      {bullets.map((x, i) =>
        Array.isArray(x) ? (
          <BulletedList key={i} bullets={x} />
        ) : (
          <li key={i}>{isLink(x) ? <Link {...x} /> : x}</li>
        )
      )}
    </ul>
  );
};
