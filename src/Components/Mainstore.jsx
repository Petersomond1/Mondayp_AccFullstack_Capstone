import React from "react";
import "./Mainstore.css";
import AdvertpageRow_Up_Carousel from "./Mainstore_Components/AdvertpageRow_Up_Carousel";
import AdvertpageRow1_1 from "./Mainstore_Components/AdvertpageRow1_1";
import { useState, useEffect } from 'react';
import AdvertpageRow4_Slider from "./Mainstore_Components/AdvertpageRow4_Slider";
import AdvertpageRow6_LiveVideo from "./Mainstore_Components/AdvertpageRow6_LiveVideo";



export default function Mainstore() {
  const [products, setProducts] = useState([]);
  


  useEffect(() => {
    (async () => {
        try {

            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'

                }
            })
            const result = await response.json();

            console.log(result);

            setProducts(result);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    })()
}, []);

  const ids = [3, 20, 13, 14, 15, 16, 7, 8, 9];


  return (
    <div className="mainpage_container">
    {/* <main> */}
              <div className="page__row">
                <AdvertpageRow_Up_Carousel />
              </div>


{ids.map(id => <div>
  <div className="page__row">
              <AdvertpageRow1_1 id={id}/>
              </div> 
</div>
)}

{/* Live video port */}

       <div> 
        <AdvertpageRow6_LiveVideo />
        </div>  

{/* Single port Carousel. */}
          <div> 
            <AdvertpageRow4_Slider />
          </div>

      {/* </main> */}
  {/* Footer */}
    </div>
  );
}
 Mainstore;



