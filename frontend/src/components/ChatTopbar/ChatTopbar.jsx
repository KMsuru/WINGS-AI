import "./ChatTopbar.css";
import { Search, Bell, Sun, Menu } from "lucide-react";

function ChatTopbar({ showRightPanel, setShowRightPanel }) {
    return (
        <div className="chat-topbar">
            <div className="chat-topbar-left">
                <h2>Talk to WINGS</h2>
                <p>Ask anything. Learn everything.</p>
            </div>

            <div className="chat-topbar-right">
                <div className="search-box">
                    <Search size={20} strokeWidth={2} className="search-icon"/>
                    <input
                        type="text"
                        placeholder="Search anything..."
                    />
                </div>

                <button className="top-icon notification-btn">
                    <Bell size={20}/>
                    <span className="notification-badge">3</span>
                </button>

                <button
                    className="top-icon menu-btn"
                    onClick={() => setShowRightPanel(!showRightPanel)}
                >
                    <Menu size={20}/>
                </button>

                <button className="top-icon">
                    <Sun size={20}/>
                </button>
            </div>
        </div>
    );
}

export default ChatTopbar;