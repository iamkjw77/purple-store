import { PayloadAction } from '@reduxjs/toolkit';
import { AddCartType, CartItemType, CartPage } from 'types/Cart';
import * as cartAPI from 'apis/cart';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  addCartItem,
  addCartItemSuccess,
  addCartItemError,
  getCartItems,
  getCartItemsError,
  getCartItemsSuccess,
} from './cartSlice';

// 장바구니 아이템 전체 조회
function* getCartItemsSaga() {
  try {
    const cart: CartPage = yield call(cartAPI.getCartItems);
    yield put(getCartItemsSuccess(cart));
  } catch (error) {
    yield put(getCartItemsError(error));
  }
}

// 장바구니 아이템 추가
function* addItemSaga(action: PayloadAction<AddCartType>) {
  try {
    const cartItem: CartItemType = yield call(cartAPI.addCartItem, action.payload);
    yield put(addCartItemSuccess(cartItem));
  } catch (error) {
    yield put(addCartItemError(error));
  }
}

// 모니터링 함수
export function* cartSaga() {
  yield takeEvery(getCartItems.type, getCartItemsSaga);
  yield takeEvery(addCartItem.type, addItemSaga);
}
