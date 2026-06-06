import React from 'react';

const Navigation = ({ onNavigate, activePage }) => {
  const navItems = ['about', 'resume', 'blog', 'contact'];

  return (
    <nav className="landing-nav">
      {navItems.map((item) => (
        <button 
          key={item} 
          /* CRITICAL: This fires the function passed down from App.jsx */
          onClick={() => onNavigate(item)} 
          className={`nav-link-btn ${activePage === item ? 'active-link' : ''}`}
        >
          //{item}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;