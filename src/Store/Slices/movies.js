import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllMovies, getMoviebySearch } from '../../Services/movies/index';


export const movieAction = createAsyncThunk("movies/getAll", async (page) => {
    const result = await getAllMovies(page);
    return result.data.results;
});

export const searchMovieaction = createAsyncThunk("movies/search", async (query) => {
    const result = await getMoviebySearch(query);
    return result.data.results;
});

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(movieAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(movieAction.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.movies = action.payload;
            })
            .addCase(movieAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(searchMovieaction.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchMovieaction.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;
                state.error = null;
            })
            .addCase(searchMovieaction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default moviesSlice.reducer;