import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import './NewsCard.css';

const NewsCard = ({ news }) => {
    const navigate = useNavigate();
    const formattedDate = new Date(news.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const handleCardClick = () => {
        navigate(`/news/${news.id}`);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleCardClick();
        }
    };

    return (
        <article 
            className="news-card"
            onClick={handleCardClick}
            onKeyPress={handleKeyPress}
            tabIndex={0}
            role="article"
            aria-label={`News article: ${news.title}`}
        >
            <div className="news-image">
                <img src={news.image} alt={news.title} />
                {news.category && (
                    <span className="news-category">{news.category}</span>
                )}
            </div>
            <div className="news-content">
                <div className="news-meta">
                    <span className="meta-item">
                        <FaCalendarAlt />
                        {formattedDate}
                    </span>
                    <span className="meta-item">
                        <FaUser />
                        {news.author}
                    </span>
                    {news.tags && news.tags.length > 0 && (
                        <span className="meta-item">
                            <FaTag />
                            {news.tags[0]}
                        </span>
                    )}
                </div>
                <h3 className="news-title">{news.title}</h3>
                <p className="news-excerpt">{news.excerpt}</p>
                <span className="read-more">
                    Read More
                </span>
            </div>
        </article>
    );
};

export default NewsCard; 