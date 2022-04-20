import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigation} from './HomeNavigation';
import {AuthNavigation} from './AuthNavigation';

import {isLoggedInSelector} from '../src/SignIn/reducer';

const Navigation = props => {
  return (
    <NavigationContainer>
      {props.isLoggedIn ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  const isLoggedIn = isLoggedInSelector(state);
  return {isLoggedIn};
};

const ConnectedNavigation = connect(mapStateToProps)(Navigation);

export {ConnectedNavigation as Navigation};
