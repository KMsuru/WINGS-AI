import "./TodaysTasks.css";
import { Plus, SlidersHorizontal, Check } from "lucide-react";

function TodaysTasks() {

    const tasks = [
        {
            title: "Morning Routine & Exercise",
            time: "6:00 – 7:00 AM",
            priority: "Low",
            completed: true
        },
        {
            title: "Revision – SQL Joins",
            time: "7:30 – 9:00 AM",
            priority: "High",
            completed: true
        },
        {
            title: "College Lecture",
            time: "9:15 – 1:00 PM",
            priority: "Medium",
            completed: false
        },
        {
            title: "Python Practice",
            time: "2:00 – 4:00 PM",
            priority: "High",
            completed: false
        },
        {
            title: "Japanese Vocabulary",
            time: "4:30 – 5:30 PM",
            priority: "Medium",
            completed: false
        },
        {
            title: "Work on Mini Project",
            time: "6:00 – 8:00 PM",
            priority: "High",
            completed: false
        },
        {
            title: "Read Book",
            time: "8:00 – 8:30 PM",
            priority: "Low",
            completed: false
        },
        {
            title: "Plan Tomorrow",
            time: "8:30 – 9:00 PM",
            priority: "Medium",
            completed: false
        }
    ];

    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progress = Math.round((completedTasks / totalTasks) * 100);

    return (
        <div className="todays-tasks-card">

            <div className="tasks-header">
                <div>
                    <h3>Today's Tasks</h3>
                    <p>
                        {completedTasks} of {totalTasks} completed
                    </p>
                </div>
            </div>

            <div className="tasks-progress-row">
                <div className="tasks-progress">
                    <div
                        className="tasks-progress-fill"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <span>{progress}%</span>
            </div>

            <div className="tasks-actions">

                <button className="add-task-btn">
                    <Plus size={16} />
                    Add Task
                </button>

                <button className="filter-task-btn">
                    <SlidersHorizontal size={16} />
                </button>

            </div>

            <div className="tasks-list tasks-scrollable">

                {tasks.map((task, index) => (

                    <div className="task-item" key={index}>

                        <div
                            className={`task-checkbox ${
                                task.completed ? "completed" : ""
                            }`}
                        >
                            {task.completed && <Check size={13} />}
                        </div>

                        <div className="task-info">
                            <h4>{task.title}</h4>
                            <p>{task.time}</p>
                        </div>

                        <span
                            className={`task-priority ${task.priority.toLowerCase()}`}
                        >
                            {task.priority}
                        </span>

                    </div>

                ))}

            </div>

            <button className="view-all-tasks">
                View All Tasks
                <span>→</span>
            </button>

        </div>
    );
}

export default TodaysTasks;