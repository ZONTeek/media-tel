import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStateType } from "./store";

const initialState = {
    value: {
        authenticated: false,
        user: {
            name: ''
        }
    }
}

const AuthSlice = createSlice({
    name: 'Auth',
    initialState, 
    reducers: {
        login: (state, action: PayloadAction<{name: string}>): void => {
            state.value = {
                authenticated: true, 
                user: {
                    name: action.payload.name
                }
            }
        },
        logout: (state): void => {
            state.value = {
                authenticated: false,
                user: {
                    name: ''
                }
            }
        }
    }
})

export const selectAuth = (state: RootStateType) => state.auth.value;
export const { login, logout } = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;