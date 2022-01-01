import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myMovieList: [{ id: "1", title: "The lord of the rings" }],
};

export const myMovieListSlice = createSlice({
    name: "myMovieList",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addMovieToMyList: (state, action) => {
            state.myMovieList.push(action.payload);
        },
        removeFromMyMovieList: (state, action) => {
            state.myMovieList = state.myMovieList.filter(
                (movie) => movie.id !== action.payload.id
            );
        },
    },
});

export const { addMovieToMyList, removeFromMyMovieList /* logout */ } =
    myMovieListSlice.actions;

export const selectmyMovieList = (state) => state?.myMovieList?.myMovieList;

export default myMovieListSlice.reducer;
