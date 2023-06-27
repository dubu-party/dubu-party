import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

interface LinkTextProps {
  text?: string;
  goto?: string; // 추후 필수로 바꾸기
  color?: string;
  LinkEffect?: boolean;
}

export default function LinkText({
  text,
  goto,
  color,
  LinkEffect = true,
}: LinkTextProps) {
  const router = useRouter();

  const onHandleGoto = (goto: string) => () => {
    console.log("goto: ", goto);
    router.push(goto);
  };
  return (
    <Container
      onClick={onHandleGoto(goto || "/")}
      color={color}
      LinkEffect={LinkEffect}
    >
      {text}
    </Container>
  );
}

interface ContainerProps {
  color?: string;
  LinkEffect?: boolean;
}
const Container = styled.div<ContainerProps>`
  display: inline-block;
  font-size: 14px;
  line-height: 17px;
  font-family: ${({ LinkEffect }) =>
    LinkEffect ? theme.font.medium : theme.font.bold};
  ${({ LinkEffect }) => LinkEffect && `text-decoration: underline;`}
  transition: 0.3s;
  color: ${({ color }) => color || theme.color.fontColor};
  &:hover {
    cursor: pointer;
    ${({ LinkEffect }) => LinkEffect && `opacity: 0.8;`})
  }
`;
