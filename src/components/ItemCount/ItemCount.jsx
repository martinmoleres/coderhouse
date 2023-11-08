import React, { useState } from 'react'

export const ItemCount = ({stock,init,onAdd}) => {
    const [quantity,setQuantity] = useState(init)
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }
  return (
    <div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary btn-block" onClick={decrement}>-</button>
        </div>
        <div className="col">
          <h4>{quantity}</h4>
        </div>
        <div className="col">
          <button className="btn btn-primary btn-block" onClick={increment}>+</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button  className="btn btn-primary btn-block" onClick={() => onAdd(quantity)} disabled={!stock}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
