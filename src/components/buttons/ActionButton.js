import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {closeImg, downloadImg} from '../../assets';
import {BLACK} from '../../utils/colors';

export const ActionButton = ({
  red = false,
  close = false,
  download = false,
  onPress = () => false,
}) => {
  const icnon = (close && closeImg) || (download && downloadImg);
  const color = (red && 'red') || BLACK;

  return (
    <Pressable onPress={onPress}>
      <Image tintColor={color} source={icnon} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {width: 24, height: 24},
});
