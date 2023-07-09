import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import styled from "@emotion/styled";
import Card from "@/components/blocks/common/Card";
import { useEffect, useState } from "react";
import { Article, ArticleAPI } from "@/script/@type/article/article";
import Footer from "@/components/blocks/common/Footer";
import LinkText from "@/components/atoms/LinkText";
import BasicBtn from "@/components/atoms/BasicBtn";
import { useRouter } from "next/router";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { listPageState } from "@/atoms/pageState";
import Pagination from "@/components/blocks/common/Pagination";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ article }: { article: Array<Article> }) {
  const router = useRouter();
  const [page, setPage] = useRecoilState(listPageState);
  const [articles, setArticles] = useState<Article[]>(article);

  const list = [
    { text: "팔로우글", icon: faPenToSquare, goto: "/" },
    { text: "마이페이지", goto: "/mypage" },
    { text: "마이피드", goto: "/" },
    {
      text: "로그인",
      goto: "/login",
    },
  ];

  const onChangePage = async (pageNum: number) => {
    setPage(pageNum);
    const infoData = await ArticleAPI.pagingList({
      page: pageNum,
      size: 12,
      sort: "likes",
    });
    setArticles(infoData);
  };

  const onHandleGoto = (goto: string) => () => {
    router.push(goto);
  };

  return (
    <Container>
      <Section>
        <Menu>
          {list.map((item, index) => {
            return <LinkText key={index} text={item.text} goto={item.goto} />;
          })}
        </Menu>
        <Green>Green</Green>
        <Logo onClick={onHandleGoto("/")}>DUBU</Logo>
      </Section>
      <Section>
        <CreateBtn>
          <BasicBtn
            text={"create"}
            icon={faPenToSquare}
            onClick={() => router.push("/articles/create")}
          />
        </CreateBtn>
        <ContentWrap>
          {articles.map((item: Article | undefined, index: number) => {
            return <Card data={item} key={index} />;
          })}
        </ContentWrap>
      </Section>
      <Pagination
        totalPages={3}
        currentPage={page}
        onPageChange={onChangePage}
      />
      <Footer />
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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #1a4524;
`;

const Section = styled.section`
  width: 100%;
`;

const Menu = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const ContentWrap = styled.div`
  overflow: scroll;
  margin-top: 10px;
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

const Green = styled.div`
  width: 88%;
  font-family: DungGeunMo;
  font-size: 30px;
  line-height: 17px;
  position: absolute;
  top: 10%;
  color: green;
  text-align: center;
  cursor: pointer;
`;

const Logo = styled.div`
  width: 100%;
  font-family: DungGeunMo;
  font-size: 30px;
  line-height: 17px;
  position: absolute;
  top: 10%;
  color: white;
  text-align: center;
  cursor: pointer;
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

const CreateBtn = styled.div`
  width: 100px;
  margin-top: calc(100vh * 0.2);
  margin-left: auto;
`;
