import "./NotesCard.css";
import { FaStickyNote } from "react-icons/fa";
import notes from "../../assets/illustrations/notes.png";

export default function NotesCard() {
    return (
        <div className="notes-card">

            <div className="notes-title">
                <FaStickyNote />
                <h3>Notes</h3>
            </div>

            <p className="notes-count">
                12 notes saved
            </p>

            <button className="notes-btn">
                View Notes →
            </button>

            <div className="notes-image">
                <img src={notes} alt="Notes" />
            </div>

        </div>
    );
}