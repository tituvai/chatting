import React from 'react'

const Button = ({btnText, className}) => {
  return (
    <>
    <button className={`text-xl text-white bg-primary font-semibold rounded-md cursor-pointer ${className}`}>{btnText}</button>
    </>
  )
}

export default Button