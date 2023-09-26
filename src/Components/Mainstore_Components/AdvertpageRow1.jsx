import React from 'react'
import { useState, useEffect } from 'react';
import './AdvertpageRow.css';


function AdvertpageRow1 () {
    // https://fakestoreapi.com/products
    const [products, setProducts] = useState([]);

    useEffect(() => {(async () => {
        const response = await fetch('https://fakestoreapi.com/products/products');
        const json = await response.json();
        setProducts(json);
    })()}, []);
  return (
    <>

        <div className='container'>
{products.map((values) => {
    return (
      <>
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
   </>
    )
})}
 </div>
       
 </>
    
  )
}

export default AdvertpageRow1;

