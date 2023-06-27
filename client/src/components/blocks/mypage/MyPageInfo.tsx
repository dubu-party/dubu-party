import { UserInfo } from "@/api/common";
import ProfileImgInput from "@/components/atoms/profileImgInput";
import styled from "@emotion/styled";
import React, { useState } from "react";
import Modal from "../common/CommonModal";
import MyPageModal from "./MyPageModal";

interface MyPageInfoProps {
  data: UserInfo;
  profileImg: string;
  onChangeData: (newInfo: UserInfo) => void;
  onChangeFile: (file: File, img: string) => void;
  onClickEdit: () => void;
}
export default function MyPageInfo({
  data,
  profileImg,
  onChangeData,
  onChangeFile,
  onClickEdit,
}: MyPageInfoProps) {
  const [isOpen, setInsOpen] = useState<boolean>(false); // 모달 열고 닫기

  const onClickCheck = () => {
    setInsOpen(true);
  };

  const onCloseModal = () => {
    setInsOpen(false);
  };

  return (
    <Container>
      <Wrapper>
        <ProfileContainer>
          <ProfileImgInput disabled initialImg={profileImg} />
        </ProfileContainer>
        <InfoContainer>
          <InfoHeader>
            <NameText>{data.nickname}</NameText>
            <Button onClick={onClickCheck}>Edit Profile</Button>
          </InfoHeader>
          <InfoWrapper>
            <NumberText>
              {data.articles.length}
              <InfoText>posts</InfoText>
            </NumberText>
            <NumberText>
              {data.follower.length}
              <InfoText>followers</InfoText>
            </NumberText>
            <NumberText>
              {data.following.length}
              <InfoText>following</InfoText>
            </NumberText>
          </InfoWrapper>
          <Intro>간단하게 자기소개 같은게 있어도 좋을듯!</Intro>
        </InfoContainer>
      </Wrapper>

      <MobileInfo>간단하게 자기소개 같은게 있어도 좋을듯!</MobileInfo>

      <Modal isOpen={isOpen} onClose={onCloseModal}>
        <MyPageModal
          data={data}
          onChangeData={onChangeData}
          profileImg={profileImg}
          onChangeFile={onChangeFile}
          onClose={onCloseModal}
          onClickEdit={onClickEdit}
        />
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 8px;
`;

const ProfileContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  padding-right: 30px;
  @media all and (max-width: 480px) {
    padding-right: 20px;
  }
  @media all and (max-width: 375px) {
    padding-right: 15px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  @media all and (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NameText = styled.div`
  font-size: 18px;
  line-height: 20px;
  padding-right: 10px;
`;

const Button = styled.button`
  cursor: pointer;
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

const InfoWrapper = styled.div`
  width: 100%;
  max-width: 320px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  @media all and (max-width: 400px) {
    gap: 10px;
  }
`;

const NumberText = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  @media all and (max-width: 400px) {
    flex-direction: column;
  }
`;

const InfoText = styled.span`
  font-size: 15px;
`;

const Intro = styled.div`
  padding-top: 30px;
  font-size: 15px;
  @media all and (max-width: 400px) {
    display: none;
  }
`;

const MobileInfo = styled.div`
  display: none;
  @media all and (max-width: 400px) {
    display: flex;
    padding-top: 20px;
  }
`;
