// src/components/Calendar.js

import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      start: new Date(),
      end: new Date(moment().add(1, 'days')),
      title: 'Sample Event',
    },
  ]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          start,
          end,
          title,
        },
      ]);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelect}
        onSelectEvent={(event) => alert(event.title)}
      />
    </div>
  );
};

export default MyCalendar;
