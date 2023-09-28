import React, { useState, useEffect } from 'react';
// import Link from 'react-router-dom';



export default function AdvertpageRow3 () {
    const [products, setProducts] = useState([]);


    useEffect(() => {(async () => {
      const response = await fetch('https://fakestoreapi.com/products/products/1');
      const json = await response.json();
      setProducts(json);
  })()}, []);
  return (
    <div title={products.name}>
      <div className="py-2">
        {/* <Link path="/">back to products</Link> */}
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <img
            src={products.image}
            alt={products.name}
            width={640}
            height={640}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{products.name}</h1>
            </li>
            <li>Category: {products.category}</li>
            <li>Brand: {products.brand}</li>
            <li>
              {products.rating} of {products.numReviews} reviews
            </li>
            <li>Description: {products.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${products.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              {/* <div>{products.countInStock > 0 ? ' In stock ' :' Unavailable ' }</div> */}
            </div>
            <button className="primary-button w-full">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
AdvertpageRow3;