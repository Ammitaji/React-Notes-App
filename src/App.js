import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');  // New state for search term

  // Load notes from localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = { id: Date.now(), title: '', body: '' };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => note.id === updatedNote.id ? updatedNote : note));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    setSelectedNote(null);
  };

  // Filter notes based on search term
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header addNote={addNote} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />  {/* Pass searchTerm and setSearchTerm */}
      <div className="main-content">
        <NoteList 
          notes={filteredNotes}  // Use filteredNotes instead of all notes
          selectNote={setSelectedNote} 
          deleteNote={deleteNote} 
        />
        {selectedNote && 
          <NoteEditor 
            note={selectedNote} 
            updateNote={updateNote} 
          />}
      </div>
    </div>
  );
}

export default App;
