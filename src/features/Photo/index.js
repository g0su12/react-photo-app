import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

Photo.propTypes = {};

function Photo(props) {
  return (
    <>
      <Header />
      {/* <h1>This is photo main page</h1> */}
      <Outlet />
    </>
  );
}

export default Photo;
