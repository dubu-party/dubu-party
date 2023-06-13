import { Article, ArticleAPI } from "@/script/@type/article/article";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import MainImageCard from "./components/main-card";

const ArticleList = ({ articles }: { articles: Article[] }) => {
  // 페이지를 이동하고 싶을 때는 useRouter를 사용합니다.
  const baseServerUrl = process.env.BASE_SERVER_URL;
  const router = useRouter();

  return (
    <Wrapper>
      {articles.map((article) => (
        <MainImageCard article={article} key={article.id} />
      ))}
      <button onClick={() => router.push("/articles/create")}>글쓰기</button>
    </Wrapper>
  );
};

export const getServerSideProps = async ({ req }: any) => {
  const articles = await ArticleAPI.list();
  return {
    props: {
      articles,
    },
  };
};

const Wrapper = styled.section`
  width: 300px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 20px;
  .article {
    cursor: pointer;
    background-color: aliceblue;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
  }

  .content {
    font-size: 16px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
  }

  div {
    font-size: 16px;
  }
`;

export default ArticleList;
