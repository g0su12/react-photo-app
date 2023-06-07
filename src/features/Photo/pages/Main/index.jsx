import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { Container } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { removeLocalMiddleware } from 'features/Photo/photoSlice';
import './style.scss';
function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePhotoRemoveClick = (photo) => {
    dispatch(removeLocalMiddleware(photo.id));
  };
  const handlePhotoEditClick = (photo) => {
    navigate(`/photos/${photo.id}`);
  };
  return (
    <div className="photo-main">
      <Container className="text-center">
        {photos.length > 0 ? (
          <p className="photo-main__desc py-3">Your wonderful photos 🎉🎉</p>
        ) : (
          <p className="photo-main__desc py-3">
            Looks like your album is empty right now. Let's change that by pressing that button
            below
          </p>
        )}
        <div className="py-5">
          <Link to="/photos/add">
            <button className="photo-main__btn btn">Add new photo</button>
          </Link>
        </div>
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
