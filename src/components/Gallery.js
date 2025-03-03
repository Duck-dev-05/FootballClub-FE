import React, { useState, useEffect } from 'react';
import './Gallery.css';
import Team from '../asset/image/Team.jpg';
import DSC0001 from '../asset/image/DSC_0001.jpg';
import DSC0002 from '../asset/image/DSC_0002.jpg';
import DSC0003 from '../asset/image/DSC_0003.jpg';
import DSC0006 from '../asset/image/DSC_0006.jpg';
import DSC0007 from '../asset/image/DSC_0007.jpg';
import DSC0008 from '../asset/image/DSC_0008.jpg';
import DSC0009 from '../asset/image/DSC_0009.jpg';
import DSC0010 from '../asset/image/DSC_0010.jpg';
import DSC0011 from '../asset/image/DSC_0011.jpg';
import DSC0012 from '../asset/image/DSC_0012.jpg';
import DSC0013 from '../asset/image/DSC_0013.jpg';
import DSC0014 from '../asset/image/DSC_0014.jpg';

const Gallery = () => {
    const galleryData = [
        {
            id: 1,
            category: 'team-photos',
            title: 'Team Photo',
            image: Team,
            description: 'Official team photo'
        },
        {
            id: 2,
            category: 'match-gallery',
            title: 'Match Moment 1',
            image: DSC0001,
            description: 'Exciting match moment'
        },
        {
            id: 3,
            category: 'match-gallery',
            title: 'Match Moment 2',
            image: DSC0002,
            description: 'Team in action'
        },
        {
            id: 4,
            category: 'match-gallery',
            title: 'Match Moment 3',
            image: DSC0003,
            description: 'Game highlights'
        },
        {
            id: 5,
            category: 'training-sessions',
            title: 'Training Session 1',
            image: DSC0006,
            description: 'Team training'
        },
        {
            id: 6,
            category: 'training-sessions',
            title: 'Training Session 2',
            image: DSC0007,
            description: 'Practice drills'
        },
        {
            id: 7,
            category: 'match-gallery',
            title: 'Match Moment 4',
            image: DSC0008,
            description: 'Match action'
        },
        {
            id: 8,
            category: 'match-gallery',
            title: 'Match Moment 5',
            image: DSC0009,
            description: 'Game intensity'
        },
        {
            id: 9,
            category: 'match-gallery',
            title: 'Match Moment 6',
            image: DSC0010,
            description: 'Team play'
        },
        {
            id: 10,
            category: 'match-gallery',
            title: 'Match Moment 7',
            image: DSC0011,
            description: 'Game highlights'
        },
        {
            id: 11,
            category: 'match-gallery',
            title: 'Match Moment 8',
            image: DSC0012,
            description: 'Team performance'
        },
        {
            id: 12,
            category: 'match-gallery',
            title: 'Match Moment 9',
            image: DSC0013,
            description: 'Game action'
        },
        {
            id: 13,
            category: 'match-gallery',
            title: 'Match Moment 10',
            image: DSC0014,
            description: 'Team spirit'
        }
    ];

    const categories = [
        { id: 'all', name: 'All Photos' },
        { id: 'team-photos', name: 'Team Photos' },
        { id: 'match-gallery', name: 'Match Gallery' },
        { id: 'training-sessions', name: 'Training Sessions' },
        { id: 'club-events', name: 'Club Events' },
        { id: 'trophy-cabinet', name: 'Trophy Cabinet' },
        { id: 'fan-moments', name: 'Fan Moments' }
    ];

    const [activeFilter, setActiveFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [filteredImages, setFilteredImages] = useState(galleryData);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            const filtered = galleryData.filter(item => {
                const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
                const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    item.description.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesCategory && matchesSearch;
            });
            setFilteredImages(filtered);
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [activeFilter, searchTerm]);

    return (
        <div className="gallery-container">
            <div className="gallery-header">
                <h1>Gallery</h1>
                <div className="gallery-search">
                    <input
                        type="text"
                        placeholder="Search gallery..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
            </div>

            <div className="gallery-filters">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                        onClick={() => setActiveFilter(category.id)}
                    >
                        {category.name}
                        <span className="filter-count">
                            {category.id === 'all' 
                                ? galleryData.length 
                                : galleryData.filter(item => item.category === category.id).length}
                        </span>
                    </button>
                ))}
            </div>

            <div className={`gallery-grid ${isLoading ? 'loading' : ''}`}>
                {filteredImages.map(item => (
                    <div 
                        key={item.id} 
                        className="gallery-item"
                        style={{
                            '--animation-order': item.id
                        }}
                    >
                        <div className="gallery-item-inner">
                            <img src={item.image} alt={item.title} loading="lazy" />
                            <div className="gallery-item-overlay">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {filteredImages.length === 0 && (
                <div className="no-results">
                    <h3>No images found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            )}
        </div>
    );
};

export default Gallery; 