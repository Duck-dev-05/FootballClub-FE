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
<<<<<<< Updated upstream
=======
import CoachingStaff from './components/CoachingStaff';
import TrainingPrograms from './components/TrainingPrograms';
import ClubHistory from './components/ClubHistory';
import VisionMission from './components/VisionMission';
import UpcomingMatches from './components/UpcomingMatches';
import SeasonTickets from './components/SeasonTickets';
import MatchList from './components/match/MatchList';
import MatchDetail from './components/match/MatchDetail';
import MatchReport from './components/MatchReport/index.js';
import MatchReports from './components/MatchReports';
import TrainingSchedule from './components/TrainingSchedule';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import TournamentInfo from './components/TournamentInfo';
import TournamentRegistration from './components/TournamentRegistration';
import TeamPhotos from './components/TeamPhotos';
import NewsList from './components/news/NewsList';
import NewsDetail from './components/news/NewsDetail';
import TeamUpdates from './components/news/TeamUpdates';
import MatchGallery from './components/news/MatchGallery';
import PlayerInterviews from './components/news/PlayerInterviews';
import MatchReviews from './components/news/MatchReviews';
import MediaCoverage from './components/news/MediaCoverage';

// Import team logos
import escuelaLogo from './asset/image/logo.jpg';
import barcelonaLogo from './asset/image/download.png';
import valenciaLogo from './asset/image/logoclub.png';
import ajaxLogo from './asset/image/logoclub2.png';

// Import data
import { matchesData } from './components/match/data/matches';
import newsData from './components/news/data/news';

const teamLogos = {
  'FC Escuela': escuelaLogo,
  'Barcelona Academy': barcelonaLogo,
  'Valencia Academy': valenciaLogo,
  'Ajax Youth': ajaxLogo
};
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/posts/:postId" element={<PostDetail />} />
            <Route path="/" element={<HomePage />} />
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            <Route path="/test" element={<TestComponent />} />
            <Route path="/gallery" element={<Gallery />} />
=======
            <Route path="/gallery" element={<MatchGallery />} />
>>>>>>> Stashed changes
            <Route path="/about/overview" element={<ClubOverview />} />
            <Route path="/about/our-team" element={<OurTeam />} />
=======
            <Route path="/gallery" element={<MatchGallery />} />
            <Route path="/about/overview" element={<ClubOverview />} />
            <Route path="/about/our-team" element={<OurTeam />} />
            <Route path="/about/coaching-staff" element={<CoachingStaff />} />
            <Route path="/about/training-programs" element={<TrainingPrograms />} />
            <Route path="/about/club-history" element={<ClubHistory />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/matches/upcoming" element={<UpcomingMatches />} />
            <Route path="/tickets/season" element={<SeasonTickets />} />
            <Route path="/matches" element={<MatchList matches={matchesData} teamLogos={teamLogos} />} />
            <Route path="/matches/:id" element={<MatchDetail matches={matchesData} teamLogos={teamLogos} />} />
            <Route path="/matches/report/:matchId" element={<MatchReport />} />
            <Route path="/matches/training" element={<TrainingSchedule />} />
            <Route path="/matches/tournaments" element={<TournamentInfo />} />
            <Route path="/matches/tournaments/register/:tournamentId" element={<TournamentRegistration />} />
            <Route path="/news/team-updates" element={<TeamUpdates news={newsData} />} />
            <Route path="/news/player-interviews" element={<PlayerInterviews news={newsData} />} />
            <Route path="/news/match-reviews" element={<MatchReviews news={newsData} />} />
            <Route path="/news/media-coverage" element={<MediaCoverage news={newsData} />} />
            <Route path="/news/:id" element={<NewsDetail news={newsData} />} />
            <Route path="/news" element={<NewsList news={newsData} />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/team-photos" element={<TeamPhotos />} />
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
