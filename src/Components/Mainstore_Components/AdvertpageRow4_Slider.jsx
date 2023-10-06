
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


  
  export default function AdvertpageRow4_Slider() {
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
  } AdvertpageRow4_Slider;

  


        // In these settings:
// 
        // dots: true enables navigation dots under the slider.
        // infinite: true makes the slider infinite.
        // speed: 500 sets the speed of the slide transition in milliseconds.
        // slidesToShow: 4 makes the slider show four images at a time.
        // slidesToScroll: 8 makes the slider scroll eight images at a time.
        // Use the Slider component in your render method and pass the settings as a prop:       






// import React from 'react';
// import SwiftSlider from 'react-swift-slider';

// const data =  [
//     {'id':'1','src':'src/assets/images/pants1.jpg'},
//     {'id':'2','src':'src/assets/images/pants2.jpg'},
//     {'id':'3','src':'src/assets/images/pants3.jpg'},
//     {'id':'4','src':'src/assets/images/shirt1.jpg'},
//     {'id':'5','src':'src/assets/images/shirt2.jpg'},
//     {'id':'6','src':'src/assets/images/shirt3.jpg'}
// ];


// function AdvertpageRow4_Slider() {

//     return (
//         <div>
//             <SwiftSlider data={data} height={500} />
//         </div>
//     )
// }

// export default AdvertpageRow4_Slider;






// import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import React from "react";



// function AdvertpageRow6_LiveVideo () {
//     const images = [
//         '/src/assets/images/pants1.jpg',
//         '/src/assets/images/pants2.jpg',
//         '/src/assets/images/pants3.jpg',
//         '/src/assets/images/shirt1.jpg',
//         '/src/assets/images/shirt2.jpg',
//         '/src/assets/images/shirt3.jpg',
//         '/src/assets/images/pants3.jpg',
//         '/src/assets/images/pants2.jpg',
//     ];

//     return (
//       <div className="App">
//         <CarouselProvider
//           naturalSlideWidth={100}
//           naturalSlideHeight={125}
//           totalSlides={images.length}
//           visibleSlides={4}
//         >
//           <Slider>
//             {images.map((image, index) => (
//               <Slide index={index} key={index}>
//                 <img src={image} alt={`slide ${index}`} />
//               </Slide>
//             ))}
//           </Slider>
//         </CarouselProvider>
//       </div>
//     );
//   } export default AdvertpageRow6_LiveVideo;







// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// import Image1 from '/src/assets/images/pants1.jpg';
// import Image2 from '/src/assets/images/pants2.jpg';
// import Image3 from '/src/assets/images/pants3.jpg';
// import Image4 from '/src/assets/images/shirt1.jpg';
// import Image5 from '/src/assets/images/shirt2.jpg';
// import Image6 from '/src/assets/images/shirt3.jpg';
// import Image7 from '/src/assets/images/pants3.jpg';
// import Image8 from '/src/assets/images/pants2.jpg';

// export default function AdvertpageRow6_LiveVideo () {
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1
//   };
  
//   return (
//     <Slider {...settings}>
//       <div>
//         <img src={Image1} alt="Image 1" />
//       </div>
//       <div>
//         <img src={Image2} alt="Image 2" />
//       </div>
//       <div>
//         <img src={Image3} alt="Image 3" />
//       </div>
//       <div>
//         <img src={Image4} alt="Image 4" />
//       </div>
//       <div>
//         <img src={Image5} alt="Image 5" />
//       </div>
//       <div>
//         <img src={Image6} alt="Image 6" />
//       </div>
//       <div>
//         <img src={Image7} alt="Image 7" />
//       </div>
//       <div>
//         <img src={Image8} alt="Image 8" />
//       </div>
//     </Slider>
//   );
// } AdvertpageRow6_LiveVideo;

