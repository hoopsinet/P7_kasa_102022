import React, { useState } from "react";
import './slider.css';
// import btnSlider from './btnslider'
import locations from '../../data.json';

export default function Slider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return locations.map ((location) => {
        console.log(location.id);


        return(
            <div className="boxStyle">
                <div className="slider" style={{backgroundImage : `url(${location.pictures[currentIndex]})`}}>

                </div>
            </div>
        ) 

    })

}