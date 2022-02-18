import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
        const { data } = await axios.get('url');
        return data;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: null,
        user: {}
    },
    reducers: {

    },
    extraReducers: {
        [getUser.pending]: (state) => {
            state.loading = true;
        },
        [getUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
        },
        [getUser.rejected]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
        }
    }
});

export default userSlice.reducer;