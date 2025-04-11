import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Userslice";  
import LoginSlice from "./LoginSlice";
import searchReducer from"./SearchSlice"
import  wishReducer  from "./wishlistSlice";

const store = configureStore({
    reducer: {
        userInfo: userReducer, 
        loginInfo:LoginSlice ,
        search: searchReducer,
        WishList: wishReducer, 
    },
});

export default store;
