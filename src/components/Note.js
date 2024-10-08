import React from 'react';
import './Note.css';  // Make sure to create this CSS file if needed

const Note = ({ note, onSelect, onDelete }) => {
  return (
    <div className="note" onClick={() => onSelect(note)}>
      <div className="note-header">
        <h2 className="note-title">{note.title || 'Untitled Note'}</h2>
        <button className="delete-button" onClick={(e) => {
          e.stopPropagation();  // Prevent triggering onSelect when deleting
          onDelete(note.id);
        }}>
          Delete
        </button>
      </div>
      <p className="note-body">{note.body ? note.body.substring(0, 100) : 'No content'}</p>
    </div>
  );
};

export default Note;
