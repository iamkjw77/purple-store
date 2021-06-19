import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { AddCartType, CartItemType, CartPage, CartPageState } from 'types/Cart';

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
    },
    addCartItemSuccess(state: CartPageState, action: PayloadAction<CartItemType>) {
      state.loading = false;
      state.data = state.data.concat(action.payload);
    },
    addCartItemError(state: CartPageState, action: PayloadAction<AxiosError>) {
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
} = actions;
export default reducer;
