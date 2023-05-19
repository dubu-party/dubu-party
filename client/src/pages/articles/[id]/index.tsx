import { Article, ArticleService } from "@/script/@type/article";
import styled from "@emotion/styled";
import React, { useEffect } from "react";

const index = ({ article }: { article: Article }) => {
  return (
    <Wrapper>
      <div className="title">{article.title}</div>
      <div className="content">{article.content}</div>
      <img src={`${process.env.BASE_SERVER_URL}${article.fileUrl}`} alt="이미지" />
    </Wrapper>
  );
};

export const getServerSideProps = async ({ params }: any) => {
  const article = await ArticleService.get(Number(params.id));
  console.log(article.title, "article");
  return {
    props: {
      article: article,
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
`;

export default index;
