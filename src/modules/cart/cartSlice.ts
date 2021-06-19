import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { CartPage, CartPageState, UserLogin } from 'types/Cart';

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
    getCartItems(state: CartPageState, action: PayloadAction<UserLogin>) {
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
  },
});

const { reducer, actions } = cartSlice;
export const { getCartItems, getCartItemsSuccess, getCartItemsError } = actions;
export default reducer;
