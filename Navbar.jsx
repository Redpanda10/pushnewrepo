import { Link } from "react-router-dom";
import "./navbar.css";
import Tree from "../assets/tree.png";

export default function navbar() {
  return (
    <div className="navbar-items">
      <div id="just4logo">
        <img src={Tree} id="logo"/>
      </div>
      <ul id="nav-ul">
        <li id="listtonav">
          <Link to="/Home">Home</Link>
          
        </li>
        <li id="listtonav">
          <Link to="/About">About</Link>
        </li>
        <li id="listtonav">
          <Link to="/Service"  >Services</Link>

        </li>
        <li id="listtonav">
          <Link to="/Portfolio"  >Portfolio</Link>

        </li>
        
        <li id="listtonav">
          <Link to="/Testimonials">Testimonials</Link>
        </li>
        <li id="listtonav">
          <Link to="/Blog">Blog</Link>
        </li>
        <li id="listtonav">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
