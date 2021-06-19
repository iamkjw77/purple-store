import { PayloadAction } from '@reduxjs/toolkit';
import { CartPage, UserLogin } from 'types/Cart';
import * as cartAPI from 'apis/cart';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getCartItems, getCartItemsError, getCartItemsSuccess } from './cartSlice';

// 장바구니 아이템 전체 조회
function* getCartItemsSaga(action: PayloadAction<UserLogin>) {
  try {
    const cart: CartPage = yield call(cartAPI.getCartItems, action.payload);
    yield put(getCartItemsSuccess(cart));
  } catch (error) {
    yield put(getCartItemsError(error));
  }
}

// 모니터링 함수
export function* cartSaga() {
  yield takeEvery(getCartItems.type, getCartItemsSaga);
}
