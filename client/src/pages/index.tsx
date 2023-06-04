import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import styled from "@emotion/styled";
import Card from "@/components/blocks/Card";
import { useEffect, useState } from "react";
import { Article, ArticleAPI } from "@/script/@type/article/article";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ article }: { article: Array<Article> }) {
  const list = [
    { title: "팔로우글", goto: "/" },
    { title: "마이페이지", goto: "/mypage" },
    { title: "마이피드", goto: "/" },
    {
      title: "로그인",
      goto: "/login",
    },
  ];

  return (
    <Container>
      <Section>
        {/* <Menu list={list} /> */}
        <Logo>DUBU</Logo>
      </Section>
      <Section>
        <ContentWrap>
          {article.map((item: Article | undefined, index: number) => {
            return <Card data={item} key={index} />;
          })}
        </ContentWrap>
      </Section>
    </Container>
  );
}

export const getServerSideProps = async ({ params }: any) => {
  const article = await ArticleAPI.list();

  return {
    props: {
      article: article,
    },
  };
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`;

const Section = styled.section`
  width: 100%;
`;

const ContentWrap = styled.div`
  height: 100%;
  overflow: scroll;
  margin-top: calc(100vh * 0.25);
  justify-content: center;

  @media all and (min-width: 479px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 310px));
    gap: 30px 20px;
    justify-items: center;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 310px));
    gap: 30px 20px;
    justify-items: center;
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 310px));
    gap: 30px 20px;
    justify-items: center;
  }

  @media all and (max-width: 479px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 310px));
    gap: 30px 10px;
    justify-items: center;
  }
`;

const Logo = styled.div`
  width: 100%;
  font-family: DungGeunMo;
  font-size: 30px;
  line-height: 17px;
  position: absolute;
  top: 10%;
  color: #000000;
  text-align: center;
  margin-top: 50px;
`;

const LoginBtn = styled.div`
  font-family: DungGeunMo;
  font-size: 15px;
  line-height: 17px;
  position: absolute;
  top: 0;
  right: 0;
  color: #000000;
`;
