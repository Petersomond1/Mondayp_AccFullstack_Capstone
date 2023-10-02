import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from "react";



function AdvertpageRow6_LiveVideo () {
    const images = [
        '/src/assets/images/pants1.jpg',
        '/src/assets/images/pants2.jpg',
        '/src/assets/images/pants3.jpg',
        '/src/assets/images/shirt1.jpg',
        '/src/assets/images/shirt2.jpg',
        '/src/assets/images/shirt3.jpg',
        '/src/assets/images/pants3.jpg',
        '/src/assets/images/pants2.jpg',
    ];

    return (
      <div className="App">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={images.length}
          visibleSlides={4}
        >
          <Slider>
            {images.map((image, index) => (
              <Slide index={index} key={index}>
                <img src={image} alt={`slide ${index}`} />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </div>
    );
  } export default AdvertpageRow6_LiveVideo;
























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

