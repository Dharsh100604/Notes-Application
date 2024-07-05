import React, { useState } from 'react';
import Note from './Note';
import './NotesList.css';
import { Snackbar, Alert, TextField, Select, MenuItem, Button } from '@mui/material';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [noteCategory, setNoteCategory] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });

  const categories = ['Work', 'Personal', 'Urgent'];

  const addNote = () => {
    if (noteTitle.trim() && noteContent.trim() && noteCategory.trim()) {
      if (editIndex !== null) {
        const updatedNotes = notes.map((note, index) => 
          index === editIndex ? { title: noteTitle, content: noteContent, category: noteCategory } : note
        );
        setNotes(updatedNotes);
        setEditIndex(null);
        setNotification({ open: true, message: 'Note updated successfully!', severity: 'success' });
      } else {
        setNotes([...notes, { title: noteTitle, content: noteContent, category: noteCategory }]);
        setNotification({ open: true, message: 'Note added successfully!', severity: 'success' });
      }
      setNoteTitle('');
      setNoteContent('');
      setNoteCategory('');
    } else {
      setNotification({ open: true, message: 'Please fill out all fields.', severity: 'error' });
    }
  };

  const editNote = (index) => {
    setNoteTitle(notes[index].title);
    setNoteContent(notes[index].content);
    setNoteCategory(notes[index].category);
    setEditIndex(index);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
    setNotification({ open: true, message: 'Note deleted successfully!', severity: 'success' });
  };

  return (
    <div className="notes-list">
      <h2>Notes</h2>
      <TextField 
        label="Note title" 
        variant="outlined" 
        value={noteTitle} 
        onChange={(e) => setNoteTitle(e.target.value)} 
        fullWidth 
        margin="normal" 
        style={{ width: '600px' }}
      />
      <TextField 
        label="Note content" 
        variant="outlined" 
        value={noteContent} 
        onChange={(e) => setNoteContent(e.target.value)} 
        multiline 
        rows={4} 
        fullWidth 
        margin="normal" 
        style={{ width: '600px' }}
      />
      <Select 
        value={noteCategory} 
        onChange={(e) => setNoteCategory(e.target.value)} 
        displayEmpty 
        fullWidth 
        variant="outlined" 
        margin="normal"
        style={{ width: '600px' }}
      >
        <MenuItem value=""><em>Select Category</em></MenuItem>
        {categories.map((category, index) => (
          <MenuItem key={index} value={category}>{category}</MenuItem>
        ))}
      </Select>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={addNote} 
        fullWidth 
        margin="normal"
        style={{ width: '600px' }}
      >
        {editIndex !== null ? 'Update Note' : 'Add Note'}
      </Button>
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={() => setNotification({ ...notification, open: false })}
      >
        <Alert onClose={() => setNotification({ ...notification, open: false })} severity={notification.severity}>
          {notification.message}
        </Alert>
      </Snackbar>
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note 
            key={index} 
            title={note.title} 
            content={note.content} 
            category={note.category}
            onEdit={() => editNote(index)}
            onDelete={() => deleteNote(index)} 
          />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
