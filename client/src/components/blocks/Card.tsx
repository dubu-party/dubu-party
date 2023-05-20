import { Article } from "@/script/@type/article";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

export default function Card({ data }: { data?: Article }) {
  const setting = data?.contentSetting;
  return (
    <Container bgColor={setting?.fontColor || "#000"}>
      <ImgContainer>
        {/* TODO: 추후 디테일을 잡아야할듯  -> 위치 가로 세로 다 변경해야하는거 아닐까..?*/}
        <Img src="" textAlign={setting?.textAlign || "center"}>
          <Title
            fontColor={setting?.fontColor || "#000"}
            fontSize={setting?.fontSize || 20}
            fontFamily={setting?.fontFamily || theme.font.extraBold}
          >
            Title
          </Title>
        </Img>

        {/* <Image width={200} height={200} src={""} alt="Selected" /> */}
      </ImgContainer>
      <Content>content</Content>
    </Container>
  );
}

interface ContainerProps {
  bgColor?: string;
}
const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 310px;
  height: 480px;
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`;

const ImgContainer = styled.div`
  width: 100%;
`;
interface ImgProps {
  src: string;
  textAlign?: string;
}
const Img = styled.div<ImgProps>`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;

  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: ${({ textAlign }) => textAlign};
  align-items: flex-start;
`;

interface TitleProps {
  fontColor?: string;
  fontSize?: number;
  fontFamily?: string;
}
const Title = styled.div<TitleProps>`
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize}px;
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: bold;
`;

const Content = styled.div<TitleProps>`
  flex: 1;
  color: white;
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: 20px;
  padding: 4px;
`;