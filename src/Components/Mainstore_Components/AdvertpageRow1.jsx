// import React from 'react'

// function ProductPage() {
//   return (
//     <div>ProductPage</div>
//   )
// }

// export default ProductPage





import React from 'react'
import { useState, useEffect } from 'react';
import AdvertpageRow from './AdvertpageRow.css';
// import Mainstore from './Mainstore.css'


function AdvertpageRow1 () {
    // https://fakestoreapi.com/products
    const [products, setProducts] = useState([]);

    useEffect(() => {(async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        setProducts(json);
    })()}, []);
  return (
    <>

    {/* <h3 className='mainstore__title' >MainStore</h3> */}
        <div className='container'>
{products.map((values) => {
    return (
      <>
      <div className="box">
          <div className="content">
              <h3>{values.title}</h3>
              {/* <p>{values.description}</p> */}
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

