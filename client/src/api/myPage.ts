import axios from "axios";
import customAxios from "./AxiosModule";
const { BASE_FETCH_URL } = process.env;

export interface updateUserData {
  nickname: string;
  instagram: string;
  profileImage: string;
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
    try {
      const result = await customAxios.put(`/api/users`, data);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },

  changePassword: async (userId: number, password: string) => {
    try {
      const result = await customAxios.put(`/api/users/${userId}/password`, {
        password,
      });
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
      const res = await fetch(`http://localhost:3000/api/articles/mine`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.status === 200) {
        return await res.json();
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  },
  // getMyArticles1: async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.BASE_FETCH_URL}/api/articles/mine`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       },
  //     );

  //     if (response.status === 200) {
  //       return response.data;
  //     }
  //     return null;
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // },
};
