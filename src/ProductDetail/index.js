import React from 'react';
import {View, Text, Button} from 'react-native';

const ProductDetail = ({route, navigation}) => {
  // const {id} = route.params;
  return (
    <View>
      <Text>Product Detail</Text>
      <Button title="Go to List... again" onPress={() => navigation.goBack()} />
    </View>
  );
};
export {ProductDetail};
