import { useState, useEffect } from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../mock';
const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const {itemId}= useParams()
    useEffect(() => {
        getProductById(itemId)
        .then(response => {
          console.log("response", response);
          setProduct(response)
        })
        .catch(error => {
          console.error(error)
        })
      }, [itemId]);
  return (
    <ItemDetail {...product} />
  )
}

export default ItemDetailContainer