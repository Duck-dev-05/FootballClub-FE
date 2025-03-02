import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaChartBar } from 'react-icons/fa';
import { useMatchData } from './hooks/useMatchData';
import { formatDate } from './utils/dateUtils';

// Component imports
import MatchHeader from './components/MatchHeader';
import MatchOverview from './components/MatchOverview';
import TeamLineups from './components/TeamLineups';
import MatchTimeline from './components/MatchTimeline';
import MatchStats from './components/MatchStats';
import MatchAnalysis from './components/MatchAnalysis';

// Styles
import './styles/MatchReport.css';

const MatchReport = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { match, loading, error } = useMatchData(id);

    const handleBack = () => {
        navigate(-1); // This will go back to the previous page
    };

    if (loading) {
        return (
            <div className="match-report">
                <div className="back-navigation">
                    <button onClick={handleBack} className="back-button">
                        <FaArrowLeft /> Back to Results
                    </button>
                </div>
                <div className="match-report-loading">
                    <div className="loading-spinner"></div>
                    <p>Loading match details...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="match-report">
                <div className="back-navigation">
                    <button onClick={handleBack} className="back-button">
                        <FaArrowLeft /> Back to Results
                    </button>
                </div>
                <div className="match-report-error">
                    <h2>Error loading match</h2>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    if (!match) {
        return (
            <div className="match-report">
                <div className="back-navigation">
                    <button onClick={handleBack} className="back-button">
                        <FaArrowLeft /> Back to Results
                    </button>
                </div>
                <div className="match-report-not-found">
                    <h2>Match not found</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="match-report">
            <div className="navigation-bar">
                <button onClick={handleBack} className="back-button">
                    <FaArrowLeft /> Back to Results
                </button>
                <Link to={`/matches/match-result/${id}`} className="view-stats-button">
                    <FaChartBar /> View Detailed Stats
                </Link>
            </div>

            <MatchHeader 
                competition={match.competition}
                date={match.matchDate}
                status={match.status}
            />

            <MatchOverview 
                homeTeam={{
                    name: match.homeTeam,
                    logo: match.homeTeamLogo
                }}
                awayTeam={{
                    name: match.awayTeam,
                    logo: match.awayTeamLogo
                }}
                homeScore={match.homeScore}
                awayScore={match.awayScore}
            />

            <TeamLineups 
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                homeLineup={match.homeLineup}
                awayLineup={match.awayLineup}
            />

            <MatchTimeline 
                events={match.events}
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
            />

            <MatchStats 
                stats={match.stats}
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
            />

            <MatchAnalysis 
                summary={match.summary}
                keyMoments={match.keyMoments}
            />
        </div>
    );
};

export default MatchReport; 