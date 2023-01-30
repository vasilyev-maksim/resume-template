import * as React from "react";
import { BulletedList } from "./core/BulletedList";
import { Section } from "./core/Section";

export const Articles: React.FC = () => {
  return (
    <Section id="articles" header="Articles">
      <BulletedList
        bullets={[
          {
            label: "Build your resume in React + SSG!",
            href: "https://dev.to/jeckhummer/build-your-resume-in-react-ssg-10i4",
          },
        ]}
      />
    </Section>
  );
};
