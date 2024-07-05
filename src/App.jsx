import React from 'react';
import './App.css';
import NotesList from './components/NotesList';
import image from '../src/accept-tasks-concept-illustration.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes App</h1>
      </header>
      <section className="content">
        <div className="notes-section">
          <NotesList />
        </div>
        <div className="image-section">
          <img src={image} alt="Notes illustration" />
        </div>
      </section>
    </div>
  );
}

export default App;
