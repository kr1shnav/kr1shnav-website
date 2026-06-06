import React from 'react';
import { Link } from 'react-router-dom';
import TimeDisplay from './TimeDisplay';
import profileImage from './assets/image.jpeg';

const Home = () => {
  return (
    <div className="site-wrapper">
      <main className="landing-container">
        
        {/* Left Column */}
        <div className="landing-left">
          <h1 className="hero-name">Krishnav Barman</h1>
        </div>

        {/* Center Column */}
        <div className="landing-center">
          <div className="image-frame">
            <img src={profileImage} alt="Featured snippet" className="featured-image" />
          </div>
          <TimeDisplay />
        </div>

        {/* Right Column */}
        <div className="landing-right">
          <nav className="landing-nav">
            <Link to="/about" className="nav-link-btn">//about</Link>
            <Link to="#" className="nav-link-btn">//resume</Link>
            <Link to="#" className="nav-link-btn">//blog</Link>
            <Link to="#" className="nav-link-btn">//contact</Link>
          </nav>
        </div>

      </main>
    </div>
  );
};

export default Home;