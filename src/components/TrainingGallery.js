import React, { useState } from 'react';
import './TeamPhotos.css'; // Use the same CSS file for styling

// Import training images
import trainingImage1 from '../asset/image/DSC_0002.jpg';
import trainingImage2 from '../asset/image/DSC_0003.jpg';
import trainingImage3 from '../asset/image/DSC_0007.jpg';
import trainingImage4 from '../asset/image/DSC_0008.jpg';
import trainingImage5 from '../asset/image/DSC_0009.jpg';

const trainingImages = [
    { id: 1, src: trainingImage1, caption: 'Training session 1' },
    { id: 2, src: trainingImage2, caption: 'Training session 2' },
    { id: 3, src: trainingImage3, caption: 'Training session 3' },
    { id: 4, src: trainingImage4, caption: 'Training session 4' },
    { id: 5, src: trainingImage5, caption: 'Training session 5' },
];

const TrainingGallery = () => {
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
                <h1>Training Gallery</h1>
                <p>Capturing moments of excellence during training sessions</p>
            </header>

            <div className="photo-grid">
                {trainingImages.map((photo) => (
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

export default TrainingGallery; 