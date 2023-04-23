import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

interface LinkTextProps {
  text: string;
  goto: string;
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
    // router.push(goto);
  };
  return (
    <Container
      onClick={onHandleGoto(goto)}
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
  font-size: 14px;
  line-height: 17px;
  font-family: ${({ LinkEffect }) =>
    LinkEffect ? theme.font.medium : theme.font.bold};
  ${({ LinkEffect }) => LinkEffect && `text-decoration: underline;`}
  transition: 0.3s;
  color: ${({ color }) => color || "black"};
  &:hover {
    cursor: pointer;
    ${({ LinkEffect }) => LinkEffect && `color: ${theme.color.placeholder};`})
  }
`;
