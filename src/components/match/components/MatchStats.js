import React from 'react';
import './MatchStats.css';

const StatBar = ({ label, homeValue, awayValue, type = 'percentage' }) => {
    const total = type === 'percentage' ? 100 : homeValue + awayValue;
    const homeWidth = (homeValue / total) * 100;
    const awayWidth = (awayValue / total) * 100;

    return (
        <div className="stat-row">
            <div className="stat-label">{label}</div>
            <div className="stat-values">
                <span className="home-value">{homeValue}</span>
                <div className="stat-bar-container">
                    <div className="stat-bar">
                        <div className="home-bar" style={{ width: `${homeWidth}%` }} />
                        <div className="away-bar" style={{ width: `${awayWidth}%` }} />
                    </div>
                </div>
                <span className="away-value">{awayValue}</span>
            </div>
        </div>
    );
};

const MatchStats = ({ stats }) => {
    return (
        <div className="match-stats">
            <h3>Match Statistics</h3>
            <div className="stats-container">
                <StatBar 
                    label="Possession (%)" 
                    homeValue={stats.possession.home} 
                    awayValue={stats.possession.away} 
                />
                <StatBar 
                    label="Shots" 
                    homeValue={stats.shots.home} 
                    awayValue={stats.shots.away} 
                    type="count" 
                />
                <StatBar 
                    label="Shots on Target" 
                    homeValue={stats.shotsOnTarget.home} 
                    awayValue={stats.shotsOnTarget.away} 
                    type="count" 
                />
                <StatBar 
                    label="Corners" 
                    homeValue={stats.corners.home} 
                    awayValue={stats.corners.away} 
                    type="count" 
                />
            </div>
        </div>
    );
};

export default MatchStats; 