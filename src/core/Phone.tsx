import * as React from "react";
import { Link } from "./Link";

export const Phone: React.FC<{ number: string; countryCode: string }> = ({
  number,
  countryCode,
}) => {
  return (
    <Link
      label={countryCode + " " + number}
      target="_self"
      href={"tel:" + countryCode + number}
    />
  );
};
