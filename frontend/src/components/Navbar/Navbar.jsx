import "./Navbar.css";
import logo from "../../assets/logo.png";

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
        <button className="get-started-btn">
          Get Started
        </button>

        <button className="login-btn">
          Login
        </button>
      </div>

    </nav>
  );
}

export default Navbar;