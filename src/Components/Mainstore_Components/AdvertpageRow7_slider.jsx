import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};


  
  export default function AdvertpageRow7_Slider() {
    return (
      <div>
        <Slider {...settings}>
        <div>
            <img src="src/assets/images/pants1.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="src/assets/images/pants2.jpg" alt="Image 2" />
          </div>
          <div>
            <img src="src/assets/images/pants3.jpg" alt="Image 3" />
          </div>
          <div>
            <img src="src/assets/images/shirt1.jpg" alt="Image 4" />
          </div>
        </Slider>
      
      </div>
    );
  } AdvertpageRow7_Slider;

  


        // In these settings:
// 
        // dots: true enables navigation dots under the slider.
        // infinite: true makes the slider infinite.
        // speed: 500 sets the speed of the slide transition in milliseconds.
        // slidesToShow: 4 makes the slider show four images at a time.
        // slidesToScroll: 8 makes the slider scroll eight images at a time.
        // Use the Slider component in your render method and pass the settings as a prop:       