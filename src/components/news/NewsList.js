import React, { useState, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import NewsCard from './components/NewsCard';
import './NewsList.css';

const CategoryFilter = ({ categories, selected, onSelect }) => (
    <div className="category-filter">
        <button 
            className={`filter-button ${selected === 'all' ? 'active' : ''}`}
            onClick={() => onSelect('all')}
        >
            All News
        </button>
        {categories.map(category => (
            <button
                key={category}
                className={`filter-button ${selected === category ? 'active' : ''}`}
                onClick={() => onSelect(category)}
            >
                {category}
            </button>
        ))}
    </div>
);

const SearchBar = ({ value, onChange }) => (
    <div className="search-bar">
        <FaSearch />
        <input
            type="text"
            placeholder="Search news..."
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    </div>
);

const NewsList = ({ news }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = useMemo(() => {
        const uniqueCategories = new Set(news.map(article => article.category));
        return Array.from(uniqueCategories);
    }, [news]);

    const filteredNews = useMemo(() => {
        return news.filter(article => {
            const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
            const matchesSearch = searchQuery === '' || 
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [news, selectedCategory, searchQuery]);

    return (
        <div className="news-list">
            <div className="news-list-header">
                <h1>Latest News</h1>
                <div className="news-filters">
                    <SearchBar 
                        value={searchQuery}
                        onChange={setSearchQuery}
                    />
                    <CategoryFilter
                        categories={categories}
                        selected={selectedCategory}
                        onSelect={setSelectedCategory}
                    />
                </div>
            </div>

            <div className="news-grid">
                {filteredNews.length > 0 ? (
                    filteredNews.map(news => (
                        <NewsCard key={news.id} news={news} />
                    ))
                ) : (
                    <div className="no-news">
                        <p>No news articles found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsList; 