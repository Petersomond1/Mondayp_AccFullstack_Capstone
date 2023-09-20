
// import React from 'react'
// import NavUp from './Components/Nav/NavUp'
// import NavDown from './Components/Nav/NavDown'
// import  './Components/Nav/Nav.css'
// import Mainstore from './Components/Mainstore'
// // import SearchResults from './Components/SearchResults'
// // import  ProductPage from './Components/ProductPage'
// // import Checkout from './Components/Checkout'
// import './App.css'
// import './index.jsx'



// function App() {
  

//   return (
//     <>
//       {/* Header part made of NavUp and NavDown components*/}
//       <div className="navup_container">
//       <NavUp/>
//       </div>
//       <div className="navdown_container">
//       <NavDown/>
//       </div>
//       {/* Home made of Advert & Selling Product components below here */}
//       <div>
//       <Mainstore/>
//       </div>
     
//       {/* {Footers Components all below} */}
//     </>
//   )
// }

// export default App;


// Path: src/App.jsx

import React from 'react'
import NavUp from './Components/Nav/NavUp'
import NavDown from './Components/Nav/NavDown'
import  './Components/Nav/Nav.css'
import Mainstore from './Components/Mainstore'
import './App.css'
import './index.jsx'
import { Routes, Route } from "react-router-dom";
import SearchResults from './Components/SearchResults';
import ProductPage from './Components/ProductPage';
import Checkout from './Components/Checkout';


function App () {
  return (
    <>
      <NavUp />
      <NavDown />
       <Routes>
        <Route exact path="/" element={<Mainstore/>} />
         <Route path="/search" element={<SearchResults />} />
         <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} /> 
      </Routes>
    </>
  );
};

export default App;