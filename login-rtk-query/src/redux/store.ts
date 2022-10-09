import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import authApiSlice from './auth-api.slice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        [authApiSlice.reducerPath]: authApiSlice.reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
