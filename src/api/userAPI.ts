import { resultCodeEnum } from './../Enum/resultCode';
import { ProfileType, RememberPasswordType } from './../types/types';
import Axios from 'axios';

const instansAxios = Axios.create({
  withCredentials: true,
  baseURL: 'https://xn--90afzgbamc1ah.xn--p1ai/RESTful/',
});

export type AuthAPITypes<D = {}, RC = resultCodeEnum> = {
  status: boolean;
  resultCode: RC;
  id: number;
  items: D;
  message: string;
}

export const authAPI = {
  getAuthData() {
    return instansAxios.get<AuthAPITypes<ProfileType>>(`auth`);
  },

  login(login: string, password: string, forgotMe: boolean) {
    return instansAxios.post(`login`, { login, password, forgotMe });
  },
  logout() {
    return instansAxios.delete(`auth`);
  },
};

authAPI.getAuthData().then(res => res.data);

export const regAPI = {
  registration(formData: ProfileType) {
    return instansAxios.post(`registration`, formData);
  },
  rememberPassword(formData: RememberPasswordType) {
    return instansAxios.post(`rememberPassword`, formData);
  },
};

export const quizAPI = {
  quiz(email: string, answer: string) {
    return instansAxios.post(`quiz`, { email, answer });
  },
};

export const adminAPI = {
  getSearch(text: string) {
    return instansAxios.get(`search?text=${text}`);
  },
  getOneUser(id: number) {
    return instansAxios.get(`profile/${id}`);
  },
  editProfile(formData: ProfileType, userId: number) {
    return instansAxios.patch(`profile/${userId}`, formData);
  },
};
