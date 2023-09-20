import React from "react";
import AdvertpageRow_Up_Carousel from "./Mainstore_Components/AdvertpageRow_Up_Carousel";
import AdvertpageRow1 from "./Mainstore_Components/AdvertpageRow1";
import AdvertpageRow_2_3_4 from "./Mainstore_Components/AdvertpageRow_2_3_4";
import AdvertpageMain_Carousel from "./Mainstore_Components/AdvertpageMain_Carousel";
import Product from "./Product";
import AdvertpageRow6_Carousel from "./Mainstore_Components/AdvertpageRow6_Carousel";
import AdvertpageRow5_slider from './Mainstore_Components/AdvertpageRow5_slider';
// import ImageSlider from "./AdvertpageRow5_slider";
// import Carousel from './Carousel';
// import "./GuestHomepage.css";
// import Advertpage from "./Advertpage";
// import AdvertpageRow1_Carousel from "./AdvertpageRow1_Carousel";

export default function Mainstore() {
  return (
    <div className="mainpage_container">
      <div className="page__row">
        <AdvertpageRow_Up_Carousel />
      </div>
      <div className="page__row">
        <AdvertpageRow1 />
      </div>
      <div className="page__row">
        <AdvertpageRow_2_3_4 />
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
    </div>
  );
}
Mainstore;
