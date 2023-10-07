import React from "react";
import Header from "./Header";
import "./App.css";
import "./index.jsx";
import { Routes, Route } from "react-router-dom";
import Mainstore from "./Components/Mainstore";
// import ProductFeed from "./Components/ProductFeed";
import CategoryStore from "./Components/CategoryStore";
import Cart from "./Components/Nav/Cart";

// // import SearchResults from "./Components/SearchResults";
// // import ProductPage from "./Components/ProductPage";

// // import Login from "./screens/Login";
// // import LoginApp from "./screens/LoginApp";
// // import "./screens/CSS/Login.css";
// // import Register from "./screens/Register";

// import AdvertpageRow6_LiveVideo from "./Components/Mainstore_Components/AdvertpageRow6_LiveVideo";
// // import Authenticate from "./screens/Authenticate";
// // import Advertpage_Carousel_Listings from "./Components/Mainstore_Components/Advertpage_Carousel_Listings";
// // import Advertpage_Carousel_ProductDetails from "./Components/Mainstore_Components/Advertpage_Carousel_ProductDetails";
// // import AdvertpageRow1 from "./Components/Mainstore_Components/AdvertpageRow1_1";


function App() {
  return (
    <>
    
         <div className="app">
          <><Header/></>
           <Routes> 
            <Route path="/" element={<><Mainstore/></>}/>
            
            <Route path="/CategoryStore/:Category" element={<><CategoryStore/></>}/>
          
            <Route path="/cart" element={<Cart/>} />

            {/* <Route path=":userId" element={<ProfilePage />} /> */}
            {/* <Route path="/ProductFeed" element={<><ProductFeed /></>}/> */}

            {/* <Route path="/AdvertpageRow6_liveVideo" element={<AdvertpageRow6_LiveVideo  embedId ="HE92WBA7R14" />} /> */}

           {/* <Route path="/products/:slug" element={<><Advertpage_Carousel_ProductDetails/></>}/> */}
           {/* <Route path="/Advertpage_Carousel_ProductDetails" element={<><Advertpage_Carousel_ProductDetails/></>}/> */}
          {/* <Route path="/Advertpage_Carousel_Listings" element={<><Advertpage_Carousel_Listings/></>}/>  */}
         {/* <Route path="/AdvertpageRow_4" element={<><AdvertpageRow_4/></>}/>         */}
          {/* <Route path="/Register" element={<><Register/></>}/> */}
           {/* <Route path="/LoginApp" element={<><LoginApp/></>}/> */}
             {/* <Route path="/login" element={<><Login/></>}/> */}        
            {/* <Route path="/search" element={<SearchResults />} /> */}
            {/* <Route path="/product/:id" element={<ProductPage />} /> */}
           
             {/* <Route path="/product/:id" element={<AdvertpageRow1 />} />  */}

           </Routes>
         </div>
     </>
   );
 }

 export default App;
