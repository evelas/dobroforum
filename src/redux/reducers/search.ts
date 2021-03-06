import { Nullable, ProfileType } from './../../types/types';
import { searchActions, TypesSearch } from './../actions';
import { InferActionsTypes } from './index';

const initialState = {
  searchUser: null as Nullable<ProfileType>,
};

const searchReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case TypesSearch.SET_SEARCH_PRODUCT:
      return {
        ...state,
        searchUser: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;

type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof searchActions>;
