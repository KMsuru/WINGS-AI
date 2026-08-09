import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import "./PlannerControls.css";

export default function PlannerControls() {
    return (
        <div className="planner-top-controls">
            <button className="today-btn">
                Today
            </button>

            <div className="planner-navigation">
                <button className="nav-btn">
                    <ChevronLeft size={16} />
                </button>

                <button className="nav-btn">
                    <ChevronRight size={16} />
                </button>
            </div>

            <button className="date-range-btn">
                <span>May 26 – June 1, 2026</span>
                <ChevronDown size={16} />
            </button>
        </div>
    );
}