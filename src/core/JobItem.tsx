import * as React from "react";
import { Subsection } from "./Subsection";
import { IBullet, BulletedList } from "./BulletedList";
import { Link } from "./Link";

export const JobItem: React.FC<{
  company: { name: React.ReactNode; link: string };
  location: string;
  position: string;
  dates: { from: string; to: string };
  description?: React.ReactNode;
  bullets?: IBullet[];
  techStack?: string[];
}> = ({
  company,
  location,
  position,
  dates,
  description,
  bullets,
  techStack,
}) => {
  return (
    <Subsection
      header={
        <>
          <Link
            href={company.link}
            label={company.name}
            className="company-name"
          />
          , {location} — {position}
        </>
      }
    >
      <div className="dates">
        {dates.from} - {dates.to}
      </div>

      {techStack ? (
        <div className="tech-stack">Stack: {techStack.join(", ")}</div>
      ) : null}
      {description ? <div className="description">{description}</div> : null}
      {bullets ? <BulletedList bullets={bullets} /> : null}
    </Subsection>
  );
};
