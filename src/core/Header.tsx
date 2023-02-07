import * as React from "react"

export const Header: React.FC<{ name: string; jobTitle: string }> = ({
  name,
  jobTitle,
}) => {
  return (
    <>
      <h1 className="name">{name}</h1>
      <h2 className="job-title">{jobTitle}</h2>
    </>
  )
}
