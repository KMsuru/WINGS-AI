import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ChatTopbar from "../../components/ChatTopbar/ChatTopbar";
import "./Chat.css";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import ChatMessages from "../../components/ChatMessages/ChatMessages";
import ChatInput from "../../components/ChatInput/ChatInput";
import ChatHistory from "../../components/ChatHistory/ChatHistory";
import QuickActions from "../../components/QuickActions/QuickActions";
import Voice_Assistant from "../../components/Voice_Assistant/Voice_Assistant";

export default function Chat() {
    const [showRightPanel, setShowRightPanel] = useState(true);

    return (
        <div className="chat-page">
            <Sidebar />
            <main className="chat-main">
                <ChatTopbar
                    showRightPanel={showRightPanel}
                    setShowRightPanel={setShowRightPanel}
                />

                <div className="chat-layout">
                    <div className="chat-content">
                        <div className="chat-section">
                            <ChatMessages />
                            <ChatInput />
                        </div>
                    </div>

                    {showRightPanel && (
                        <div className="chat-sidebar">
                            <ChatHistory />
                            <QuickActions />
                            <Voice_Assistant />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}