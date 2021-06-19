import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { productSaga } from './product/sagas';
import { cartSaga } from './cart/saga';
import productReducer from './product/productSlice';
import cartReducer from './cart/cartSlice';

export function* rootSaga() {
  yield all([productSaga(), cartSaga()]);
}

const rootReducers = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export type RootReducer = ReturnType<typeof rootReducers>;
export default rootReducers;
