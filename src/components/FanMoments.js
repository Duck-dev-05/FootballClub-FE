import React, { useState } from 'react';
import './FanMoments.css'; // Import the CSS file for styling

// Import fan moment images
import fanMoment1 from '../asset/image/DSC_0002.jpg'; // Replace with actual image names
import fanMoment2 from '../asset/image/DSC_0003.jpg';
import fanMoment3 from '../asset/image/DSC_0007.jpg'; // New fan moment
import fanMoment4 from '../asset/image/DSC_0008.jpg'; // New fan moment
import fanMoment5 from '../asset/image/DSC_0009.jpg'; // New fan moment

const fanMoments = [
    { id: 1, src: fanMoment1, caption: 'Fan Celebration' },
    { id: 2, src: fanMoment2, caption: 'Cheering for the Team' },
    { id: 3, src: fanMoment3, caption: 'Support from the Stands' }, // New fan moment
    { id: 4, src: fanMoment4, caption: 'Victory Dance' }, // New fan moment
    { id: 5, src: fanMoment5, caption: 'Team Spirit' }, // New fan moment
    // Add more fan moments here as needed
];

const FanMoments = () => {
    const [selectedMoment, setSelectedMoment] = useState(null);

    const openLightbox = (moment) => {
        setSelectedMoment(moment);
    };

    const closeLightbox = () => {
        setSelectedMoment(null);
    };

    return (
        <div className="fan-moments">
            <header className="moments-header">
                <h1>Fan Moments</h1>
                <p>Celebrating the passion and spirit of our fans!</p>
            </header>

            <div className="photo-grid">
                {fanMoments.map((moment) => (
                    <div key={moment.id} className="photo-item" onClick={() => openLightbox(moment)}>
                        <img src={moment.src} alt={moment.caption} loading="lazy" />
                        <div className="photo-caption">
                            <p>{moment.caption}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedMoment && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content">
                        <img src={selectedMoment.src} alt={selectedMoment.caption} />
                        <div className="lightbox-caption">
                            <p>{selectedMoment.caption}</p>
                        </div>
                        <button className="close-button" onClick={closeLightbox}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FanMoments; 