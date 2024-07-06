import React, { useState } from 'react';
import './EventModal.css';

const EventModal = ({ onSave, onClose }) => {
  const [title, setTitle] = useState('');

  const handleSave = () => {
    onSave(title);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}

>&times;</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default EventModal;