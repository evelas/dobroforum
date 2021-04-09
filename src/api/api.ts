import { resultCodeEnum } from './../Enum/resultCode';
import Axios from 'axios';

export const instansAxios = Axios.create({
  withCredentials: true,
  baseURL: 'https://xn--90afzgbamc1ah.xn--p1ai/RESTful/',
});

// ответ от сервера
export type ApiTypes<D = {}, RC = resultCodeEnum> = {
  status: boolean;
  resultCode: RC;
  id?: number;
  items: D;
  message: string;
}






