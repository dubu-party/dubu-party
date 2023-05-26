import { ArticleTitle, WIDTH_SORT } from "@/script/@type/article/data";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

interface Props {
  title: ArticleTitle;
  setTitle: React.Dispatch<React.SetStateAction<ArticleTitle>>;
}

const WidthAlign = ({ title, setTitle }: Props) => {
  const checkState = (state: "LEFT" | "CENTER" | "RIGHT") => {
    if (title.widthSort === state) return "selected";
    return "";
  };
  return (
    <Wrapper>
      <div id={checkState("LEFT")} className="image_box">
        <Image
          src="/assets/icon/text-align-left.png"
          alt="align-left"
          width={20}
          height={20}
          onClick={() => setTitle({ ...title, widthSort: "LEFT" })}
        />
      </div>
      <div id={checkState("CENTER")} className="image_box">
        <Image
          src="/assets/icon/text-align-center.png"
          alt="align-center"
          width={20}
          height={20}
          onClick={() => setTitle({ ...title, widthSort: "CENTER" })}
        />
      </div>
      <div id={checkState("RIGHT")} className="image_box">
        <Image
          src="/assets/icon/text-align-right.png"
          alt="align-right"
          width={20}
          height={20}
          onClick={() => setTitle({ ...title, widthSort: "RIGHT" })}
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .image_box {
    padding: 5px;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
      background-color: #f0f0f08e;
    }
  }
  #selected {
    background-color: #a9a9a959;
  }
`;
export default WidthAlign;
