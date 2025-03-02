import React, { useStates, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const timeoutRef = useRef(null);
    const menuItems = {
        about: [
            'Club Overview',
            'Our Team',
            'Coaching Staff',
            'Training Programs',
            'Club History',
            'Vision & Mission'
        ],
        matches: [
            'Upcoming Matches',
            'Match Results',
            'League Table',
            'Match Reports',
            'Training Schedule',
            'Tournament Info'
        ],
        news: [
            'Latest News',
            'Team Updates',
            'Match Reviews',
            'Player Interviews',
            'Club Announcements',
            'Media Coverage'
        ],
        gallery: [
            'Team Photos',
            'Match Gallery',
            'Training Sessions',
            'Club Events',
            'Trophy Cabinet',
            'Fan Moments'
        ]
    };

    const [activeMenu, setActiveMenu] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleMouseEnter = (menu) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsTransitioning(true);
        setActiveMenu(menu);
        // Clear transitioning state after animation completes
        setTimeout(() => setIsTransitioning(false), 250);
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
            setIsTransitioning(false);
        }, 200);
    };

    const handleSubmenuClick = (category, item) => {
        let path;
        // Special cases for about section
        if (category === 'about') {
            switch (item) {
                case 'Club Overview':
                    path = '/about/overview';
                    break;
                case 'Our Team':
                    path = '/about/our-team';
                    break;
                default:
                    path = `/${category}/${item.toLowerCase().replace(/\s+/g, '-')}`;
            }
        } else {
            // Default path generation for other categories
            path = `/${category}/${item.toLowerCase().replace(/\s+/g, '-')}`;
        }
        navigate(path);
        setActiveMenu(null);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo">
                    <span className="logo-text">FC ESCUELA</span>
                </Link>
                <div className="nav-menu">
                    {Object.entries(menuItems).map(([category, items]) => (
                        <div 
                            key={category}
                            className={`nav-item ${activeMenu === category ? 'active' : ''}`}
                            onMouseEnter={() => handleMouseEnter(category)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link 
                                to={`/${category}`} 
                                className={`nav-link ${activeMenu === category ? 'active' : ''}`}
                                onClick={() => setActiveMenu(null)}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                                {category === 'about' && 'Us'}
                            </Link>
                            {(activeMenu === category || isTransitioning) && (
                                <div className={`submenu ${activeMenu === category ? 'active' : ''}`}>
                                    {items.map((item, index) => (
                                        <button
                                            key={index}
                                            className="submenu-button"
                                            onClick={() => handleSubmenuClick(category, item)}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </div>
                <div className="nav-buttons">
                    <Link to="/tickets" className="btn btn-primary">Buy Tickets</Link>
                    <Link to="/login" className="btn btn-outline">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 