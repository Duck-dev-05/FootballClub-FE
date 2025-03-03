import React from 'react';
import './CoachingStaff.css';

const CoachingStaff = () => {
  const coaches = [
    {
      name: "John Smith",
      position: "Head Coach",
      experience: "15+ years",
      image: "https://via.placeholder.com/150",
      bio: "Former professional player with extensive coaching experience in top-tier leagues."
    },
    {
      name: "Sarah Johnson",
      position: "Assistant Coach",
      experience: "10+ years",
      image: "https://via.placeholder.com/150",
      bio: "Specializes in player development and tactical analysis."
    },
    {
      name: "Mike Wilson",
      position: "Fitness Coach",
      experience: "8+ years",
      image: "https://via.placeholder.com/150",
      bio: "Certified strength and conditioning specialist with focus on injury prevention."
    }
  ];

  return (
    <div className="coaching-staff-container">
      <h1>Our Coaching Staff</h1>
      <div className="coaches-grid">
        {coaches.map((coach, index) => (
          <div key={index} className="coach-card">
            <img src={coach.image} alt={coach.name} className="coach-image" />
            <div className="coach-info">
              <h2>{coach.name}</h2>
              <h3>{coach.position}</h3>
              <p className="experience">Experience: {coach.experience}</p>
              <p className="bio">{coach.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachingStaff; 