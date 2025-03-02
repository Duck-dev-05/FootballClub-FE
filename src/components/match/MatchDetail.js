import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import MatchStats from './components/MatchStats';
import MatchEvents from './components/MatchEvents';
import './MatchDetail.css';

const MatchDetail = ({ matches, teamLogos }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const match = matches.find(m => m.id === parseInt(id));

    if (!match) {
        return (
            <div className="match-not-found">
                <h2>Match not found</h2>
                <button onClick={() => navigate('/matches')} className="back-button">
                    <FaArrowLeft /> Back to Matches
                </button>
            </div>
        );
    }

    const getTeamLogo = (teamName) => {
        return teamLogos[teamName] || `https://via.placeholder.com/64/1e3c72/ffffff?text=${teamName.charAt(0)}`;
    };

    const formattedDate = new Date(match.matchDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div className="match-detail">
            <button onClick={() => navigate('/matches')} className="back-button">
                <FaArrowLeft /> Back to Matches
            </button>

            <div className="match-header">
                <div className="match-meta">
                    <h2>{match.competition}</h2>
                    <div className="match-date">{formattedDate}</div>
                </div>

                <div className="match-teams">
                    <div className="team home">
                        <img src={getTeamLogo(match.homeTeam)} alt={match.homeTeam} className="team-logo" />
                        <h3 className="team-name">{match.homeTeam}</h3>
                    </div>
                    
                    <div className="match-score">
                        <span className="score">{match.homeScore}</span>
                        <span className="separator">-</span>
                        <span className="score">{match.awayScore}</span>
                    </div>

                    <div className="team away">
                        <img src={getTeamLogo(match.awayTeam)} alt={match.awayTeam} className="team-logo" />
                        <h3 className="team-name">{match.awayTeam}</h3>
                    </div>
                </div>
            </div>

            {match.summary && (
                <div className="match-summary">
                    <h3>Match Summary</h3>
                    <p>{match.summary.text}</p>
                    {match.summary.keyMoments && (
                        <div className="key-moments">
                            <h4>Key Moments</h4>
                            <ul>
                                {match.summary.keyMoments.map((moment, index) => (
                                    <li key={index}>{moment}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            <MatchEvents events={match.events} />
            <MatchStats stats={match.stats} />
        </div>
    );
};

export default MatchDetail; 