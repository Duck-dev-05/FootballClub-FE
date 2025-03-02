import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './MediaCoverage.css';

const MediaCoverage = ({ news }) => {
    const mediaArticles = useMemo(() => {
        return news.filter(item => item.category === 'Media Coverage');
    }, [news]);

    return (
        <div className="media-coverage">
            <div className="coverage-header">
                <Link to="/news" className="back-link">
                    <FaArrowLeft /> Back to News
                </Link>
                <h1>Media Coverage</h1>
                <p className="subtitle">FC Escuela in the news and media</p>
            </div>

            <div className="coverage-grid">
                {mediaArticles.length > 0 ? (
                    mediaArticles.map(article => (
                        <article key={article.id} className="coverage-card">
                            <div className="coverage-image">
                                <img src={article.image} alt={article.title} />
                                <div className="coverage-date">
                                    {new Date(article.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                            </div>
                            <div className="coverage-content">
                                <h2>{article.title}</h2>
                                <p className="coverage-excerpt">{article.excerpt}</p>
                                <div className="coverage-meta">
                                    <span className="coverage-author">By {article.author}</span>
                                    {article.tags && (
                                        <div className="coverage-tags">
                                            {article.tags.map((tag, index) => (
                                                <span key={index} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <Link to={`/news/${article.id}`} className="read-more">
                                    Read Full Article
                                </Link>
                            </div>
                        </article>
                    ))
                ) : (
                    <div className="no-coverage">
                        <h2>No media coverage available</h2>
                        <p>Check back soon for new media articles!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MediaCoverage; 