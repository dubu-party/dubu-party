import { Article, ArticleAPI } from "@/script/@type/article/article";
import React from "react";
import EditImageCard from "../components/edit-card";

const index = ({ article }: { article: Article }) => {
  return (
    <EditImageCard
      fileUrl={`
      ${process.env.BASE_SERVER_URL}${article.fileUrl}`}
      title={article.title}
      footer={article.footer}
    />
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

export default index;
