import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { Black_And_White_Picture } from "next/font/google";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BasicBtnProps {
  disabled?: boolean;
  icon?: IconProp;
  text: string;
  color?: string;
  onClick?: () => void; // TODO: 추후 필수로 바꾸기
}
export default function BasicBtn({
  disabled,
  icon,
  text,
  color = "black",
  onClick,
}: BasicBtnProps) {
  return (
    <Container disabled={disabled} color={color} onClick={onClick}>
      <FontAwesomeIcon icon={icon as IconProp} />
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
