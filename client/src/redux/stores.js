import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import usersReducer from "./userSlice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const rootReducer = combineReducers({ auth: authReducer, users: usersReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const stores = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  
  export let persistor = persistStore(stores);