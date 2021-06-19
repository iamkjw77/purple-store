import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { AddCartType, CartItemType, CartPage, CartPageState, UpdateCartType } from 'types/Cart';

const initialState: CartPageState = {
  loading: false,
  error: null,
  data: null,
  count: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCartItems(state: CartPageState) {
      state.loading = true;
      state.error = null;
    },
    getCartItemsSuccess(state: CartPageState, action: PayloadAction<CartPage>) {
      state.loading = false;
      state.data = action.payload.results;
      state.count = action.payload.count;
    },
    getCartItemsError(state: CartPageState, action: PayloadAction<AxiosError>) {
      state.loading = false;
      state.error = action.payload;
    },

    addCartItem(state: CartPageState, action: PayloadAction<AddCartType>) {
      state.loading = true;
      state.error = null;
    },
    addCartItemSuccess(state: CartPageState, action: PayloadAction<CartItemType>) {
      state.loading = false;
      state.data = state.data.concat(action.payload);
      state.count = state.count + 1;
    },
    addCartItemError(state: CartPageState, action: PayloadAction<AxiosError>) {
      state.loading = false;
      state.error = action.payload;
    },

    updateCartItem(state: CartPageState, action: PayloadAction<UpdateCartType>) {
      state.loading = true;
      state.error = null;
    },
    updateCartItemSuccess(state: CartPageState, action: PayloadAction<CartItemType>) {
      state.loading = false;
      state.data = state.data.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
    },
    updateCartItemError(state: CartPageState, action: PayloadAction<AxiosError>) {
      state.loading = false;
      state.error = action.payload;
    },

    deleteCartItem(state: CartPageState, action: PayloadAction<number>) {
      state.loading = true;
      state.error = null;
    },
    deleteCartItemSuccess(state: CartPageState, action: PayloadAction<number>) {
      state.loading = false;
      state.data = state.data.filter((item) => item.id !== action.payload);
      state.count = state.count - 1;
    },
    deleteCartItemError(state: CartPageState, action: PayloadAction<AxiosError>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = cartSlice;
export const {
  getCartItems,
  getCartItemsSuccess,
  getCartItemsError,
  addCartItem,
  addCartItemSuccess,
  addCartItemError,
  updateCartItem,
  updateCartItemSuccess,
  updateCartItemError,
  deleteCartItem,
  deleteCartItemSuccess,
  deleteCartItemError,
} = actions;
export default reducer;
