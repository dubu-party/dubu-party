import { Article } from "@/script/@type/article/article";
import { ArticleFooter, ArticleTitle } from "@/script/@type/article/data";
import styled from "@emotion/styled";
import React, { use, useEffect, useState } from "react";
interface Props {
  fileUrl?: string;
  title: ArticleTitle;
  footer: ArticleFooter;
}

interface StyleProps {
  heightSort: "flex-start" | "center" | "flex-end";
  widthSort: "flex-start" | "center" | "flex-end";
  textAlign: "start" | "center" | "end";
  size: number;
  weight: 300 | 400 | 500 | 600 | 700;
  color: string;
}

const ImageCard = ({ fileUrl, title, footer }: Props) => {
  const [styleProps, setStyleProps] = useState<StyleProps>({
    heightSort: "flex-start",
    widthSort: "flex-start",
    textAlign: "start",
    size: 20,
    weight: 400,
    color: "#000000",
  });

  const getHeigthSort = () => {
    switch (title.heightSort) {
      case "TOP":
        return "flex-start";
      case "CENTER":
        return "center";
      case "BOTTOM":
        return "flex-end";
    }
  };
  const getWidthSort = () => {
    switch (title.widthSort) {
      case "LEFT":
        return "flex-start";
      case "CENTER":
        return "center";
      case "RIGHT":
        return "flex-end";
    }
  };
  const getWeight = () => {
    switch (footer.weight) {
      case 1:
        return 300;
      case 2:
        return 400;
      case 3:
        return 500;
      case 4:
        return 600;
      case 5:
        return 700;
      default:
        return 400;
    }
  };
  const getTextAlign = () => {
    switch (title.widthSort) {
      case "LEFT":
        return "start";
      case "CENTER":
        return "center";
      case "RIGHT":
        return "end";
    }
  };

  useEffect(() => {
    setStyleProps({
      heightSort: getHeigthSort(),
      widthSort: getWidthSort(),
      weight: getWeight(),
      textAlign: getTextAlign(),
      size: title.size,
      color: title.color,
    });
  }, [title]);

  return (
    <Wrapper>
      <Title data={styleProps}>
        <h1>{title.content}</h1>
      </Title>
      <img src={fileUrl} alt={fileUrl} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

interface SProps {
  data: StyleProps;
}

const Title = styled.div<SProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  display: flex;
  padding: 50px;
  justify-content: ${({ data }) => data.widthSort};
  text-align: ${({ data }) => data.textAlign};
  align-items: ${({ data }) => data.heightSort};
  font-size: ${({ data }) => data.size}px;
  font-weight: ${({ data }) => data.weight};
  color: ${({ data }) => data.color};
  width: 100%;
  height: 100%;
  h1 {
    margin: 0;
  }
`;

export default ImageCard;
