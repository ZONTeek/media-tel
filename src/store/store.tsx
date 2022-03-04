import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthSlice";
import { UsersReducer } from "./UsersSlice";

export const store = configureStore({
    reducer: {
        users: UsersReducer,
        auth: AuthReducer
    }
})

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;