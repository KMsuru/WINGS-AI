import "./Sidebar.css";
import {
    House,
    Mic,
    BookOpen,
    NotebookPen,
    CalendarDays,
    ChartColumn,
    Settings,
    Moon,
    ChevronDown,
} from "lucide-react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";


function Sidebar({ userName = "Guest" }) {
  const location = useLocation();
  return (
    <aside className="sidebar">

      {/* Logo */}
        <div className="sidebar-logo">
          <div className="logo-row">
              <img
                  src={logo}
                  alt="WINGS AI Logo"
                  className="logo-image"
              />
              <h2>WINGS AI</h2>
          </div>
          <p>Your AI Study Companion</p>
      </div>

      {/* Menu */}

      <nav className="sidebar-menu">
        <Link to="/dashboard" className={`menu-item ${location.pathname === "/" ? "active" : ""}`}>
            <House size={20} />
            <span>Home</span>
        </Link>

        <Link to="/chat" className={`menu-item ${location.pathname === "/chat" ? "active" : ""}`}>
            <Mic size={20} />
            <span>Talk to WINGS</span>
        </Link>

        <Link to="/learn" className={`menu-item ${location.pathname === "/learn" ? "active" : ""}`}>
            <BookOpen size={20} />
            <span>Learn</span>
        </Link>

        <Link to="/notes" className={`menu-item ${location.pathname === "/notes" ? "active" : ""}`}>
            <NotebookPen size={20} />
            <span>Notes</span>
        </Link>

        <Link to="/planner" className={`menu-item ${location.pathname === "/planner" ? "active" : ""}`}>
            <CalendarDays size={20} />
            <span>Planner</span>
        </Link>

        <Link to="/progress" className={`menu-item ${location.pathname === "/progress" ? "active" : ""}`}>
            <ChartColumn size={20} />
            <span>Progress</span>
        </Link>

        <Link to="/settings" className={`menu-item ${location.pathname === "/settings" ? "active" : ""}`}>
            <Settings size={20} />
            <span>Settings</span>
        </Link>
    </nav>

      {/* Bottom Section */}

      <div className="sidebar-bottom">
        {/* Study Streak */}
        <div className="study-card">
            <div className="study-header">
                <span>🔥 Study Streak</span>
                <span>🎁</span>
            </div>

            <div className="study-count">
                <h2>27</h2>
                <span>Days</span>
            </div>

            <p>Keep going! You're doing great.</p>

            <div className="study-week">
                <div className="study-day">
                    <small>M</small>
                    <div className="study-circle active">✓</div>
                </div>

                <div className="study-day">
                    <small>T</small>
                    <div className="study-circle active">✓</div>
                </div>

                <div className="study-day">
                    <small>W</small>
                    <div className="study-circle active">✓</div>
                </div>

                <div className="study-day">
                    <small>T</small>
                    <div className="study-circle active">✓</div>
                </div>

                <div className="study-day">
                    <small>F</small>
                    <div className="study-circle active">✓</div>
                </div>

                <div className="study-day">
                    <small>S</small>
                    <div className="study-circle active">✓</div>
                </div>

                <div className="study-day">
                    <small>S</small>
                    <div className="study-circle">✓</div>
                </div>
            </div>
        </div>

        <div className="profile-card">
          <div className="profile-left">
            <div className="profile-avatar">
                {userName.charAt(0).toUpperCase()}
            </div>

            <div className="profile-info">
              <h4>{userName}</h4>
              <p>Student</p>
            </div>
          </div>

          <ChevronDown size={18} />
        </div>

        <div className="dark-mode-card">
          <span>
              <Moon size={20} />
              Dark Mode
          </span>
          <div className="toggle"></div>
        </div>
        
      </div>
    </aside>
  );
}

export default Sidebar;