import React from "react";
import Mainstore from "./Components/Mainstore";
import "./App.css";
import "./index.jsx";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./Components/SearchResults";
import ProductPage from "./Components/ProductPage";
import Header from "./Header";
import Login from "./screens/Login";
import LoginApp from "./screens/LoginApp";
import "./screens/CSS/Login.css";
import Register from "./screens/Register";
import Cart from "./Components/Nav/Cart";
import AdvertpageRow_4 from "./Components/Mainstore_Components/AdvertpageRow_4";
// import Authenticate from "./screens/Authenticate";

function App() {
  return (
    <>
    
        <div className="app">
          <><Header/></>
          <Routes>
          <Route path="/AdvertpageRow_4" element={<><AdvertpageRow_4/></>}/>
          <Route path="/Register" element={<><Register/></>}/>
          <Route path="/LoginApp" element={<><LoginApp/></>}/>
            <Route path="/login" element={<><Login/></>}/>
            <Route exact path="/" element={<Mainstore />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
    </>
  );
}

export default App;
