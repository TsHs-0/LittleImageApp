import React, {useMemo} from 'react';
import ReactNativeModal from 'react-native-modal';
import {BLACK} from '../../utils/colors';
import {useSelector} from 'react-redux';
import ImageViewer from 'react-native-image-zoom-viewer';
import {ActionButton} from '../buttons/ActionButton';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';

export const ImageViewModal = ({
  closeModal = () => false,
  onPressDownload = () => false,
}) => {
  const {activeImage, loading} = useSelector(state => state.images);

  const imageURLs = useMemo(() => {
    return [{url: activeImage?.data?.src?.original}];
  }, [activeImage]);

  const onPressHandle = () => {
    onPressDownload({
      fileName: activeImage?.data?.alt,
      url: activeImage?.data?.src?.original,
    });
  };

  return (
    <ReactNativeModal
      isVisible={activeImage?.status}
      backdropColor={BLACK}
      backdropOpacity={1}>
      <>
        {activeImage?.data && (
          <ImageViewer
            renderIndicator={() => null}
            style={styles.image}
            imageUrls={imageURLs}
            backgroundColor={BLACK}
            enablePreload={false}
          />
        )}
        <View style={styles.footer}>
          <ActionButton download onPress={onPressHandle} />
          <ActivityIndicator animating={loading} size={'small'} />
          <ActionButton red close onPress={closeModal} />
        </View>
      </>
    </ReactNativeModal>
  );
};
