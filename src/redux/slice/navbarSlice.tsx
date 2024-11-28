import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
    name: 'state',
    initialState: {
        isCartOpen: true,
    },
    reducers: {
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
    },
});

export const { toggleCart } = stateSlice.actions;

export default stateSlice.reducer;