import React from "react"
type headingProps = {
  children : React.ReactNode
}

const Heading = ({children}:headingProps) => {
  return (
    <div>{children}</div>
  )
}

export default Heading