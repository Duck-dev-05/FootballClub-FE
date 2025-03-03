import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './MatchReviews.css';

const MatchReviews = ({ news }) => {
    const reviews = useMemo(() => {
        return news.filter(item => item.category === 'Match Report');
    }, [news]);

    return (
        <div className="match-reviews">
            <div className="reviews-header">
                <Link to="/news" className="back-link">
                    <FaArrowLeft /> Back to News
                </Link>
                <h1>Match Reviews</h1>
                <p className="subtitle">Comprehensive analysis of our recent matches</p>
            </div>

            <div className="reviews-grid">
                {reviews.length > 0 ? (
                    reviews.map(review => (
                        <article key={review.id} className="review-card">
                            <div className="review-image">
                                <img src={review.image} alt={review.title} />
                                <div className="review-date">
                                    {new Date(review.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                            </div>
                            <div className="review-content">
                                <h2>{review.title}</h2>
                                <p className="review-excerpt">{review.excerpt}</p>
                                <div className="review-meta">
                                    <span className="review-author">By {review.author}</span>
                                    {review.tags && (
                                        <div className="review-tags">
                                            {review.tags.map((tag, index) => (
                                                <span key={index} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <Link to={`/news/${review.id}`} className="read-more">
                                    Read Full Review
                                </Link>
                            </div>
                        </article>
                    ))
                ) : (
                    <div className="no-reviews">
                        <h2>No match reviews available</h2>
                        <p>Check back soon for new match reviews!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MatchReviews; 