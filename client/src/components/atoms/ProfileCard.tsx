import React from "react";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import Squircle from "./Squircle";

// 아이디, 프로필 사진, 점수?
interface ProfileCardProps {
  //   name: string;
  //   text: string;
  //   subText: string;
  //   button: string;
}
const ProfileCard = () => {
  return (
    <Container>
      <Wrapper>
        <Squircle />
        <ContentContainer>
          <TextContainer>
            <Name>닉네임</Name>
            <TextWrap>
              <Text>100</Text>
              <SubText>팔로워</SubText>
              <Text>100</Text>
              <SubText>포스트</SubText>
            </TextWrap>
          </TextContainer>
          <Button>follow</Button>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};

export default ProfileCard;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  height: 80px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  /* border: 1px solid ${theme.color.border}; */
  border-radius: 10px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.01);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 10px;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextContainer = styled.div``;
const TextWrap = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const Text = styled.div`
  font-family: ${theme.font.regular};
  font-size: 14px;
  line-height: 17px;

  color: #000000;
`;
const Name = styled(Text)`
  font-family: ${theme.font.medium};
`;

const SubText = styled(Text)`
  font-size: 13px;
  line-height: 16px;

  color: #5a6089;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  width: 50px;
  height: 20px;

  background: #425d52;
  border-radius: 4px;

  font-family: ${theme.font.semibold};
  font-size: 11px;
  line-height: 13px;
  text-align: center;

  color: #ffffff;
  transition: opacity 0.2s;

  :hover {
    opacity: 0.8;
  }
`;
