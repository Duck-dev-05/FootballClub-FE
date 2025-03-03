import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NewsItem.css'; // Import CSS for styling

const NewsItem = ({ item }) => {
    const { id, title, content, imageUrl, date, hashtags } = item;

    return (
        <article className="news-item">
            <div className="news-image-container">
                {imageUrl ? (
                    <img src={imageUrl} alt={title} className="news-image" />
                ) : (
                    <img src="path/to/default-image.jpg" alt="Default" className="news-image" />
                )}
            </div>
            <div className="news-content">
                <Link to={`/news/${id}`}>
                    <h2 className="news-title">{title}</h2>
                </Link>
                <p className="news-description">{content}</p>
                {date && <p className="news-date">{new Date(date).toLocaleDateString()}</p>}
                {hashtags && (
                    <div className="news-hashtags">
                        {hashtags.map((hashtag, index) => (
                            <span key={index} className="hashtag">{hashtag}</span>
                        ))}
                    </div>
                )}
                <Link to={`/news/${id}`} className="read-more">Read More</Link>
            </div>
        </article>
    );
};

NewsItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
        date: PropTypes.string,
        hashtags: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

export default NewsItem; 