import { UserState } from "./../atoms/userState";
// 로그인, 로그아웃, 회원가입
import customAxios from "./AxiosModule";

export interface RegisterForm {
  email: string;
  password: string;
  nickname: string;
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
      const result = await customAxios.post("/api/auth/login", data);
      sessionStorage.setItem("token", result.data.token);

      const user = {
        email: result.data.email,
        id: result.data.id,
        instagram: result.data.instagram,
        nickName: result.data.nickName,
        profileUrl: result.data.profileUrl,
        setting: {
          bgColor: result.data.setting.bgColor,
        },
      } as UserState;
      return { data: user };
    } catch (err) {
      if (typeof err === "string") return { error: err as string };
      else return { error: "로그인에 실패했습니다." };
    }
  },

  logout: () => {
    sessionStorage.removeItem("token");
  },
};
