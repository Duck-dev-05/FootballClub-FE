import React, { useState } from 'react';
import './TrainingSchedule.css';

const TrainingSchedule = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Teams' },
    { id: 'youth', name: 'Youth Teams' },
    { id: 'senior', name: 'Senior Team' },
    { id: 'academy', name: 'Academy' }
  ];

  const schedule = {
    youth: [
      {
        day: 'Monday',
        sessions: [
          { time: '16:00 - 17:30', team: 'Under 12s', location: 'Training Ground 1' },
          { time: '17:30 - 19:00', team: 'Under 15s', location: 'Training Ground 2' }
        ]
      },
      {
        day: 'Wednesday',
        sessions: [
          { time: '16:00 - 17:30', team: 'Under 13s', location: 'Training Ground 1' },
          { time: '17:30 - 19:00', team: 'Under 16s', location: 'Training Ground 2' }
        ]
      },
      {
        day: 'Saturday',
        sessions: [
          { time: '09:00 - 10:30', team: 'Under 12s', location: 'Main Ground' },
          { time: '10:30 - 12:00', team: 'Under 15s', location: 'Main Ground' }
        ]
      }
    ],
    senior: [
      {
        day: 'Tuesday',
        sessions: [
          { time: '10:00 - 12:00', team: 'First Team', location: 'Main Ground' },
          { time: '15:00 - 16:30', team: 'Reserve Team', location: 'Training Ground 1' }
        ]
      },
      {
        day: 'Thursday',
        sessions: [
          { time: '10:00 - 12:00', team: 'First Team', location: 'Main Ground' },
          { time: '15:00 - 16:30', team: 'Reserve Team', location: 'Training Ground 1' }
        ]
      },
      {
        day: 'Friday',
        sessions: [
          { time: '10:00 - 11:30', team: 'First Team', location: 'Main Ground' },
          { time: '14:00 - 15:30', team: 'Reserve Team', location: 'Training Ground 1' }
        ]
      }
    ],
    academy: [
      {
        day: 'Monday',
        sessions: [
          { time: '09:00 - 11:00', team: 'Academy U18s', location: 'Academy Ground' },
          { time: '14:00 - 16:00', team: 'Academy U21s', location: 'Academy Ground' }
        ]
      },
      {
        day: 'Wednesday',
        sessions: [
          { time: '09:00 - 11:00', team: 'Academy U18s', location: 'Academy Ground' },
          { time: '14:00 - 16:00', team: 'Academy U21s', location: 'Academy Ground' }
        ]
      },
      {
        day: 'Thursday',
        sessions: [
          { time: '09:00 - 11:00', team: 'Academy U18s', location: 'Academy Ground' },
          { time: '14:00 - 16:00', team: 'Academy U21s', location: 'Academy Ground' }
        ]
      }
    ]
  };

  const getAllSessions = () => {
    const allSessions = {};
    Object.values(schedule).forEach(categorySchedule => {
      categorySchedule.forEach(daySchedule => {
        if (!allSessions[daySchedule.day]) {
          allSessions[daySchedule.day] = [];
        }
        allSessions[daySchedule.day].push(...daySchedule.sessions);
      });
    });
    return Object.entries(allSessions).map(([day, sessions]) => ({ day, sessions }));
  };

  const getDisplaySchedule = () => {
    if (selectedCategory === 'all') {
      return getAllSessions();
    }
    return schedule[selectedCategory] || [];
  };

  return (
    <div className="training-schedule-container">
      <h1>Training Schedule</h1>
      
      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="schedule-grid">
        {getDisplaySchedule().map((daySchedule, index) => (
          <div key={index} className="day-card">
            <div className="day-header">
              <h2>{daySchedule.day}</h2>
            </div>
            <div className="sessions-list">
              {daySchedule.sessions.map((session, sessionIndex) => (
                <div key={sessionIndex} className="session-item">
                  <div className="session-time">
                    <i className="far fa-clock"></i>
                    {session.time}
                  </div>
                  <div className="session-team">
                    <i className="fas fa-users"></i>
                    {session.team}
                  </div>
                  <div className="session-location">
                    <i className="fas fa-map-marker-alt"></i>
                    {session.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="schedule-notes">
        <h3>Important Notes:</h3>
        <ul>
          <li>Schedule may change due to weather conditions</li>
          <li>Players should arrive 15 minutes before session start</li>
          <li>Proper training kit is mandatory</li>
          <li>Contact coaching staff for any queries</li>
        </ul>
      </div>
    </div>
  );
};

export default TrainingSchedule; 