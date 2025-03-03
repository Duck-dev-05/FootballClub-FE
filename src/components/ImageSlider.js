import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

// Import all images
import Team from '../asset/image/Team.jpg';
import DSC_0001 from '../asset/image/DSC_0001.jpg';
import DSC_0002 from '../asset/image/DSC_0002.jpg';
import DSC_0003 from '../asset/image/DSC_0003.jpg';
import DSC_0006 from '../asset/image/DSC_0006.jpg';
import DSC_0007 from '../asset/image/DSC_0007.jpg';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: Team,
            title: 'Trophy Cabinet',
            subtitle: 'A legacy of success and championship',
            isWhite: true // This slide will have white text and overlay
        },
        {
            image: DSC_0001,
            title: 'Training Excellence',
            subtitle: 'Where champions are made',
            isWhite: false
        },
        {
            image: DSC_0002,
            title: 'Youth Development',
            subtitle: 'Building the future of football',
            isWhite: false
        },
        {
            image: DSC_0003,
            title: 'Team Spirit',
            subtitle: 'Unity makes strength',
            isWhite: false
        },
        {
            image: DSC_0006,
            title: 'Professional Coaching',
            subtitle: 'Learn from the best',
            isWhite: false
        },
        {
            image: DSC_0007,
            title: 'Match Day',
            subtitle: 'Experience the excitement',
            isWhite: false
        }
    ];

  useEffect(() => {
    const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

    return () => clearInterval(interval);
    }, []);

  return (
        <div className="slider-container">
            {slides.map((slide, index) => (
                <div 
          key={index}
                    className={`slide ${index === currentIndex ? 'active' : ''} ${slide.isWhite ? 'white-overlay' : ''}`}
                >
                    <img src={slide.image} alt={slide.title} />
                    <div className={`slide-overlay ${slide.isWhite ? 'white' : ''}`}>
                        <div className={`slide-content ${slide.isWhite ? 'white-text' : ''}`}>
                            <h1 className="slide-title">{slide.title}</h1>
                            <p className="slide-subtitle">{slide.subtitle}</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="slider-controls">
                <button 
                    className="slider-button prev"
                    onClick={() => setCurrentIndex(prev => 
                        prev === 0 ? slides.length - 1 : prev - 1
                    )}
                >
                    &#10094;
                </button>
                <button 
                    className="slider-button next"
                    onClick={() => setCurrentIndex(prev => 
                        prev === slides.length - 1 ? 0 : prev + 1
                    )}
                >
                    &#10095;
                </button>
      </div>
    </div>
  );
};

export default ImageSlider; 