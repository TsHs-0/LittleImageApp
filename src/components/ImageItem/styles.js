import {StyleSheet} from 'react-native';
import {BLACK} from '../../utils/colors';

export const styles = StyleSheet.create({
  mainView: {
    padding: 12,
    width: '92%',
    marginBottom: 12,
    borderRadius: 12,
    alignSelf: 'center',
    backgroundColor: 'white',

    //shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  image: {
    height: 160,
    width: '100%',
    borderRadius: 8,
  },

  imageSizeView: {
    right: 8,
    bottom: 8,
    padding: 4,
    borderRadius: 4,
    position: 'absolute',
    backgroundColor: 'white',
  },

  textContainerView: {marginTop: 4},

  altText: {fontWeight: 'bold', color: BLACK},

  authorText: {color: 'gray'},

  sizeText: {color: BLACK},
});
