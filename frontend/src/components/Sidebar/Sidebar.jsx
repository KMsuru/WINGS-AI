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

function Sidebar() {
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
        <button className="menu-item active">
          <House size={20} />
          <span>Home</span>
        </button>

        <button className="menu-item">
          <Mic size={20} />
          <span>Talk to WINGS</span>
        </button>

        <button className="menu-item">
          <BookOpen size={20} />
          <span>Learn</span>
        </button>

        <button className="menu-item">
          <NotebookPen size={20} />
          <span>Notes</span>
        </button>

        <button className="menu-item">
          <CalendarDays size={20} />
          <span>Planner</span>
        </button>

        <button className="menu-item">
          <ChartColumn size={20} />
          <span>Progress</span>
        </button>

        <button className="menu-item">
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </nav>

      {/* Bottom Section */}

      <div className="sidebar-bottom">
        <div className="profile-card">
          <div className="profile-left">
            <div className="profile-avatar">
              G
            </div>

            <div className="profile-info">
              <h4>Guest</h4>
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