import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as productAPI from 'apis/products';
import { ProductPage } from 'types/Product';
import { getProducts, getProductsError, getProductsSuccess } from './productSlice';

// 상품 페이지 조회
function* getProductsSaga(action: PayloadAction<number>) {
  try {
    const products: ProductPage = yield call(productAPI.getProducts, action.payload);
    yield put(getProductsSuccess(products));
  } catch (error) {
    yield put(getProductsError(error));
  }
}

// 모니터링 함수
export function* productSaga() {
  yield takeEvery(getProducts.type, getProductsSaga);
}
