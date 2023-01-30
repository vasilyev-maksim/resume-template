import * as React from "react";
import { BulletedList } from "./core/BulletedList";
import { Phone } from "./core/Phone";

export const Contacts: React.FC = () => {
  return (
    <BulletedList
      id="contacts"
      bullets={[
        "City, Country",
        <Phone countryCode="+999" number="999999999" />,
        {
          label: "john.doe@gmail.com",
          href: "mailto:john.doe@gmail.com",
        },
        {
          label: "GitHub",
          href: "https://www.github.com/",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com",
        },
      ]}
    />
  );
};
