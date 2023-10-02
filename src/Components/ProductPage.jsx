// FXN TO FETCH SINGLE PRODUCT INCONJUCTION WITH THE CALL-API FXN.


import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react';
import {CallApi} from '../Utils/CallApi';


function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const response = await CallApi.get(`/products/${id}`);
    setProduct(response.data);
  }
 
  useEffect(() => {
    getProduct();
  }, []);
 
  if (!product) {
    return <h4>Loading Product!</h4>;
  }
  
  return (product && 
    <div>ProductPage {product.title} </div>
  )
}

export default ProductPage

// there is return for a single product Box specification here