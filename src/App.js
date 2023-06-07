import NotFound from 'components/NotFound';
// import SignIn from 'features/Auth/pages/SignIn';
import Photo from 'features/Photo';
import AddEditPage from 'features/Photo/pages/AddEdit';
import Main from 'features/Photo/pages/Main';
import Home from 'pages/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/photos" element={<Photo />}>
          <Route path={'/photos/'} element={<Main />} />
          <Route path={'add'} element={<AddEditPage />} />
          <Route path={`:photoId`} element={<AddEditPage />} />
        </Route>
        {/* <Route exact path="/sign-in" element={<SignIn />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
