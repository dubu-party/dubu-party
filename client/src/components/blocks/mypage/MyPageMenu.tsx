import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

// TODO: 메뉴 디자인 추후 변경하기
interface MyPageMenuProps {
  list: { title: string; goto: string }[];
}
export default function MyPageMenu({ list }: MyPageMenuProps) {
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
  max-width: 500px;
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

  @media all and (max-width: 390px) {
  }
  &:hover {
    opacity: 0.5;
  }
`;
