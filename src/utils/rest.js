import {createClient} from 'pexels';
import {API_KEY} from './constants';
import axios from 'axios';

//

const client = createClient(API_KEY);
const query = 'Nature';

export const getPhotos = async () => {
  return await client.photos
    .search({
      query,
      per_page: 20,
    })
    .then(photos => {
      return photos;
    });
};

export const getSelectedImage = async url => {
  const {data} = await axios({
    url,
    method: 'GET',
    responseType: 'arraybuffer',
  });
  return data;
};
