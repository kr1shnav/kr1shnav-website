import React from 'react';

const ResumePage = ({ onBack }) => {
  return (
    <div className="site-wrapper single-page-layout resume-page-layout">
      {/* Expanded Master Container */}
      <div className="about-page-master-container resume-master-container">
        
        {/* Full-Screen PDF Canvas Frame */}
        <div className="resume-pdf-container">
          <embed
            src="/resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            className="pdf-embed-canvas"
          />
        </div>

        {/* Footer Navigation Back Control */}
        <footer className="about-footer">
          <button className="back-btn-large" onClick={onBack}>
            // back to index
          </button>
        </footer>

      </div>
    </div>
  );
};

export default ResumePage;