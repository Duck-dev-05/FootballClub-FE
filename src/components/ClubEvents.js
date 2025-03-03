import React, { useState } from 'react';
import './TeamPhotos.css'; // Use the same CSS file for styling

// Import club event images
import eventImage1 from '../asset/image/DSC_0002.jpg'; // Replace with actual image names
import eventImage2 from '../asset/image/DSC_0003.jpg';
import eventImage3 from '../asset/image/DSC_0007.jpg';
import eventImage4 from '../asset/image/DSC_0008.jpg'; // New event
import eventImage5 from '../asset/image/DSC_0009.jpg'; // New event
// Add more images as needed

const eventImages = [
    { id: 1, src: eventImage1, caption: 'Club Event 1' },
    { id: 2, src: eventImage2, caption: 'Club Event 2' },
    { id: 3, src: eventImage3, caption: 'Club Event 3' },
    { id: 4, src: eventImage4, caption: 'Club Event 4' }, // New event
    { id: 5, src: eventImage5, caption: 'Club Event 5' }, // New event
    // Add more images here as needed
];

const ClubEvents = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const openLightbox = (photo) => {
        setSelectedPhoto(photo);
    };

    const closeLightbox = () => {
        setSelectedPhoto(null);
    };

    return (
        <div className="team-photos">
            <header className="photos-header">
                <h1>Club Events</h1>
                <p>Celebrating moments and achievements at FC ESCUELA</p>
                <p>Join us as we look back at some of our most memorable events!</p>
            </header>

            <div className="photo-grid">
                {eventImages.map((photo) => (
                    <div key={photo.id} className="photo-item" onClick={() => openLightbox(photo)}>
                        <img src={photo.src} alt={photo.caption} loading="lazy" />
                        <div className="photo-caption">
                            <p>{photo.caption}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPhoto && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content">
                        <img src={selectedPhoto.src} alt={selectedPhoto.caption} />
                        <div className="lightbox-caption">
                            <p>{selectedPhoto.caption}</p>
                        </div>
                        <button className="close-button" onClick={closeLightbox}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClubEvents; 