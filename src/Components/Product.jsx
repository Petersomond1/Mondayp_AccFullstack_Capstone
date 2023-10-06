// PRODUCTDETAILS

//CARD TO RENDER OR PRINT OUT SINGLE PRODUCT WITH ALL DETAILS AT LEVEL-3.
//AND ALSO HAS A FETCH FXN


import React, { useState } from 'react';
// import { StarIcon } from "@heroicons/react/solid";
import './Product.css'

function Product({ id, title, price, description, category, image }) {
    const MAX_RATING = 5;
    const MIN_RATING = 1;
    const [rating, setRating] = useState(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    const [hasPrime, setHasPrime] = useState(Math.random() < 0.5);
    
    return (
      
      <div className="product" key={id} >
       
      <div className= "container relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
        <img src={image} height={200} width={200} objectFit="contain" alt="" />
        <h4 className="my-3">{title}</h4>
        <div className="flex">

        {Array(rating)
         .fill()
         .map((_, i) => (
        <img className= "staricon" src="https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/staricon2_4-Od2hAd6?updatedAt=1696554871852 "  key={i}  style={{ width: "12px", height: "12px" }} />
           ))}
        </div>
        <p>${price}</p>
        <p className="text-xs my-2 line-clamp-2 ">{description}</p>
        {hasPrime && (
          <div className="flex items-center space-x-2 mt-5 ">
            <img className="w-12" src="https://ik.imagekit.io/amazonmondayp/Amazon%20Hasprime%20logo.PNG?updatedAt=1695912404155" alt="hasprime" style={{ width: "75px", height: "35px" }}/>
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
        <button className=" mt-auto button"> Add to Basket</button>
      </div>
      </div>
     
    );
}

export default Product;

