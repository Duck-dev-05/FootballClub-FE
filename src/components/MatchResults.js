import React, { useState, useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './MatchResults.css';

// Sample match data
const matchesData = [
    {
        id: 1,
        homeTeam: 'FC ESCUELA',
        awayTeam: 'Valencia Academy',
        homeScore: 4,
        awayScore: 1,
        matchDate: '2024-03-15T15:00:00',
        competition: 'Youth League',
        homeLineup: {
            starting: [
                { name: 'Nguyễn Thành Đạt', position: 'GK', number: 1 },
                { name: 'Lê Vũ Nhật Minh', position: 'RB', number: 2 },
                { name: 'Nguyễn Đỗ Bảo Khánh', position: 'CB', number: 4 },
                { name: 'Nguyễn Đức Bảo Phong', position: 'LB', number: 3 },
                { name: 'Vũ Nhật Ninh', position: 'RB', number: 5 },
                { name: 'Phạm Công Toàn', position: 'LB', number: 6 },
                { name: 'Hoàng Đặng Việt Hùng', position: 'CMF', number: 8, captain: true },
                { name: 'Đỗ Quốc Khánh', position: 'AMF', number: 10 },
                { name: 'Phạm Anh Phương', position: 'SS', number: 11 },
                { name: 'Nguyễn Quang Minh Thành', position: 'SS', number: 9 },
                { name: 'Đặng Minh Việt', position: 'CF', number: 7 }
            ],
            substitutes: [
                { name: 'Trần Minh Đức', position: 'CF', number: 20 },
                { name: 'Lê Minh Tuấn', position: 'GK', number: 13 },
                { name: 'Nguyễn Văn Hùng', position: 'MF', number: 14 },
                { name: 'Trần Văn Nam', position: 'DF', number: 15 },
                { name: 'Phạm Minh Đức', position: 'FW', number: 16 },
                { name: 'Lê Quang Huy', position: 'MF', number: 17 },
                { name: 'Nguyễn Đức Anh', position: 'DF', number: 18 }
            ]
        },
        awayLineup: {
            starting: [
                { name: 'Diego Martinez', position: 'GK', number: 1 },
                { name: 'Carlos Soler', position: 'RB', number: 2 },
                { name: 'Hugo Guillamón', position: 'CB', number: 4 },
                { name: 'Cristian Rivero', position: 'CB', number: 5 },
                { name: 'Jesus Vázquez', position: 'LB', number: 3 },
                { name: 'Yunus Musah', position: 'CDM', number: 6 },
                { name: 'Javi Guerra', position: 'CM', number: 8 },
                { name: 'Pablo Gozálbez', position: 'CAM', number: 10 },
                { name: 'Diego López', position: 'LW', number: 11 },
                { name: 'Alberto Mari', position: 'ST', number: 9 },
                { name: 'Fran Pérez', position: 'RW', number: 7 }
            ],
            substitutes: [
                { name: 'Jaume Domenech', position: 'GK', number: 12 },
                { name: 'Vicente Esquerdo', position: 'MF', number: 14 },
                { name: 'Rubén Iranzo', position: 'DF', number: 15 },
                { name: 'César Tárrega', position: 'FW', number: 16 },
                { name: 'Mario Domínguez', position: 'MF', number: 17 }
            ]
        },
        summary: {
            text: 'A commanding performance from FC ESCUELA resulted in a convincing 4-1 victory over Valencia Academy. The home team dominated possession and created numerous chances, with Đỗ Quốc Khánh scoring twice and providing two assists in a masterful display.',
            keyMoments: [
                '15\' - Opening goal from Nguyễn Quang Minh Thành',
                '34\' - Đỗ Quốc Khánh doubles the lead',
                '56\' - Alberto Mari pulls one back for Valencia',
                '67\' - Trần Minh Đức restores two-goal advantage',
                '85\' - Đỗ Quốc Khánh seals the victory'
            ]
        },
        stats: {
            possession: { home: 58, away: 42 },
            shots: { home: 15, away: 8 },
            shotsOnTarget: { home: 8, away: 3 },
            corners: { home: 7, away: 2 }
        },
        events: [
            {
                time: 15,
                type: 'goal',
                team: 'home',
                player: 'Nguyễn Quang Minh Thành',
                assist: 'Đỗ Quốc Khánh',
                description: 'Powerful shot from outside the box'
            },
            {
                time: 34,
                type: 'goal',
                team: 'home',
                player: 'Đỗ Quốc Khánh',
                assist: 'Phạm Anh Phương',
                description: 'Beautiful team goal'
            },
            {
                time: 56,
                type: 'goal',
                team: 'away',
                player: 'Alberto Mari',
                assist: 'Pablo Gozálbez',
                description: 'Counter-attack finish'
            },
            {
                time: 67,
                type: 'goal',
                team: 'home',
                player: 'Trần Minh Đức',
                assist: 'Đỗ Quốc Khánh',
                description: 'Header from close range'
            },
            {
                time: 85,
                type: 'goal',
                team: 'home',
                player: 'Đỗ Quốc Khánh',
                assist: 'Hoàng Đặng Việt Hùng',
                description: 'Brilliant solo run and finish'
            }
        ]
    },
    {
        id: 2,
        homeTeam: 'Barcelona Academy',
        awayTeam: 'FC ESCUELA',
        homeScore: 2,
        awayScore: 3,
        matchDate: '2024-03-09T15:00:00',
        competition: 'Youth Champions Cup',
        stats: {
            possession: { home: 55, away: 45 },
            shots: { home: 12, away: 14 },
            shotsOnTarget: { home: 5, away: 8 },
            corners: { home: 6, away: 5 }
        },
        summary: {
            text: 'FC ESCUELA secured a memorable 3-2 away victory against Barcelona Academy in a thrilling Youth Champions Cup match. The team showed great resilience and tactical discipline to overcome a strong Barcelona side.',
            keyMoments: [
                '23\' - FC ESCUELA takes the lead through Đỗ Quốc Khánh',
                '41\' - Barcelona equalizes',
                '58\' - Nguyễn Quang Minh Thành puts FC ESCUELA ahead',
                '75\' - Barcelona levels the score',
                '88\' - Dramatic late winner from Trần Minh Đức'
            ]
        },
        events: [
            {
                time: 23,
                type: 'goal',
                team: 'away',
                player: 'Đỗ Quốc Khánh',
                assist: 'Hoàng Đặng Việt Hùng',
                description: 'Clinical finish after a swift counter'
            },
            {
                time: 41,
                type: 'goal',
                team: 'home',
                player: 'Marc Guiu',
                assist: 'Aleix Garrido',
                description: 'Powerful header from a corner'
            },
            {
                time: 58,
                type: 'goal',
                team: 'away',
                player: 'Nguyễn Quang Minh Thành',
                assist: 'Đỗ Quốc Khánh',
                description: 'Brilliant team move and finish'
            },
            {
                time: 75,
                type: 'goal',
                team: 'home',
                player: 'Lamine Yamal',
                description: 'Solo effort from the edge of the box'
            },
            {
                time: 88,
                type: 'goal',
                team: 'away',
                player: 'Trần Minh Đức',
                assist: 'Phạm Anh Phương',
                description: 'Dramatic late winner on the counter'
            }
        ]
    },
    {
        id: 3,
        homeTeam: 'FC ESCUELA',
        awayTeam: 'University of Sports Science',
        homeScore: 3,
        awayScore: 0,
        matchDate: '2024-03-02T15:00:00',
        competition: 'Youth League',
        stats: {
            possession: { home: 62, away: 38 },
            shots: { home: 16, away: 6 },
            shotsOnTarget: { home: 9, away: 2 },
            corners: { home: 8, away: 3 }
        },
        summary: {
            text: 'FC ESCUELA dominated the match against University of Sports Science with a commanding 3-0 victory. The team showcased their technical superiority and tactical discipline throughout the game.',
            keyMoments: [
                '22\' - Opening goal from Đỗ Quốc Khánh',
                '45\' - Penalty saved by Nguyễn Thành Đạt',
                '67\' - Nguyễn Quang Minh Thành doubles the lead',
                '82\' - Trần Minh Đức seals the victory'
            ]
        },
        events: [
            {
                time: 22,
                type: 'goal',
                team: 'home',
                player: 'Đỗ Quốc Khánh',
                assist: 'Hoàng Đặng Việt Hùng',
                description: 'Brilliant finish after a team move'
            },
            {
                time: 45,
                type: 'save',
                team: 'home',
                player: 'Nguyễn Thành Đạt',
                description: 'Penalty save to maintain the lead'
            },
            {
                time: 67,
                type: 'goal',
                team: 'home',
                player: 'Nguyễn Quang Minh Thành',
                assist: 'Đỗ Quốc Khánh',
                description: 'Clinical counter-attack finish'
            },
            {
                time: 82,
                type: 'goal',
                team: 'home',
                player: 'Trần Minh Đức',
                assist: 'Phạm Anh Phương',
                description: 'Powerful header from a corner'
            }
        ]
    }
];

const playerData = [
    { name: 'Nguyễn Thành Đạt', position: 'GK', number: 1 },
    { name: 'Lê Vũ Nhật Minh', position: 'CB', number: 4 },
    { name: 'Nguyễn Đỗ Bảo Khánh', position: 'CB', number: 5 },
    { name: 'Nguyễn Đức Bảo Phong', position: 'CB', number: 6 },
    { name: 'Vũ Nhật Ninh', position: 'RB', number: 2 },
    { name: 'Phạm Công Toàn', position: 'LB', number: 3 },
    { name: 'Hoàng Đặng Việt Hùng', position: 'CDM', number: 8 },
    { name: 'Đỗ Quốc Khánh', position: 'AMF', number: 10 },
    { name: 'Phạm Anh Phương', position: 'LW', number: 11 },
    { name: 'Nguyễn Quang Minh Thành', position: 'CF', number: 9 },
    { name: 'Đặng Minh Việt', position: 'RW', number: 7 },
    { name: 'Trần Minh Đức', position: 'CF', number: 20 }
];

const TeamScore = ({ team, score, isHome }) => (
    <div className={`team ${isHome ? 'home-team' : 'away-team'}`}>
        <div className="team-info">
            <div className="team-logo">
                <img src={`/logos/${team.toLowerCase().replace(' ', '-')}.png`} alt={team} />
            </div>
            <h3>{team}</h3>
        </div>
        <div className="score">{score}</div>
    </div>
);

const ScoreBoard = ({ homeTeam, awayTeam, homeScore, awayScore, matchDate, competition }) => (
    <div className="score-board">
        <div className="match-info">
            <span className="match-date">{matchDate}</span>
            <span className="competition-name">{competition}</span>
        </div>
        <div className="score-container">
            <TeamScore team={homeTeam} score={homeScore} isHome={true} />
            <div className="score-divider">-</div>
            <TeamScore team={awayTeam} score={awayScore} isHome={false} />
        </div>
        <div className="match-status">
            <span className="status-indicator">Full Time</span>
        </div>
    </div>
);

const MatchEvent = ({ event }) => {
    const eventIcons = {
        goal: '⚽',
        yellow: '🟨',
        red: '🟥',
        substitution: '🔄',
        injury: '🚑',
        var: '📺'
    };

    return (
        <li className={`event-item ${event.type}`}>
            <div className="event-time-container">
                <span className="event-time">{event.time}'</span>
                {event.addedTime && <span className="added-time">+{event.addedTime}</span>}
            </div>
            <span className="event-icon" title={event.type}>
                {eventIcons[event.type] || '•'}
            </span>
            <div className="event-details">
                <strong>{event.player}</strong>
                <span className="event-description">{event.description}</span>
                {event.assist && (
                    <span className="assist-info">
                        Assist: <strong>{event.assist}</strong>
                    </span>
                )}
            </div>
        </li>
    );
};

const MatchEvents = ({ events }) => (
    <div className="match-events">
        <h3>Match Timeline</h3>
        <div className="timeline-container">
            <div className="timeline-periods">
                <span className="period">First Half</span>
                <span className="period">Second Half</span>
            </div>
            <ul className="events-list">
                {events.map((event, index) => (
                    <MatchEvent key={index} event={event} />
                ))}
            </ul>
        </div>
    </div>
);

const StatBar = ({ label, homeValue, awayValue, type = 'percentage' }) => {
    const total = type === 'percentage' ? 100 : homeValue + awayValue;
    const homeWidth = (homeValue / total) * 100;
    const awayWidth = (awayValue / total) * 100;

    return (
        <div className="stat-item">
            <label>{label}</label>
            <div className="stat-bar-container">
                <div className="stat-values">
                    <span className="home-value">{homeValue}{type === 'percentage' ? '%' : ''}</span>
                    <span className="away-value">{awayValue}{type === 'percentage' ? '%' : ''}</span>
                </div>
                <div className="stat-bar">
                    <div className="stat-bar-home" style={{ width: `${homeWidth}%` }} />
                    <div className="stat-bar-away" style={{ width: `${awayWidth}%` }} />
                </div>
            </div>
        </div>
    );
};

const MatchStats = ({ stats }) => (
    <div className="match-stats">
        <h3>Match Statistics</h3>
        <div className="stats-grid">
            <StatBar 
                label="Possession" 
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

const CompetitionFilter = ({ competitions, selected, onSelect }) => (
    <div className="competition-filter">
        <h3>Filter by Competition</h3>
        <div className="filter-buttons">
            {competitions.map((competition) => (
                <button
                    key={competition}
                    className={`filter-btn ${selected === competition ? 'active' : ''}`}
                    onClick={() => onSelect(competition)}
                >
                    {competition === 'all' ? 'All Competitions' : competition}
                </button>
            ))}
        </div>
    </div>
);

const MatchSummary = ({ summary }) => (
    <div className="match-summary">
        <h3>Match Summary</h3>
        <p className="summary-text">{summary.text}</p>
        <div className="key-moments">
            <h4>Key Moments</h4>
            <ul>
                {summary.keyMoments.map((moment, index) => (
                    <li key={index}>{moment}</li>
                ))}
            </ul>
        </div>
    </div>
);

const MatchResults = () => {
    const { matchId } = useParams();
    const navigate = useNavigate();
    const [selectedCompetition, setSelectedCompetition] = useState('all');
    const competitions = ['all', 'Youth League', 'Youth Champions Cup', 'International Friendly'];

    // Add console logging to debug the matchId
    console.log('Current matchId:', matchId);
    console.log('Available matches:', matchesData.map(m => m.id));

    // Find the match data based on the matchId (convert string to number)
    const match = matchesData.find(m => m.id === Number(matchId));
    console.log('Found match:', match);

    const handleBack = () => {
        navigate(`/matches/report/${matchId}`); // Navigate to match report page
    };

    const formattedDate = useMemo(() => {
        if (!match) return '';
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(match.matchDate).toLocaleDateString('en-US', options);
    }, [match]);

    if (!match) {
        return (
            <div className="match-results">
                <div className="navigation-bar">
                    <button onClick={() => navigate('/matches')} className="back-button">
                        <FaArrowLeft /> Back to Matches
                    </button>
                </div>
                <div className="match-not-found">
                    <h2>Match not found</h2>
                    <p>The match with ID {matchId} could not be found.</p>
                    <Link to="/matches" className="btn-back">
                        View All Matches
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="match-results">
            <div className="navigation-bar">
                <button onClick={handleBack} className="back-button">
                    <FaArrowLeft /> Back to Match Report
                </button>
            </div>

            <header className="results-header">
                <h1>Match Statistics</h1>
                <p>Detailed performance analysis and statistics</p>
            </header>

            <div className="match-content">
                <div className="match-main">
                    <ScoreBoard 
                        homeTeam={match.homeTeam} 
                        awayTeam={match.awayTeam} 
                        homeScore={match.homeScore} 
                        awayScore={match.awayScore}
                        matchDate={formattedDate}
                        competition={match.competition}
                    />
                    <MatchSummary summary={match.summary} />
                    <MatchStats stats={match.stats} />
                    <MatchEvents events={match.events} />
                </div>

                <aside className="match-sidebar">
                    <CompetitionFilter 
                        competitions={competitions}
                        selected={selectedCompetition}
                        onSelect={setSelectedCompetition}
                    />
                    <div className="match-actions">
                        <Link to={`/matches/report/${match.id}`} className="btn-report">
                            View Full Report
                        </Link>
                        <Link to={`/matches/highlights/${match.id}`} className="btn-highlights">
                            Watch Highlights
                        </Link>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default MatchResults; 