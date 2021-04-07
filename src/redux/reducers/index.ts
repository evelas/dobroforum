import { combineReducers } from 'redux';
import auth from './auth';
import initialize from './initialize';
import search from './search';
import searchUser from './searchUser';
import rememberPassword from './rememberPassword';
import { reducer as form } from 'redux-form';

const reducers = combineReducers({
  auth,
  form,
  initialize,
  rememberPassword,
  search,
  searchUser,
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

// type PropsType<T> = T extends { [key: string]: infer U } ? U : never;
// export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
//   PropsType<T>
// >;
// eslint-disable-next-line
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U }
  ? U
  : never;

export default reducers;
