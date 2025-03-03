import React from 'react';
import './ClubOverview.css';
import Team from '../asset/image/Team.jpg';

const ClubOverview = () => {
    const clubStats = [
        { label: 'Founded', value: '1950' },
        { label: 'Home Ground', value: 'Victory Stadium' },
        { label: 'League', value: 'Premier Division' },
        { label: 'Club Colors', value: 'Blue and White' },
        { label: 'Members', value: '1,000+' }
    ];

    const achievements = [
        { year: '2023', title: 'League Champions', description: 'Won the Premier Division title' },
        { year: '2022', title: 'Cup Winners', description: 'Regional Cup Champions' },
        { year: '2021', title: 'Youth Development', description: 'Best Youth Academy Award' },
        { year: '2020', title: 'Community Award', description: 'Outstanding Community Engagement' }
    ];

    return (
        <div className="club-overview">
            <header className="club-header">
                <div className="header-content">
                    <h1>Welcome to Our Football Club</h1>
                    <p className="subtitle">A Legacy of Excellence Since 1950</p>
                </div>
            </header>

            <section id="about" className="club-intro">
                <div className="intro-content">
                    <div className="intro-text">
                        <h2>About Our Club</h2>
                        <p>
                            Founded in 1950, our football club has been at the heart of the community
                            for over seven decades. We pride ourselves on developing talented players,
                            promoting sportsmanship, and creating an inclusive environment for all
                            football enthusiasts.
                        </p>
                    </div>
                    <div className="team-image">
                        <img src={Team} alt="Our Team" />
                    </div>
                </div>

                <div className="club-stats">
                    <div className="stats-grid">
                        {clubStats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <h3>{stat.label}</h3>
                                <p>{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="values" className="club-values">
                <h2>Our Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>Excellence</h3>
                        <p>Striving for the highest standards in everything we do</p>
                    </div>
                    <div className="value-card">
                        <h3>Community</h3>
                        <p>Building strong connections with our local community</p>
                    </div>
                    <div className="value-card">
                        <h3>Development</h3>
                        <p>Nurturing talent and supporting player growth</p>
                    </div>
                    <div className="value-card">
                        <h3>Integrity</h3>
                        <p>Maintaining the highest standards of sportsmanship</p>
                    </div>
                </div>
            </section>

            <section id="achievements" className="achievements-section">
                <h2>Club Achievements</h2>
                <div className="achievements-timeline">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="achievement-card">
                            <div className="achievement-year">{achievement.year}</div>
                            <div className="achievement-content">
                                <h3>{achievement.title}</h3>
                                <p>{achievement.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="facilities" className="facilities-section">
                <h2>Our Facilities</h2>
                <div className="facilities-grid">
                    <div className="facility-card">
                        <h3>Main Stadium</h3>
                        <p>5,000 capacity stadium with modern amenities</p>
                    </div>
                    <div className="facility-card">
                        <h3>Training Ground</h3>
                        <p>State-of-the-art training facilities and equipment</p>
                    </div>
                    <div className="facility-card">
                        <h3>Youth Academy</h3>
                        <p>Dedicated facilities for youth development</p>
                    </div>
                    <div className="facility-card">
                        <h3>Club House</h3>
                        <p>Modern clubhouse with gym and medical facilities</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClubOverview; 