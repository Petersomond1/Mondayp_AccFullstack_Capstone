import React from "react";
import "./Mainstore.css";
import AdvertpageRow_Up_Carousel from "./Mainstore_Components/AdvertpageRow_Up_Carousel";
import AdvertpageRow1_1 from "./Mainstore_Components/AdvertpageRow1_1";
import AdvertpageRow1_2 from "./Mainstore_Components/AdvertpageRow1_2";
import AdvertpageRow1_3 from "./Mainstore_Components/AdvertpageRow1_3";
import AdvertpageRow2_1 from "./Mainstore_Components/AdvertpageRow2_1";
import AdvertpageRow2_2 from "./Mainstore_Components/AdvertpageRow2_2";
import AdvertpageRow2_3 from "./Mainstore_Components/AdvertpageRow2_3";
import AdvertpageRow3_1 from "./Mainstore_Components/AdvertpageRow3_1";
import AdvertpageRow3_2 from "./Mainstore_Components/AdvertpageRow3_2";
import AdvertpageRow3_3 from "./Mainstore_Components/AdvertpageRow3_3";
// import AdvertpageRow4_Slider from "./Mainstore_Components/AdvertpageRow4_Slider";
import AdvertpageRow5_1 from "./Mainstore_Components/AdvertpageRow5_1";
import AdvertpageRow5_2 from "./Mainstore_Components/AdvertpageRow5_2";
import AdvertpageRow5_3 from "./Mainstore_Components/AdvertpageRow5_3";
// import AdvertpageRow6_LiveVideo from "./Mainstore_Components/AdvertpageRow6_LiveVideo";
import AdvertpageRow7_1 from "./Mainstore_Components/AdvertpageRow7_1";
import AdvertpageRow7_2 from "./Mainstore_Components/AdvertpageRow7_2";
import AdvertpageRow7_3 from "./Mainstore_Components/AdvertpageRow7_3";



export default function Mainstore({products}) {
console.log(products);
  
  return (
    <div className="mainpage_container">
    <main>
              <div className="page__row">
                <AdvertpageRow_Up_Carousel />
              </div>
              <div className="page__row">
                <AdvertpageRow1_1 />
              </div> 
              <div className="page__row">
                <AdvertpageRow1_2 />
              </div> 
              <div className="page__row">
                <AdvertpageRow1_3 />
              </div>
              <div className="page__row">
                <AdvertpageRow2_1 />
              </div>
              <div className="page__row">
                <AdvertpageRow2_2 />
              </div>
              <div className="page__row">
                <AdvertpageRow2_3 />
              </div>
              <div className="page__row">
                <AdvertpageRow3_1 />
              </div>
              <div className="page__row">
                <AdvertpageRow3_2 />
              </div>
              <div className="page__row">
                <AdvertpageRow3_3 />
              </div>
              <div className="page__row">
                {/* <AdvertpageRow4_Slider /> */}
              </div>
              <div className="page__row">
                <AdvertpageRow5_1 />
              </div>
              <div className="page__row">
                <AdvertpageRow5_2 />
              </div>
              <div className="page__row">
                <AdvertpageRow5_3 />
              </div>
              <div className="page__row">
                {/* <AdvertpageRow6_LiveVideo /> */}
              </div>
              <div className="page__row">
                <AdvertpageRow7_1 />
              </div>
              <div className="page__row">
                <AdvertpageRow7_2 />
              </div>
              <div className="page__row">
                <AdvertpageRow7_3 />
              </div>  
      </main>
      // Footer
    </div>
  );
}
 Mainstore;


export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  console.log(products);
  return {
    props: {
      products,
    },
  };
}
getServerSideProps();

