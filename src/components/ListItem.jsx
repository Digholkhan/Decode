import React, { Children } from 'react'

const ListItem = ({className,ItemName,children}) => {
  return (
    <li className={className}>{ItemName}{children}</li>
  )
}

export default ListItem