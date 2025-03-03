import React, { useState } from 'react';
import './TeamPhotos.css'; // Use the same CSS file for styling

// Import match images
import matchImage1 from '../asset/image/468862554_563786026400921_5520598281853018968_n.jpg';
import matchImage2 from '../asset/image/468863381_563786129734244_1178466087813228077_n.jpg';
import matchImage3 from '../asset/image/468894980_563786209734236_5985034190604803221_n.jpg';
import matchImage4 from '../asset/image/468905725_563786053067585_4858302212117326176_n.jpg';
import matchImage5 from '../asset/image/468978074_563786119734245_6803494505651830051_n.jpg';
import matchImage6 from '../asset/image/469143961_563786233067567_545219856122667300_n.jpg';
import matchImage7 from '../asset/image/z6087575494598_87ab786058a0e1cbc9c915cbb42d1ca1.jpg';
import matchImage8 from '../asset/image/468894980_563786209734236_5985034190604803221_n.jpg';

const matchImages = [
    { id: 1, src: matchImage1, caption: 'Team celebrating a goal' },
    { id: 2, src: matchImage2, caption: 'Team posing for a group photo' },
    { id: 3, src: matchImage3, caption: 'Players on the field' },
    { id: 4, src: matchImage4, caption: 'Team in action during a match' },
    { id: 5, src: matchImage5, caption: 'Players strategizing' },
    { id: 6, src: matchImage6, caption: 'Team after a match' },
    { id: 7, src: matchImage7, caption: 'Celebration moment' },
    { id: 8, src: matchImage8, caption: 'Team lineup' },
];

const MatchGallery = () => {
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
                <h1>Match Gallery</h1>
                <p>Capturing moments of excellence during matches</p>
            </header>

            <div className="photo-grid">
                {matchImages.map((photo) => (
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

export default MatchGallery; 