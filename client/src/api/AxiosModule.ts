import axios, { AxiosError, AxiosInstance } from "axios";

const { BASE_FETCH_URL } = process.env;

const customAxios: AxiosInstance = axios.create({
  baseURL: BASE_FETCH_URL,
  withCredentials: true,
});

// 토큰 가져다 쓰기
customAxios.interceptors.request.use(
  (config) => {
    // 따로 빼도 되는 부분
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default customAxios;
