import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { productSaga } from './product/sagas';
import productReducer from './product/productSlice';

export function* rootSaga() {
  yield all([productSaga()]);
}

const rootReducers = combineReducers({
  product: productReducer,
});

export type RootReducer = ReturnType<typeof rootReducers>;
export default rootReducers;
