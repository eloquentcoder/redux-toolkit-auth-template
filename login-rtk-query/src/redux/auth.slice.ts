import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../types/user.types";
import { RootState } from "./store";


type AuthState = {
    msg: String,
    user: String,
    token: String,
    loading: boolean,
    errorMessage: String,
}

const initialState: AuthState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    errorMessage: ""
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addMatcher(
            
        )
        // builder.addCase(signupUser.pending, (state, action) => {
        //     state.loading = true
        // }),
        //     builder.addCase(signupUser.rejected, (state, action) => {
        //         state.loading = false
        //         state.errorMessage = action.error.message as String
        //     }),
        //     builder.addCase(signupUser.fulfilled, (state, action) => {
        //         console.log(action)
        //         state.loading = false
        //         state.token = '1204923cm0m9r4c88348cm',
        //             state.user = 'User',
        //             state.msg = "Registration Successful"
        //     })
    }
})

export const selectAuthState = (state: RootState) => state.auth

export default authSlice.reducer