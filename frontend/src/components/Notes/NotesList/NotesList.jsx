import { ChevronDown, LayoutGrid, List } from "lucide-react";
import "./NotesList.css";
import NoteCard from "../NoteCard/NoteCard";

export default function NotesList({
    notes,
    selectedNote,
    setSelectedNote
}) {
    return (
        <div className="notes-list-card">
            <div className="notes-list-header">
                <button className="notes-dropdown">
                    All Notes
                    <ChevronDown size={16} />
                </button>

                <div className="notes-list-actions">
                    <button className="sort-btn">
                        Sort by: Updated
                        <ChevronDown size={16} />
                    </button>

                    <button className="view-btn active">
                        <List size={16} />
                    </button>

                    <button className="view-btn">
                        <LayoutGrid size={16} />
                    </button>
                </div>
            </div>

            <div className="notes-cards scrollable">
                {notes.map((note, index) => (
                    <NoteCard
                        key={index}
                        index={index}
                        title={note.title}
                        description={note.description}
                        tag={note.tag}
                        time={note.time}
                        active={selectedNote === index}
                        onClick={() => setSelectedNote(index)}
                    />
                ))}
            </div>
        </div>
    );
}