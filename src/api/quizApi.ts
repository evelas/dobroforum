import { ApiTypes, instansAxios } from "./api";

export const quizApi = {
  quiz(email: string, answer: string) {
    return instansAxios.post<ApiTypes>(`quiz`, { email, answer });
  },
};