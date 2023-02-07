import * as React from "react";

export const Section: React.FC<{
  header: React.ReactNode;
  children: React.ReactNode;
}> = ({ header, children }) => {
  return (
    <div className="section">
      <header>{header}</header>
      {children}
    </div>
  );
};
