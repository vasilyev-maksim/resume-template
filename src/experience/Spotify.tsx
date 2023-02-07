import * as React from "react";
import { JobItem } from "../core/JobItem";

export const Spotify: React.FC = () => {
  return (
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
  );
};
