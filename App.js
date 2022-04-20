import React from 'react';
import {Provider} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {store} from './src/redux/store';
import {Navigation} from './Navigation';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
