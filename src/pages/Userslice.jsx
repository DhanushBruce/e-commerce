

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Apparel: [],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: { 
        setUsers: (state, action) => {
            const existingItemIndex = state.Apparel.findIndex(
                item => item.id === action.payload.id
            );
            
            if (existingItemIndex >= 0) {
                state.Apparel[existingItemIndex].quantity = 
                    (state.Apparel[existingItemIndex].quantity || 1) + 1;
            } else {
                state.Apparel.push({ ...action.payload, quantity: 1 });
            }
        }, 
        deleteUser: (state, action) => {
            state.Apparel = state.Apparel.filter(
                (user, index) => index !== action.payload
            );
        },
        updateQuantity: (state, action) => {
            const { index, quantity } = action.payload;
            if (state.Apparel[index]) {
                state.Apparel[index].quantity = quantity;
            }
        }
    },
});

export const { setUsers, deleteUser, updateQuantity } = userSlice.actions;

export default userSlice.reducer;