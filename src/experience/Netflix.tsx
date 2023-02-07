import * as React from "react";
import { JobItem } from "../core/JobItem";

export const Netflix: React.FC = () => {
  return (
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
  );
};
