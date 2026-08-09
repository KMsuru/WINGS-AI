import { MoreVertical, Check, Moon } from "lucide-react";
import "./PlannerTimeline.css";

export default function PlannerTimeline() {
    return (
        <div className="planner-timeline-card">
            <div className="planner-tabs">
                <button className="active-tab">Day</button>
                <button>Week</button>
                <button>Month</button>
                <button>Agenda</button>
            </div>

            <div className="timeline-header">
                <h3>Saturday, Sep 5</h3>
                <div className="timeline-header-right">
                    <span>6 Tasks</span>
                    <MoreVertical size={18} />
                </div>
            </div>

            <div className="timeline-scroll scrollable">
                <div className="timeline-row">
                    <span className="timeline-time">6:00 AM</span>
                    <div className="timeline-task task-green">
                        <div className="task-check">
                            <Check size={13} />
                        </div>
                        <div className="task-content">
                            <strong>Morning Routine & Exercise</strong>
                            <span>6:00 – 7:00 AM</span>
                        </div>
                    </div>
                </div>

                <div className="timeline-row">
                    <span className="timeline-time">7:30 AM</span>
                    <div className="timeline-task task-purple">
                        <div className="task-check"></div>
                        <div className="task-content">
                            <strong>Revision – SQL Joins</strong>
                            <span>7:30 – 9:00 AM</span>
                        </div>
                        <span className="task-priority high">High ↑</span>
                    </div>
                </div>

                <div className="timeline-row">
                    <span className="timeline-time">9:15 AM</span>
                    <div className="timeline-task task-yellow">
                        <div className="task-check"></div>
                        <div className="task-content">
                            <strong>College Lecture</strong>
                            <span>9:15 – 1:00 PM</span>
                        </div>
                        <span className="task-priority medium">Medium ●</span>
                    </div>
                </div>

                <div className="timeline-row">
                    <span className="timeline-time">2:00 PM</span>
                    <div className="timeline-task task-blue">
                        <div className="task-check"></div>
                        <div className="task-content">
                            <strong>Python Practice</strong>
                            <span>2:00 – 4:00 PM</span>
                        </div>
                        <span className="task-priority high">High ↑</span>
                    </div>
                </div>

                <div className="timeline-row">
                    <span className="timeline-time">4:30 PM</span>
                    <div className="timeline-task task-pink">
                        <div className="task-check"></div>
                        <div className="task-content">
                            <strong>Japanese Vocabulary</strong>
                            <span>4:30 – 5:30 PM</span>
                        </div>
                        <span className="task-priority medium">Medium −</span>
                    </div>
                </div>

                <div className="timeline-row">
                    <span className="timeline-time">6:00 PM</span>
                    <div className="timeline-task task-purple-light">
                        <div className="task-check"></div>
                        <div className="task-content">
                            <strong>Work on Mini Project</strong>
                            <span>6:00 – 8:00 PM</span>
                        </div>
                        <span className="task-priority high">High ↑</span>
                    </div>
                </div>

                <div className="timeline-row">
                    <span className="timeline-time">8:30 PM</span>
                    <div className="timeline-task task-gray">
                        <div className="task-check"></div>
                        <div className="task-content">
                            <strong>Review & Plan Tomorrow</strong>
                            <span>8:30 – 9:30 PM</span>
                        </div>
                        <span className="task-priority low">Low ◆</span>
                    </div>
                </div>

                <div className="timeline-row">
                    <span className="timeline-time">10:00 PM</span>
                    <div className="timeline-task task-sleep">
                        <Moon size={17} />
                        <div className="task-content">
                            <strong>Sleep</strong>
                            <span>10:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}