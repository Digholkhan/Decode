import React, { Children } from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`max-w-container mx-auto py-8 px-2.5 ${className}`}>{children}</div>
  )
}

export default Container