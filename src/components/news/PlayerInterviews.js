import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './PlayerInterviews.css';

const PlayerInterviews = ({ news }) => {
    const interviews = useMemo(() => {
        return news.filter(item => item.category === 'Player Interview');
    }, [news]);

    return (
        <div className="player-interviews">
            <div className="interviews-header">
                <Link to="/news" className="back-link">
                    <FaArrowLeft /> Back to News
                </Link>
                <h1>Player Interviews</h1>
                <p className="subtitle">In-depth conversations with our players</p>
            </div>

            <div className="interviews-grid">
                {interviews.length > 0 ? (
                    interviews.map(interview => (
                        <article key={interview.id} className="interview-card">
                            <div className="interview-image">
                                <img src={interview.image} alt={interview.title} />
                                <div className="interview-date">
                                    {new Date(interview.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                            </div>
                            <div className="interview-content">
                                <h2>{interview.title}</h2>
                                <p className="interview-excerpt">{interview.excerpt}</p>
                                <div className="interview-meta">
                                    <span className="interview-author">By {interview.author}</span>
                                    {interview.tags && (
                                        <div className="interview-tags">
                                            {interview.tags.map((tag, index) => (
                                                <span key={index} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <Link to={`/news/${interview.id}`} className="read-more">
                                    Read Full Interview
                                </Link>
                            </div>
                        </article>
                    ))
                ) : (
                    <div className="no-interviews">
                        <h2>No interviews available</h2>
                        <p>Check back soon for new player interviews!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlayerInterviews; 