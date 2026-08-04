import "./NotePreview.css";
import {
    Star,
    MoreHorizontal,
    Bold,
    Italic,
    Underline,
    List,
    ListOrdered,
    CheckSquare,
    Quote,
    AlignLeft,
    Sparkles
} from "lucide-react";
import { RefreshCw } from "lucide-react";



export default function NotePreview({
    note
}) {
    return (
        <div className="note-preview-card">

            <div className="note-preview-header">

                <h3>{note.title}</h3>

                <div className="note-preview-actions">

                    <button className="preview-icon-btn">
                        <Star size={16}/>
                    </button>

                    <button className="preview-icon-btn">
                        <MoreHorizontal size={16}/>
                    </button>

                </div>

            </div>

            <div className="note-preview-content scrollable">
                <span className="preview-tag">
                    {note.tag}
                </span>

                <div className="preview-date">
                   {note.time}
                </div>

                <div className="preview-toolbar">
                    <button><Bold size={15}/></button>
                    <button><Italic size={15}/></button>
                    <button><Underline size={15}/></button>
                    <button><List size={15}/></button>
                    <button><ListOrdered size={15}/></button>
                    <button><CheckSquare size={15}/></button>
                    <button><Quote size={15}/></button>
                    <button><AlignLeft size={15}/></button>
                    <button><MoreHorizontal size={15}/></button>
                </div>

                <div className="preview-note">
                    {note.content}
                </div>

                <div className="ai-summary-card">
                    <div className="ai-summary-header">
                        <div className="ai-summary-title">
                            <Sparkles size={16} />
                            <h4>AI Summary</h4>
                        </div>
                    </div>

                    <p>
                        {note.aiSummary}
                    </p>

                    <button className="summary-btn">
                        <RefreshCw size={15} />
                        <span>Regenerate</span>
                    </button>
                </div>

                <div className="preview-footer">
                    Last edited: Today at 10:30 AM
                </div>

            </div>

        </div>
    );
}