import * as React from "react";

export const Subsection: React.FC<{
  header: React.ReactNode;
  children: React.ReactNode;
}> = ({ header, children }) => {
  return (
    <div className="subsection">
      <header>{header}</header>
      {children}
    </div>
  );
};
