import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash} from '../src';
import {TabNavigation} from './TabNavigation';

// Creating a stack navigator
const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="tabNav" component={TabNavigation} />
      {/* <Stack.Screen name='productDetail' component={SetGoals} /> */}
      <Stack.Screen name="splash" component={Splash} />
    </Stack.Navigator>
  );
};

export {HomeNavigation};
