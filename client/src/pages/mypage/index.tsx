import { CommonAPI, UserInfo, userInfoInit } from "@/api/common";
import { MypageAPI, updateUserData } from "@/api/myPage";
import BasicBtn from "@/components/atoms/BasicBtn";
import BasicInput from "@/components/atoms/BasicInput";
import ImgInput from "@/components/atoms/ImgInput";
import Menu from "@/components/blocks/MyPageMenu";
import MypageLayout from "@/components/layout/mypageLayout";
import theme from "@/styles/theme";
import styled from "@emotion/styled";

import React, { useEffect, useState } from "react";

export default function index() {
  const [name, setName] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const getMyInfo = async () => {
    const info = await CommonAPI.getMyInfo();
    setImg(info.profileUrl);
    setName(info.nickname);
  };
  useEffect(() => {
    getMyInfo();
  }, []);

  const onClickEdit = async () => {
    setIsEdit((prev) => !prev);
    if (isEdit) {
      const data = {
        nickname: name,
        instagram: "",
        profileImage: img,
      } as updateUserData;
      const check = await MypageAPI.updateUser(data);
      setName(check.nickname);
      setImg(check.profileUrl);
    }
  };

  const onClickCancel = () => {
    setIsEdit(false);
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setName(newValue);
  };

  const onChangeFile = (img: string) => {
    setImg(img);
  };
  console.log("img", img);

  return (
    <MypageLayout>
      <Container>
        <ImgInput initialImg={img} onChangeFile={onChangeFile} />
        <BasicInput
          disabled={!isEdit}
          value={name}
          title="nickname"
          onChange={onChangeName}
        />

        <ButtonContainer>
          <BasicBtn disabled={!isEdit} text="취소" onClick={onClickCancel} />
          <BasicBtn text={isEdit ? "확인" : "수정"} onClick={onClickEdit} />
        </ButtonContainer>
      </Container>
    </MypageLayout>
  );
}

// export const getServerSideProps = async ({ params }: any) => {
//   const info = await CommonAPI.getMyInfo1();

//   return {
//     props: {
//       info: info,
//     },
//   };
// };

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
