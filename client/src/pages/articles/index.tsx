import { Article, ArticleService } from "@/script/@type/article";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const ArticleList = ({ articles }: { articles: Article[] }) => {
  // 페이지를 이동하고 싶을 때는 useRouter를 사용합니다.
  const router = useRouter();
  return (
    <Wrapper>
      <h1>hi</h1>
      {articles.map((article) => {
        return (
          <div
            onClick={() => {
              router.push(`/articles/${article.id}`);
            }}
            className="article"
            key={article.id}
          >
            <div>{article.title}</div>
            <div>{article.content}</div>
            <img src={article.fileUrl} alt="이미지" />
          </div>
        );
      })}
    </Wrapper>
  );
};

export const getServerSideProps = async () => {
  const articles = await ArticleService.list();
  console.log("articles", articles);
  return {
    props: {
      articles,
    },
  };
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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
