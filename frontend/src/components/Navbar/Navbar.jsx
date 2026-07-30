import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="WINGS AI Logo" />
        <h2>WINGS AI</h2>
      </div>

      <ul className="nav-links">
          <li className="active">Home</li>
          <li>Features</li>
          <li>How It Works</li>
          <li>About</li>
          <li>Contact</li>
      </ul>

      <div className="nav-buttons">
          <Link to="/register">
            <button className="get-started-btn">
              Get Started
            </button>
          </Link>

          <Link to="/login">
            <button className="login-btn">
              Login
            </button>
          </Link>
      </div>

      <button className="menu-btn">
          <FaBars />
      </button>

    </nav>
  );
}

export default Navbar;