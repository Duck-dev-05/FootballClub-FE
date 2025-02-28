import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
    const players = [
        {
            name: 'David Martinez',
            position: 'Forward',
            number: '9',
            stats: {
                matches: '28',
                goals: '22',
                assists: '8'
            },
            description: 'Our leading striker with exceptional finishing ability.'
        },
        {
            name: 'Carlos Rodriguez',
            position: 'Midfielder',
            number: '8',
            stats: {
                matches: '30',
                goals: '6',
                assists: '15'
            },
            description: 'Creative midfielder known for his precise passing.'
        },
        {
            name: 'James Wilson',
            position: 'Defender',
            number: '4',
            stats: {
                matches: '29',
                goals: '2',
                assists: '3'
            },
            description: 'Solid center-back and team captain.'
        },
        {
            name: 'Michael Chen',
            position: 'Goalkeeper',
            number: '1',
            stats: {
                matches: '30',
                cleanSheets: '12',
                saves: '89'
            },
            description: 'Experienced goalkeeper with excellent reflexes.'
        }
    ];

    const teamCategories = [
        { name: 'First Team', count: '25 Players' },
        { name: 'Under-23', count: '18 Players' },
        { name: 'Under-18', count: '22 Players' },
        { name: 'Women\'s Team', count: '23 Players' }
    ];

    return (
        <div className="our-team">
            <header className="team-header">
                <h1>Our Team</h1>
                <p>Meet the players who make our club special</p>
            </header>

            <section className="team-categories">
                <h2>Team Structure</h2>
                <div className="category-grid">
                    {teamCategories.map((category, index) => (
                        <div key={index} className="category-card">
                            <h3>{category.name}</h3>
                            <p>{category.count}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="featured-players">
                <h2>Featured Players</h2>
                <div className="players-grid">
                    {players.map((player, index) => (
                        <div key={index} className="player-card">
                            <div className="player-number">#{player.number}</div>
                            <div className="player-info">
                                <h3>{player.name}</h3>
                                <span className="position">{player.position}</span>
                                <p className="description">{player.description}</p>
                                <div className="stats">
                                    {Object.entries(player.stats).map(([key, value], i) => (
                                        <div key={i} className="stat">
                                            <span className="stat-value">{value}</span>
                                            <span className="stat-label">{key}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="team-philosophy">
                <h2>Team Philosophy</h2>
                <div className="philosophy-content">
                    <div className="philosophy-card">
                        <h3>Development</h3>
                        <p>We believe in nurturing talent from grassroots to professional level</p>
                    </div>
                    <div className="philosophy-card">
                        <h3>Excellence</h3>
                        <p>Striving for the highest standards in training and performance</p>
                    </div>
                    <div className="philosophy-card">
                        <h3>Unity</h3>
                        <p>Building strong team spirit and collective achievement</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurTeam; 