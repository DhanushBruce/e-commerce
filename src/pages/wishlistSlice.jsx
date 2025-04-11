
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
                
                state.wishlistcart.splice(existingIndex, 1);
            } else {
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

