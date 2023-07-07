import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import weatherReducer from './weatherSlice';

const middleware = [...getDefaultMiddleware(), thunkMiddleware];

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware,
});

export default store;
