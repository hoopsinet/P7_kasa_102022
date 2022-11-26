import React from "react";
import "./background.css";
import banniere_background from "../../img/banniere.png";

export default function banniere() {
  return (
    <div className="banniere">
      <img src={banniere_background} alt="banniere" className="banniere_img" />
      <div className="banniere_text">
        <p>Chez vous,</p> 
        <p>partout et ailleurs</p>
        </div>
    </div>
  );
}