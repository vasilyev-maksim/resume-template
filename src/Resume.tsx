import * as React from "react";
import { Articles } from "./Articles";
import { Bio } from "./Bio";
import { Contacts } from "./Contacts";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { HardSkills } from "./HardSkills";
import { Languages } from "./Languages";
import { SoftSkills } from "./SoftSkills";

export const Resume: React.FC = () => {
  const name = "John Doe";
  const position = "Frontend Developer";

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{name + " - " + position}</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link rel="stylesheet" href="./style.css" />
      </head>

      <body>
        <div className="desktop layout">
          <div className="left">
            <h1 className="name">{name}</h1>
            <Bio />
            <Articles />
            <Experience />
            <Education />
          </div>
          <div className="right" style={{ minWidth: "18rem" }}>
            <Contacts />
            <HardSkills />
            <SoftSkills />
            <Languages />
          </div>
        </div>

        <div className="mobile layout">
          <h1 className="name">{name}</h1>
          <Contacts />
          <Bio />
          <Articles />
          <div className="two columns">
            <div style={{ marginRight: "5rem" }}>
              <HardSkills />
            </div>
            <SoftSkills />
          </div>
          <Experience />
          <Education />
          <Languages />
        </div>
      </body>
    </html>
  );
};
