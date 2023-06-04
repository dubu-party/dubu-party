import styled from "@emotion/styled";
import theme from "@/styles/theme";
import React, { useEffect, useState } from "react";
import Card from "@/components/blocks/Card";
import Menu from "@/components/blocks/MyPageMenu";
import { MainAPI } from "@/api/main";
import { Article, ArticleService } from "@/script/@type/article";

const Main = ({ article }: { article: Array<Article> }) => {
  // {
  //     "commentCount": 0,
  //     "fileUrl": "string",
  //     "footer": {
  //       "background": true,
  //       "color": "string",
  //       "content": "string",
  //       "fontFamily": "string",
  //       "size": 0,
  //       "weight": 0
  //     },
  //     "id": 0,
  //     "likeCount": 0,
  //     "likeUserList": [
  //       {
  //         "id": 0,
  //         "nickname": "string",
  //         "profileUrl": "string"
  //       }
  //     ],
  //     "title": {
  //       "color": "string",
  //       "content": "string",
  //       "fontFamily": "string",
  //       "heightSort": "BOTTOM",
  //       "size": 0,
  //       "weight": 0,
  //       "widthSort": "CENTER"
  //     },
  //     "user": {
  //       "id": 0,
  //       "nickname": "string",
  //       "profileUrl": "string"
  //     }
  //   }
  // ]

  // "comments": [
  //     {
  //       "content": "string",
  //       "id": 0,
  //       "user": {
  //         "id": 0,
  //         "nickname": "string",
  //         "profileUrl": "string"
  //       }
  //     }
  //   ],
  //   "fileUrl": "string",
  //   "footer": {
  //     "background": true,
  //     "color": "string",
  //     "content": "string",
  //     "fontFamily": "string",
  //     "size": 0,
  //     "weight": 0
  //   },
  //   "id": 0,
  //   "likeUserList": [
  //     {
  //       "id": 0,
  //       "nickname": "string",
  //       "profileUrl": "string"
  //     }
  //   ],
  //   "title": {
  //     "color": "string",
  //     "content": "string",
  //     "fontFamily": "string",
  //     "heightSort": "BOTTOM",
  //     "size": 0,
  //     "weight": 0,
  //     "widthSort": "CENTER"
  //   },
  return (
    <Container>
      <Section>
        {/* <Menu /> */}
        <Logo>DUBU</Logo>
        <LoginBtn>Login</LoginBtn>
      </Section>
      <Section>
        <ContentWrap>
          {article?.map((item: Article | undefined, index: number) => {
            return <Card data={item} key={index} />;
          })}
        </ContentWrap>
      </Section>
    </Container>
  );
};

export const getServerSideProps = async ({ params }: any) => {
  const article = await ArticleService.list();

  return {
    props: {
      article: article,
    },
  };
};

export default Main;

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

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 15px;
//   gap: 10px;
//   flex-direction: column;
// `;

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

const ContentWrap = styled.div`
  height: 100%;
  overflow: scroll;
  margin-top: calc(100vh * 0.25);

  @media all and (min-width: 479px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, auto));
    gap: 30px 10px;
    justify-items: center;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, auto));
    gap: 30px 10px;
    justify-items: center;
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%, auto));
    gap: 30px 10px;
    justify-items: center;
  }

  @media all and (max-width: 479px) {
  }
`;

const ContentBox = styled.div`
  margin-bottom: calc(100vh * 0.05);
`;

const Logo = styled.div`
  font-family: DungGeunMo;
  font-size: 30px;
  line-height: 17px;
  position: absolute;
  top: 10%;
  color: #000000;
  margin-left: calc(50% - 50px);
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

const Image = styled.div`
  width: 100%;
  height: calc(100vh * 0.5);
  background-color: pink;
`;

const Content = styled.div`
  width: 100%;
  height: calc(100vh * 0.1);
  padding: 10px;
  background-color: green;
`;

const Title = styled.div`
  font-family: DungGeunMo;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

const Nickname = styled.div`
  width: 100%;
  font-family: DungGeunMo;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;
