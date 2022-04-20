import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({route, navigation}) => {
  // const {id} = route.params;
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to List... again" onPress={() => navigation.goBack()} />
    </View>
  );
};
export {HomeScreen};
