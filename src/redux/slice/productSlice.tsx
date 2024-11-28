// src/features/productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import product1 from '../../images/product-1.png';
import product2 from '../../images/product-2.png';
import product3 from '../../images/product-3.png';
import product4 from '../../images/product-4.png';
import { IProduct } from '../../types/product';



interface ProductState {
    products: IProduct[];
    cart: IProduct[];
}

const initialState: ProductState = {
    products: [
        {
            id: 1,
            title: 'Italian premium',
            price: 12,
            image: product1,
        },

        {
            id: 2,
            title: 'Italian premium',
            price: 12,
            image: product2,
        },

        {
            id: 3,
            title: 'Italian premium',
            price: 12,
            image: product3,
        },

        {
            id: 4,
            title: 'Italian premium',
            price: 12,
            image: product4,
        },
    ],
    cart: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<{ title: string }>) => {
            state.cart = state.cart.filter(product => product.title !== action.payload.title);
        },
        setProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload;
        },
    },
});

export const { addToCart, removeFromCart, setProducts } = productSlice.actions;

export default productSlice.reducer;