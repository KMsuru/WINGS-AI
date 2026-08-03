import "./VoiceAssistant.css";
import { FaMicrophone } from "react-icons/fa";

export default function VoiceAssistant() {
    return (
        <div className="voice-card">

            <div className="voice-title">
                <FaMicrophone />
                <h3>Voice Assistant</h3>
            </div>

            <p className="voice-text">Tap to speak</p>

            <button className="voice-btn">
                Start Voice chat
            </button>

            <div className="voice-wave">
                {[
                    4,6,10,15,22,30,38,30,22,15,10,6,4
                ].map((height,index)=>(
                    <span
                        key={index}
                        style={{height:`${height}px`}}
                    ></span>
                ))}
            </div>

        </div>
    );
}