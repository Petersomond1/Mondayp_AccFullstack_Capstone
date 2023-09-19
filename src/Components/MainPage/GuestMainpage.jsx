import React from 'react';
import './GuestHomepage.css';
import Advertpage from './Advertpage';
import AdvertpageRow1_Carousel from './AdvertpageRow1_Carousel';
import Product from '../Product';
import AdvertpageRow4_Carousel from './AdvertpageRow4_Carousel';
// import AdvertpageRow6_slider from './AdvertpageRow6_slider';
import ImageSlider from './AdvertpageRow5_slider';
// import Carousel from './Carousel';


 
 export default function GuestMainpage() {
   return (
     <div className="mainpage_container">
      <div className='page__row'>
       <AdvertpageRow1_Carousel/>
      </div>
      <div className='page__row'>
      <Advertpage />
      </div>
      <div className='page__row'>
      <Product/>
      </div>
      <div className="page__row">
        <AdvertpageRow4_Carousel/>
      </div>
      <div className="page__row">
        {/* <AdvertpageRow6_slider/> */}
      </div>
      <div>
      <h5>Simple Image Slider</h5>
      <ImageSlider />
    </div>
    <div>
    {/* <Carousel/> */}
    </div>
    
    </div>
   );
 }
   GuestMainpage;