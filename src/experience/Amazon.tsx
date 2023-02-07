import * as React from "react";
import { JobItem } from "../core/JobItem";

export const Amazon: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "Amazon",
        link: "https://amazon.com",
      }}
      location="USA"
      position="Senior Frontend Engineer"
      dates={{
        from: "December 2019",
        to: "December 2020",
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
