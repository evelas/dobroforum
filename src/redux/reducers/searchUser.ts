import { InferActionsTypes } from '.';
import { Nullable, ProfileType } from '../../types/types';
import { searchUserActions, TypesSearchUser } from '../actions/searchUser';

type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof searchUserActions>;

const initialState = {
  userData: null as Nullable<ProfileType>,
  isLoaded: false,
};

const oneUserReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case TypesSearchUser.SET_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case TypesSearchUser.IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default oneUserReducer;
