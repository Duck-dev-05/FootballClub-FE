import React from 'react';
import './Home.css'; // Create a separate CSS file for Home styles
import ImageSlider from './ImageSlider'; // Import the ImageSlider component
import Matches from './Matches'; // Import the Matches component
import Gallery from './Gallery'; // Import the Gallery component

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to FC ESCUELA</h1>
      <p className="home-subtitle">A legacy of success and excellence in football</p>
      
      <ImageSlider />
      
      <Matches />
      
      <div className="latest-news">
        <h2>Latest News</h2>
        <p>Stay tuned for the latest updates on your favorite teams!</p>
      </div>
      
      <Gallery />
      
      <footer className="home-footer">
        <p>© 2023 FC ESCUELA. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home; 