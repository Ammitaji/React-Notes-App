import React from 'react';
import Note from './Note';  // Import the new Note component
import './NoteList.css';

const NoteList = ({ notes, selectNote, deleteNote }) => {
  return (
    <div className="note-list">
      {notes.map(note => (
        <Note 
          key={note.id} 
          note={note} 
          onSelect={selectNote} 
          onDelete={deleteNote} 
        />
      ))}
    </div>
  );
};

export default NoteList;
