import React from 'react';
import {Pressable, View} from 'react-native';
import {ImageItemController} from './ImageItemController';
import {styles} from './styles';
import {ImageContainerView} from './ImageContainerView';
import {DescriptionView} from './DescriptionView';

export const ImageItemView = ({item}) => {
  const {onPress} = ImageItemController();

  return (
    <Pressable onPress={() => onPress(item)}>
      <View key={item?.id} style={styles.mainView}>
        <ImageContainerView item={item} />
        <DescriptionView item={item} />
      </View>
    </Pressable>
  );
};
