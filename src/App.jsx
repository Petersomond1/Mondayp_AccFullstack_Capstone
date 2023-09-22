import React from "react";
import Mainstore from "./Components/Mainstore";
import "./App.css";
import "./index.jsx";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./Components/SearchResults";
import ProductPage from "./Components/ProductPage";
import Checkout from "./Components/Checkout";
import Header from "./Header";
import Login from "./screens/Login";

function App() {
  return (
    <>
        <div className="app">
          <Routes>
            <Route path="/login" element={<><Login/></>}/>
            <Route path="/"      element={<><Header/></>}/>
            <Route exact path="/" element={<Mainstore />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
    </>
  );
}

export default App;
