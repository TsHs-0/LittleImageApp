import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

export const ImageContainerView = ({item}) => {
  return (
    <View>
      <Image
        resizeMode="cover"
        source={{uri: item?.src?.medium}}
        style={styles.image}
      />
      <View style={styles.imageSizeView}>
        <Text style={styles.sizeText}>
          {item?.width}px x {item?.height}px
        </Text>
      </View>
    </View>
  );
};
