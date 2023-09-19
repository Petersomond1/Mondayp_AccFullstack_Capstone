
// import React from 'react'
// import NavUp from './Components/Nav/NavUp'
// import NavDown from './Components/Nav/NavDown'
// import  './Components/Nav/Nav.css'
// import GuestMainpage from './Components/MainPage/GuestMainpage.jsx'
// import MainStore from './Components/MainPage/MainStore'
// import AdvertpageRow1_Carousel from './Components/MainPage/AdvertpageRow1_Carousel'


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
//       <GuestMainpage/> 
//       </div>
//       <div>
//       <MainStore/>
//       </div>
//       {/* <AdvertpageRow1_Carousel/> */}
//       {/* {Footers Components all below} */}
//     </>
//   )
// }

// export default App;


// Path: src/App.jsx
import { Routes, Route } from "react-router-dom";
import NavUp from "./Components/Nav/NavUp";
import NavDown from "./Components/Nav/NavDown";
import GuestMainpage from './Components/MainPage/GuestMainpage';
import MainStore from './Components/MainPage/MainStore'
import SearchResults from './Components/SearchResults';
import ProductPage from './Components/ProductPage';
import Checkout from './Components/Checkout';
import React from "react";
import './App.css'
// import './index.js'

function App () {
  return (
    <>
      <NavUp />
      <NavDown />
      <Routes>
        <Route exact path="/" element={<GuestMainpage />} />
         <Route path="/mainstore" element={<MainStore/>} />
         <Route path="/search" element={<SearchResults />} />
         <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} /> 
      </Routes>
    </>
  );
};

export default App;