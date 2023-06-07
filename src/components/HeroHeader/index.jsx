import React from 'react';
import { Link } from 'react-router-dom';
import './HeroHeader.scss';
function HeroHeader() {
  return (
    <div className="hero-header">
      <div className="col-md-8 col-sm-10 col-12 mx-auto text-center">
        <h1 className="hero-header__heading">Quickly build your album with random photos</h1>
        <p className=" hero-header__desc lead py-3">
          This is a platform that helps you create your own beautiful album with random generated
          photos in minutes. Sign up for free.
        </p>
        <Link to="/photos">
          <button className="hero-header__btn btn">Get started now</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroHeader;
