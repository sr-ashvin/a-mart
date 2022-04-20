import {SIGN_IN_SUCCESS, SIGN_IN_ERROR, SIGN_OUT_SUCCESS} from './actions';
// Initial State object for reducer and store
const initialState = {
  isLoggedIn: false,
  token: '',
  error: null,
  userId: 1,
};

// signInReducer reducer with all the action types
const SignInReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: payload,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        error: payload,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        token: '',
      };
    default:
      return state;
  }
};

export default SignInReducer;

export const isLoggedInSelector = state => state.auth.isLoggedIn;
export const tokenSelector = state => state.auth.token;
export const userIdSelector = state => state.auth.userId;
