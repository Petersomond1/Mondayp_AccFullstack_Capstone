import React from 'react'
import { useState, useEffect } from 'react';
import './AdvertpageRow.css';


function AdvertpageRow2_3 () {
        const [products, setProducts] = useState([]);

        useEffect(() => {(async () => {
            const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        const JSON = await response.json();
        setProducts(JSON);
    }
    console.log(products);
        })()}, []);
      return (
    <>

        <div className='container'>
{products.map((values) => {
    return (
      <div key={values.id}>
      <div className="box_1">
          <div className="content">
              <h3>{values.title}</h3>
              {/* <p>{values.description}</p> */}
              <p>${values.price}</p>
          </div>
           <img src={values.image} alt={values.title} />
      </div>


      <div className="box_2">
          <div className="content">
              <h3>{values.title}</h3>
              {/* <p>{values.description}</p> */}
              <p>${values.price}</p>
          </div>
           <img src={values.image} alt={values.title} />
      </div>


      <div className="box_3">
          <div className="content">
              <h3>{values.title}</h3>
              {/* <p>{values.description}</p> */}
              <p>${values.price}</p>
          </div>
           <img src={values.image} alt={values.title} />
      </div>
      
   </div>
    )
})}
 </div>
       
 </>
    
  )
}

export default AdvertpageRow2_3;

