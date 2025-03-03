import React from 'react';
import useNews from '../hooks/useNews'; // Import the custom hook
import NewsItem from './NewsItem'; // Import the NewsItem component
import './NewsPage.css'; // Import the CSS for styling

const NewsPage = () => {
    const { news, loading, error } = useNews();

    if (loading) return <div className="loading">Loading news, please wait...</div>;
    if (error) return <div className="error">Oops! Something went wrong: {error}</div>;

    return (
        <section className="news-page">
            <h1>All News</h1>
            <div className="news-list">
                {news.length > 0 ? (
                    news.map(item => (
                        <NewsItem key={item.id} item={item} />
                    ))
                ) : (
                    <p>No news available at the moment.</p>
                )}
            </div>
        </section>
    );
};

export default NewsPage; 