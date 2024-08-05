import {useDispatch} from 'react-redux';
import {setActiveImageData} from '../../slices/imageSlice';

export const ImageItemController = () => {
  const dispatch = useDispatch();

  const onPress = item => {
    dispatch(setActiveImageData({status: true, data: item}));
  };

  return {onPress};
};
