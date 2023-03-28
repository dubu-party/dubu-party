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
            <Name>아이디</Name>
            <TextWrap>
              <Text>100</Text>
              <SubText>점수 / 등수</SubText>
            </TextWrap>
          </TextContainer>
          <Button>버튼</Button>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};

export default ProfileCard;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 380px;
  height: 80px;
  background: #ffffff;
  border: 1px solid ${theme.color.border};
  border-radius: 10px;
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
  font-family: "Pretendard regular";
  font-size: 14px;
  line-height: 17px;

  color: #000000;
`;
const Name = styled(Text)`
  font-family: "Pretendard medium";
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
  width: 38px;
  height: 20px;

  background: #4b586a;
  border-radius: 4px;

  font-family: "Pretendard semiBold";
  font-size: 11px;
  line-height: 13px;
  text-align: center;

  color: #ffffff;
  transition: opacity 0.2s;

  :hover {
    opacity: 0.8;
  }
`;
