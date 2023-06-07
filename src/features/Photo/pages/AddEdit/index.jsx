import React from 'react';
import PhotoForm from 'features/Photo/components/PhotoForm';
import './AddEdit.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addLocalMiddleware, editLocalMiddleware } from 'features/Photo/photoSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/photo_category';

function AddEditPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { photoId } = useParams();
  const isAdd = !photoId;
  const editedPhoto = useSelector((state) => state.photos.find((photo) => photo.id === photoId));
  const initialValues = isAdd
    ? {
        title: '',
        category: PHOTO_CATEGORY_OPTIONS[0].label,
        imageURL: {
          setID: '1',
          randomID: '1',
        },
      }
    : editedPhoto;
  const onSubmit = (values) => {
    if (isAdd) {
      const newPhoto = {
        ...values,
        id: values.imageURL.setID + '_' + values.imageURL.randomID,
      };
      dispatch(addLocalMiddleware(newPhoto));
    } else {
      dispatch(editLocalMiddleware(values));
    }
    navigate('/photos');
  };
  return (
    <div className="photo-edit">
      <div className="photo-edit__form">
        <PhotoForm onSubmit={onSubmit} initialValues={initialValues} isAdd={isAdd} />
      </div>
    </div>
  );
}

export default AddEditPage;
