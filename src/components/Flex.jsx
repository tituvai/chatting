import React from 'react'

const Flex = ({className, children}) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>{children}</div>
  )
}

export default Flex