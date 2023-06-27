import { Article } from "@/script/@type/article/article";
import { ArticleFooter, ArticleTitle } from "@/script/@type/article/data";
import { FONT, SORT } from "@/script/@type/article/variable";
import styled from "@emotion/styled";
import React, { use, useEffect, useState } from "react";
interface Props {
  fileUrl?: string;
  title: ArticleTitle;
  footer: ArticleFooter;
}

interface TitleStyle {
  heightSort: string;
  widthSort: string;
  textAlign: string;
  size: number;
  weight: number;
  color: string;
}

interface FooterStyle {
  size: number;
  weight: number;
  color: string;
  background: boolean;
  backgroundColor: string;
}

const EditImageCard = ({ fileUrl, title, footer }: Props) => {
  const [titleStyle, setTitleStyle] = useState<TitleStyle>({
    heightSort: "flex-start",
    widthSort: "flex-start",
    textAlign: "start",
    size: 20,
    weight: 400,
    color: "#000000",
  });
  const [footerStyle, setFooterStyle] = useState<FooterStyle>({
    size: 20,
    weight: 400,
    color: "#000000",
    background: false,
    backgroundColor: "#ffffff",
  });

  useEffect(() => {
    setTitleStyle({
      heightSort: SORT.HEIGHT_VALUE[title.heightSort],
      widthSort: SORT.WIDTH_VALUE[title.widthSort],
      weight: FONT.WEIGHT_VALUE[title.weight],
      textAlign: SORT.TEXT_ALIGN_VALUE[title.widthSort],
      size: title.size,
      color: title.color,
    });
    setFooterStyle({
      ...footerStyle,
      backgroundColor: title.color,
    });
  }, [title]);

  useEffect(() => {
    setFooterStyle({
      weight: FONT.WEIGHT_VALUE[footer.weight],
      size: footer.size,
      color: footer.color,
      background: footer.background,
      backgroundColor: title.color,
    });
  }, [footer]);

  return (
    <Wrapper>
      <Title data={titleStyle}>
        <h1>{title?.content}</h1>
      </Title>
      <Footer data={footerStyle}>
        <p>{footer?.content}</p>
      </Footer>
      <img src={fileUrl} alt={fileUrl} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // 사진의 황금 비율 : 3:4
  width: 510px;
  height: 680px;
  margin: 0 10px;
  position: relative;
  background-color: #ffffff;
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

interface TitleProps {
  data: TitleStyle;
}

const Title = styled.div<TitleProps>`
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
  height: 85%;
  h1 {
    margin: 0;
  }
`;

interface FooterProps {
  data: FooterStyle;
}

const Footer = styled.div<FooterProps>`
  height: 15%;
  width: 100%;
  background-color: ${({ data }) =>
    data.background ? data.backgroundColor : "none"};
  color: ${({ data }) => data.color};
  font-size: ${({ data }) => data.size}px;
  font-weight: ${({ data }) => data.weight};
  display: flex;
  position: absolute;
  bottom: 0;
  z-index: 2;
  p {
    padding: 20px;
    white-space: pre-wrap;
  }
`;

export default EditImageCard;
