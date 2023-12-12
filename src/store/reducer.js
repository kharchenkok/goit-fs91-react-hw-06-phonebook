import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const reducer = {
  contacts: persistedReducer,
  filter: filterReducer,
};
