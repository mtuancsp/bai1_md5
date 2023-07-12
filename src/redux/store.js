import {userReducer} from "./slices/userSlice";
import {configureStore} from "@reduxjs/toolkit";
import {searchReducer} from "./slices/searchSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        search: searchReducer,
    },
});

export default store;
