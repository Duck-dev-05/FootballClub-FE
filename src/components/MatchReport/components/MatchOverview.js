import React from 'react';
import '../styles/MatchOverview.css';

const MatchOverview = ({ homeTeam, awayTeam, homeScore, awayScore }) => {
    return (
        <section className="match-overview">
            <div className="teams-container">
                <div className="team home-team">
                    <div className="team-logo">
                        <img src={homeTeam.logo} alt={homeTeam.name} />
                    </div>
                    <h2>{homeTeam.name}</h2>
                    <div className="score">{homeScore}</div>
                </div>
                
                <div className="score-divider">
                    <span>vs</span>
                </div>
                
                <div className="team away-team">
                    <div className="team-logo">
                        <img src={awayTeam.logo} alt={awayTeam.name} />
                    </div>
                    <h2>{awayTeam.name}</h2>
                    <div className="score">{awayScore}</div>
                </div>
            </div>
        </section>
    );
};

export default MatchOverview; 