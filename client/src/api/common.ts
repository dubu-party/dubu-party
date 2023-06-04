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
  // getMyInfo1: async () => {
  //   try {
  //     const res = await fetch(`http://localhost:3000/api/users/myInfo`, {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (res.status === 200) {
  //       return await res.json();
  //     }
  //     return null;
  //   } catch (err) {
  //     console.error(err);
  //     return null;
  //   }
  // },
  chageMode: async (data: any) => {
    try {
      const result = await customAxios.put(`/api/users/setting`, data);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },
};
