import React from "react";

import './homepage.style.scss'

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <h1 className="title">Hats</h1>
        <span className="subtitle"></span>
      </div>
    </div>
    <div className="menu-item">
      <h1 className="title">Jackets</h1>
      <span className="subtitle"></span>
    </div>
    <div className="menu-item">
      <h1 className="title">Other stuff</h1>
      <span className="subtitle"></span>
    </div>
  </div>
);

export default HomePage;
