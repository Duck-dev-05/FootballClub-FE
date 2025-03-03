import React from 'react';
import './ClubHistory.css';

const ClubHistory = () => {
  const milestones = [
    {
      year: "1950",
      title: "Club Foundation",
      description: "Our club was established by a group of passionate football enthusiasts with a vision to develop local talent.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      year: "1965",
      title: "First Major Trophy",
      description: "Won our first regional championship, marking the beginning of a successful era.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      year: "1980",
      title: "Youth Academy Launch",
      description: "Established our renowned youth academy, which has produced numerous professional players.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      year: "1995",
      title: "Stadium Inauguration",
      description: "Opened our modern stadium with state-of-the-art facilities to accommodate our growing fanbase.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      year: "2010",
      title: "International Recognition",
      description: "Achieved international status with participation in continental championships.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      year: "2020",
      title: "Modern Era",
      description: "Continuing our legacy of excellence with modern training facilities and professional development programs.",
      image: "https://via.placeholder.com/400x250"
    }
  ];

  return (
    <div className="club-history-container">
      <h1>Our Club History</h1>
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="year">{milestone.year}</div>
              <img src={milestone.image} alt={milestone.title} className="timeline-image" />
              <h2>{milestone.title}</h2>
              <p>{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubHistory; 