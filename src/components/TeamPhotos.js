import React, { useState } from 'react';
import './TeamPhotos.css';

// Import team photos
import team1 from '../asset/image/Team.jpg';
import photo1 from '../asset/image/DSC_0001.jpg';
import photo2 from '../asset/image/DSC_0002.jpg';
import photo3 from '../asset/image/DSC_0003.jpg';
import photo6 from '../asset/image/DSC_0006.jpg';
import photo7 from '../asset/image/DSC_0007.jpg';
import photo8 from '../asset/image/DSC_0008.jpg';
import photo9 from '../asset/image/DSC_0009.jpg';
import photo10 from '../asset/image/DSC_0010.jpg';
import photo11 from '../asset/image/DSC_0011.jpg';
import photo12 from '../asset/image/DSC_0012.jpg';
import photo13 from '../asset/image/DSC_0013.jpg';
import photo14 from '../asset/image/DSC_0014.jpg';

const photos = [
    { id: 1, src: team1, caption: 'FC ESCUELA Team Photo' },
    { id: 2, src: photo1, caption: 'Training Session' },
    { id: 3, src: photo2, caption: 'Match Day Preparation' },
    { id: 4, src: photo3, caption: 'Team Huddle' },
    { id: 5, src: photo6, caption: 'Technical Training' },
    { id: 6, src: photo7, caption: 'Team Celebration' },
    { id: 7, src: photo8, caption: 'Match Action' },
    { id: 8, src: photo9, caption: 'Team Strategy Session' },
    { id: 9, src: photo10, caption: 'Victory Moment' },
    { id: 10, src: photo11, caption: 'Team Building' },
    { id: 11, src: photo12, caption: 'Skills Development' },
    { id: 12, src: photo13, caption: 'Youth Development' },
    { id: 13, src: photo14, caption: 'Team Spirit' }
];

const TeamPhotos = () => {
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
                <h1>Team Photos</h1>
                <p>Capturing moments of excellence and team spirit at FC ESCUELA</p>
            </header>

            <div className="photo-grid">
                {photos.map((photo) => (
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

export default TeamPhotos; 