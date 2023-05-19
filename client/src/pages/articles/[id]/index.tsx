import { Article } from "@/script/@type/article";
import styled from "@emotion/styled";
import React, { useState } from "react";

const index = () => {
  let article = new Article();

  article = {
    id: 1,
    title: "제목2",
    content: "내용2",
    fileUrl: "파일url",
    user: {
      id: 1,
      nickname: "이름",
      email: "이메일",
      phoneNumber: "전화번호",
    },
    contentSetting: {
      fontSize: 16,
      fontColor: "#000000",
      fontFamily: "굴림",
      textAlign: "TOP",
    },
  };

  return (
    <Wrapper>
      <div className="title">{article.title}</div>
      <div className="content">{article.content}</div>
      <img src={article.fileUrl} alt="이미지" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .title {
    font-size: 20px;
    font-weight: bold;
  }

  .content {
    font-size: 16px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default index;
