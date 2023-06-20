import styled from "@emotion/styled";
import { Article, ArticleAPI } from "@/script/@type/article/article";
import React from "react";
import EditImageCard from "../components/edit-card";
import UserCard from "../components/user-card";

const index = ({ article }: { article: Article }) => {
  console.log(article);
  return (
    <FlexBox>
      <EditImageCard
        fileUrl={`
      ${process.env.BASE_SERVER_URL}${article.fileUrl}`}
        title={article.title}
        footer={article.footer}
      />
      <UserCard
        id={article.user.id}
        nickname={article.user.nickname}
        profileUrl={article.user.profileUrl}
      />
    </FlexBox>
  );
};

export const getServerSideProps = async ({ params }: any) => {
  const article = await ArticleAPI.get(Number(params.id));
  console.log(article.title, "article");
  return {
    props: {
      article: article,
    },
  };
};

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #1a4524;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export default index;
