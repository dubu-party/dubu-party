import { Article } from "@/script/@type/article/article";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";

export default function Card({ data }: { data?: Article }) {
  // 여기 뭔지 확인해보기
  const [vertical, setVertical] = useState<string>("center");

  useEffect(() => {
    switch (data?.title.heightSort) {
      case "TOP":
        setVertical("left");
        return;
      case "BOTTOM":
        setVertical("right");
        return;
      default:
        setVertical("center");
    }
  }, []);

  return (
    <Container bgColor={data?.footer.background ? data?.title.color : "#000"}>
      <ImgContainer>
        {/* TODO: 추후 디테일을 잡아야할듯  -> 위치 가로 세로 다 변경해야하는거 아닐까..?*/}
        <Img
          src={`${process.env.BASE_SERVER_URL}${data?.fileUrl}`}
          textAlign={data?.title?.widthSort || "center"}
          justifyContent={vertical}
        >
          <Title
            fontColor={data?.title?.color || "#000"}
            fontSize={data?.title?.size || 20}
            fontFamily={data?.title?.fontFamily || theme.font.extraBold}
          >
            {data?.title.content}
          </Title>
        </Img>

        {/* <Image width={200} height={200} src={""} alt="Selected" /> */}
      </ImgContainer>
      <FooterContainer>
        <Content
          fontColor={data?.footer?.color || "#000"}
          fontSize={data?.footer?.size || 20}
          fontFamily={data?.footer?.fontFamily || theme.font.extraBold}
        >
          {data?.footer.content}
        </Content>
        <Content
          fontColor={data?.footer?.color || "#000"}
          fontSize={data?.footer?.size || 20}
          fontFamily={data?.footer?.fontFamily || theme.font.extraBold}
        >
          {data?.user.nickname}
        </Content>
      </FooterContainer>
    </Container>
  );
}

interface ContainerProps {
  bgColor?: string;
}
const Container = styled.div<ContainerProps>`
  width: 100%;
  // TODO: 물어보기
  /* max-width: 310px; */
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-bottom: calc(100vh * 0.05);
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
  justifyContent?: string;
}
const Img = styled.div<ImgProps>`
  width: 100%;
  height: calc(100vh * 0.5);
  background-color: #e0e0e0;
  display: flex;

  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  align-items: ${({ justifyContent }) => justifyContent};
  justify-content: ${({ textAlign }) => textAlign};
`;

const FooterContainer = styled.div`
  width: 100%;
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
  padding: 10px;
`;

const Content = styled.div<TitleProps>`
  flex: 1;
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize}px;
  font-family: ${({ fontFamily }) => fontFamily};
  padding: 10px;
`;
