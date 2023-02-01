import * as React from "react";
import { EducationItem } from "./core/EducationItem";
import { Section } from "./core/Section";

export const Education: React.FC = () => {
  return (
    <Section header="Education">
      <EducationItem
        institution={{
          name: "MIT",
          href: "https://www.mit.edu/",
        }}
        location="Cambridge, USA"
        degree="Bachelor's degree"
        faculty="Computer Science and Engineering"
        dates={{
          from: "2010",
          to: "2014",
        }}
      />
    </Section>
  );
};
