// FETCH FXN  THAT WAS SUPPOSED TO BE USED TO PULL DATA FROM API INTO THE MAINSTORE. 


import {React} from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


function FetchProducts_2 () {
    const [products, setProducts] = useState([]);

    useEffect(() => {(async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    })()}, []);

//   return (
//     <>

//     {/* <h3 className='mainstore__title' >MainStore</h3> */}
//         <div className='container'>
// {products.map((values) => {
//     return (
//       <>
//       <div className="box">
//           <div className="content">
//               <h3>{values.title}</h3>
//               {/* <p>{values.description}</p> */}
//           </div>
//            <img src={values.image} alt={values.title} />
//       </div>
//    </>
//     )
// })}
//  </div>
       
//  </>
    
//   )
}

export default FetchProducts_2;
