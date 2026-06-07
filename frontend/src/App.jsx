import React, { useState } from 'react';
import TimeDisplay from './TimeDisplay';
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';
import ContactPage from './ContactPage';
import ResumePage from './ResumePage'; // Import the new clean resume view page
import profileImage from './assets/image.jpeg';

function App() {
  const [view, setView] = useState('home');

  // VIEW 1: Dedicated About Page View
  if (view === 'about') {
    return <AboutPage onBack={() => setView('home')} />;
  }

  // VIEW 2: Dedicated Blog Page Placeholder View
  if (view === 'blog') {
    return <BlogPage onBack={() => setView('home')} />;
  }

  // VIEW 3: Dedicated Contact Page View
  if (view === 'contact') {
    return <ContactPage onBack={() => setView('home')} />;
  }

  // VIEW 4: Dedicated Resume Canvas Page View
  if (view === 'resume') {
    return <ResumePage onBack={() => setView('home')} />;
  }

  // VIEW 5: Clean 3-Column Landing Index View
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
            {/* Connected onClick routing state hook trigger to open your document canvas */}
            <button onClick={() => setView('resume')} className="nav-link-btn">//resume</button>
            <button onClick={() => setView('blog')} className="nav-link-btn">//blog</button>
            <button onClick={() => setView('contact')} className="nav-link-btn">//contact</button>
          </nav>
        </div>

      </main>
    </div>
  );
}

export default App;