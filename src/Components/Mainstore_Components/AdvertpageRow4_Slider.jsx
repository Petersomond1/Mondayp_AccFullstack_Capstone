import React from 'react';
import SwiftSlider from 'react-swift-slider';

const data =  [
    {'id':'1','src':'src/assets/images/pants1.jpg'},
    {'id':'2','src':'src/assets/images/pants2.jpg'},
    {'id':'3','src':'src/assets/images/pants3.jpg'},
    {'id':'4','src':'src/assets/images/shirt1.jpg'},
    {'id':'5','src':'src/assets/images/shirt2.jpg'},
    {'id':'6','src':'src/assets/images/shirt3.jpg'}
];


function AdvertpageRow4_Slider() {

    return (
        <div>
            <SwiftSlider data={data} height={500} />
        </div>
    )
}

export default AdvertpageRow4_Slider;

