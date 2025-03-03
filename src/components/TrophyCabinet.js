import React, { useState } from 'react';
import './TrophyCabinet.css'; // Import the CSS file for styling

// Import trophy images
import trophy1 from '../asset/image/DSC_0002.jpg'; // Replace with actual image names
import trophy2 from '../asset/image/DSC_0003.jpg';
import trophy3 from '../asset/image/DSC_0007.jpg'; // New trophy
import trophy4 from '../asset/image/DSC_0008.jpg'; // New trophy
import trophy5 from '../asset/image/DSC_0009.jpg'; // New trophy

const trophies = [
    { id: 1, src: trophy1, caption: 'Championship Trophy' },
    { id: 2, src: trophy2, caption: 'League Cup' },
    { id: 3, src: trophy3, caption: 'Best Team Award' }, // New trophy
    { id: 4, src: trophy4, caption: 'Player of the Year' }, // New trophy
    { id: 5, src: trophy5, caption: 'Fair Play Award' }, // New trophy
    // Add more trophies here as needed
];

const TrophyCabinet = () => {
    const [selectedTrophy, setSelectedTrophy] = useState(null);

    const openLightbox = (trophy) => {
        setSelectedTrophy(trophy);
    };

    const closeLightbox = () => {
        setSelectedTrophy(null);
    };

    return (
        <div className="trophy-cabinet">
            <header className="cabinet-header">
                <h1>Trophy Cabinet</h1>
                <p>Showcasing our achievements and trophies!</p>
            </header>

            <div className="photo-grid">
                {trophies.map((trophy) => (
                    <div key={trophy.id} className="photo-item" onClick={() => openLightbox(trophy)}>
                        <img src={trophy.src} alt={trophy.caption} loading="lazy" />
                        <div className="photo-caption">
                            <p>{trophy.caption}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedTrophy && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content">
                        <img src={selectedTrophy.src} alt={selectedTrophy.caption} />
                        <div className="lightbox-caption">
                            <p>{selectedTrophy.caption}</p>
                        </div>
                        <button className="close-button" onClick={closeLightbox}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrophyCabinet; 