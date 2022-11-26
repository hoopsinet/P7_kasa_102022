import React from "react";
import "./background.css";
import banniere_background from "../../img/banniere.png";

export default function BanniereAbout() {
  return (
    <div className="banniere">
      <img src={banniere_background} alt="banniere" className="banniere_img" />
      <p className="banniere_text">Chez vous, partout et ailleurs</p>
    </div>
  );
}