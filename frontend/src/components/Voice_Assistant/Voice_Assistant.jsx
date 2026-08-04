import "./Voice_Assistant.css";
import { Mic } from "lucide-react";
import robot from "../../assets/illustrations/robot.png";

function Voice_Assistant() {

    return (

        <div className="voice-card">

            <div className="voice-header">

                <Mic size={18}/>

                <h3>Voice Assistant</h3>

            </div>

            <p className="voice-subtitle">
                Tap to speak with WINGS
            </p>

            <div className="voice-illustration">
                <div className="voice-wave">
                    {[6,12,20,30,42,56,42,30,20,12,6].map((height,index)=>(
                        <span
                            key={index}
                            style={{height:`${height}px`}}
                        />
                    ))}
                </div>
                <img
                    src={robot}
                    alt="Robot"
                    className="voice-robot"
                />
            </div>

            <button className="voice-btn">

                Start Voice Chat

            </button>

        </div>

    );

}

export default Voice_Assistant;