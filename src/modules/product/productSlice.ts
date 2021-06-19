import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ProductPage, ProductPageState } from 'types/Product';

const initialState: ProductPageState = {
  loading: false,
  error: null,
  data: null,
  count: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts(state: ProductPageState, action: PayloadAction<number>) {
      state.loading = true;
    },
    getProductsSuccess(state: ProductPageState, action: PayloadAction<ProductPage>) {
      state.loading = false;
      state.data = state.data
        ? state.data.concat(...action.payload.results)
        : action.payload.results;
      state.count = state.count ? action.payload.count : 1;
    },
    getProductsError(state: ProductPageState, action: PayloadAction<AxiosError>) {
      state.loading = false;
      state.error = action.payload;
    },
    clearProducts(state: ProductPageState) {
      state.data = null;
    },
  },
});

const { reducer, actions } = productSlice;
export const { getProducts, getProductsSuccess, getProductsError, clearProducts } = actions;
export default reducer;
