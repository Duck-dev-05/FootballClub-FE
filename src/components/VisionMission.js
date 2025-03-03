import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "Striving for the highest standards in everything we do, both on and off the field."
    },
    {
      icon: "🤝",
      title: "Unity",
      description: "Building strong relationships within our team and community through collaboration and respect."
    },
    {
      icon: "💪",
      title: "Determination",
      description: "Showing unwavering commitment to achieve our goals and overcome challenges."
    },
    {
      icon: "🌱",
      title: "Development",
      description: "Fostering growth and nurturing talent at all levels of the club."
    }
  ];

  return (
    <div className="vision-mission-container">
      <section className="vision-section">
        <h1>Our Vision & Mission</h1>
        <div className="vision-mission-content">
          <div className="vision-box">
            <h2>Vision</h2>
            <p>
              To be a leading football club that inspires excellence, unity, and passion 
              while making a positive impact in our community and beyond.
            </p>
          </div>
          <div className="mission-box">
            <h2>Mission</h2>
            <p>
              We are committed to developing exceptional football talent, promoting 
              sportsmanship, and creating an inclusive environment where players can 
              thrive and achieve their full potential.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="goals-section">
        <h2>Strategic Goals</h2>
        <div className="goals-list">
          <div className="goal-item">
            <span className="goal-number">01</span>
            <p>Achieve consistent success in domestic and international competitions</p>
          </div>
          <div className="goal-item">
            <span className="goal-number">02</span>
            <p>Develop world-class youth academy programs</p>
          </div>
          <div className="goal-item">
            <span className="goal-number">03</span>
            <p>Expand our community engagement and social impact initiatives</p>
          </div>
          <div className="goal-item">
            <span className="goal-number">04</span>
            <p>Maintain financial sustainability and responsible growth</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission; 