import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft } from 'react-icons/fa';
import './NewsDetail.css';

const NewsDetail = ({ news }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const article = news.find(n => n.id === parseInt(id));

    if (!article) {
        return (
            <div className="news-not-found">
                <h2>News article not found</h2>
                <button onClick={() => navigate('/news')} className="back-button">
                    <FaArrowLeft /> Back to News
                </button>
            </div>
        );
    }

    const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <article className="news-detail">
            <button onClick={() => navigate('/news')} className="back-button">
                <FaArrowLeft /> Back to News
            </button>

            <div className="news-header">
                {article.category && (
                    <span className="news-category">{article.category}</span>
                )}
                <h1>{article.title}</h1>
                <div className="news-meta">
                    <span className="meta-item">
                        <FaCalendarAlt />
                        {formattedDate}
                    </span>
                    <span className="meta-item">
                        <FaUser />
                        {article.author}
                    </span>
                    {article.tags && article.tags.map(tag => (
                        <span key={tag} className="meta-item">
                            <FaTag />
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="news-featured-image">
                <img src={article.image} alt={article.title} />
            </div>

            <div className="news-content" dangerouslySetInnerHTML={{ __html: article.content }} />

            {article.relatedImages && article.relatedImages.length > 0 && (
                <div className="news-gallery">
                    <h3>Related Images</h3>
                    <div className="gallery-grid">
                        {article.relatedImages.map((image, index) => (
                            <div key={index} className="gallery-item">
                                <img src={image.url} alt={image.caption} />
                                {image.caption && (
                                    <span className="image-caption">{image.caption}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </article>
    );
};

export default NewsDetail; 