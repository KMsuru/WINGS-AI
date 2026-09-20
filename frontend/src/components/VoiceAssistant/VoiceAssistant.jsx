import "./VoiceAssistant.css";
import { FaMicrophone } from "react-icons/fa";

export default function VoiceAssistant() {
    return (
        <div className="voice-card">

            <div className="voice-title">
                <FaMicrophone />
                <h3>Voice Assistant</h3>
            </div>

            <p className="voice-text">
                Tap to speak
            </p>

            <button className="voice-action-button">
                Start Voice chat →
            </button>

            <div className="voice-wave">
                {[
                    4, 7, 10, 15, 22, 29, 36,
                    31, 25, 19, 14, 9, 5
                ].map((height, index) => (
                    <span
                        key={index}
                        style={{ height: `${height}px` }}
                    ></span>
                ))}
            </div>

        </div>
    );
}