import "./ChatInput.css";
import { useRef } from "react";
import { Paperclip, Mic, SendHorizontal } from "lucide-react";

function ChatInput() {
    const textareaRef = useRef(null);
    const handleInput = () => {
        const textarea = textareaRef.current;

        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    };
    return (
        <div className="chat-input">
            <div className="input-wrapper">
                <textarea
                    ref={textareaRef}
                    rows="1"
                    placeholder="Ask WINGS AI anything..."
                    onInput={handleInput}
                ></textarea>

                <div className="input-actions">

                    <button className="input-icon">
                        <Paperclip size={20}/>
                    </button>

                    <button className="input-icon">
                        <Mic size={20}/>
                    </button>

                    <button className="send-button">
                        <SendHorizontal size={20}/>
                    </button>

                </div>

            </div>

            <p className="chat-disclaimer">
                WINGS AI can make mistakes. Please verify important information.
            </p>

        </div>
    );
}

export default ChatInput;