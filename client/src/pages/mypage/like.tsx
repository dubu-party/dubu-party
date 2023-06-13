import { MypageAPI } from "@/api/myPage";
import { userIdState } from "@/atoms/userState";
import Card from "@/components/blocks/Card";
import MypageLayout from "@/components/layout/mypageLayout";
import { Article } from "@/script/@type/article/article";
import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

export default function like() {
  const userId = useRecoilValue(userIdState);

  return (
    <MypageLayout>
      <CardContainer>{/* <Card /> */}</CardContainer>
    </MypageLayout>
  );
}

const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
`;
