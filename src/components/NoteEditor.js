import React, { useState, useEffect } from 'react';
import './NoteEditor.css';

const NoteEditor = ({ note, updateNote }) => {
  const [currentNote, setCurrentNote] = useState(note);

  // Sync state when the selected note changes
  useEffect(() => {
    setCurrentNote(note);
  }, [note]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentNote({
      ...currentNote,
      [name]: value,
    });
  };

  // Handle saving the note when the "Save" button is clicked
  const handleSave = () => {
    updateNote(currentNote);  // Call the parent function to update the note
  };

  return (
    <div className="note-editor">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={currentNote.title}
        onChange={handleChange}
      />
      <textarea
        name="body"
        placeholder="Your note..."
        value={currentNote.body}
        onChange={handleChange}
      />
      <button className="save-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default NoteEditor;
