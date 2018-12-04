import React from 'react';
import './style.css';

const Header = () => (
  <div className="container">
    <div className="jumbotron bg text-center">
      <h1 className="logo"><a href="/">Dund-WHO Mifflin!</a></h1>
      <p className="desc">Click on a character to earn points, if you click the same character twice you lose!</p>
    </div>
  </div>
);

export default Header;