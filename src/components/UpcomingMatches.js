import React, { useState } from 'react';
import './UpcomingMatches.css';

const UpcomingMatches = () => {
  const [selectedMonth, setSelectedMonth] = useState('March');

  const matches = {
    March: [
      {
        date: "2024-03-10",
        time: "15:00",
        homeTeam: "Our Club",
        awayTeam: "City United",
        venue: "Home Stadium",
        competition: "League",
        ticketsAvailable: true
      },
      {
        date: "2024-03-17",
        time: "18:30",
        homeTeam: "Metro FC",
        awayTeam: "Our Club",
        venue: "Metro Arena",
        competition: "Cup",
        ticketsAvailable: true
      },
      {
        date: "2024-03-24",
        time: "16:00",
        homeTeam: "Our Club",
        awayTeam: "Royal Sports",
        venue: "Home Stadium",
        competition: "League",
        ticketsAvailable: false
      }
    ],
    April: [
      {
        date: "2024-04-07",
        time: "15:00",
        homeTeam: "United Stars",
        awayTeam: "Our Club",
        venue: "Star Stadium",
        competition: "League",
        ticketsAvailable: true
      },
      {
        date: "2024-04-14",
        time: "17:00",
        homeTeam: "Our Club",
        awayTeam: "Athletic Club",
        venue: "Home Stadium",
        competition: "Cup",
        ticketsAvailable: true
      }
    ],
    May: [
      {
        date: "2024-05-01",
        time: "20:00",
        homeTeam: "Our Club",
        awayTeam: "City Rangers",
        venue: "Home Stadium",
        competition: "League",
        ticketsAvailable: false
      }
    ]
  };

  const months = Object.keys(matches);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <div className="upcoming-matches-container">
      <h1>Upcoming Matches</h1>
      
      <div className="month-selector">
        {months.map(month => (
          <button
            key={month}
            className={`month-button ${selectedMonth === month ? 'active' : ''}`}
            onClick={() => setSelectedMonth(month)}
          >
            {month}
          </button>
        ))}
      </div>

      <div className="matches-grid">
        {matches[selectedMonth].map((match, index) => (
          <div key={index} className="match-card">
            <div className="match-date">
              {formatDate(match.date)}
            </div>
            <div className="match-time">
              {match.time}
            </div>
            <div className="competition-badge">
              {match.competition}
            </div>
            <div className="teams-container">
              <div className="team home">
                <span className={match.homeTeam === "Our Club" ? 'highlight' : ''}>
                  {match.homeTeam}
                </span>
              </div>
              <div className="vs">VS</div>
              <div className="team away">
                <span className={match.awayTeam === "Our Club" ? 'highlight' : ''}>
                  {match.awayTeam}
                </span>
              </div>
            </div>
            <div className="match-venue">
              <i className="fas fa-map-marker-alt"></i> {match.venue}
            </div>
            <div className="ticket-status">
              {match.ticketsAvailable ? (
                <button className="ticket-button">
                  Buy Tickets
                </button>
              ) : (
                <span className="sold-out">Sold Out</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMatches; 