import { ApiTypes, instansAxios } from "./api";
import { ProfileType } from '../types/types';

export const adminApi = {
  getSearch(text: string) {
    return instansAxios.get<ApiTypes>(`search?text=${text}`);
  },
  getOneUser(id: number) {
    return instansAxios.get<ApiTypes>(`profile/${id}`);
  },
  editProfile(formData: ProfileType, userId: number) {
    return instansAxios.patch<ApiTypes>(`profile/${userId}`, formData);
  },
};