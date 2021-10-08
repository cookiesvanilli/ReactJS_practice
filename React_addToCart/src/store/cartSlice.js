import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, data) => {
            console.log(data);
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++;
        },
        minusCart: (state, data) => {
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            else if (state.value[articul] <= 0) state.value[articul] = 0; 
            else state.value[articul]--;
        },
        deleteCart: (state, data) => {
            let articul = data.payload;
            delete state.value[articul];
        }
    }
});

export const { increment, minusCart, deleteCart } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;