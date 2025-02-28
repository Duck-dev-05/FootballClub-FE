import React from 'react';
import ImageSlider from './ImageSlider';
import LatestNews from './LatestNews';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <main className="main-content">
                <ImageSlider />
                <div className="content-section">
                    <h2 className="section-title">Latest News</h2>
                    <LatestNews />
                </div>
            </main>
        </div>
    );
};

export default HomePage; 