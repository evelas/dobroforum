import { ProfileType } from '../../Types/types';

export const TypesSearch = {
  SET_SEARCH_PRODUCT: '/reducers/search/SET_SEARCH_PRODUCT' as const,
  LOAD_SEARCH: '/reducers/search/LOAD_SEARCH' as const,
};

export const searchActions = {
  setSearchProduct: (searchUser: ProfileType | null) => ({
    type: TypesSearch.SET_SEARCH_PRODUCT,
    payload: searchUser,
  }),
  loadSearch: (textSearch: string) => ({
    type: TypesSearch.LOAD_SEARCH,
    payload: textSearch,
  }),
};
