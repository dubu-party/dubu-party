import { Article } from "@/script/@type/article/article";
import customAxios from "./AxiosModule";

export const userInfoInit = {
  articles: [],
  email: "",
  follower: [],
  following: [],
  id: 0,
  instagram: "",
  nickname: "",
  profileUrl: "",
  setting: {
    bgColor: "",
  },
};

export interface UserInfo {
  articles: Article[];
  email: string;
  follower: any[]; // TODO: 타입 확인
  following: any[];
  id: number;
  instagram: string;
  nickname: string;
  profileUrl: string;
  setting: {
    bgColor: string;
  };
}

export const CommonAPI = {
  getMyInfo: async () => {
    try {
      const result = await customAxios.get(`/api/users/myInfo`);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },

  chageMode: async (data: any) => {
    try {
      const result = await customAxios.put(`/api/users/setting`, data);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },
};
