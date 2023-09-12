import React from 'react';
import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


// petersomond@PetersoMond Mondayp_AccFullstack_Capstone % npm install react-slideshow-image
// get the slideimages from external API

const slideImages = [
   { url:'https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/7149SrIuXaL._SX3000_.jpg?updatedAt=1694184069379', caption: "firstslide"},
   { url:'https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/61Yi3xNLEaL._SX3000_.jpg?updatedAt=1694184069310',caption: "secondslide"},
   { url:'https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/41MTK9SUjkL._SX3000_.jpg?updatedAt=1694184069188',caption: "thirdslide"},
    { url:'https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/61HAf+N3ilL._SX3000_.jpg?updatedAt=1694184068796',caption: "fourthslide"},
    { url:'https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/61wPYUzFKPL._SX3000_.jpg?updatedAt=1694184068409',caption: "fifthslide"},
]


const spanStyle = {
    fontsize: '20px',
    color: "#000000",
    background: "#efefef",
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
    backgroundSize: 'cover',
}



export default function MainPage_1_Carousel () {
    return (
        <div className='slide_container'>
        <Slide>
            {slideImages.map((image, index) => (
                <div key={index}>
                    <div style={{ ...divStyle, backgroundImage:`url(${image.url})`}}>
                        <span style={{spanStyle}}>{image.caption}</span>
                    </div>
                </div>
            ))}
        </Slide>
        <div className="h=[50px], bg-gradient-to-b, color from-stone-to-900" ></div>
        </div>
    )
}


MainPage_1_Carousel;

