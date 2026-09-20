import "./QuickStudy.css";
import { Bot, FileText, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function QuickStudy() {
    return (
        <section className="quick-study">
            <div className="quick-study-header">
                <div>
                    <h2>Quick Study</h2>
                    <p>Choose how you want to study today.</p>
                </div>
                <button>View All</button>
            </div>

            <div className="quick-study-actions">
                <Link to="/chat" className="quick-study-card">
                    <div className="quick-study-icon">
                        <Bot size={22} />
                    </div>
                    <div className="quick-study-info">
                        <h3>Ask AI Tutor</h3>
                        <p>Get instant explanations and clear your doubts.</p>
                        <span>
                            Start <ArrowRight size={16} />
                        </span>
                    </div>
                </Link>
               
                
                <Link to="/pdfs" className="quick-study-card">
                    <div className="quick-study-icon">
                        <FileText size={22} />
                    </div>
                    <div className="quick-study-info">
                        <h3>Study a PDF</h3>
                        <p>Learn from PDFs with AI summaries and insights.</p>
                        <span>
                            Start <ArrowRight size={16} />
                        </span>
                    </div>
                </Link>

                <Link to="/quiz" className="quick-study-card">
                    <div className="quick-study-icon">
                        <Trophy size={22} />
                    </div>
                    <div className="quick-study-info">
                        <h3>Take a Quiz</h3>
                        <p>Test yourself with practice quizzes and improve.</p>
                        <span>
                            Start <ArrowRight size={16} />
                        </span>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default QuickStudy;