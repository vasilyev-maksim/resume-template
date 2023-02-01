import * as React from "react";
import { JobItem } from "./core/JobItem";
import { Link } from "./core/Link";
import { Section } from "./core/Section";

export const Experience: React.FC = () => {
  return (
    <Section header="Experience">
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
        bullets={[
          <>
            <Link
              highlight
              label="Lorem ipsum"
              href="https://www.lipsum.com/"
            />{" "}
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
        bullets={[
          "Quos inventore deserunt repellendus aliquam expedita quidem odit nobis possimus, assumenda perspiciatis. Beatae nihil dignissimos cum atque ut ratione ad, rerum ipsam quibusdam iusto ea officiis suscipit architecto voluptas corrupti officia.",
          "Libero accusamus quo facere nam iste deserunt quas autem atque dignissimos veniam velit",
          "Esse dolores ut praesentium excepturi",
        ]}
      />

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
        bullets={[
          "Quos inventore deserunt repellendus aliquam expedita quidem odit nobis possimus, assumenda perspiciatis. Beatae nihil dignissimos cum atque ut ratione ad, rerum ipsam quibusdam iusto ea officiis suscipit architecto voluptas corrupti officia.",
          "Libero accusamus quo facere nam iste deserunt quas autem atque dignissimos veniam velit",
          "Esse dolores ut praesentium excepturi",
        ]}
      />

      <JobItem
        company={{
          name: "Netflix",
          link: "https://netflix.com/",
        }}
        location="USA"
        position="Full-stack Engineer"
        dates={{
          from: "August 2015",
          to: "August 2018",
        }}
      />

      <JobItem
        company={{
          name: "Spotify",
          link: "https://spotify.com/",
        }}
        location="USA"
        position="Intern"
        dates={{
          from: "August 2014",
          to: "August 2015",
        }}
      />
    </Section>
  );
};
