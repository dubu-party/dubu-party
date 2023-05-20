// import { axios } from "axios";
const { BASE_FETCH_URL } = process.env;

// 임시 - 게시물 가져오기
// getServerSideProps 함수는 서버 사이드에서 실행되는 동안 데이터를 가져오기 때문에
// customAxios와 같은 클라이언트 사이드에서 동작하는 모듈을 사용할 수 없다.
export const MypageAPI = {
  getArticles: async () => {
    try {
      // TODO: 재확인 필요
      const res = await fetch(`${BASE_FETCH_URL}/api/articles`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        const data = await res.json();
        return data;
      }
    } catch (error) {
      console.error("error");
      return [];
    }
  },
  updateUser: async (user: any) => {},
};
