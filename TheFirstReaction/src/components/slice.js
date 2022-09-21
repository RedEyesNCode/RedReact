
import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name : "auth",
    initialState: {
        // user : null,
        isLoggedIn: false,
        token: null
        // logout: false,    
    },
    reducers:{
        login: (state, action)=>{
            state.isLoggedIn = true
            state.token = action.payload;
        },
        logout:(state)=>{
            state.isLoggedIn = false
            state.token = null

        },
    },
});

export const {login,logout}=authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;