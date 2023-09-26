import React from "react";
import "./Product.css";
import { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState([]);


  useEffect(() => {(async () => {
    const response = await fetch('https://fakestoreapi.com/products/products/1');
    const json = await response.json();
    setProducts(json);
})()}, []);
return (
<>


    <div className='container'>
{products.map((values) => {

  return (
    <div className="product">
      <div className="product__info">
        <p>{values.id}</p>
        <p>{values.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{values.price}</strong>
        </p>
        <div className="product__rating">
          {Array(values.rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={values.image} alt="" />

      <button>Add to Basket</button>
    </div>
  );
}
)}
</div>
</>
);
}
export default Product;

