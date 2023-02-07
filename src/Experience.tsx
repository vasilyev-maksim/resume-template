import * as React from "react";
import { Section } from "./core/Section";
import { Amazon } from "./experience/Amazon";
import { Google } from "./experience/google";
import { Meta } from "./experience/Meta";
import { Netflix } from "./experience/Netflix";
import { Spotify } from "./experience/Spotify";

export const Experience: React.FC = () => {
  return (
    <Section header="Experience">
      <Google />
      <Amazon />
      <Meta />
      <Netflix />
      <Spotify />
    </Section>
  );
};
