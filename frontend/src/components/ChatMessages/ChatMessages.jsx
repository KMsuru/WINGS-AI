import "./ChatMessages.css";
import { Bot } from "lucide-react";

function ChatMessages() {
    return (
        <div className="chat-messages">

            <div className="ai-message">
                <div className="message-avatar">
                    <Bot size={22} strokeWidth={2}/>
                </div>

                <div className="message-content">
                    <p className="message-text">
                        Hello! I'm WINGS AI. How can I help you today?
                    </p>

                    <span className="message-time">
                        10:30 AM
                    </span>
                </div>
            </div>

            <div className="user-message">
                <div className="message-content">
                    <p className="message-text">
                        Explain SQL JOIN with an example.
                    </p>

                    <span className="message-time">
                        10:31 AM
                    </span>
                </div>
            </div>

            <div className="ai-message">
                <div className="message-avatar">
                    <Bot size={22} strokeWidth={2}/>
                </div>

                <div className="message-content">
                    <p className="message-text">
                        Sure! SQL JOIN combines rows from two or more tables based on a related column.
                    </p>

                    <span className="message-time">
                        10:31 AM
                    </span>
                </div>
            </div>

        </div>
    );
}

export default ChatMessages;