import React from 'react'

const Label = ({className, labelText}) => {
  return (
    <>
    <label className={`text-base text-black font-semibold block ${className}`} htmlFor="#">{labelText}</label>
    </>
  )
}

export default Label