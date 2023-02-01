import * as React from "react";

export const Section: React.FC<{
  header: React.ReactNode;
  children: React.ReactNode;
  id?: string;
}> = ({ header, children, id }) => {
  return (
    <div id={id} className="section">
      <header>{header}</header>
      {children}
    </div>
  );
};
