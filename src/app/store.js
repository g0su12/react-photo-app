import { configureStore } from '@reduxjs/toolkit';
import photoReducer from 'features/Photo/photoSlice';
const rootReducer = {
  photos: photoReducer,
};
const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localMiddleware),
});

export default store;
