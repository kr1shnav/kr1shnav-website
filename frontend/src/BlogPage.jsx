import React from 'react';
import comingSoonImg from './assets/coming-soon.png'; // Imports your new Hades image asset

const BlogPage = ({ onBack }) => {
  return (
    <div className="site-wrapper single-page-layout">
      <div className="about-page-master-container">
        
        {/* Main Content Layout Block */}
        <div className="about-page-content-row" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          
          {/* Centered Image Frame Block */}
          <div className="about-image-frame" style={{ width: '340px', height: 'auto', aspectRatio: '16 / 10' }}>
            <img 
              src={comingSoonImg} 
              alt="Section coming soon placeholder" 
              className="featured-image" 
              style={{ objectFit: 'contain' }} /* Keeps the full cartoon frame visible */
            />
          </div>

          {/* Under Construction Status Label */}
          <p className="bio-text-large" style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.5px', marginTop: '10px' }}>
            COMING SOON
          </p>
        </div>

        {/* Layout Baseline Footer Control Matrix */}
        <footer className="about-footer">
          <button className="back-btn-large" onClick={onBack}>
            // go back
          </button>
        </footer>

      </div>
    </div>
  );
};

export default BlogPage;