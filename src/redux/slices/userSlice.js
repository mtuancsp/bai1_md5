import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            console.log(action);
            state.user = action.payload.user;
            // console.log(state.user);
            // localStorage.setItem('user', JSON.stringify(action.payload.user));
            localStorage.setItem("token", action.payload.token);
        },
        logout: (state, action) => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            state.user = null;
        }
    }
})

export const {
    loginSuccess,
    logout
} = userSlice.actions;

export const userReducer = userSlice.reducer;