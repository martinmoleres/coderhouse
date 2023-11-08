import React, { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CartContext } from '../../context/CartProvider'
 export const ItemDetail = ({id,name,img,price,stock, category,description}) => {
    console.log('name', name)
    const [quantityAdded, setQuantityAdded] = useState(0)
    const {addItem} = useContext(CartContext)
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,name,price
        }
        addItem(item,quantity)
    }
  return (
    <article>
    <header>
        <h2>{name}</h2>
    </header>
    <picture>
        <img src={img} alt={name}/>
    </picture>
    <section>
    <p>
            Category: {category}
        </p>
        <p>
            Description: {description}
        </p>
        <p>
            Stock: {stock}
        </p>
        <p>
            Precio: ${price}
        </p>
    </section>
    <footer>
       <ItemCount init={1} stock={stock} onAdd={handleOnAdd}/>
    </footer>
</article>
  )
}