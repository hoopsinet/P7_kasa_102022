import react, {useState, useEffect} from 'react'
import "./header.css"

export default function header() {
    const image = require("../img/logo_kasa.png")
      return (
        <header>
            <img src={image} />
            <nav>
            <ul className="liste">
                <li className="items">Accueil</li>
                <li className="items">A propos</li>
            </ul>
        </nav>
        </header>
    );
  }
