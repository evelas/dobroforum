import Axios from 'axios';

const instansAxios = Axios.create({
  withCredentials: true,
  baseURL: 'https://xn--90afzgbamc1ah.xn--p1ai/RESTful/',
});

export const authAPI = {
  getAuthData() {
    return instansAxios.get(`auth`);
  },

  login(login, password, forgotMe) {
    return instansAxios.post(`login`, { login, password, forgotMe });
  },
  logout() {
    return instansAxios.delete(`auth`);
  },
};
export const regAPI = {
  registration(formData) {
    return instansAxios.post(`registration`, formData);
  },
  rememberPassword(formData) {
    return instansAxios.post(`rememberPassword`, formData);
  },
};

export const quizAPI = {
  quiz(email, answer) {
    return instansAxios.post(`quiz`, { email, answer });
  },
};

export const adminAPI = {
  getSearch(text) {
    return instansAxios.get(`search?text=${text}`);
  },
  getOneUser(id) {
    return instansAxios.get(`profile/${id}`);
  },
  editProfile(formData, userId) {
    return instansAxios.patch(`profile/${userId}`, formData);
  },
};
