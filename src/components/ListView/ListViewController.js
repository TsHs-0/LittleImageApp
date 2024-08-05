import React, {useCallback} from 'react';
import RNFS from 'react-native-fs';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {ImageItemView} from '../ImageItem/ImageItemView';
import {setActiveImageData, setLoading} from '../../slices/imageSlice';
import {
  arrayBufferToBase64,
  generateFilePath,
  getExtension,
} from '../../utils/helper';
import {getSelectedImage} from '../../utils/rest';

export const ListViewController = () => {
  const dispatch = useDispatch();
  const {imagesData} = useSelector(state => state.images);
  //

  const renderItem = useCallback(
    ({item}) => {
      return <ImageItemView item={item} />;
    },
    [imagesData],
  );

  const closeModal = () => {
    dispatch(setActiveImageData({status: false, data: ''}));
  };

  const downloadImage =
    ({fileName, url}) =>
    async dispatch => {
      try {
        dispatch(setLoading(true));
        const path = generateFilePath(
          RNFS.PicturesDirectoryPath,
          fileName,
          getExtension(url),
        );

        const data = await getSelectedImage(url);

        const base64String = await arrayBufferToBase64(data);
        await RNFS.writeFile(path, base64String, 'base64');
        await CameraRoll.save(path);
        dispatch(setLoading(false));
        Alert.alert('Download complete', 'Image saved to gallery');
      } catch (error) {
        Alert.alert('Error', 'Failed to download image');
        dispatch(setLoading(false));
      }
    };

  return {renderItem, closeModal, downloadImage};
};
