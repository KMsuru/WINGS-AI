import "./LearnCards.css";
import { ArrowRight } from "lucide-react";

function LearningCard({ icon, title, description, variant }) {
    return (
        <div className="learning-card">
            <div className="learning-card-icon">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="learning-card-arrow">
                <ArrowRight size={20} />
            </div>
        </div>
    );
}

export default LearningCard;