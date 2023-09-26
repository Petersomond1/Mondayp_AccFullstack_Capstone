import React from "react";
import AdvertpageRow_Up_Carousel from "./Mainstore_Components/AdvertpageRow_Up_Carousel";
import AdvertpageRow1 from "./Mainstore_Components/AdvertpageRow1";
import AdvertpageRow_2 from "./Mainstore_Components/AdvertpageRow_2";
import AdvertpageMain_Carousel from "./Mainstore_Components/AdvertpageMain_Carousel";
import Product from "./Product";
import AdvertpageRow6_Carousel from "./Mainstore_Components/AdvertpageRow6_Carousel";
import AdvertpageRow5_slider from './Mainstore_Components/AdvertpageRow5_slider';
import AdvertpageRow3 from "./Mainstore_Components/AdvertpageRow3";
import "./Mainstore.css";
import AdvertpageRow_4 from "./Mainstore_Components/AdvertpageRow_4";



export default function Mainstore() {

  
  return (
    <div className="mainpage_container">
           <main>
      <div className="page__row">
        <AdvertpageRow_Up_Carousel />
      </div>
      <div className="page__row">
        <AdvertpageRow1 />
      </div>
      <div className="page__row">
        <AdvertpageRow_2 />
      </div>
      <div className="page__row">
        <AdvertpageRow3 />
        </div>
        <div className="page__row">
        <AdvertpageRow_4 />
      </div>
      <div className="page__row">
        <AdvertpageRow5_slider />
      </div>
      <div className="page__row">
        <AdvertpageRow6_Carousel />
      </div>
      {/* <div>
        <h5>AdvertpageRow7_slider</h5>
        <AdvertpageRow7_slider />
      </div> */}
      <div>
        <Product />
      </div>
      <div>
        <AdvertpageMain_Carousel/>
      </div>
      </main>
      
    </div>
  );
}
Mainstore;
