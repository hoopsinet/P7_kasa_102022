import react, {useState, useEffect} from 'react'
import "./navbar.css"
import Logo from "./logo";

export default function Navbar() {
    return (
        <nav>
            <Logo />
            <ul className="liste">
                <li className="items">
                    <a href="">Accueil</a>
                </li>
                <li className="items">
                    <a href="">A propos</a>
                </li>
            </ul>
        </nav>
    )
}