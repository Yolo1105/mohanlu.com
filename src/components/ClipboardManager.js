import React, { useState, useEffect } from 'react';
import { useClipboard } from 'react-use';
import { TextField, List, ListItem, ListItemText, Button, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import NoteModal from './NoteModal';
import './ClipboardManager.css';

const ClipboardManager = () => {
  const clipboard = useClipboard();
  const [clipboardHistory, setClipboardHistory] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (clipboard.value && !clipboardHistory.includes(clipboard.value)) {
      setClipboardHistory([clipboard.value, ...clipboardHistory]);
    }
  }, [clipboard.value]);

  const handleItemClick = (content) => {
    setSelectedContent(content);
    setIsModalOpen(true);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredHistory = clipboardHistory.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="clipboard-manager">
      <h2>Clipboard Manager</h2>
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
      <List className="sidebar">
        {filteredHistory.map((content, index) => (
          <ListItem button key={index} onClick={() => handleItemClick(content)}>
            <ListItemText primary={content.substring(0, 20)} />
          </ListItem>
        ))}
      </List>
      {isModalOpen && (
        <NoteModal
          content={selectedContent}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ClipboardManager;