import { CommonAPI, UserInfo, userInfoInit } from "@/api/common";
import { changePwProps, MypageAPI, updateUserData } from "@/api/myPage";
import { userIdState } from "@/atoms/userState";
import BasicBtn from "@/components/atoms/BasicBtn";
import BasicInput from "@/components/atoms/BasicInput";
import ImgInput from "@/components/atoms/ImgInput";
import ProfileImgInput from "@/components/atoms/profileImgInput";
import Card from "@/components/blocks/common/Card";
import MyPageInfo from "@/components/blocks/mypage/MyPageInfo";

import MypageLayout from "@/components/layout/mypageLayout";
import { Article } from "@/script/@type/article/article";
import theme from "@/styles/theme";
import styled from "@emotion/styled";

import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function index() {
  const userId = useRecoilValue(userIdState);
  const [img, setImg] = useState<string>("");
  const [file, setFile] = useState<File | undefined>();
  const [info, setInfo] = useState<UserInfo>(userInfoInit);
  const [myArticles, setMyArticles] = useState<Article[]>([]);

  const fetchData = async () => {
    const infoData = await CommonAPI.getMyInfo();
    if (infoData) {
      setImg(`${process.env.BASE_SERVER_URL}${infoData.profileUrl}`);
      setInfo(infoData);
    }
    const myArticle = await MypageAPI.getMyArticles1();
    setMyArticles(myArticle);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onChangeFile = (file: File, img: string) => {
    setFile(file);
    setImg(img);
  };

  const onChangeData = (newInfo: UserInfo) => {
    setInfo(newInfo);
  };

  const onClickEdit = async () => {
    const data = {
      nickname: info.nickname,
      profileImage: file,
    } as updateUserData;

    const updateInfo = await MypageAPI.updateUser(data);
    if (updateInfo) {
      setInfo((prev) => ({
        ...prev,
        nickname: updateInfo.nickname,
        profileUrl: updateInfo.profileUrl,
      }));
      setImg(`${process.env.BASE_SERVER_URL}${updateInfo.profileUrl}`);
    }

    // 따로 분리하기
    // // 새로운 비밀번호가 있으면 바꿔주고 없으면 바꾸지 않는다
    // if (password !== "") {
    //   const pwData = {
    //     userId: userId,
    //     password: password,
    //   } as changePwProps;
    //   await MypageAPI.changePassword(pwData);
    // }
  };

  return (
    <MypageLayout>
      <Container>
        <MyPageInfo
          data={info}
          profileImg={img}
          onChangeData={onChangeData}
          onChangeFile={onChangeFile}
          onClickEdit={onClickEdit}
        />
        <CardContainer>
          {myArticles.map((article) => (
            <Card key={article.id} />
          ))}
        </CardContainer>
      </Container>
    </MypageLayout>
  );
}

const NameText = styled.div`
  font-size: 18px;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const EditButton = styled.button`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 5px 10px;
  transition: 0.2s;
  &:hover {
    background-color: #e0e0e0;
    color: #525252;
  }
`;

const InfoText = styled.div`
  display: flex;
  gap: 10px;
`;
const TextTag = styled.div``;

const Container = styled.div`
  width: 100%;
  max-width: 800px; // 500px -> 확인필요
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const InfoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
  border-bottom: 1.5px solid #e0e0e0;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  grid-gap: 20px;
  width: 100%;
  place-items: center;
`;

const Button = styled.button`
  padding: 15px;
  border-radius: 8px;
  font-family: ${theme.font.bold};
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  transition: 0.2s;
  background: none;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:disabled {
    color: black;
    background: #f0f0f0; // TODO: 색 설정하기
  }
`;
