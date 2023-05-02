import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React from "react";

interface BasicBtnProps {
  text: string;
}
export default function BasicBtn({ text }: BasicBtnProps) {
  return <Container>{text}</Container>;
}

const Container = styled.div`
  width: 100%;
  padding: 15px;
  background: ${theme.color.placeholder};
  border-radius: 8px;
  font-family: ${theme.font.medium};
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #fff;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: ${theme.color.inputBorder};
  }
`;
