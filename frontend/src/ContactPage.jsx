import React from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'; 

const ContactPage = ({ onBack }) => {
  return (
    <div className="site-wrapper single-page-layout">
      <div className="about-page-master-container">
        
        {/* Main Content Layout Block */}
        <div className="about-page-content-row" style={{ flexDirection: 'column', gap: '30px' }}>
          
          {/* Header Label */}
          <h2 className="hero-name" style={{ textAlign: 'left', fontSize: '2.5rem' }}>
            Contact
          </h2>

          {/* Contact Directory Details */}
          <div className="contact-details-box" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            
            {/* Email & Phone Blocks */}
            <div className="contact-item">
              <span className="contact-label">email:</span>
              <a href="mailto:your.email@example.com" className="contact-link">
                krishnavbarman24@example.com
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">phone:</span>
              <a href="tel:+91XXXXXXXXXX" className="contact-link">
                +91 8822334088
              </a>
            </div>

            {/* Profile Platforms Network Links with Icons */}
            <div className="contact-item" style={{ marginTop: '10px' }}>
              <span className="contact-label">profiles:</span>
              <div className="profile-links-grid" style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '12px' }}>
                
                {/* GitHub Link Layer */}
                <a href="https://github.com/kr1shnav" target="_blank" rel="noopener noreferrer" className="contact-link icon-link">
                  <FaGithub className="social-icon" /> GitHub
                </a>

                {/* LinkedIn Link Layer */}
                <a href="https://www.linkedin.com/in/krishnav-barman/" target="_blank" rel="noopener noreferrer" className="contact-link icon-link">
                  <FaLinkedinIn className="social-icon" /> LinkedIn
                </a>

                {/* Twitter / X Link Layer */}
                <a href="https://x.com/venatussfps" target="_blank" rel="noopener noreferrer" className="contact-link icon-link">
                  <FaXTwitter className="social-icon" /> Twitter / X
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* Global Platform Alignment Footer */}
        <footer className="about-footer">
          <button className="back-btn-large" onClick={onBack}>
            // go back
          </button>
        </footer>

      </div>
    </div>
  );
};

export default ContactPage;