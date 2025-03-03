import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';
import './MatchCard.css';

const MatchCard = ({ match, teamLogos }) => {
    const formattedDate = new Date(match.matchDate).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });

    const getTeamLogo = (teamName) => {
        return teamLogos[teamName] || `https://via.placeholder.com/48/1e3c72/ffffff?text=${teamName.charAt(0)}`;
    };

    const getMatchResult = (homeScore, awayScore) => {
        if (homeScore > awayScore) return 'win';
        if (homeScore < awayScore) return 'loss';
        return 'draw';
    };

    const result = getMatchResult(match.homeScore, match.awayScore);

    return (
        <Link to={`/matches/${match.id}`} className={`match-card ${result}`}>
            <div className="match-meta">
                <div className="match-competition">
                    <FaTrophy />
                    <span>{match.competition}</span>
                </div>
                <div className="match-date">
                    <FaCalendarAlt />
                    <span>{formattedDate}</span>
                </div>
            </div>

            <div className="match-content">
                <div className="team-section">
                    <div className="team home">
                        <img src={getTeamLogo(match.homeTeam)} alt={match.homeTeam} className="team-logo" />
                        <span className="team-name">{match.homeTeam}</span>
                    </div>
                    <div className="score">
                        <span className="score-number">{match.homeScore}</span>
                        <span className="score-divider">-</span>
                        <span className="score-number">{match.awayScore}</span>
                    </div>
                    <div className="team away">
                        <img src={getTeamLogo(match.awayTeam)} alt={match.awayTeam} className="team-logo" />
                        <span className="team-name">{match.awayTeam}</span>
                    </div>
                </div>
                <div className="match-details">
                    <FaChevronRight />
                </div>
            </div>
        </Link>
    );
};

export default MatchCard; 