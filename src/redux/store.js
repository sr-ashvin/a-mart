// This file contains all the data in store from root reducer
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import appReducer from './reducers';
import {logger} from '../../middleware/Logger';

// creating store
const enhancers = [applyMiddleware(ReduxThunk), applyMiddleware(logger)];

export const store = createStore(appReducer, undefined, compose(...enhancers));
export const persistor = persistStore(store);
