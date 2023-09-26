import React from 'react';
import './AdvertpageRow.css';
import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import {Link} from 'react-router-dom'



    const divStyle = {
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        height: '110vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
        width: '100%',
        backgroundBlendMode: 'multiply',
        background: 'linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1))',
        color: '#f2f2f2',
        fontSize: '30px',
        textTransform: 'uppercase',
        letterSpacing: '8px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '28px',
        textAlign: 'center',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        opacity: '0.8',
    }

   

    const spanStyle = {
        padding: '20px',
        background: 'rgba(0,0,0,0.5)',
        borderRadius: '4px',
    }
const slideImages = [
    { url:'https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/7149SrIuXaL._SX3000_.jpg?updatedAt=1694184069379', caption: "1"},
    { url:'https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/61Yi3xNLEaL._SX3000_.jpg?updatedAt=1694184069310',caption: "2"},
    { url:'https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/41MTK9SUjkL._SX3000_.jpg?updatedAt=1694184069188',caption: "3"},
     { url:'https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/61HAf+N3ilL._SX3000_.jpg?updatedAt=1694184068796',caption: "4"},
     { url:'https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/61wPYUzFKPL._SX3000_.jpg?updatedAt=1694184068409',caption: "5"},
 ]
 
 export default function AdvertpageRow1_Carousel () {
   return (
     < >
       <div className="slide_container">
         <Slide>
         
           {slideImages.map((image, index) => (
             <div key={index}>
               <div
                 className="divStyle"
                 style={{ ...divStyle, backgroundImage: `url(${image.url})` }}
               >
                 
                 <span className="spanStyle" style={{ spanStyle }}>
                   {image.caption}
                 </span>
                 
                    
               </div>
             </div>
           ))}
           
         </Slide>
         {/* <div className="slide_container"></div>
      <div  style={"h=[50px], bg-gradient-to-b, color from-stone-to-900"}></div>  */}
       </div>
    
     </>
   );
 }
 AdvertpageRow1_Carousel;