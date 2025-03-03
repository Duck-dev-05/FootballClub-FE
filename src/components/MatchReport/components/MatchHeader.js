import React from 'react';
import { formatDate } from '../utils/dateUtils';
import '../styles/MatchHeader.css';

const MatchHeader = ({ competition, date, status }) => {
    return (
        <header className="match-header">
            <div className="match-info">
                <span className="competition">{competition}</span>
                <span className="date">{formatDate(date)}</span>
                <span className="status">{status}</span>
            </div>
            <h1>Match Report</h1>
        </header>
    );
};

export default MatchHeader; 