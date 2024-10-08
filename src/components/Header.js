import React from 'react';
import './Header.css';

const Header = ({ addNote, searchTerm, setSearchTerm }) => {  // Accept searchTerm and setSearchTerm as props
  return (
    <header className="header">
      <h1>Notes App</h1>
      <div className="header-controls">
        <input 
          type="text" 
          placeholder="Search notes..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}  // Update searchTerm when the input changes
          className="search-input"
        />
        <button onClick={addNote}>+ Add Note</button>
      </div>
    </header>
  );
};

export default Header;
