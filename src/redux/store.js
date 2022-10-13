import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users/slice';
import { errorReducer } from './errorReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'user',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        user: persistReducer(persistConfig, usersReducer),
        error: errorReducer,
    },
    middleware: [thunk],
});

export const persistor = persistStore(store);
