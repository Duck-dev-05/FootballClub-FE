import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import TestComponent from './components/TestComponent';
import Gallery from './components/Gallery';
import ClubOverview from './components/ClubOverview';
import OurTeam from './components/OurTeam';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/posts/:postId" element={<PostDetail />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/test" element={<TestComponent />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about/overview" element={<ClubOverview />} />
            <Route path="/about/our-team" element={<OurTeam />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
