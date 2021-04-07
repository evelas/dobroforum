import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/sagas';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
 
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware, saga));
 
  // window.store = store;  // @ts-ignore
 
  saga.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
