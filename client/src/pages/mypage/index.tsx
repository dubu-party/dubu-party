import BasicBtn from "@/components/atoms/BasicBtn";
import BasicInput from "@/components/atoms/BasicInput";
import ImgInput from "@/components/atoms/ImgInput";
import Menu from "@/components/blocks/Menu";
import MypageLayout from "@/components/layout/mypageLayout";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React, { Component, useMemo, useState } from "react";

// TODO: 회원 탈퇴
export default function index() {
  const [img, setImg] = useState<File>();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const onClickEdit = () => {
    setIsEdit((prev) => !prev);
  };
  const onClickCancel = () => {
    setIsEdit(false);
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    console.log(newValue);
  };

  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    console.log(newValue);
  };

  const onChangeFile = (img: File) => {
    setImg(img);
  };
  return (
    <MypageLayout>
      <Container>
        <ImgInput onChangeFile={onChangeFile} />
        <BasicInput
          disabled={!isEdit}
          value="temp"
          title="nickname"
          onChange={onChangeName}
        />
        <BasicInput
          disabled={!isEdit}
          value="temp"
          title="phone number"
          onChange={onChangePhone}
        />
        <ButtonContainer>
          <BasicBtn disabled={!isEdit} text="취소" onClick={onClickCancel} />
          <BasicBtn text={isEdit ? "확인" : "수정"} onClick={onClickEdit} />
        </ButtonContainer>
      </Container>
    </MypageLayout>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const ButtonContainer = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
