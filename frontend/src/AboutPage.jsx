import React from 'react';
import portraitImage from './assets/about-me.jpg';

const AboutPage = ({ onBack }) => {
  return (
    <div className="site-wrapper single-page-layout">
      {/* Master Content Wrapper Container */}
      <div className="about-page-master-container">
        
        {/* Top Section: Side-by-Side Row Layout */}
        <div className="about-page-content-row">
          
          {/* Left Column: Portrait */}
          <div className="about-image-frame">
            <img 
              src={portraitImage} 
              alt="Krishnav Barman" 
              className="featured-image" 
            />
          </div>

          {/* Right Column: Bio Text Box */}
          <div className="about-text-column">
            <p className="bio-text-large">
              <strong>Krishnav Barman</strong> is an undergraduate Computer Science Engineering student working across full-stack systems, machine learning, and embedded IoT hardware. His technical foundation spans languages like C/C++, Python, and JavaScript (ES6+), utilizing frameworks including React, Angular, Django, and Fast API alongside analytics and intelligence tools like PyTorch and TensorFlow. He is driven by a long-term focus on cloud architecture, physical computing, and tech entrepreneurship.
            </p>
          </div>

        </div>

        {/* Bottom Section: Dedicated Footer Line */}
        <footer className="about-footer">
          <button className="back-btn-large" onClick={onBack}>
            // back to index
          </button>
        </footer>

      </div>
    </div>
  );
};

export default AboutPage;