import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./User/userSlice";
import tutorSlice from "./Tutor/tutorSlice";
import adminSlice from "./Admin/adminSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// Combine reducers directly, not an object
const rootReducer = combineReducers({
  user: userReducer,
  tutor: tutorSlice,
  admin:adminSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
