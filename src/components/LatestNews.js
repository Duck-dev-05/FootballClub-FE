import React from 'react';
import './LatestNews.css';

const LatestNews = () => {
    const news = [
        {
            id: 1,
            title: "Trophy Cabinet: A Legacy of Success",
            date: "2024-02-28",
            image: "/path/to/news-image-1.jpg",
            excerpt: "Celebrating our achievements and looking forward to more victories."
        },
        // Add more news items as needed
    ];

    return (
        <div className="news-grid">
            {news.map(item => (
                <div key={item.id} className="news-card">
                    <div className="news-image">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="news-content">
                        <h3>{item.title}</h3>
                        <p className="news-date">{item.date}</p>
                        <p className="news-excerpt">{item.excerpt}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LatestNews; 