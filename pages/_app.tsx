import type { AppProps } from 'next/app';
import GlobalStyle from 'styles/globals';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { Provider, TypedUseSelectorHook, useSelector } from 'react-redux';
import rootReducers, { RootReducer, rootSaga } from 'modules';
import Header from 'components/Header/index';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga);

export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
      <div id="modal"></div>
    </Provider>
  );
}

export default MyApp;
