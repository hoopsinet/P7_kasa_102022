import react, {useState, useEffect} from 'react'


export default function logo_kasa() {
    const image = require("../../public/img/logo_kasa.png").default;
      return (
      <div>  
        <img src={image} />
      </div>
    );
  }
