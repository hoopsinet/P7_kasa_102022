import react, {useState, useEffect} from 'react'
import "./navbar.css"

export default function Navbar() {
    return (
        <nav>
            <ul className="liste">
                <li className="items">Accueil</li>
                <li className="items">A propos</li>
            </ul>
        </nav>
    )
}