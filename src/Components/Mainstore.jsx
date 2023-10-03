import React from "react";
import "./Mainstore.css";
import AdvertpageRow_Up_Carousel from "./Mainstore_Components/AdvertpageRow_Up_Carousel";
import AdvertpageRow1_1 from "./Mainstore_Components/AdvertpageRow1_1";
// import AdvertpageRow1_2 from "./Mainstore_Components/AdvertpageRow1_2";
// import AdvertpageRow1_3 from "./Mainstore_Components/AdvertpageRow1_3";
// import AdvertpageRow2_1 from "./Mainstore_Components/AdvertpageRow2_1";
// import AdvertpageRow2_2 from "./Mainstore_Components/AdvertpageRow2_2";
// import AdvertpageRow2_3 from "./Mainstore_Components/AdvertpageRow2_3";
// import AdvertpageRow3_1 from "./Mainstore_Components/AdvertpageRow3_1";
// import AdvertpageRow3_2 from "./Mainstore_Components/AdvertpageRow3_2";
// import AdvertpageRow3_3 from "./Mainstore_Components/AdvertpageRow3_3";
import AdvertpageRow4_Slider from "./Mainstore_Components/AdvertpageRow4_Slider";
// import AdvertpageRow5_1 from "./Mainstore_Components/AdvertpageRow5_1";
// import AdvertpageRow5_2 from "./Mainstore_Components/AdvertpageRow5_2";
// import AdvertpageRow5_3 from "./Mainstore_Components/AdvertpageRow5_3";
// import AdvertpageRow6_LiveVideo from "./Mainstore_Components/AdvertpageRow6_LiveVideo";
// import AdvertpageRow7_1 from "./Mainstore_Components/AdvertpageRow7_1";
// import AdvertpageRow7_2 from "./Mainstore_Components/AdvertpageRow7_2";
// import AdvertpageRow7_3 from "./Mainstore_Components/AdvertpageRow7_3";
// import Admin_Manager from "../Admin_Manager";
import { useState, useEffect } from 'react';
import AdvertpageRow7_slider from "./Mainstore_Components/AdvertpageRow7_slider";
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

        <tbody>
               <tr>
                 <th>  <AdvertpageRow6_LiveVideo /> </th>
               </tr>
        </tbody>
      



{/* Four port Slider that refuse to slide. */}


                <tbody>
                 <tr>
                 <th>   <AdvertpageRow7_slider /></th>
               </tr>
               </tbody>
      

{/* Single port Carousel. */}
          <table>
               <tr>
                 <th>  <AdvertpageRow4_Slider /></th>
               </tr>
        </table>
 
              
      {/* </main> */}
  {/* Footer */}
    </div>
  );
}
 Mainstore;



