import React from "react";
import "./Mainstore.css";
import AdvertpageRow_Up_Carousel from "./Mainstore_Components/AdvertpageRow_Up_Carousel";
import AdvertpageRow1_1 from "./Mainstore_Components/AdvertpageRow1_1";
import Advertpage_Carousel_Listings from "./Mainstore_Components/Advertpage_Carousel_Listings";
import AdvertpageRow1_2 from "./Mainstore_Components/AdvertpageRow1_2";
import ProductFeed from "./ProductFeed";

export default function Mainstore({products}) {

  
  return (
    <div className="mainpage_container">
           <main>
      <div className="page__row">
        <AdvertpageRow_Up_Carousel />
      </div>
      {/* REMEMBER TO DELETE BELOW */}
<div>
  <ProductFeed products={products} />
</div>
      {/* <div className="page__row">
        <Advertpage_Carousel_Listings />
      </div> 
      <div className="page__row">
        <AdvertpageRow1_1 />
      </div> */}
      <div className="page__row">
        <AdvertpageRow1_2 />
        </div>


        {/* <div className="page__row">
        <AdvertpageRow_4 />
      </div> */}
      {/* <div className="page__row">
        <AdvertpageRow5_slider />
      </div> */}
      {/* <div className="page__row">
        <AdvertpageRow6_Carousel />
      </div> */}
      {/* <div>
        <h5>AdvertpageRow7_slider</h5>
        <AdvertpageRow7_slider />
      </div> */}
      {/* <div>
        <Product />
      </div> */}
     
      </main>
      
    </div>
  );
}
// Mainstore;




module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}


export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
getServerSideProps();

