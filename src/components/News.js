<<<<<<< Updated upstream
import React from 'react';

function News() {
  return (
    <div>
      <h2>Latest News</h2>
      <p>Stay tuned for the latest updates on your favorite teams!</p>
    </div>
  );
}

=======
import React from 'react';
import useNews from '../hooks/useNews'; // Import the custom hook

function News() {
  const { news, loading, error } = useNews();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Latest News</h2>
      <p>Stay tuned for the latest updates on your favorite teams!</p>
      <div className="news-list">
        {news.map(item => (
          <div key={item.id} className="news-item">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

>>>>>>> Stashed changes
export default News; 