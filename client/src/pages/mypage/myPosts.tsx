import { MypageAPI } from "@/api/myPage";
import Card from "@/components/blocks/Card";
import MypageLayout from "@/components/layout/mypageLayout";
import { Article } from "@/script/@type/article";
import styled from "@emotion/styled";
import { GetServerSideProps } from "next";
import React, { useContext, useEffect, useState } from "react";

export default function myPosts({ myArticle }: { myArticle: any }) {
  const [myArticles, setMyArticles] = useState<Article[]>([]);

  const fetchData = async () => {
    const myArticle = await MypageAPI.getMyArticles1();
    setMyArticles(myArticle);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MypageLayout>
      <CardContainer>
        {myArticles.map((article) => (
          <Card key={article.id} />
        ))}
        <Card /> <Card /> <Card /> <Card />
        <Card /> <Card /> <Card /> <Card />
      </CardContainer>
    </MypageLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const myArticle = await MypageAPI.getMyArticles1();
  // 왜 안되는걸까
  return {
    props: { myArticle },
  };
};

const CardContainer = styled.div`
  /* background-color: red; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  grid-gap: 20px;
  width: 100%;
  place-items: center;
`;
