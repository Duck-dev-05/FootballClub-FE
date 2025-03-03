import React from 'react';
import './Matches.css';

function Matches() {
  return (
    <div className="matches-container">
      <h2>Upcoming Matches</h2>
      <ul>
        <li>Match 1: Team A vs Team B - Date</li>
        <li>Match 2: Team C vs Team D - Date</li>
        <li>Match 3: Team E vs Team F - Date</li>
      </ul>
    </div>
  );
}

export default Matches; 