import React from 'react'

const Input = ({className, type, placeholder, value, onChange}) => {
  return (
    <input className={`text-base text-black focus:outline-0 placeholder:text-sm placeholder:text-secndory border-2 border-primary py-2 px-4 w-full rounded shadow ${className}`} type={type} placeholder={placeholder} value={value}  onChange={onChange} />
  )
}

export default Input