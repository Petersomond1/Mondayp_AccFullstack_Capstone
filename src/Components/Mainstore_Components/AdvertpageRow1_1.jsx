import React from 'react'
import { useState, useEffect } from 'react';
import './AdvertpageRow.css';


function AdvertpageRow1_1 () {
    const [products, setProducts] = useState([]);

    useEffect(() => {(async () => {
        const response = await fetch('https://fakestoreapi.com/products');

if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
} else {
    const JSON = await response.json();
    setProducts(JSON);
}

    })()}, []);
  return (
    <>

        <div className='container'>
{products.map((values) => {
    return (
      <div key={values.id}>

      <div className="box_single">
          <div className="content">
              <h3 >{values.category}</h3>
              {/* <p>{values.description}</p>
              <p>${values.price}</p> */}
          </div>
           <img src={values.image} alt={values.title} />
      </div>
      <div><p>Advert theme</p></div>
   </div>
    )
})}
 </div>
       
 </>
    
  )
}

export default AdvertpageRow1_1;

