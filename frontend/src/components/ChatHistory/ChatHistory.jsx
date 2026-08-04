import "./ChatHistory.css";
import { MessageCircle, Clock } from "lucide-react";

function ChatHistory() {

    const history = [
        {
            title: "Explain SQL JOIN with example",
            time: "10:30 AM",
            active: true
        },
        {
            title: "Difference between AI and ML",
            time: "Yesterday"
        },
        {
            title: "What is HTTP Protocol?",
            time: "Yesterday"
        },
        {
            title: "Python list vs tuple",
            time: "2 days ago"
        },
        {
            title: "How does AI work?",
            time: "2 days ago"
        }
    ];

    return (
        <div className="history-card">

            <div className="history-header">

                <div className="history-title">
                    <Clock size={20}/>
                    <h3>Chat History</h3>
                </div>

                <button>View All</button>

            </div>

            <div className="history-list">

                {history.map((item,index)=>(
                    <div
                        key={index}
                        className={`history-item ${item.active ? "active" : ""}`}
                    >
                        <div className="history-left">

                            <div className="history-icon">
                                <MessageCircle size={16}/>
                            </div>

                            <h4>{item.title}</h4>

                        </div>

                        <span className="history-time">
                            {item.time}
                        </span>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default ChatHistory;