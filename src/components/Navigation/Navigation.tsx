import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div className="Navigation">
        <ul className="Navigation__list">
          <Link to="/home" className="Navigation__item ">
            <p className="Navigation__link">Home</p>
          </Link>
          <Link to="/about" className="Navigation__item">
            <p className="Navigation__link">About us</p>
          </Link>
          <Link to="/contacts" className="Navigation__item">
            <p className="Navigation__link">Contacts us</p>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
