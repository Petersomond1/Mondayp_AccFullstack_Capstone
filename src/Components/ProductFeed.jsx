// import { useState, useEffect } from 'react';
import Product from './Product'
import './Product.css'
// import '.src/styles/global.css'
import React from 'react'

function ProductFeed(products) {

    //reminder: here down to the second return can go into a separate file
    // this is simply a second source of feed to replace the serverside feed

//    const [products, setProducts] = useState([]);
//    const [isLoading, setIsLoading] = useState(true);

//      useEffect(() => {
//         fetch("https://fakestoreapi.com/products")
//           .then((res) => res.json())
//          .then((data) => {
//             setProducts(data);
//             setIsLoading(false);
//           });
//        }, []);

//        if (isLoading) {
//         return <div>Loading...</div>;
//        }


  // here up to the variable setting can go into a separate file
  return (
    <div className=' grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl: grid-cols-4 md: -mt-52 mx-auto '>
      
      {/* {products.slice(0, 3).map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))} */}

      <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="" />

      <div className='md: col-span-2'>
        {/* {products.slice(3, 5).map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}  */}
      </div>
      {/* {products.slice(5, products.length).map(({ id, title, price, description, category, image }) => ( */}
        {/* <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        /> */}
      {/* ))} */}
    </div>
  );
}

export default ProductFeed;
