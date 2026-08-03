 import "./TodaysGoals.css";
import { FaBullseye } from "react-icons/fa6";
import { SiPython } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";

const goals = [
  {
    name: "SQL",
    progress: 40,
    icon: <FaDatabase />,
    color: "#7C4DFF",
  },
  {
    name: "Python",
    progress: 70,
    icon: <SiPython />,
    color: "#3776AB",
  },
  {
    name: "Japanese",
    progress: 20,
    icon: <MdTranslate />,
    color: "#FF4F87",
  },
];

export default function TodaysGoals() {
  return (
    <div className="goals-card">

      <div className="goals-header">

        <div className="goals-title">
          <FaBullseye />
          <span>Today's Goals</span>
        </div>

        <button>View All</button>

      </div>

      {goals.map((goal) => (

        <div className="goal-card" key={goal.name}>
          <div className="goal-icon"
               style={{ color: goal.color }}>
            {goal.icon}
          </div>

          <div className="goal-content">

            <div className="goal-top">

              <span>{goal.name}</span>

              <span>{goal.progress}%</span>

            </div>

            <div className="progress">

              <div
                className="progress-fill"
                style={{
                  width: `${goal.progress}%`,
                  background: goal.color,
                }}
              />

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}