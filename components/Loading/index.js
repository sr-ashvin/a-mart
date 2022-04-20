import React from 'react';
import {Image} from 'react-native';
const Loading = () => (
  <Image
    style={{width: 100, height: 100}}
    source={require('../../assets/images/loading.gif')}
  />
);

export {Loading};
