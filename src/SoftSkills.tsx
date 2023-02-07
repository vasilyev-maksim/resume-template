import * as React from "react";
import { BulletedList } from "./core/BulletedList";
import { Section } from "./core/Section";

export const SoftSkills: React.FC = () => {
  return (
    <Section header="Soft skills">
      <BulletedList
        bullets={[
          "Leadership",
          "Teamwork",
          "Problem solving",
          "Critical thinking",
          "Creativity",
          "Fast learner",
        ]}
      />
    </Section>
  );
};
