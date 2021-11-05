import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie: null,
};

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        registerMovie: (state, action) => {
            state.movie = action.payload;
        },
        removeMovie: (state) => {
            state.movie = null;
        },
    },
});

export const { registerMovie, removeMovie /* logout */ } = movieSlice.actions;

export const selectMovie = (state) => state?.movie?.movie;

export default movieSlice.reducer;
