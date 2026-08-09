import "./GoalsCard.css";
import { Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


export default function GoalsCard() {
    return (
        <div className="goals-card scrollable">

            <div className="goals-header">
                <h3 className="goals-title">
                    My Goals
                </h3>

                <button className="goal-add-btn">
                    <Plus size={16}/>
                </button>
            </div>

            <div className="goal-item">

                <div className="goal-header">
                    <span>React Revision</span>
                    <span>80%</span>
                </div>

                <div className="goal-progress">
                    <div className="goal-fill react-progress"></div>
                </div>

            </div>

            <div className="goal-item">

                <div className="goal-header">
                    <span>Python Practice</span>
                    <span>60%</span>
                </div>

                <div className="goal-progress">
                    <div className="goal-fill python-progress"></div>
                </div>

            </div>

            <div className="goal-item">

                <div className="goal-header">
                    <span>Japanese N5</span>
                    <span>45%</span>
                </div>

                <div className="goal-progress">
                    <div className="goal-fill japanese-progress"></div>
                </div>

            </div>

            <Link
                to="/goals"
                className="view-goals-btn"
            >
                <span>View All Goals</span>
                <ArrowRight size={16}/>
            </Link>
            
        </div>
    );
}