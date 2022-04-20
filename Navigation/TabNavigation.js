import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProductList, HomeScreen, Favorite, Cart, Profile} from '../src';
import {colors} from '../assets/themes/styles';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={Favorite}
        options={{
          title: 'Favorite',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="heart" color={color} size={30} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          title: 'Cart',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cart" color={color} size={30} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="productDetail"
        component={ProductDetail}
        // options={{title: 'Product Detail'}}
      /> */}
      {/* <Tab.Screen
        name="productList"
        component={ProductList}
        options={{title: 'Profile'}}
      /> */}
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export {TabNavigation};
const styles = StyleSheet.create({
  tinyLogo: {
    width: 25,
    height: 25,
    margin: 5,
  },
});
