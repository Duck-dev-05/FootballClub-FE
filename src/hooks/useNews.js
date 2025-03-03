import { useState, useEffect } from 'react';
import { newsItems } from '../newsData'; // Import the news data

const useNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            // Simulate data fetching
            setNews(newsItems);
        } catch (err) {
            setError('Failed to load news');
        } finally {
            setLoading(false);
        }
    }, []);

    return { news, loading, error };
};

export default useNews; 