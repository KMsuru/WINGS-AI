import "./ChatHeader.css";
import { Bot } from "lucide-react";

function ChatHeader() {
    return (
        <div className="chat-header">
            <div className="chat-title">
                <Bot size={30} />
                <div>
                    <h2>Talk to WINGS</h2>
                    <p>Ask anything. Learn everything.</p>
                </div>
            </div>
        </div>
    );
}

export default ChatHeader;