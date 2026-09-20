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

            <p className="notes-text">
                12 notes saved
            </p>

            <button className="notes-btn">
                View Notes <span>→</span>
            </button>

            <div className="notes-illustration">
                <img src={notes} alt="Notes" />
            </div>

        </div>
    );
}