import {configureStore} from '@reduxjs/toolkit';
import imageSlice from '../slices/imageSlice';

export const store = configureStore({
  reducer: {
    images: imageSlice,
  },
});