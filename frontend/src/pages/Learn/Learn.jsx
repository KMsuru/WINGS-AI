import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import QuickStudy from "../../components/QuickStudy/QuickStudy";
import "./Learn.css";
import {
    Brain,
    BookOpen,
    FileText,
    NotebookPen,
    BrainCircuit,
    Bookmark,
} from "lucide-react";
import LearningCard from "../../components/LearnCards/LearnCards";
import { Link } from "react-router-dom";


function Learn() {
    return (
        <div className="learn">
            <Sidebar />

            <main className="learn-main">
                <Topbar
                    showGreeting={false}
                    title="Learn"
                    subtitle="Turn your study goals into progress."
                />

                <div className="learn-content">
                    <section className="learning-tools">
                        <Link to="/chat" className="learn-card-link">
                            <LearningCard
                                icon={<Brain size={24} />}
                                title="AI Tutor"
                                description="Learn concepts with your personal AI mentor."
                                variant="purple"
                            />
                        </Link>

                        <LearningCard
                            icon={<BookOpen size={24} />}
                            title="My Subjects"
                            description="Organize and track everything you're learning."
                            variant="blue"
                        />

                        <LearningCard
                            icon={<FileText size={24} />}
                            title="Study PDFs"
                            description="Upload study material and learn with AI."
                            variant="green"
                        />

                        <Link to="/notes" className="learn-card-link">
                            <LearningCard
                                icon={<NotebookPen size={24} />}
                                title="Smart Notes"
                                description="Create notes, flashcards, and revision sheets."
                                variant="orange"
                            />
                        </Link>

                        <LearningCard
                            icon={<BrainCircuit size={24} />}
                            title="Quiz Generator"
                            description="Test your knowledge with AI-generated quizzes."
                            variant="pink"
                        />

                        <LearningCard
                            icon={<Bookmark size={24} />}
                            title="Resources"
                            description="Find and save useful learning resources."
                            variant="lavender"
                        />
                    </section>
                    <QuickStudy />
                </div>
            </main>
        </div>
    );
}

export default Learn;