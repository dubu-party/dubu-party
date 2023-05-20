import Link from "next/link";
import React, { useMemo } from "react";
import Menu from "../blocks/Menu";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

interface MypageLayoutProps {
  children: React.ReactNode;
}
// TODO: 이름은 추후 변경하기
const menuArr = [
  { title: "정보수정", goto: "/mypage" },
  { title: "팔로우", goto: "/mypage/follow" },
  { title: "좋아요 관리", goto: "/mypage/like" },
  { title: "내가 작성한 글", goto: "/mypage/myPosts" },
];
export default function MypageLayout({ children }: MypageLayoutProps) {
  const router = useRouter();
  const { pathname } = router;
  const hasCard = useMemo(() => {
    return pathname === "/mypage/like" || pathname === "/mypage/myPosts";
  }, []);

  return (
    <Container>
      <Content hasCard={hasCard}>
        <Menu list={menuArr} />
        <MainContainer>{children}</MainContainer>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div<{ hasCard: boolean }>`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 0 20px;
`;

const MainContainer = styled.div`
  width: 100%;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-family: ${theme.font.bold};
  font-size: 22px;
  line-height: 26px;
`;
