// import { createSlice } from "@reduxjs/toolkit";

// const initialState={
//     wishlistcart:[],
// }

// export const WishSlice=createSlice({
//     name:"heart",
//     initialState,
//     reducers:{
//         setWish: (state, action) => {
//             state.wishlistcart.push(action.payload); 
//           },
//           deleteWish: (state, action) => {
//             state.wishlistcart = state.wishlistcart.filter(
//                 (item, index) => index !== action.payload
//             );
//         },
        
//     },
// });

// export const {setWish,deleteWish}=WishSlice.actions

// export default WishSlice.reducer

// wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistcart: [],
}

export const WishSlice = createSlice({
    name: "WishList",  
    initialState,
    reducers: {
        toggleWish: (state, action) => {
            const item = action.payload;
            const existingIndex = state.wishlistcart.findIndex(i => i.id === item.id);
            
            if (existingIndex >= 0) {
                // Remove if exists
                state.wishlistcart.splice(existingIndex, 1);
            } else {
                // Add if doesn't exist
                state.wishlistcart.push(item);
            }
        },
        deleteWish: (state, action) => {
            state.wishlistcart = state.wishlistcart.filter(
                (item, index) => index !== action.payload
            );
        },
    },
});

export const { toggleWish, deleteWish } = WishSlice.actions;
export default WishSlice.reducer;

