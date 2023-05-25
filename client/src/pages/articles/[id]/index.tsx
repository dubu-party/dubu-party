import { Article, ArticleAPI } from "@/script/@type/article/article";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const index = ({ article }: { article: Article }) => {
  return (
    <Wrapper>
      <div className="title">{article.title.content}</div>
      <div className="content">{article.footer.content}</div>
      <div className="image_box">
        <Image
          src={`${process.env.BASE_SERVER_URL}${article.fileUrl}`}
          alt={article.title.content}
          width={200}
          height={200}
        />
      </div>
      <h1>TITLE</h1>
      {Object.keys(article.title).map((key) => (
        <div key={key}>
          {key}: {article.title[key as keyof typeof article.title]}
        </div>
      ))}
      <hr />
      <br />
      <h1>FOOTER</h1>
      {Object.keys(article.footer).map((key) => (
        <div key={key}>
          {key}: {article.footer[key as keyof typeof article.footer]}
        </div>
      ))}
    </Wrapper>
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
  .image_box {
    width: 200px;
    height: 200px;
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
