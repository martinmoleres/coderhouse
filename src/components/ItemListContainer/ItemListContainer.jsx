import {useState, useEffect} from 'react';
import { getProducts, getProductByCategory } from '../../mock';
import { ListItem } from '../ItemList/ListItem';
import { useParams } from 'react-router-dom';
export const ItemListContainer = ({message}) => {
  const [products, setProducts] = useState([]);
  const {categoryId}= useParams()
  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts
    console.log('category',categoryId)
    asyncFunc(categoryId)
    .then(response => {

      console.log("response", response);
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })
  }, [categoryId]);
  return (
    <div>
      <ListItem products={products} />
    </div>
  )
}
