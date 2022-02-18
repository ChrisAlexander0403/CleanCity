import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    birthdate: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: { initialStateValue },
    reducers: {
        signup: (state, action) => {
            state.value = action.payload
        },
        signin: (state, action) => {
            state.value = action.payload
        },
        signout: (state) => {
            state.value = initialStateValue
        }
    }
});

export const { signup, signin } = userSlice.actions;

export default userSlice.reducer;