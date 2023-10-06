// A RENDER OR PRINT FXN TO RENDER ALL PRODUCTS WITH A SLICE EMBEDDED 



// import React, { useState, useEffect } from 'react';
// import Product from './Product';
// import './Product.css';
// import "./global.css";

// function ProductFeed() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://fakestoreapi.com/products");
//         const data = await res.json();
//         setProducts(data);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }


//   return (

// <>
//     <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
//       {products.slice(0, 3).map(({ id, title, price, description, category, image }) => (
//        <Product
//        key={id}
//        id={id}
//        title={title}
//        price={price}
//        description={description}
//        category={category}
//        image={image}
//      />

//       ))}
//       </div>

//        <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="" /> 

//       <div className='md:col-span-2'>
//         {products.slice(3, 5).map(({ id, title, price, description, category, image }) => (
//            <Product
//            key={id}
//            id={id}
//            title={title}
//            price={price}
//            description={description}
//            category={category}
//            image={image}
//          />
        
//         ))} 
//       </div>
// <div>
//       {products.slice(5, products.length).map(({ id, title, price, description, category, image }) => (
//         <Product
//           key={id}
//           id={id}
//           title={title}
//           price={price}
//           description={description}
//           category={category}
//           image={image}
//         />
//       ))}
//     </div>
//     </> 
//   );
// }

// export default ProductFeed;