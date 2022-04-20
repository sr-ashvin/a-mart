import {StyleSheet, Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {isLoggedInSelector} from '../SignIn/reducer';
import {colors} from '../../assets/themes/styles';

const Splash = ({navigation, isLoggedIn}) => {
  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn) navigation.replace('tabNav');
      else navigation.replace('signIn');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/splash.jpeg')}
        resizeMode="contain"
      />
    </View>
  );
};

const mapStateToProps = state => {
  const isLoggedIn = isLoggedInSelector(state);
  return {isLoggedIn};
};

const ConnectedSplash = connect(mapStateToProps, {})(Splash);

export {ConnectedSplash as Splash};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  image: {
    height: 200,
    width: 200,
  },
});
