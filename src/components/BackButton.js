import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = ({ to = '/news/latest-news', label = 'Back to Latest News' }) => {
    const navigate = useNavigate();

    return (
        <button 
            className="back-button"
            onClick={() => navigate(to)}
            aria-label={label}
        >
            ← {label}
        </button>
    );
};

export default BackButton; 