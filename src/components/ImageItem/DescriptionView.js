import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const DescriptionView = ({item}) => {
  return (
    <View style={styles.textContainerView}>
      <Text style={styles.altText}>{item?.alt}</Text>
      {item?.photographer && (
        <Text style={styles.authorText}>
          Photographer: {item?.photographer}
        </Text>
      )}
    </View>
  );
};
