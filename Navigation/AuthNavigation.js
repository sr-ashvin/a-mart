import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, SignIn} from '../src';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen
        name="signIn"
        component={SignIn}
        options={{title: 'SignIn'}}
      />
    </Stack.Navigator>
  );
};

export {AuthNavigation};
