import "./Topbar.css";
import { Search, Bell, Sun } from "lucide-react";

function Topbar({
    showGreeting = true,
    title,
    subtitle
}) {
    const currentHour = new Date().getHours();

        let greeting = "";

        if (currentHour >= 5 && currentHour < 12) {
            greeting = "Good Morning";
        }
        else if (currentHour >= 12 && currentHour < 17) {
            greeting = "Good Afternoon";
        }
        else if (currentHour >= 17 && currentHour < 21) {
            greeting = "Good Evening";
        }
        else {
            greeting = "Good Night";
        }
    return (
        <header className={`topbar ${!showGreeting ? "chat-topbar" : ""}`}>

            {showGreeting || title ? (
                <div className="topbar-left">

                    {showGreeting ? (
                        <>
                            <h2>{`${greeting}, Guest`}</h2>
                            <p>Let's make today productive.</p>
                        </>
                    ) : (
                        <>
                            <h2>{title}</h2>
                            <p>{subtitle}</p>
                        </>
                    )}

                </div>
            ) : null}

            <div className="topbar-right">
                <div className="search-box">
                    <Search size={20} strokeWidth={2} className="search-icon"/>
                    <input
                        type="text"
                        placeholder="Search anything..."
                    />
                </div>

                <button className="top-icon notification-btn">
                    <Bell size={20} strokeWidth={2}/>
                    <span className="notification-badge">3</span>
                </button>

                <button className="top-icon">
                    <Sun size={20} strokeWidth={2}/>
                </button>

            </div>
        </header>
    );
}

export default Topbar;