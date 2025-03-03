import React, { useState } from 'react';
import './TrainingPrograms.css';

const TrainingPrograms = () => {
  const [activeProgram, setActiveProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: "Youth Development",
      ageGroup: "Ages 6-12",
      description: "Foundation skills development program focusing on basic techniques and love for the game.",
      schedule: "Monday & Wednesday, 4:00 PM - 5:30 PM",
      features: [
        "Basic ball control",
        "Passing techniques",
        "Game awareness",
        "Team play basics"
      ]
    },
    {
      id: 2,
      title: "Elite Performance",
      ageGroup: "Ages 13-17",
      description: "Advanced training program for competitive players aiming for excellence.",
      schedule: "Tuesday & Thursday, 5:00 PM - 7:00 PM",
      features: [
        "Advanced tactics",
        "Physical conditioning",
        "Match strategy",
        "Technical refinement"
      ]
    },
    {
      id: 3,
      title: "Adult Fitness",
      ageGroup: "Ages 18+",
      description: "Recreational program combining football skills with fitness training.",
      schedule: "Saturday, 9:00 AM - 11:00 AM",
      features: [
        "Cardio workouts",
        "Skills maintenance",
        "Friendly matches",
        "Fitness assessment"
      ]
    }
  ];

  const toggleProgram = (id) => {
    setActiveProgram(activeProgram === id ? null : id);
  };

  return (
    <div className="training-programs-container">
      <h1>Training Programs</h1>
      <div className="programs-grid">
        {programs.map((program) => (
          <div 
            key={program.id} 
            className={`program-card ${activeProgram === program.id ? 'active' : ''}`}
            onClick={() => toggleProgram(program.id)}
          >
            <div className="program-header">
              <h2>{program.title}</h2>
              <span className="age-group">{program.ageGroup}</span>
            </div>
            <p className="description">{program.description}</p>
            <div className="schedule">
              <strong>Schedule:</strong> {program.schedule}
            </div>
            <div className={`features ${activeProgram === program.id ? 'show' : ''}`}>
              <h3>Program Features:</h3>
              <ul>
                {program.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPrograms; 