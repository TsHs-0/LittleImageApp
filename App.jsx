import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {Main} from './src';
import {View} from 'react-native';

const App = () => {
  return (
    <View>
      <Provider store={store}>
        <Main />
      </Provider>
    </View>
  );
};

export default App;
 