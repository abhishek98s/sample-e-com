import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
    name: 'state',
    initialState: {
        isCartOpen: false,
    },
    reducers: {
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
            console.log(2)
        },
    },
});

export const { toggleCart } = stateSlice.actions;

export default stateSlice.reducer;