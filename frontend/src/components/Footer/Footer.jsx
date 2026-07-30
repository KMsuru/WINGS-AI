import "./Footer.css";
import logo from "../../assets/logo.png";

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-top">

          {/* Brand */}

          <div className="footer-brand">

            <div className="footer-logo">
              <img src={logo} alt="WINGS AI Logo" />
              <h2>WINGS AI</h2>
            </div>

            <p className="footer-description">
              Learn smarter, prepare confidently,
              and achieve your career goals with one
              AI assistant.
            </p>

          </div>

          {/* Quick Links */}

          <div className="footer-links">

            <h3>Quick Links</h3>

            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Testimonials</li>
              <li>About</li>
            </ul>

          </div>

          {/* Resources */}

          <div className="footer-resources">

            <h3>Resources</h3>

            <ul>
              <li>Documentation</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>

          </div>

          {/* Connect */}

          <div className="footer-connect">

            <h3>Connect</h3>

              <div className="social-icons">
                <FaInstagram />
                <FaGithub />
                <FaLinkedin />
                <Mail size={20} />
              </div>                      
          </div>

          {/* Newsletter */}

          <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p>
              Subscribe to receive AI study tips,
              career guidance, and product updates.
            </p>
            <div className="newsletter-box">
              <input
                type="email"
                placeholder="Enter your email"
              />
              <button>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 WINGS AI. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;