import "./ProgressStats.css";
import {
    Clock3,
    CircleCheck,
    BookOpen,
    Target
} from "lucide-react";


function ProgressStats() {
    const stats = [
        {
            label: "Total Study Hours",
            value: "18.5",
            unit: "hrs",
            change: "12% from last week",
            icon: Clock3
        },
        {
            label: "Tasks Completed",
            value: "24",
            unit: "",
            change: "8% from last week",
            icon: CircleCheck
        },
        {
            label: "Topics Learned",
            value: "32",
            unit: "",
            change: "15% from last week",
            icon: BookOpen
        },
        {
            label: "Focus Score",
            value: "85",
            unit: "%",
            change: "10% from last week",
            icon: Target
        }
    ];
    return (
        <div className="progress-stats">
            {stats.map((stat) => (
                <div className="progress-stat-card" key={stat.label}>
                    <div className="progress-stat-header">
                        <div className="progress-stat-icon">
                            <stat.icon
                                size={22}
                                strokeWidth={2}
                            />
                        </div>

                        <span className="progress-stat-label">
                            {stat.label}
                        </span>

                    </div>

                    <div className="progress-stat-value">
                        {stat.value}

                        <span className="progress-stat-unit">
                            {stat.unit}
                        </span>
                    </div>

                    <span className="progress-stat-change">
                        ↑ {stat.change}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default ProgressStats;