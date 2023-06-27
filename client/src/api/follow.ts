import customAxios from "./AxiosModule";

export const FollowAPI = {
  getFollowings: async (userId: number) => {
    try {
      const result = await customAxios.get(`/api/follows/${userId}/followings`);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },
  getFollowers: async (userId: number) => {
    try {
      const result = await customAxios.get(`/api/follows/${userId}/followers`);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },
  following: async (id: number) => {
    try {
      const result = await customAxios.post(`/api/follows/${id}`);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },
  cancelFollowing: async (id: number) => {
    try {
      const result = await customAxios.delete(`/api/follows/${id}`);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  },
};
