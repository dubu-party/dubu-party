import { UserInfo } from "@/api/common";
import ProfileImgInput from "@/components/atoms/profileImgInput";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React from "react";

interface MyPageModalProps {
  data: UserInfo;
  onChangeData: (newInfo: UserInfo) => void;
  profileImg: string;
  onChangeFile: (file: File, img: string) => void;
  onClose: () => void;
  onClickEdit: () => void;
}
export default function MyPageModal({
  data,
  onChangeData,
  profileImg,
  onChangeFile,
  onClose,
  onClickEdit,
}: MyPageModalProps) {
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChangeData({ ...data, nickname: value });
  };

  const onClick = () => {
    onClickEdit();
    onClose();
  };

  return (
    <Container>
      <InputWrapper>
        <Title className="img-input">프로필 사진</Title>
        <ProfileImgInput
          disabled={false}
          initialImg={profileImg}
          onChangeFile={onChangeFile}
        />
      </InputWrapper>

      <InputWrapper>
        <Title>사용자 이름</Title>
        <Input value={data.nickname} onChange={onChangeName} />
      </InputWrapper>

      <InputWrapper>
        <Title>자기소개</Title>
        <Input value={data.nickname} onChange={onChangeName} />
      </InputWrapper>
      <ButtonContainer>
        <Button onClick={onClose}>취소</Button>
        <Button onClick={onClick}>확인</Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 14px;
  width: 100%;
  &.img-input {
    width: unset;
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 15px;
  background: none;
  padding: 5px;
  border: none;
  border-bottom: 1px solid;
  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  font-size: 14px;
  background: none;
  font-family: ${theme.font.medium};

  &:hover {
    opacity: 0.5;
  }
`;
