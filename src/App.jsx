import './App.css'
import React from 'react'
import NavUp from './Components/Nav/NavUp'
import NavDown from './Components/Nav/NavDown'
import MainPage_1_Carousel from './Components/MainPage/MainPage_1_Carousel'
import  './Components/Nav/Nav.css'



function App() {
  

  return (
    <>
    {/* <header> */}
      <div className="navup_container">
      <NavUp/>
      </div>
      <div className="navdown_container">
      <NavDown/>
      </div>
      {/* </header> */}
      {/* <div> */}
      <div className="slider_container">
      <MainPage_1_Carousel/>
      </div>
      {/* </div> */}
    </>
  )
}

export default App;
