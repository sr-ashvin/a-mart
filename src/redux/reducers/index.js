// This file contains root reducer: it combines all other reducers

import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import ProductListReducer from '../../ProductList/reducer';
import signInReducer from '../../SignIn/reducer';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['userId', 'isLoggedIn'],
  stateReconciler: autoMergeLevel2,
};

const appReducer = combineReducers({
  productList: ProductListReducer,
  auth: persistReducer(authPersistConfig, signInReducer),
});

export default appReducer;
