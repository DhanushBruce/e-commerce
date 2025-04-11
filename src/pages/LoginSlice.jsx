import {createSlice} from "@reduxjs/toolkit"

const initialState={
    Login:null
}

export const UserSlice= createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.Login = action.payload;
        },
        removeUser:(state,action)=>{
            state.Login=null;
        },
    },
});


export const {setUser,removeUser}=UserSlice.actions;

export default UserSlice.reducer;