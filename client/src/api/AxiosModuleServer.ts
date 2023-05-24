import axios, { AxiosError, AxiosInstance } from "axios";

const { BASE_FETCH_URL } = process.env;

const customServerAxios: AxiosInstance = axios.create({
  baseURL: BASE_FETCH_URL,
  withCredentials: true,
});

// 토큰 가져다 쓰기
customServerAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

customServerAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  },
);
export default customServerAxios;
