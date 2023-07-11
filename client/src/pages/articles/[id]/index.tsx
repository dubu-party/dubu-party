import styled from "@emotion/styled";
import { Article, ArticleAPI } from "@/script/@type/article/article";
import React from "react";
import EditImageCard from "../components/edit-card";
import UserCard from "../components/user-card";
import { useRouter } from "next/router";

const index = ({ article }: { article: Article }) => {
  const router = useRouter();
  const { id } = router.query;

  const onClickDelete = async (e: React.MouseEvent) => {
    // e.stopPropagation();
    if (typeof id === "string") {
      const myArticle = await ArticleAPI.delete(+id);
    }
  };

  const onClickUpdate = () => {
    // router.push(`/articles/update/${data?.id}`);
  };

  return (
    <>
      <button onClick={onClickDelete}>delete</button>
      <button onClick={onClickUpdate}>update</button>
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
    </>
  );
};

export const getServerSideProps = async ({ params }: any) => {
  const article = await ArticleAPI.get(Number(params.id));
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
