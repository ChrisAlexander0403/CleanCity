import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'user',
    initialState: { 
        value: { 
            primaryColor: '3B84AF',
            secundaryColor: '9DC2D7'
        } 
    },
    reducers: {
        changeTheme: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;