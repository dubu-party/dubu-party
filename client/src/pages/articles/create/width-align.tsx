import { ArticleTitle } from "@/script/@type/article/data";
import styled from "@emotion/styled";
import Image from "next/image";
import React, { useEffect } from "react";

interface Props {
  title: ArticleTitle;
  setTitle: React.Dispatch<React.SetStateAction<ArticleTitle>>;
}

const WidthAlign = ({ title, setTitle }: Props) => {
  // useEffect(() => {
  //   console.log(title.widthSort);
  // }, [title]);

  const onClickButton = (width: "LEFT" | "CENTER" | "RIGHT") => () => {
    console.log("click", width);

    setTitle({ ...title, widthSort: width });
  };

  return (
    <Wrapper>
      <ImageBox selected={title?.widthSort === "LEFT"}>
        <Image
          src="/assets/icon/text-align-left.png"
          alt="align-left"
          width={20}
          height={20}
          onClick={onClickButton("LEFT")}
        />
      </ImageBox>
      <ImageBox selected={title?.widthSort === "CENTER"}>
        <Image
          src="/assets/icon/text-align-center.png"
          alt="align-center"
          width={20}
          height={20}
          onClick={onClickButton("CENTER")}
        />
      </ImageBox>
      <ImageBox selected={title?.widthSort === "RIGHT"}>
        <Image
          src="/assets/icon/text-align-right.png"
          alt="align-right"
          width={20}
          height={20}
          onClick={onClickButton("RIGHT")}
        />
      </ImageBox>
    </Wrapper>
  );
};

export default WidthAlign;

const Wrapper = styled.div`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageBox = styled.div<{ selected: boolean }>`
  padding: 5px;
  border-radius: 4px;
  ${({ selected }) => selected}
  &:hover {
    cursor: pointer;
    background-color: #f0f0f08e;
  }
`;
