import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPhotos} from './utils/rest';
import {setImageData} from './slices/imageSlice';
import {ListView} from './components/ListView/ListView';

export const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const res = await getPhotos();
      dispatch(setImageData(res?.photos));
    }
    fetchData();
  }, []);

  return <ListView />;
};
