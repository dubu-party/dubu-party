import Menu from "@/components/blocks/Menu";
import Edit from "@/components/blocks/mypage/edit";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React, { Component, useMemo, useState } from "react";

// TODO: 이름은 추후 변경하기
const menuArr = [
  { title: "정보수정", goto: "/mypage/edit" },
  { title: "팔로우", goto: "/mypage/follow" },
  { title: "좋아요 관리", goto: "/mypage/likes" },
  { title: "내가 작성한 글", goto: "/mypage/myPosts" },
];
export default function index() {
  const [currIndex, setCurrIndex] = useState<number>(0);
  const currentMenu: JSX.Element = useMemo(() => {
    switch (currIndex) {
      case 0:
        return <Edit />;
      //   case "팔로우":
      //     return <Follow />;
      //   case "좋아요 관리":
      //     return <Likes />;
      //   case "내가 작성한 글":
      //     return <MyPosts />;
      default:
        return <Edit />;
    }
  }, []);

  return (
    <Container>
      <Content>
        <Menu list={menuArr} />
        <MainContainer>
          <Title>{menuArr[currIndex].title}</Title>
          {currentMenu}
        </MainContainer>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 0 20px;
`;

const MainContainer = styled.div`
  width: 100%;
  padding: 100px 0;
`;

const Title = styled.div`
  font-family: ${theme.font.bold};
  font-size: 22px;
  line-height: 26px;
`;
