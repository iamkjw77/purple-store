import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as cartAPI from 'apis/cart';
import { AddCartType, CartItemType, CartPage, UpdateCartType } from 'types/Cart';
import {
  addCartItem,
  addCartItemSuccess,
  addCartItemError,
  getCartItems,
  getCartItemsError,
  getCartItemsSuccess,
  deleteCartItemSuccess,
  deleteCartItemError,
  deleteCartItem,
  updateCartItem,
  updateCartItemSuccess,
  updateCartItemError,
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

// 장바구니 아이템 수정
function* updateItemSaga(action: PayloadAction<UpdateCartType>) {
  try {
    const cartItem: CartItemType = yield call(cartAPI.updateCartItem, action.payload);
    yield put(updateCartItemSuccess(cartItem));
  } catch (error) {
    yield put(updateCartItemError(error));
  }
}

// 장바구니 아이템 삭제
function* deleteItemSaga(action: PayloadAction<number>) {
  try {
    yield call(cartAPI.deleteCartItem, action.payload);
    yield put(deleteCartItemSuccess(action.payload));
  } catch (error) {
    yield put(deleteCartItemError(error));
  }
}

// 모니터링 함수
export function* cartSaga() {
  yield takeEvery(getCartItems.type, getCartItemsSaga);
  yield takeEvery(addCartItem.type, addItemSaga);
  yield takeEvery(updateCartItem.type, updateItemSaga);
  yield takeEvery(deleteCartItem.type, deleteItemSaga);
}
