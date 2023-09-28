// // import image from asserts/images/...";
// import React from "react";
// import "./Product.css";
// import { useState, useEffect } from "react";

// function Product() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const json = await response.json();
//         setProducts(json);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     })()
//   }, []);

//   return (
//     <>
//       <div className='container'>
//         {products.map((values) => {
//           return (
//             <div className="product" key={values.id}>
//               <div className="product__info">
//                 <p>{values.id}</p>
//                 <p>{values.title}</p>
//                 <p className="product__price">
//                   <small>$</small>
//                   <strong>{values.price}</strong>
//                 </p>
//                 <div className="product__rating">
//                   {Array(values.rating)
//                     .fill()
//                     .map((_, i) => (
//                       <p key={i}>🌟</p>
//                     ))}
//                 </div>
//               </div>

//               <img src={values.image} alt="" />

//               <button>Add to Basket</button>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default Product;


// // Path: src/Components/Product.jsx
// import image from "../asserts/images/...";
import React, { useState } from "react";
import "./Product.css";
import Image from "next/image";
// import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";
// import { useStateValue } from "../StateProvider";

const MAX_RATING = 5;
const MIN_RATING = 1;


function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime, setHasPrime] = useState(Math.random() < 0.5);
  
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" alt="" />
    <h4 className="my-3">{title}</h4>
   <div className="flex">
    {Array(rating)
    .fill()
    .map((_, i) => (
      <>
      <StarIcon className="h-5 text-yellow-500" />

      <p>🌟</p>
      </>
    ))}
   </div>

    <p className="text-xs my-2 line-clamp-2 ">{description}</p>

    <div className="mb-5">
<Currency quantity={price} currency="USD" />
    </div>

    {hasPrime && (
      <div className="flex items-center space-x-2 mt-5 ">
        <img className="w-12" src="https://ik.imagekit.io/amazonmondayp/Amazon%20Hasprime%20logo.PNG?updatedAt=1695912404155" alt="hasprime" />
        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
      </div>
    )}

    <button className=" mt-auto button"> Add to Basket</button>
    </div>
  );
}
export default Product;