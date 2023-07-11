import { Article, ArticleAPI } from "@/script/@type/article/article";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

interface CardProps {
  data?: Article;
}
export default function Card({ data }: CardProps) {
  const router = useRouter();
  const [vertical, setVertical] = useState<string>("center");
  const [isHovering, setIsHovering] = useState<boolean>(false);

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

  const onClick = () => {
    router.push(`/articles/${data?.id}`);
  };

  return (
    <Container
      src={`${process.env.BASE_SERVER_URL}${data?.originFileUrl}`}
      bgColor={data?.footer.background ? data?.title.color : "#000"}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      onClick={onClick}
    >
      {/* <ImgContainer>
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
        </FooterContainer> */}
      {isHovering && (
        <HoverContainer>
          <FontAwesomeIcon icon={faHeart as IconProp} />
          <Like>좋아요 {data?.likeCount}</Like>
        </HoverContainer>
      )}
    </Container>
  );
}

interface ContainerProps {
  bgColor?: string;
  src: string;
}
const Container = styled.div<ContainerProps>`
  border: 1px solid;
  width: 100%;
  height: 450px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  // TODO: 물어보기
  /* max-width: 310px; */
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-bottom: calc(100vh * 0.05);
  &:hover {
    transform: scale(1.01);
  }
`;

const HoverContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  /* min-width: 310px; */
  // max-width: 310px;
  height: 100%;
  background-color: black;
  opacity: 0.6;
  cursor: pointer;
  // transition: all 0.3s ease-in-out;
  /* margin-bottom: calc(100vh * 0.05); */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Like = styled.div`
  color: white;
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
