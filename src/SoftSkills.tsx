import * as React from "react";
import { BulletedList } from "./core/BulletedList";
import { Section } from "./core/Section";

export const SoftSkills: React.FC = () => {
  return (
    <Section header="Soft skills">
      <BulletedList
        bullets={[
          "Critical thinking and problem solving",
          "Teamwork and collaboration",
          "Professionalism and strong work ethic",
          "Oral and written communications skills",
          "Leadership",
        ]}
      />
    </Section>
  );
};
