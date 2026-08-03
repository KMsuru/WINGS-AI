import "./StudyStreak.css";
import { FaFire } from "react-icons/fa";

const week = [
  { day: "M", active: true },
  { day: "T", active: true },
  { day: "W", active: true },
  { day: "T", active: true },
  { day: "F", active: true },
  { day: "S", active: true },
  { day: "S", active: false }
];

export default function StudyStreak() {
  return (
    <div className="streak">
      <div className="streak-header">
        <FaFire className="fire-icon" />
        <h3>Study Streak</h3>
      </div>

      <div className="streak-count">
        <span className="streak-number">27</span>
        <span className="streak-days">days</span>
      </div>

      <p className="streak-message">
        Keep it up! You're doing great.
      </p>

      <div className="week-row">
        {week.map((item, index) => (
          <div
            key={index}
            className={item.active ? "day-circle active" : "day-circle"}
          >
            {item.day}
          </div>
        ))}
      </div>
    </div>
  );
}