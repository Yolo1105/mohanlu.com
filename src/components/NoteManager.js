import React, { useState, useEffect } from 'react';
import { TextField, Button, Select, MenuItem, List, ListItem, ListItemText, IconButton, Typography } from '@material-ui/core';
import { ArrowBack, Search } from '@material-ui/icons';
import noteService from '../services/noteService';
import fileService from '../services/fileService';

const NoteManager = () => {
  const [folders, setFolders] = useState([]);
  const [currentFolder, setCurrentFolder] = useState('');
  const [newNote, setNewNote] = useState('');
  const [newFolder, setNewFolder] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    noteService.getAllFolders().then(folders => setFolders(folders));
  }, []);

  const

 addFolder = () => {
    noteService.createFolder(newFolder).then(folder => {
      setFolders(folders.concat(folder));
      setNewFolder('');
    });
  };

  const addNote = () => {
    noteService.createNote(currentFolder, newNote).then(() => {
      setNewNote('');
      noteService.getNotes(currentFolder).then(notes => setFolders(
        folders.map(folder => folder.name === currentFolder ? { ...folder, notes } : folder)
      ));
    });
  };

  const downloadNote = (folder, note) => {
    fileService.download(folder, note);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNotes = currentFolder
    ? folders.find(folder => folder.name === currentFolder).notes.filter(note =>
        note.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="note-manager">
      <h2>Note Manager</h2>
      <TextField
        label="New Folder Name"
        value={newFolder}
        onChange={(e) => setNewFolder(e.target.value)}
      />
      <Button onClick={addFolder}>Add Folder</Button>
      <Select value={currentFolder} onChange={(e) => setCurrentFolder(e.target.value)}>
        <MenuItem value="">Select Folder</MenuItem>
        {folders.map(folder => <MenuItem key={folder.name} value={folder.name}>{folder.name}</MenuItem>)}
      </Select>
      {currentFolder && (
        <>
          <TextField
            label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <Search />
                </IconButton>
              )
            }}
          />
          <TextField
            label="New Note Content"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <Button onClick={addNote}>Add Note</Button>
          <List>
            {filteredNotes.map(note => (
              <ListItem key={note}>
                <ListItemText primary={note} />
                <Button onClick={() => downloadNote(currentFolder, note)}>Download</Button>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </div>
  );
};

export default NoteManager;