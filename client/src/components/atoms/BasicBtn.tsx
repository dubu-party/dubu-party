import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React from "react";

interface BasicBtnProps {
  disabled?: boolean;
  text: string;
  color?: string;
  onClick?: () => void; // TODO: 추후 필수로 바꾸기
}
export default function BasicBtn({
  disabled,
  text,
  color = theme.color.placeholder,
  onClick,
}: BasicBtnProps) {
  return (
    <Container disabled={disabled} color={color} onClick={onClick}>
      {text}
    </Container>
  );
}

const Container = styled.button<{ color: string }>`
  width: 100%;
  padding: 15px;
  background: ${({ color }) => color};
  border-radius: 8px;
  font-family: ${theme.font.medium};
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #fff;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:disabled {
    color: black;
    background: #f0f0f0; // TODO: 색 설정하기
  }
`;
