import * as React from "react";
import { BulletedList } from "./core/BulletedList";
import { Section } from "./core/Section";

export const Skills: React.FC = () => {
  return (
    <Section id="skills" header="Skills">
      <BulletedList
        bullets={[
          "HTML, CSS",
          "React.js",
          "JavaScript, Typescript",
          "Bundlers (Webpack, Parcel, Vite)",
          "Express.js, Node.js (CLI apps)",
          "OOP, SOLID, Patterns",
          "Testing",
          "CI/CD",
          "Agile, Scrum",
          "UX, Animations",
        ]}
      />
    </Section>
  );
};
