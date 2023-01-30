import * as React from "react";
import { Articles } from "./Articles";
import { Contacts } from "./Contacts";
import { BulletedList } from "./core/BulletedList";
import { Section } from "./core/Section";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

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
        <link rel="stylesheet" href="./src/style.css" />
      </head>

      <body>
        <div id="layout">
          <h1 id="name">{name}</h1>
          <p id="bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <Contacts />
          <Experience />
          <Education />
          <Skills />
          <Section id="langs" header="Languages">
            <BulletedList bullets={["English", "Spanish", "French"]} />
          </Section>
          <Articles />
        </div>
      </body>
    </html>
  );
};
