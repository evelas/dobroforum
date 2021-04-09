import { ApiTypes, instansAxios } from "./api";
import { ProfileType, RememberPasswordType } from '../types/types';

export const regApi = {
  registration(formData: ProfileType) {
    return instansAxios.post<ApiTypes>(`registration`, formData);
  },
  rememberPassword(formData: RememberPasswordType) {
    return instansAxios.post<ApiTypes>(`rememberPassword`, formData);
  },
};