import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



{/* <AdvertpageRow5_slider is this ImageSlider> */}

function ImageSlider() {
  return (
    <Carousel>
      <div>
        <img src="https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/61Yi3xNLEaL._SX3000_.jpg?updatedAt=1694184069310" alt="Image 1" />
      </div>
      <div>
        <img src="https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/41MTK9SUjkL._SX3000_.jpg?updatedAt=1694184069188" alt="Image 2" />
      </div>
      <div>
        <img src="https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/61HAf+N3ilL._SX3000_.jpg?updatedAt=1694184068796" alt="Image 3" />
      </div>
    </Carousel>
  );
}

export default ImageSlider;
