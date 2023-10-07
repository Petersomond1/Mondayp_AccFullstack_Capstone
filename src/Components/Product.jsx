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
      <div className='productLevel2CardContainer' key={id} >
      <div>
        <img src={image} height={200} width={200} objectFit="contain" alt="" />
        </div>
        <div className='content'>
        <p className="category_text">{category}</p> 
        <h4 className="title_text">{title}</h4>
        <div className="flex">

        {Array(rating)
         .fill()
         .map((_, i) => (
        <img className= "staricon" src="https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/staricon2_4-Od2hAd6?updatedAt=1696554871852 "  key={i}  style={{ width: "12px", height: "12px" }} />
           ))}
        </div>
        <p>${price}</p>
        <p className="description_text">{description}</p>
        {hasPrime && (
          <div className="hasprime_text ">
            <img className="w-12" src="https://ik.imagekit.io/amazonmondayp/Amazon%20Hasprime%20logo.PNG?updatedAt=1695912404155" alt="hasprime" style={{ width: "75px", height: "35px" }}/>
            <p className="freeDelivery_text">FREE Next-day Delivery</p>
          </div>
        )}
        <div className="add2basket&BuyNow wrap">
        <button  onClick={A} className="add2Basket_text_button"> Add to Basket</button>
        <button  className="add2Basket_text_button"> Buy now</button>
        </div>
        </div>
      </div>
      // </div>
    );
}

export default Product;

