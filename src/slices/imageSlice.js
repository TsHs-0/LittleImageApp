import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  imagesData: [],
  activeImage: {},
  loading: false,
};

const reducers = {
  setImageData: (state, action) => {
    state.imagesData = action.payload;
  },
  setActiveImageData: (state, action) => {
    state.activeImage = action.payload;
  },
  setLoading: (state, action) => {
    state.loading = action.payload;
  },
};

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: reducers,
});

export const {setImageData, setActiveImageData, setLoading} =
  imageSlice.actions;

export default imageSlice.reducer;
