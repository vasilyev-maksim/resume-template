import * as React from "react";
import { JobItem } from "../core/JobItem";
import { Link } from "../core/Link";

export const Google: React.FC = () => {
  return (
    <JobItem
      company={{
        name: "Google",
        link: "https://google.com",
      }}
      location="USA"
      position="Senior Frontend Engineer"
      dates={{
        from: "December 2021",
        to: "December 2022",
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
        <>
          <Link highlight label="Lorem ipsum" href="https://www.lipsum.com/" />{" "}
          dolor sit amet consectetur adipisicing elit. Libero accusamus quo
          facere nam iste deserunt quas autem atque dignissimos veniam velit,
          esse dolores ut praesentium excepturi, magnam eos maxime totam.
        </>,
        [
          "Libero accusamus quo facere nam iste deserunt quas autem atque dignissimos veniam velit",
          "Esse dolores ut praesentium excepturi",
          [
            "Libero accusamus quo facere nam iste deserunt quas autem atque dignissimos veniam velit",
            "Esse dolores ut praesentium excepturi",
          ],
        ],
        "Quos inventore deserunt repellendus aliquam expedita quidem odit nobis possimus, assumenda perspiciatis. Beatae nihil dignissimos cum atque ut ratione ad, rerum ipsam quibusdam iusto ea officiis suscipit architecto voluptas corrupti officia.",
      ]}
    />
  );
};
