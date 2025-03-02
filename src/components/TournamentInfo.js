import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TournamentInfo.css';

const TournamentInfo = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('upcoming');

    const upcomingTournaments = [
        {
            name: "Youth Champions Cup 2024",
            date: "March 15-17, 2024",
            location: "Main Stadium Complex",
            ageGroups: ["U12", "U14", "U16"],
            registrationDeadline: "March 1, 2024",
            entryFee: "€150 per team",
            description: "Annual youth tournament featuring teams from across the region",
            format: "Group stage followed by knockout rounds",
            prizes: "Trophies and medals for winners and runners-up"
        },
        {
            name: "Summer Elite Tournament",
            date: "July 5-7, 2024",
            location: "Training Ground Complex",
            ageGroups: ["U16", "U18"],
            registrationDeadline: "June 20, 2024",
            entryFee: "€200 per team",
            description: "Elite youth tournament with international participation",
            format: "Round-robin followed by playoffs",
            prizes: "Cash prizes and trophies for top teams"
        },
        {
            name: "Regional Youth League Finals",
            date: "May 25-26, 2024",
            location: "City Sports Park",
            ageGroups: ["U12", "U14", "U16", "U18"],
            registrationDeadline: "Qualification based",
            entryFee: "Covered by league registration",
            description: "Season-ending tournament for top teams in each age group",
            format: "Semi-finals and finals",
            prizes: "League trophies and individual awards"
        }
    ];

    const pastTournaments = [
        {
            name: "Winter Youth Cup 2023",
            date: "December 8-10, 2023",
            winners: {
                "U12": "FC Escuela Blue",
                "U14": "Real Madrid Academy",
                "U16": "FC Barcelona Youth"
            },
            highlights: "Record participation with 32 teams",
            topScorer: "Alex Martinez (U14) - 8 goals"
        },
        {
            name: "Autumn Development Tournament",
            date: "October 15-16, 2023",
            winners: {
                "U16": "FC Escuela Red",
                "U18": "Ajax Youth Academy"
            },
            highlights: "International teams from 5 countries",
            topScorer: "James Wilson (U18) - 6 goals"
        },
        {
            name: "Summer Cup 2023",
            date: "July 7-9, 2023",
            winners: {
                "U12": "Manchester City Academy",
                "U14": "FC Escuela White",
                "U16": "PSG Youth"
            },
            highlights: "Featured live streaming of all matches",
            topScorer: "Lucas Silva (U16) - 7 goals"
        }
    ];

    const registrationProcess = [
        {
            step: 1,
            title: "Check Eligibility",
            description: "Verify age group requirements and team composition rules"
        },
        {
            step: 2,
            title: "Submit Application",
            description: "Complete the online registration form with team details"
        },
        {
            step: 3,
            title: "Payment",
            description: "Process the tournament entry fee"
        },
        {
            step: 4,
            title: "Documentation",
            description: "Submit player IDs and medical clearances"
        },
        {
            step: 5,
            title: "Confirmation",
            description: "Receive tournament schedule and information pack"
        }
    ];

    const handleRegister = (tournamentName) => {
        // Create a URL-friendly tournament ID from the name
        const tournamentId = tournamentName.toLowerCase().replace(/\s+/g, '-');
        navigate(`/matches/tournaments/register/${tournamentId}`);
    };

    return (
        <div className="tournament-info">
            <header className="tournament-header">
                <h1>Tournament Information</h1>
                <p>Compete at the highest youth level</p>
            </header>

            <div className="tab-navigation">
                <button 
                    className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
                    onClick={() => setActiveTab('upcoming')}
                >
                    Upcoming Tournaments
                </button>
                <button 
                    className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
                    onClick={() => setActiveTab('past')}
                >
                    Past Results
                </button>
                <button 
                    className={`tab-button ${activeTab === 'registration' ? 'active' : ''}`}
                    onClick={() => setActiveTab('registration')}
                >
                    Registration Info
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 'upcoming' && (
                    <div className="upcoming-tournaments">
                        {upcomingTournaments.map((tournament, index) => (
                            <div key={index} className="tournament-card">
                                <h2>{tournament.name}</h2>
                                <div className="tournament-details">
                                    <div className="detail-row">
                                        <span className="label">Date:</span>
                                        <span>{tournament.date}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="label">Location:</span>
                                        <span>{tournament.location}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="label">Age Groups:</span>
                                        <span>{tournament.ageGroups.join(", ")}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="label">Registration Deadline:</span>
                                        <span>{tournament.registrationDeadline}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="label">Entry Fee:</span>
                                        <span>{tournament.entryFee}</span>
                                    </div>
                                </div>
                                <p className="tournament-description">{tournament.description}</p>
                                <div className="tournament-format">
                                    <h3>Tournament Format</h3>
                                    <p>{tournament.format}</p>
                                </div>
                                <div className="tournament-prizes">
                                    <h3>Prizes</h3>
                                    <p>{tournament.prizes}</p>
                                </div>
                                <button 
                                    className="register-button"
                                    onClick={() => handleRegister(tournament.name)}
                                >
                                    Register Now
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'past' && (
                    <div className="past-tournaments">
                        {pastTournaments.map((tournament, index) => (
                            <div key={index} className="tournament-card">
                                <h2>{tournament.name}</h2>
                                <div className="tournament-date">{tournament.date}</div>
                                <div className="winners-section">
                                    <h3>Winners</h3>
                                    {Object.entries(tournament.winners).map(([category, winner]) => (
                                        <div key={category} className="winner-row">
                                            <span className="category">{category}:</span>
                                            <span className="winner">{winner}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="tournament-highlights">
                                    <h3>Highlights</h3>
                                    <p>{tournament.highlights}</p>
                                </div>
                                <div className="top-scorer">
                                    <h3>Top Scorer</h3>
                                    <p>{tournament.topScorer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'registration' && (
                    <div className="registration-info">
                        <div className="registration-process">
                            <h2>Registration Process</h2>
                            <div className="process-steps">
                                {registrationProcess.map((step) => (
                                    <div key={step.step} className="process-step">
                                        <div className="step-number">{step.step}</div>
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="registration-notes">
                            <h2>Important Notes</h2>
                            <ul>
                                <li>Early bird discounts available for registrations 1 month before deadline</li>
                                <li>All players must have valid ID and medical clearance</li>
                                <li>Maximum squad size of 18 players per team</li>
                                <li>Age verification will be conducted before tournament</li>
                                <li>Tournament rules and regulations will be provided upon registration</li>
                            </ul>
                        </div>

                        <div className="contact-support">
                            <h2>Need Help?</h2>
                            <p>Contact our tournament support team:</p>
                            <p>Email: tournaments@fcescuela.com</p>
                            <p>Phone: +34 123 456 789</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TournamentInfo; 