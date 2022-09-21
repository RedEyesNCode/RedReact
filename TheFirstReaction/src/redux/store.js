import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import {persistStore,persistReducer,} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import slice from '../components/slice';
import authReducer from "../components/slice";
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';


const persistConfig = {
  key: "persist-store",
  storage,
  // whitelist: [
  //   'auth'
  // ],
};
const persistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});
export const persistor = persistStore(store)