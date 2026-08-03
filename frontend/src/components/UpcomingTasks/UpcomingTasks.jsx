import "./UpcomingTasks.css";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const tasks = [
  {
    title: "Complete SQL JOIN Practice",
    time: "09:00 AM",
    completed: false
  },
  {
    title: "Python Revision",
    time: "11:30 AM",
    completed: true
  },
  {
    title: "Japanese Vocabulary",
    time: "07:00 PM",
    completed: false
  }
];

export default function UpcomingTasks() {
  return (
    <div className="tasks">
      <div className="tasks-header">
        <div className="tasks-title">
            <FaCalendarAlt />
            <h3>Upcoming Tasks</h3>
        </div>
        <button>View All</button>
      </div>

      {tasks.map((task, index) => (
        <div className="task-row" key={index}>
          {task.completed ? (
            <FaCheckCircle className="task-done" />
          ) : (
            <FaRegCircle className="task-pending" />
          )}

          <div className="task-info">
            <p>{task.title}</p>
            <span>{task.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}