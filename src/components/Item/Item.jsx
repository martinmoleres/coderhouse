import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
function Item({id,name,img,price,stock}) {
  return (
    <div className="col-md-3">
    <article>
        <header>
            <h2>{name}</h2>
        </header>
        <picture>
            <img src={img} alt={name}/>
        </picture>
        <section>
            <p>
                Precio: ${price}
            </p>
            <p>
                Stock: {stock}
            </p>
        </section>
        <footer>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </footer>
    </article>
    </div>
  )
}

export default Item