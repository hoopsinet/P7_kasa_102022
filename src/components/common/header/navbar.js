import "./Navbar.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Logo />
      <ul className="liste">
        <li className="items">
          <Link to="/">Accueil</Link>
        </li>
        <li className="items">
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}
