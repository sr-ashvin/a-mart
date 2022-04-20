import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';

import {loginAuth} from './actions';
import {isLoggedInSelector} from './reducer';
import {Loading} from '../../components';
import {colors} from '../../assets/themes/styles';

const SignIn = (props, {route, navigation}) => {
  const [username, setUsername] = useState('johnd');
  const [password, setPassword] = useState('m38rmF$');
  const [isLoading, setIsLoading] = useState(false);

  const onPress = async () => {
    setIsLoading(true);
    const data = {
      username,
      password,
    };
    try {
      await props.loginAuth(data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
    if (props.isLoggedIn) navigation.navigate('tabNav');
  };

  return (
    <View style={styles.container}>
      <View style={styles.textBlock}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.descriptionText}>
          Please Sign-in to your account
        </Text>
      </View>
      <View style={styles.signInContent}>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
          keyboardType="default"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          keyboardType="default"
          placeholderTextColor="#000"
          secureTextEntry={true}
        />
        {isLoading ? (
          <View
            style={{
              alignItems: 'center',
            }}>
            <Loading />
          </View>
        ) : (
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={{color: '#fff', fontSize: 16}}>SIGN IN</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  const isLoggedIn = isLoggedInSelector(state);
  return {isLoggedIn};
};

const ConnectedSignIn = connect(mapStateToProps, {
  loginAuth,
})(SignIn);

export {ConnectedSignIn as SignIn};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
    padding: 15,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    padding: 5,
    height: 50,
    marginVertical: 5,
    backgroundColor: colors.white,
    color: colors.black,
    fontSize: 16,
    paddingLeft: 10,
  },
  signInContent: {
    padding: 15,
  },
  textBlock: {
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  welcomeText: {fontSize: 24, color: colors.black},
  descriptionText: {fontSize: 16, marginTop: 10, color: colors.black},
});
