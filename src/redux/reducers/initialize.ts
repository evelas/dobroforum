import { initializeActions, TypesInitialize } from '../actions';
import { InferActionsTypes } from './index';

type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof initializeActions>;

const initialState = {
  isInitialized: false,
};

const initializeAppReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case TypesInitialize.INITIALIZE_APP:
      return { ...state, isInitialized: true };
    default:
      return state;
  }
};

export default initializeAppReducer;
