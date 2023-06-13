import { CommonAPI, UserInfo, userInfoInit } from "@/api/common";
import { changePwProps, MypageAPI, updateUserData } from "@/api/myPage";
import { userIdState } from "@/atoms/userState";
import BasicBtn from "@/components/atoms/BasicBtn";
import BasicInput from "@/components/atoms/BasicInput";
import ImgInput from "@/components/atoms/ImgInput";
import Card from "@/components/blocks/Card";
import Menu from "@/components/blocks/MyPageMenu";
import MypageLayout from "@/components/layout/mypageLayout";
import { Article } from "@/script/@type/article/article";
import theme from "@/styles/theme";
import styled from "@emotion/styled";

import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function index() {
  const userId = useRecoilValue(userIdState);
  // 하나로 통일하기
  const [info, setInfo] = useState<UserInfo>(userInfoInit);

  const [img, setImg] = useState<string>("");
  const [file, setFile] = useState<File | undefined>();

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [myArticles, setMyArticles] = useState<Article[]>([]);

  const fetchData = async () => {
    const infoData = await CommonAPI.getMyInfo();
    setImg(infoData.profileUrl);
    setName(infoData.nickname);
    setInfo(infoData);

    const myArticle = await MypageAPI.getMyArticles1();
    setMyArticles(myArticle);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onClickEdit = async () => {
    setIsEdit((prev) => !prev);
    if (isEdit) {
      const data = {
        nickname: name,
        profileImage: file,
      } as updateUserData;

      const updateInfo = await MypageAPI.updateUser(data);
      if (updateInfo) {
        setInfo((prev) => ({
          ...prev,
          nickname: updateInfo.nickname,
          profileUrl: updateInfo.profileUrl,
        }));
        setName(updateInfo.nickname);
        setImg(updateInfo.profileUrl);
      }
    }

    // 새로운 비밀번호가 있으면 바꿔주고 없으면 바꾸지 않는다
    if (password !== "") {
      const pwData = {
        userId: userId,
        password: password,
      } as changePwProps;
      await MypageAPI.changePassword(pwData);
    }
  };

  const onClickCancel = () => {
    setIsEdit(false);
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setName(newValue);
  };
  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPassword(newValue);
  };

  const onChangeFile = (file: File, img: string) => {
    console.log(img);
    setFile(file);
    setImg(img);
  };

  return (
    <MypageLayout>
      <Container>
        <InfoContainer>
          <InputContainer>
            <ImgInput
              isCenter={false}
              initialImg={img}
              onChangeFile={onChangeFile}
            />
            <InputWrapper>
              {isEdit ? (
                <>
                  <BasicInput
                    disabled={!isEdit}
                    value={name}
                    title="nickname"
                    onChange={onChangeName}
                  />
                  <BasicInput
                    disabled={!isEdit}
                    value={password}
                    title="password"
                    onChange={onChangePw}
                  />
                </>
              ) : (
                <>
                  {" "}
                  <InfoText>
                    <TextTag>이름</TextTag>
                    {info.nickname}
                  </InfoText>
                  <InfoText>
                    <TextTag>팔로워</TextTag>
                    {info.follower.length} 명
                  </InfoText>
                  <InfoText>
                    <TextTag>팔로잉</TextTag>
                    {info.following.length} 명
                  </InfoText>
                </>
              )}
            </InputWrapper>
          </InputContainer>
          <ButtonContainer>
            {isEdit && <Button onClick={onClickCancel}>취소</Button>}
            <Button onClick={onClickEdit}>수정</Button>
          </ButtonContainer>
        </InfoContainer>
        <CardContainer>
          {myArticles.map((article) => (
            <Card key={article.id} />
          ))}
        </CardContainer>
      </Container>
    </MypageLayout>
  );
}

const InfoText = styled.div`
  display: flex;
  gap: 10px;
  & + & {
    padding-top: 5px;
  }
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
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 30px;
`;

const InputWrapper = styled.div`
  flex: 0.6;
  padding-bottom: 15px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
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
