import { ArticleTitle, HEIGHT_SORT } from "@/script/@type/article/data";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

interface Props {
  title: ArticleTitle;
  setTitle: React.Dispatch<React.SetStateAction<ArticleTitle>>;
}
// HEIGHT_SORT = ["TOP", "CENTER", "BOTTOM"];
const HeightAlign = ({ title, setTitle }: Props) => {
  const checkState = (state: "TOP" | "CENTER" | "BOTTOM") => {
    if (title.heightSort === state) return "selected";
    return "";
  };
  return (
    <Wrapper>
      <div id={checkState("TOP")} className="image_box">
        <Image
          src="/assets/icon/align-top.png"
          alt="align-top"
          width={25}
          height={25}
          onClick={() => setTitle({ ...title, heightSort: "TOP" })}
        />
      </div>
      <div id={checkState("CENTER")} className="image_box">
        <Image
          src="/assets/icon/align-center.png"
          alt="align-center"
          width={25}
          height={25}
          onClick={() => setTitle({ ...title, heightSort: "CENTER" })}
        />
      </div>
      <div id={checkState("BOTTOM")} className="image_box">
        <Image
          src="/assets/icon/align-bottom.png"
          alt="align-bottom"
          width={25}
          height={25}
          onClick={() => setTitle({ ...title, heightSort: "BOTTOM" })}
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 150px;
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
  margin-left: 50px;
`;
export default HeightAlign;
