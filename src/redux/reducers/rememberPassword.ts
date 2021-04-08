import { InferActionsTypes } from '.';
import { rememberPasswordActions, TypesRememberPassword } from '../actions';

type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof rememberPasswordActions>;

const initialState = {
  isTryTime: false,
};

const rememberPasswordReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case TypesRememberPassword.SET_REMEMBER_PASSWORD:
      return { ...state, ...action.payload };
    case TypesRememberPassword.TRY_TIME_DISABLED:
      return { ...state, isTryTime: action.payload };
    default:
      return state;
  }
};

export default rememberPasswordReducer;
