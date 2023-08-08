import { configureStore } from '@reduxjs/toolkit';
import { ContactReducer } from 'redux/ContactSlice/ContactSlice';
import { FilterReducer } from 'redux/FilterSlice/FilterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contact',
  storage,
  whitelist: ['contact'],
};

export const store = configureStore({
  reducer: {
    contact: persistReducer(contactsPersistConfig, ContactReducer),
    filter: FilterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
