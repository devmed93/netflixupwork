import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import movieReducer from "../features/movieSlice";

/* redux persis imports */
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
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
import myMovieListSlice from "../features/myMovieListSlice";
const persistConfig = {
    key: "root",
    storage,
};

const reducer = combineReducers({
    user: userReducer,
    movie: movieReducer,
    myMovieList: myMovieListSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const configStore = () => {
    let store = configureStore({
        reducer: persistedReducer,
        middleware: getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
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
