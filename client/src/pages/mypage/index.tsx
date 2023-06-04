import { CommonAPI, UserInfo, userInfoInit } from "@/api/common";
import { changePwProps, MypageAPI, updateUserData } from "@/api/myPage";
import { userIdState } from "@/atoms/userState";
import BasicBtn from "@/components/atoms/BasicBtn";
import BasicInput from "@/components/atoms/BasicInput";
import ImgInput from "@/components/atoms/ImgInput";
import Menu from "@/components/blocks/MyPageMenu";
import MypageLayout from "@/components/layout/mypageLayout";
import theme from "@/styles/theme";
import styled from "@emotion/styled";

import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function index() {
  const userId = useRecoilValue(userIdState);
  const [img, setImg] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const getMyInfo = async () => {
    const info = await CommonAPI.getMyInfo();
    setImg(info.profileUrl);
    setName(info.nickname || "");
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
      const updateInfo = await MypageAPI.updateUser(data);

      // 새로운 비밀번호가 있으면 바꿔주고 없으면 바꾸지 않는다
      if (password !== "") {
        const pwData = {
          userId: userId,
          password: password,
        } as changePwProps;
        await MypageAPI.changePassword(pwData);
      }
      console.log("check", updateInfo);
      // setName(updateInfo.nickname || "");
      // setImg(updateInfo.profileUrl);
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

  const onChangeFile = (img: string) => {
    setImg(img);
  };

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
        <BasicInput
          disabled={!isEdit}
          value={password}
          title="password"
          onChange={onChangePw}
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
  max-width: 500px;
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
