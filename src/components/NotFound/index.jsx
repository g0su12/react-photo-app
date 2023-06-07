import Header from 'components/Header';
import React from 'react';

NotFound.propTypes = {};

function NotFound() {
  return (
    <div className="not-found text-center">
      <Header />
      <h1 className="hero-header__heading">404</h1>
      <p className="not-found__desc py-3">Page Not Found</p>
    </div>
  );
}

export default NotFound;
