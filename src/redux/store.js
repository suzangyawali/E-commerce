import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { PERSIST } from "redux-persist";

const persistConfig = {
   key: 'root',
   storage,
   whitelist:["auth"],
 }

 const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [PERSIST],
        },
      });
    },
})
const  persistor = persistStore(store)
export {store,persistor};