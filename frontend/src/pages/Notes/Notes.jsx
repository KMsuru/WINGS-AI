import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./Notes.css";
import NotesHeader from "../../components/NotesHeader/NotesHeader";
import FolderCard from "../../components/Notes/FolderCard/FolderCard";
import TagsCard from "../../components/Notes/TagsCard/TagsCard";
import NotesList from "../../components/Notes/NotesList/NotesList";
import NotePreview from "../../components/Notes/NotePreview/NotePreview";
import { useState } from "react";

const notes = [
    {
        title: "AI Project Ideas",
        description: "Some AI project ideas that can help in final year.",
        tag: "AI & ML",
        time: "May 26, 2026 • 10:30 AM",

        content: `
Here are some AI project ideas that can be implemented using Python and Machine Learning libraries.

1. Study Buddy – AI Assistant

• Voice based study assistant for students.
• Can answer questions, create notes and reminders.
• Uses Speech Recognition and LLM APIs.

2. Smart Note Summarizer

• Upload lecture notes or PDF files.
• Generate concise summaries.
• Highlight important topics.

3. AI Flashcard Generator

• Generate flashcards from notes.
• Useful for quick revision.
• Supports spaced repetition.

4. Resume Analyzer

• Compare resumes with job descriptions.
• Suggest missing skills.
• Generate ATS score.

More ideas will be added as the project grows.
        `,

        aiSummary:
            "This note contains several AI project ideas focused on helping students through voice assistants, AI summaries, flashcards and resume analysis."
    },

    {
        title: "SQL JOIN Summary",
        description: "Summary of all JOINs with examples.",
        tag: "SQL",
        time: "Today • 9:15 AM",

        content: `
SQL JOIN combines rows from multiple tables.

INNER JOIN
Returns matching records only.

LEFT JOIN
Returns all records from left table.

RIGHT JOIN
Returns all records from right table.

FULL JOIN
Returns all matching and non-matching records.

Always join using Primary Key and Foreign Key whenever possible.
        `,

        aiSummary:
            "Explains the different SQL JOIN operations and when each one should be used."
    },

    {
        title: "Python Dictionary Notes",
        description: "Dictionary methods and nested dictionaries.",
        tag: "Programming",
        time: "Yesterday",

        content: `
Dictionary stores key-value pairs.

Common Methods

get()

keys()

values()

items()

update()

pop()

Nested dictionaries can represent structured data such as students and employees.
        `,

        aiSummary:
            "Summarizes Python dictionaries, useful methods and nested dictionary concepts."
    },

    {
        title: "Japanese N5 Vocabulary",
        description: "Common JLPT N5 vocabulary words.",
        tag: "Japanese",
        time: "Yesterday",

        content: `
こんにちは

ありがとう

学校

先生

学生

友達

These are some common JLPT N5 vocabulary words.
        `,

        aiSummary:
            "Contains beginner Japanese vocabulary commonly used in the JLPT N5 examination."
    },

    {
        title: "Operating System Notes",
        description: "Scheduling, threads and processes.",
        tag: "Class Notes",
        time: "May 24",

        content: `
Topics Covered

Process Scheduling

Threads

Deadlock

Memory Management

Virtual Memory

Page Replacement Algorithms
        `,

        aiSummary:
            "A quick overview of major Operating System concepts for revision."
    },

    {
        title: "Weekly Goals",
        description: "Study goals for this week.",
        tag: "Personal",
        time: "May 24",

        content: `
Complete React Dashboard

Practice Python

Study Japanese

Complete SQL Revision

Exercise 5 days this week
        `,

        aiSummary:
            "Weekly study goals and personal productivity checklist."
    }
];

export default function Notes() {
    const [selectedNote, setSelectedNote] = useState(0);
    return (
        <div className="notes-page">
            <Sidebar />
            <main className="notes-main">
                <NotesHeader />
                <div className="notes-content">
                    <aside className="notes-left">
                        <FolderCard />
                        <TagsCard />
                    </aside>

                    <section className="notes-center">
                        <NotesList
                            notes={notes}
                            selectedNote={selectedNote}
                            setSelectedNote={setSelectedNote}
                        />
                    </section>

                    <aside className="notes-right">
                        <NotePreview
                            note={notes[selectedNote]}
                        />
                    </aside>
                </div>
            </main>
        </div>
    );
}