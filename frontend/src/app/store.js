import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

/* redux persis imports */
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const configStore = () => {
    let store = configureStore({
        reducer: {
            user: persistedReducer,
        },
    });
    let persistor = persistStore(store);
    return { store, persistor };
};

/*  */

// export const store = configureStore({
//     reducer: {
//         user: userReducer,
//     },
// });
