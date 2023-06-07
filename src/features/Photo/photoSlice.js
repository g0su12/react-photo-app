const { createSlice } = require('@reduxjs/toolkit');

const photo = createSlice({
  name: 'photos',
  initialState: localStorage.getItem('user_album')
    ? Object.values(JSON.parse(localStorage.getItem('user_album')))
    : [],
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      const removePhotoID = action.payload;
      return state.filter((photo) => photo.id !== removePhotoID);
    },
    editPhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);
      if (photoIndex >= 0) state[photoIndex] = newPhoto;
    },
  },
});

export function addLocalMiddleware(newPhoto) {
  return function setLocalStorageThunk(dispatch, getState) {
    dispatch(photo.actions.addPhoto(newPhoto));
    localStorage.setItem('user_album', JSON.stringify(getState().photos));
  };
}

export function editLocalMiddleware(newPhoto) {
  return function setLocalStorageThunk(dispatch, getState) {
    dispatch(photo.actions.editPhoto(newPhoto));
    localStorage.setItem('user_album', JSON.stringify(getState().photos));
  };
}

export function removeLocalMiddleware(photoID) {
  return function setLocalStorageThunk(dispatch, getState) {
    dispatch(photo.actions.removePhoto(photoID));
    localStorage.setItem('user_album', JSON.stringify(getState().photos));
  };
}

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, editPhoto } = actions;
export default reducer;
