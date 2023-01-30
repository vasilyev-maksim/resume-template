import * as React from "react";
import { Subsection } from "./Subsection";
import { Link } from "./Link";

export const EducationItem: React.FC<{
  institution: { name: string; href: string };
  location: string;
  degree: string;
  faculty: string;
  dates: { from: string; to: string };
}> = ({ institution, location, faculty, dates, degree }) => {
  return (
    <Subsection
      header={
        <>
          {faculty}, <Link label={institution.name} href={institution.href} />
        </>
      }
    >
      <div style={{ marginTop: "0.3rem" }}>
        {location} — {degree}
      </div>
      <div className="dates">
        {dates.from} - {dates.to}
      </div>
    </Subsection>
  );
};
