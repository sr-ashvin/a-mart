import constants from '../../components/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH = '[AUTH]';
export const SIGN_IN_REQUEST = `${AUTH} SignIn Request`;
export const SIGN_IN_SUCCESS = `${AUTH} SignIn Success`;
export const SIGN_IN_ERROR = `${AUTH} SignIn Error`;

export const SIGN_OUT_REQUEST = `${AUTH} SignOut Request`;
export const SIGN_OUT_SUCCESS = `${AUTH} SignOut Success`;
export const SIGN_OUT_ERROR = `${AUTH} SignOut Error`;

export const loginAuth = data => async dispatch => {
  dispatch({type: SIGN_IN_REQUEST});
  try {
    const result = fetch(constants.BASE_URL + 'auth/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => {
      if (response.status == 401) {
        // console.log('401');
        return dispatch({
          type: SIGN_IN_ERROR,
          payload: 'User not available',
        });
      } else {
        // console.log('test');
        return dispatch({
          type: SIGN_IN_SUCCESS,
          payload: 'eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        });
      }
    });
  } catch (error) {
    return dispatch({
      type: SIGN_IN_ERROR,
      payload: error,
    });
  }
};

export const signOut = () => async dispatch => {
  dispatch({type: SIGN_OUT_REQUEST});
  try {
    await AsyncStorage.clear();
    return dispatch({
      type: SIGN_OUT_SUCCESS,
      payload: '',
    });
  } catch (e) {
    return dispatch({
      type: SIGN_OUT_ERROR,
      payload: e,
    });
  }
};
