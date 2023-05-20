import { Article } from "@/script/@type/article";
import styled from "@emotion/styled";
import React from "react";

export default function Card({ data }: { data: Article }) {
  return (
    <Container>
      <ImgContainer></ImgContainer>
      <Content>
        <div>{data.title}</div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 310px;
  height: 480px;
  background-color: red;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`;

const ImgContainer = styled.div`
  width: 100%;
`;

const Content = styled.div``;
