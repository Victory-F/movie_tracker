import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMovies: null,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    moviesFetched: (state, action) => {
      state.allMovies = action.payload;
    },
  },
});

export const { moviesFetched } = moviesSlice.actions;

export default moviesSlice.reducer;
