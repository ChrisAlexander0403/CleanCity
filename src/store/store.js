import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user';

export default function store() {
    return configureStore({
        reducer: {
            user: userReducer
        },
    });
}