// src/features/productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import product1 from '../../images/product-1.png';
import product2 from '../../images/product-2.png';
import product3 from '../../images/product-3.png';
import product4 from '../../images/product-4.png';
import product5 from '../../images/product-5.png';
import product6 from '../../images/product-6.png';
import product7 from '../../images/product-7.png';
import product8 from '../../images/product-8.png';

import { IProduct } from '../../types/product';

interface ProductState {
  products: IProduct[];
  cart: IProduct[];
}

const initialState: ProductState = {
  products: [
    {
      id: 1,
      title: 'Kitchen Tools Set',
      price: 45,
      image: product1,
    },
    {
      id: 2,
      title: 'Stylish Sneakers',
      price: 60,
      image: product2,
    },
    {
      id: 3,
      title: 'Bag with style',
      price: 20,
      image: product3,
    },
    {
      id: 4,
      title: 'Luxury Cosmetics Set',
      price: 50,
      image: product4,
    },

    {
      id: 5,
      title: 'Cosmetics Set',
      price: 80,
      image: product5,
    },

    {
      id: 6,
      title: 'Premium perfrume',
      price: 25,
      image: product6,
    },
    {
      id: 7,
      title: 'Palo Santo',
      price: 50,
      image: product7,
    },
    {
      id: 8,
      title: 'Natural Perfume',
      price: 15,
      image: product8,
    },
  ],
  cart: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const productExists = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (!productExists) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<{ title: string }>) => {
      state.cart = state.cart.filter(
        (product) => product.title !== action.payload.title
      );
    },
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    sortCartProducts: (state, action: PayloadAction<{ sortBy: string }>) => {
      const sort = action.payload.sortBy.toLocaleLowerCase();
      switch (sort) {
        case 'a-z':
          state.cart.sort((a, b) => {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          });
          break;

        case 'z-a':
          state.cart.sort((a, b) => {
            if (a.title < b.title) {
              return 1;
            }
            if (a.title > b.title) {
              return -1;
            }
            return 0;
          });
          break;
      }
    },
    setNoOfQuantity: (
      state,
      action: PayloadAction<{ id: number; isAdd?: 'add' }>
    ) => {
      const { id, isAdd } = action.payload;

      state.cart.map((item: IProduct, index: number) => {
        if (item.id === action.payload.id) {
          if (isAdd === 'add') {
            item.quantity! += 1;
          } else {
            item.quantity = item.quantity! - 1;
          }
        }

        return item;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  setProducts,
  setNoOfQuantity,
  sortCartProducts,
} = productSlice.actions;

export default productSlice.reducer;
