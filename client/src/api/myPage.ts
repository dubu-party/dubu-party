import axios from "axios";
import customAxios from "./AxiosModule";
const { BASE_FETCH_URL } = process.env;

export interface updateUserData {
  nickname: string;
  instagram: string;
  profileImage: File;
}
export interface changePwProps {
  password: string;
  userId: number;
}

// getServerSideProps 함수는 서버 사이드에서 실행되는 동안 데이터를 가져오기 때문에
// customAxios와 같은 클라이언트 사이드에서 동작하는 모듈을 사용할 수 없다.
export const MypageAPI = {
  getUserById: async (userId: number) => {
    try {
      const result = await customAxios.get(`/api/users/${userId}`);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },

  updateUser: async (data: updateUserData) => {
    const formData = new FormData();
    if (data.profileImage) {
      formData.append("profileImage", data.profileImage);
    }
    formData.append("nickname", data.nickname);
    console.log(data);

    try {
      const result = await customAxios.put(`/api/users`, formData);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },

  // TODO: 형식을 확인해 주세요
  // 추후 비밀번호 확인 로직 필요
  changePassword: async (data: changePwProps) => {
    // console.log(data);

    try {
      const result = await customAxios.put(
        `/api/users/${data.userId}/password`,
        data.password,
      );
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },

  getFollowings: async (userId: number) => {
    try {
      const result = await customAxios.get(`/api/follows/${userId}/followings`);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },
  getLiked: async () => {},

  getMyArticles: async () => {
    try {
      const result = await customAxios.get(`/api/articles/mine`);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },
  getMyArticles1: async () => {
    try {
      const res = await fetch(
        `https://dubu-party-5u9xxggz0-dubu.vercel.app/api/articles/mine`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        },
      );

      if (res.status === 200) {
        return await res.json();
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  },
};
