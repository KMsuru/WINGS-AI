import "./QuickActions.css";
import {
    BookOpen,
    FileText,
    CalendarDays,
    BrainCircuit,
    ChevronRight
} from "lucide-react";
import { Sparkles } from "lucide-react";


function QuickActions() {

    const actions = [
        {
            icon: <BookOpen size={20} />,
            title: "Explain Topic"
        },
        {
            icon: <BrainCircuit size={20} />,
            title: "Make Quiz"
        },
        {
            icon: <FileText size={20} />,
            title: "Summarize"
        },
        {
            icon: <CalendarDays size={20} />,
            title: "Create Study Plan"
        }
    ];

    return (
        <div className="quick-card">

          <div className="quick-header">
            <Sparkles size={20} className="quick-header-icon"/>
            <h3>Quick Actions</h3>
        </div>

            <div className="quick-list">

                {actions.map((item, index) => (
                    <div className="quick-item" key={index}>

                        <div className="quick-left">
                            <div className="quick-icon">
                                {item.icon}
                            </div>

                            <span>{item.title}</span>
                        </div>

                        <ChevronRight size={18} />

                    </div>
                ))}

            </div>

        </div>
    );
}

export default QuickActions;