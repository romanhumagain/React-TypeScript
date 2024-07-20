import React from 'react'
type buttonProps = {
  handleClick : (event : React.MouseEvent<HTMLButtonElement>) => void
}
const Button = ({handleClick}:buttonProps) => {
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Button