import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import {ListViewController} from './ListViewController';
import {ImageViewModal} from '../ImageViewModal/ImageViewModal';

export const ListView = () => {
  const dispatch = useDispatch();
  const {imagesData} = useSelector(state => state.images);
  const {renderItem, closeModal, downloadImage} = ListViewController();

  return (
    <>
      <FlatList
        data={imagesData || []}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <ImageViewModal
        closeModal={closeModal}
        onPressDownload={data => dispatch(downloadImage(data))}
      />
    </>
  );
};
