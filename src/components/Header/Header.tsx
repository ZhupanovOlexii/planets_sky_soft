import React from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <>
      <div className="Header">
        <p className="Header__logo"> Logo</p>
        <Navigation />
        <div className="Header__join">
          <p>Join Us</p>
        </div>

      </div>
    </>
  );
};

export default Header;
