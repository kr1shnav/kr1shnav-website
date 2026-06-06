import React, { useState } from 'react';
import TimeDisplay from './TimeDisplay';
import AboutPage from './AboutPage';
import profileImage from './assets/image.jpeg';

function App() {
  const [view, setView] = useState('home');

  // VIEW 1: Standalone About Webpage View
  if (view === 'about') {
    return <AboutPage onBack={() => setView('home')} />;
  }

  // VIEW 2: Clean 3-Column Landing Index View
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
            <button onClick={() => setView('about')} className="nav-link-btn">//about</button>
            <button className="nav-link-btn">//resume</button>
            <button className="nav-link-btn">//blog</button>
            <button className="nav-link-btn">//contact</button>
          </nav>
        </div>

      </main>
    </div>
  );
}

export default App;