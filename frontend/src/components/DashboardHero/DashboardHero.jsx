import "./DashboardHero.css";
import { Mic, Sparkles, Search, Bell, Sun } from "lucide-react";

function DashboardHero() {
    return (
    <>
        <section className="dashboard-hero">

            <div className="hero-left">

                <h2>How can I help you today?</h2>

                <p>Tap the microphone and ask anything.</p>

            </div>

            <div className="hero-center">

                <div className="wave left-wave"></div>

                <div className="mic-outer">
                    <div className="mic-middle">
                        <div className="mic-circle">
                            <Mic size={56}/>
                        </div>
                    </div>
                </div>

                <div className="wave right-wave"></div>

            </div>
            <div className="hero-right">

                <p className="suggest-title">
                    Try saying...
                </p>

                <button className="suggestion">
                    <Sparkles size={16}/>
                    Explain SQL JOIN with example
                </button>

                <button className="suggestion">
                    <Sparkles size={16}/>
                    Make a study plan for this week
                </button>

                <button className="suggestion">
                    <Sparkles size={16}/>
                    Create a quiz on Python basics
                </button>

            </div>

        </section>
   
    </>
);
}

export default DashboardHero;