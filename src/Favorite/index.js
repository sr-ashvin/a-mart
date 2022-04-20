import React from 'react';
import {View, Text, Button} from 'react-native';

const Favorite = ({route, navigation}) => {
  // const {id} = route.params;
  return (
    <View>
      <Text>Favorite</Text>
      <Button title="Go to List... again" onPress={() => navigation.goBack()} />
    </View>
  );
};
export {Favorite};
