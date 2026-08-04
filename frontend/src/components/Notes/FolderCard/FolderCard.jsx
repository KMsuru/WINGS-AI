import { Folder, Plus } from "lucide-react";
import "./FolderCard.css";

const folders = [
    { name: "All Notes", count: 64, active: true },
    { name: "Class Notes", count: 18 },
    { name: "Programming", count: 12 },
    { name: "AI & ML", count: 8 },
    { name: "SQL", count: 7 },
    { name: "Personal", count: 5 },
    { name: "Ideas", count: 3 },
    { name: "Archive", count: 5 }
    
];

export default function FolderCard() {
    return (
        <div className="folder-card">
            <div className="folder-card-header">
                <h3>Folders</h3>

                <button className="folder-add-btn">
                    <Plus size={16} />
                </button>
            </div>

            <div className="folder-list scrollable">
                {folders.map((folder) => (
                    <button
                        key={folder.name}
                        className={`folder-row ${folder.active ? "active" : ""}`}
                    >
                        <div className="folder-left">
                            <Folder size={16} />
                            <span>{folder.name}</span>
                        </div>

                        <span className="folder-count">
                            {folder.count}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}