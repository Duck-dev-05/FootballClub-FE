import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import NewsCard from './components/NewsCard';
import './TeamUpdates.css';

const TeamUpdates = ({ news }) => {
    const teamUpdates = useMemo(() => {
        return news.filter(article => 
            article.category === "Team Updates" || 
            article.tags.includes("Team Updates") ||
            article.tags.includes("Squad")
        );
    }, [news]);

    return (
        <div className="team-updates">
            <div className="team-updates-header">
                <Link to="/news" className="back-link">
                    <FaArrowLeft /> Back to News
                </Link>
                <h1>Team Updates</h1>
                <p className="subtitle">Latest news and updates about our teams and players</p>
            </div>

            {teamUpdates.length > 0 ? (
                <div className="updates-grid">
                    {teamUpdates.map(update => (
                        <NewsCard key={update.id} news={update} />
                    ))}
                </div>
            ) : (
                <div className="no-updates">
                    <p>No team updates available at the moment.</p>
                </div>
            )}
        </div>
    );
};

export default TeamUpdates; 