import { ProfileType } from '../../types/types';

export const TypesSearchUser = {
  SET_USER: '/reducers/searchUser/SET_USER' as const,
  IS_LOADED: '/reducers/searchUser/IS_LOADED' as const,
  LOAD_USER: '/reducers/searchUser/LOAD_USER' as const,
  SAVE_PROFILE: '/reducers/searchUser/SAVE_PROFILE' as const,
};

export const searchUserActions = {
  setUser: (User: ProfileType) => ({
    type: TypesSearchUser.SET_USER,
    payload: User,
  }),
  isLoadedAction: (isLoad: boolean) => ({
    type: TypesSearchUser.IS_LOADED,
    payload: isLoad,
  }),
  loadOneUser: (id: number) => ({
    type: TypesSearchUser.LOAD_USER,
    payload: id,
  }),
  saveProfile: (formData: ProfileType, userId: number) => ({
    type: TypesSearchUser.SAVE_PROFILE,
    payload: {
      formData: formData,
      userId: userId,
    },
  }),
};
