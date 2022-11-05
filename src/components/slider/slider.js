import React, { useState } from "react";
import './slider.css';
// import btnSlider from './btnslider'
import locations from '../../data.json';

export default function Slider( params ) {
        console.log(params.slides)
    return params.slides.map ((pictures) => {
        // console.log(location.id);
        return(
            <div className="boxStyle">
                <div className="slider" style={{backgroundImage : `url(${pictures})`}}>

                </div>
            </div>
        ) 

    })

}


// Création de bouton slides Gauche / droite 
// windows.SetInterval(() =>
// utiliser un state