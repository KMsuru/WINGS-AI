import "./ContinueChat.css";
import { BsChatDotsFill } from "react-icons/bs";
import robot from "../../assets/illustrations/robot.png";

export default function ContinueChat() {
    return (
        <div className="chat-card">

            <div className="chat-header">
                <div className="chat-title">
                    <BsChatDotsFill />
                    <h3>Continue Chat</h3>
                </div>
            </div>

            <p className="chat-text">
                Last chat: SQL Relationships
            </p>

            <button className="chat-btn">
                Open Chat →
            </button>

            <div className="chat-robot">
                <img src={robot} alt="Robot" />
            </div>

        </div>
    );
}