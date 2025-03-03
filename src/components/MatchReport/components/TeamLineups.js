import React from 'react';
import './TeamLineups.css';

const TeamLineups = ({ homeTeam, awayTeam, homeLineup, awayLineup }) => {
    return (
        <section className="team-lineups">
            <h3>Team Lineups</h3>
            <div className="lineups-container">
                <div className="lineup home-lineup">
                    <h4>{homeTeam}</h4>
                    <div className="starting-eleven">
                        <h5>Starting XI</h5>
                        <ul>
                            {homeLineup.starting.map((player, index) => (
                                <li key={index}>
                                    <span className="player-number">{player.number}</span>
                                    <span className="player-name">{player.name}</span>
                                    <span className="player-position">{player.position}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="substitutes">
                        <h5>Substitutes</h5>
                        <ul>
                            {homeLineup.substitutes.map((player, index) => (
                                <li key={index}>
                                    <span className="player-number">{player.number}</span>
                                    <span className="player-name">{player.name}</span>
                                    <span className="player-position">{player.position}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="lineup away-lineup">
                    <h4>{awayTeam}</h4>
                    <div className="starting-eleven">
                        <h5>Starting XI</h5>
                        <ul>
                            {awayLineup.starting.map((player, index) => (
                                <li key={index}>
                                    <span className="player-number">{player.number}</span>
                                    <span className="player-name">{player.name}</span>
                                    <span className="player-position">{player.position}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="substitutes">
                        <h5>Substitutes</h5>
                        <ul>
                            {awayLineup.substitutes.map((player, index) => (
                                <li key={index}>
                                    <span className="player-number">{player.number}</span>
                                    <span className="player-name">{player.name}</span>
                                    <span className="player-position">{player.position}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamLineups; 