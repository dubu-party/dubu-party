import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React from "react";

export default function Footer() {
  return <Container>made by dubu</Container>;
}

const Container = styled.div`
  width: 100%;
  height: 200px;
  padding: 100px;
  background: none;
  font-family: ${theme.font.medium};
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: white;
  transition: 0.2s;
`;
