import { Plus } from "lucide-react";
import "./TagsCard.css";

const tags = [
    { name: "Important", count: 12, color: "#EF4444" },
    { name: "To Review", count: 9, color: "#F59E0B" },
    { name: "Exam", count: 8, color: "#3B82F6" },
    { name: "Project", count: 6, color: "#10B981" },
    { name: "Career", count: 8, color: "#b010b9" },
    { name: "Daily Notes", count: 5, color: "#8B5CF6" }
];

export default function TagsCard() {
    return (
        <div className="tags-card">
            <div className="tags-header">
                <h3>Tags</h3>

                <button className="tags-add-btn">
                    <Plus size={16} />
                </button>
            </div>

            <div className="tags-list scrollable">
                {tags.map((tag) => (
                    <div
                        key={tag.name}
                        className="tag-row"
                    >
                        <div className="tag-left">
                            <span
                                className="tag-dot"
                                style={{ backgroundColor: tag.color }}
                            ></span>

                            <span>{tag.name}</span>
                        </div>

                        <span className="tag-count">
                            {tag.count}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}