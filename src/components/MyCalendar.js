import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';
import EventModal from './EventModal';
import { TextField, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      events.forEach(event => {
        if (moment(event.start).isSame(now, 'minute')) {
          alert(`Event "${event.title}" is happening now!`);
        }
      });
    }, 60000);
    return () => clearInterval(interval);
  }, [events]);

  const handleSelectSlot = ({ start, end }) => {
    setSelectedEvent({ start, end });
    setIsModalOpen(true);
  };

  const handleEventSave = (title) => {
    setEvents([...events, { title, start: selectedEvent.start, end: selectedEvent.end }]);
    setIsModalOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-calendar">
      <h2>My Calendar</h2>
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
      <Calendar
        localizer={localizer}
        events={filteredEvents}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        style={{ height: 500 }}
      />
      {isModalOpen && (
        <EventModal
          onSave={handleEventSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default MyCalendar;