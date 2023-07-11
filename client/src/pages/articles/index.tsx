// import { Article, ArticleAPI } from "@/script/@type/article/article";
// import styled from "@emotion/styled";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import MainImageCard from "./components/main-card";

// const ArticleList = ({ articles }: { articles: Article[] }) => {
//   // 페이지를 이동하고 싶을 때는 useRouter를 사용합니다.
//   const baseServerUrl = process.env.BASE_SERVER_URL;
//   const router = useRouter();

//   return (
//     <Wrapper>
//       {articles.map((article) => (
//         <MainImageCard article={article} key={article.id} />
//       ))}
//       <button onClick={() => router.push("/articles/create")}>글쓰기</button>
//     </Wrapper>
//   );
// };

// export const SideProps = async ({ params }: any) => {
//   console.log(params);
//   const articles = await ArticleAPI.list();
//   return {
//     props: {
//       articles,
//     },
//   };
// };

// const Wrapper = styled.section`
//   width: 300px;
//   height: 100%;
//   padding: 20px;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   margin: auto;
//   gap: 20px;
//   .article {
//     cursor: pointer;
//     background-color: aliceblue;
//     padding: 20px;
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
//   }

//   .title {
//     font-size: 20px;
//     font-weight: bold;
//   }

//   .content {
//     font-size: 16px;
//   }

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   h1 {
//     font-size: 20px;
//     font-weight: bold;
//   }

//   div {
//     font-size: 16px;
//   }
// `;

// export default ArticleList;

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import styled from "@emotion/styled";
import Card from "@/components/blocks/common/Card";
import { useEffect, useState } from "react";
import { Article, ArticleAPI } from "@/script/@type/article/article";
import Footer from "@/components/atoms/Footer";
import LinkText, { LinkTextProps } from "@/components/atoms/LinkText";
import BasicBtn from "@/components/atoms/BasicBtn";
import { useRouter } from "next/router";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Pagination from "@/components/blocks/common/Pagination";

const inter = Inter({ subsets: ["latin"] });

export default function Articles({ article }: { article: Array<Article> }) {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [articles, setArticles] = useState(article);
  const [list, setList] = useState<LinkTextProps[]>();

  useEffect(() => {
    const token = localStorage.getItem("token");

    setList([
      { text: "팔로우글", goto: "/" },
      { text: "마이페이지", goto: "/mypage" },
      {
        text: !token ? "로그인" : "로그아웃",
        goto: !token ? "/login" : "/",
      },
    ]);
  }, []);

  const onHandleGoto = (goto: string) => () => {
    router.push(goto);
  };

  useEffect(() => {
    const getData = async () => {
      const articles = await ArticleAPI.list(page);
      setArticles(articles);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    getData();
  }, [page]);

  return (
    <Container>
      <Section>
        <Menu>
          {list?.map((item, index) => {
            return <LinkText key={index} text={item.text} goto={item.goto} />;
          })}
        </Menu>
        <LogoWrap>
          <Logo onClick={onHandleGoto("/")}>DUBU</Logo>
        </LogoWrap>
      </Section>
      <Section>
        <CreateBtn>
          <BasicBtn
            color="black"
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
        <PageContainer>
          <Pagination total={9} limit={5} page={page} setPage={setPage} />
        </PageContainer>
      </Section>
      <Footer />
    </Container>
  );
}

export const getServerSideProps = async () => {
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
  padding-top: 100px;
  padding-bottom: 100px;
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

const LogoWrap = styled.div`
  width: 100%;
  padding: 50px;
  text-align: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  font-family: DungGeunMo;
  font-size: 30px;
  color: black;
  cursor: pointer;
`;

const LoginBtn = styled.div`
  font-family: DungGeunMo;
  font-size: 15px;
  position: absolute;
  top: 0;
  right: 0;
  color: #000000;
`;

const CreateBtn = styled.div`
  width: 90px;
  margin-left: auto;
`;

const PageContainer = styled.div`
  width: 100%;
  height: 20px;
`;
