import * as React from "react";
import { JobItem } from "../core/JobItem";

export const Meta: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "Meta",
        link: "https://meta.com",
      }}
      location="USA"
      position="Frontend Engineer"
      dates={{
        from: "August 2018",
        to: "May 2019",
      }}
      techStack={[
        "HTML5 & CSS3",
        "SCSS",
        "TypeScript",
        "react",
        "redux",
        "react-router",
        "react-query",
        "webpack",
        "jest",
        "react-testing-library",
        "ESLint",
        "Prettier",
        "Git",
      ]}
      bullets={[
        "Quos inventore deserunt repellendus aliquam expedita quidem odit nobis possimus, assumenda perspiciatis. Beatae nihil dignissimos cum atque ut ratione ad, rerum ipsam quibusdam iusto ea officiis suscipit architecto voluptas corrupti officia.",
        "Libero accusamus quo facere nam iste deserunt quas autem atque dignissimos veniam velit",
        "Esse dolores ut praesentium excepturi",
      ]}
    />
  );
};
