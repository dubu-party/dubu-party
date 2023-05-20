import { MypageAPI } from "@/api/myPage";
import Card from "@/components/blocks/Card";
import MypageLayout from "@/components/layout/mypageLayout";
import { Article, ArticleService } from "@/script/@type/article";
import styled from "@emotion/styled";
import React, { useEffect } from "react";

export default function like({ data }: { data: Article[] }) {
  console.log(data);
  const check = async () => {
    const data = await MypageAPI.getArticles();
    console.log(data);
  };
  useEffect(() => {
    check();
  }, []);

  return (
    <MypageLayout>
      <CardContainer>
        {data.slice(0, 3).map((article) => (
          <Card key={article.id} data={article} />
        ))}
      </CardContainer>
    </MypageLayout>
  );
}

export async function getServerSideProps() {
  const data = await MypageAPI.getArticles();
  return {
    props: {
      data,
    },
  };
}

const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
`;
