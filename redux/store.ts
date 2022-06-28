// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import AuthReducer from './features/auth/authSlice';


// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   version: 1,
// };

// const rootReducer = combineReducers({
//   auth: AuthReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// const persistor = persistStore(store);

// export { store, persistor };
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;