import {combineReducers, createStore, Store as RStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import emotions from './emotions';
import emotionsDates, {EmotionsDates} from './emotionsDates';
import {Emotion} from '../data';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = combineReducers({emotions, emotionsDates});

const persistedReducer = persistReducer(persistConfig, reducers);

export interface Store extends RStore {
  emotions: Emotion[];
  emotionsDates: EmotionsDates;
}

export const store: Store = createStore(persistedReducer);
export const persistor = persistStore(store);
