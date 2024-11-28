// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/productSlice';
import stateReducer from './slice/navbarSlice';

export type IRootState = {
    product: ReturnType<typeof productReducer>;
    state: ReturnType<typeof stateReducer>;
};


const store = configureStore({
    reducer: {
        product: productReducer,
        state: stateReducer,
    },
});

export default store;
