import { FileText, Star, Pin } from "lucide-react";
import "./NoteCard.css";
import noteColors from "../../../utils/noteColors";

export default function NoteCard({
    title,
    description,
    tag,
    time,
    index,
    active,
    onClick
}) {

    const theme = noteColors[index % noteColors.length];

    return (
        <div
            className={`note-card ${active ? "active" : ""}`}
            onClick={onClick}
            style={{
                backgroundColor: theme.card
            }}
        >
            <div className="note-top">

                <div
                    className="note-icon"
                    style={{
                        backgroundColor: theme.bg,
                        color: theme.icon
                    }}
                >
                    <FileText
                        size={12}
                        strokeWidth={2}
                    />
                </div>

                <div className="note-info">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>

                <Star
                    size={16}
                    className="note-star"
                />

            </div>

            <div className="note-bottom">

                <span
                    className="note-tag"
                    style={{
                        backgroundColor: theme.bg,
                        color: theme.icon
                    }}
                >
                    {tag}
                </span>

                <div className="note-meta">
                    <Pin size={13} />
                    <span>{time}</span>
                </div>

            </div>
        </div>
    );
}