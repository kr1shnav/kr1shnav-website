import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="title-row">
        <span className="label">SUBJECT TOPIC :</span>
        <span className="value">Krishnav Barman</span>
      </div>

      <div className="date-row">
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <span className="label">DATE:</span>
          <span className="tagline">Innovate • Design • Build</span>
        </div>
        <div className="days-of-week">
          M T W Th F S Su
        </div>
      </div>
    </div>
  );
};

export default Header;