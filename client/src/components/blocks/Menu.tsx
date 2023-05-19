import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

// TODO: 메뉴 디자인 추후 변경하기
interface MenuProps {
  list: { title: string; goto: string }[];
}
export default function Menu({ list }: MenuProps) {
  const router = useRouter();
  const onHandleGoto = (goto: string) => () => {
    router.push(goto);
  };
  return (
    <Container>
      {list.map((item, idx) => (
        <Buttons onClick={onHandleGoto(item.goto)} key={idx}>
          {item.title}
        </Buttons>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 50px; // TODO: 나중에 설정하기
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Buttons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  border-top: none;
  font-family: ${theme.font.bold};
  cursor: pointer;
  & + & {
    border-left: none;
  }
  transition: 0.2s;
  &:hover {
    opacity: 0.5;
    /* background-color: ${theme.color.lightBackground}; */
  }
`;
