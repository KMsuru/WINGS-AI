import { Search, Bell, Plus } from "lucide-react";
import "./NotesHeader.css";

export default function NotesHeader() {
    return (
        <div className="notes-header">
            <div className="notes-title">
                <h1>Notes</h1>
                <p>Organize your thoughts.Notes pawered by AI.</p>
            </div>
            <div className="notes-actions">
                <div className="notes-search">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Search notes..."
                    />
                </div>

                <button className="notes-icon-btn">
                    <Bell size={18} />
                </button>

                <button className="new-note-btn">
                    <Plus size={18} />
                    New Note
                </button>
            </div>
        </div>
    );
}