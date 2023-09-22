import React from "react";
import NavUp from "./Components/Nav/NavUp";
import NavDown from "./Components/Nav/NavDown";
import "./Components/Nav/Nav.css";


function Header() {
  return (
    <div>
      <NavUp />
      <NavDown />
    </div>
  );
}

export default Header;
