import React, { createContext, useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userIdState } from "@/atoms/userState";
import SEO from "../atoms/SEO";
import MyPageMenu from "../blocks/mypage/MyPageMenu";
interface MypageLayoutProps {
  children: React.ReactNode;
}

export default function MypageLayout({ children }: MypageLayoutProps) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <Container>
      <SEO title="MyPage" />
      <Content>
        {/* <MyPageMenu list={menuArr} /> */}
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

const Content = styled.div`
  width: 100%;
  /* max-width: 500px; */
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  justify-content: center;
  @media all and (max-width: 479px) {
    padding: 0 10px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media all and (max-width: 479px) {
    padding: 40px 0;
  }
`;

const Title = styled.div`
  font-family: ${theme.font.bold};
  font-size: 22px;
  line-height: 26px;
`;
