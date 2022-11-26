import React from "react";
import "./background.css";
import banniere_about from "../../img/aboutImg.png";

export default function banniere() {
  return (
    <div className="banniere">
      <img src={banniere_about} alt="banniere" className="banniere_img" />
    </div>
  );
}