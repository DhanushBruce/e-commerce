import { configureStore } from "@reduxjs/toolkit";
// import { useReducer } from "react";
import userReducer from "./Userslice";  
import LoginSlice from "./LoginSlice";
import searchReducer from"./SearchSlice"
// import categoryReducer from './CategorySlice';
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
