// 로그인, 로그아웃, 회원가입
import customAxios from "./AxiosModule";

export interface RegisterForm {
  email: string;
  password: string;
  nickname: string;
  phoneNumber: string;
  profileImage?: File;
}
export interface LoginForm {
  email: string;
  password: string;
}
export interface User {
  id: string;
}
export const AuthAPI = {
  register: async (data: RegisterForm) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("nickname", data.nickname);
    formData.append("phoneNumber", data.phoneNumber);
    if (data.profileImage) {
      formData.append("profileImage", data.profileImage);
    }
    try {
      await customAxios.post("/api/auth/register", formData);
    } catch (err) {
      return { error: err };
    }
  },
  // TODO: api 수정 후 수정 필요
  login: async (data: LoginForm) => {
    try {
      await customAxios
        .post("/api/auth/login", data)
        .then((res) => localStorage.setItem("token", res.data.token));
    } catch (err) {
      return { error: err };
    }
  },
  logout: () => {
    localStorage.removeItem("token");
  },
};