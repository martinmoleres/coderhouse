import React from 'react'
import Item from '../Item/Item'
export const ListItem = ({products}) => {
  return (
    <div className='row justify-content-between'>  {products.map(p => <Item key={p.id} {...p} />)}</div>
  )
}

