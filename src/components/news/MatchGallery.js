import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaArrowLeft, FaTimes } from 'react-icons/fa';
import './MatchGallery.css';

// Import all images
import DSC_0001 from '../../asset/image/DSC_0001.jpg';
import DSC_0002 from '../../asset/image/DSC_0002.jpg';
import DSC_0003 from '../../asset/image/DSC_0003.jpg';
import DSC_0006 from '../../asset/image/DSC_0006.jpg';
import DSC_0007 from '../../asset/image/DSC_0007.jpg';
import DSC_0008 from '../../asset/image/DSC_0008.jpg';
import DSC_0009 from '../../asset/image/DSC_0009.jpg';
import DSC_0010 from '../../asset/image/DSC_0010.jpg';
import DSC_0011 from '../../asset/image/DSC_0011.jpg';
import DSC_0012 from '../../asset/image/DSC_0012.jpg';
import DSC_0013 from '../../asset/image/DSC_0013.jpg';
import DSC_0014 from '../../asset/image/DSC_0014.jpg';
import Team from '../../asset/image/Team.jpg';

const categories = ['All', 'Match Action', 'Celebrations', 'Training', 'Team Spirit', 'Facilities'];

const galleryData = [
    {
        id: 1,
        image: DSC_0001,
        title: 'Team Huddle Before Match',
        description: 'Players gathering for a pre-match team talk',
        category: 'Team Spirit'
    },
    {
        id: 2,
        image: DSC_0002,
        title: 'Match Action Shot',
        description: 'Intense moment during the game',
        category: 'Match Action'
    },
    {
        id: 3,
        image: DSC_0003,
        title: 'Victory Celebration',
        description: 'Team celebrating after scoring a goal',
        category: 'Celebrations'
    },
    {
        id: 4,
        image: DSC_0006,
        title: 'Training Session',
        description: 'Players during an intensive training drill',
        category: 'Training'
    },
    {
        id: 5,
        image: DSC_0007,
        title: 'Team Building Exercise',
        description: 'Players participating in team building activities',
        category: 'Team Spirit'
    },
    {
        id: 6,
        image: DSC_0008,
        title: 'Match Highlights',
        description: 'Key moment from recent match',
        category: 'Match Action'
    },
    {
        id: 7,
        image: DSC_0009,
        title: 'Training Ground',
        description: 'View of our main training facility',
        category: 'Facilities'
    },
    {
        id: 8,
        image: DSC_0010,
        title: 'Goal Celebration',
        description: 'Players celebrating a crucial goal',
        category: 'Celebrations'
    },
    {
        id: 9,
        image: DSC_0011,
        title: 'Tactical Discussion',
        description: 'Coach explaining tactics to the team',
        category: 'Training'
    },
    {
        id: 10,
        image: DSC_0012,
        title: 'Team Photo',
        description: 'Official team photo for the season',
        category: 'Team Spirit'
    },
    {
        id: 11,
        image: DSC_0013,
        title: 'Training Complex',
        description: 'Aerial view of our training facilities',
        category: 'Facilities'
    },
    {
        id: 12,
        image: DSC_0014,
        title: 'Match Day Preparation',
        description: 'Players warming up before the match',
        category: 'Match Action'
    },
    {
        id: 13,
        image: Team,
        title: 'Team Group Photo',
        description: 'The entire squad together',
        category: 'Team Spirit'
    }
];

const MatchGallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages = useMemo(() => {
        return galleryData.filter(item => {
            const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
            const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="match-gallery">
            <div className="gallery-header">
                <Link to="/news" className="back-link">
                    <FaArrowLeft /> Back to News
                </Link>
                <h1>Match Gallery</h1>
                <p className="subtitle">Capturing the best moments from our matches and training sessions</p>
            </div>

            <div className="gallery-filters">
                <div className="search-bar">
                    <FaSearch />
                    <input
                        type="text"
                        placeholder="Search gallery..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="category-filter">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="gallery-grid">
                {filteredImages.map(item => (
                    <div 
                        key={item.id} 
                        className="gallery-item"
                        onClick={() => setSelectedImage(item)}
                    >
                        <img src={item.image} alt={item.title} />
                        <div className="image-overlay">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <span className="category-tag">{item.category}</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="image-modal" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedImage.image} alt={selectedImage.title} />
                        <div className="modal-info">
                            <h2>{selectedImage.title}</h2>
                            <p>{selectedImage.description}</p>
                            <span className="modal-category">{selectedImage.category}</span>
                        </div>
                        <button 
                            className="close-button"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close modal"
                        >
                            <FaTimes />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MatchGallery; 