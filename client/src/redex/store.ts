import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
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
    key: "33",
    version: 1.1,
    storage,
  };

  const rootReducer = combineReducers({user: userReducer});
  const persistedReducer = persistReducer(persistConfig,rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
  export let persistor = persistStore(store);