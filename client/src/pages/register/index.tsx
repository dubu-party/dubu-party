import React from "react";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import BasicBtn from "@/components/atoms/BasicBtn";
import LinkText from "@/components/atoms/LinkText";
import RegInput from "@/components/atoms/RegInput";
import Router, { useRouter } from "next/router";

const Register = () => {
  const onClickCancel = () => {
    Router.push("/");
  };
  // 아이디, 비밀번호, 이메일, 닉네임 필수 입력
  return (
    <Container>
      <Content>
        <TitleText>DUBU PARTY</TitleText>
        <RegInput
          title="아이디"
          type="text"
          placeholder="아이디를 입력해주세요"
        />
        <RegInput
          title="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <RegInput
          title="이메일"
          type="email"
          placeholder="이메일을 입력해주세요"
        />
        <RegInput
          title="닉네임"
          type="text"
          placeholder="닉네임을 입력해주세요"
        />
        <ButtonContainer>
          <BasicBtn text="취소" color="#595e63" onClick={onClickCancel} />
          <BasicBtn text="회원가입" />
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 40px 0;
`;

const TitleText = styled.div`
  font-family: ${theme.font.extraBold};
  font-size: 40px;
  line-height: 42px;
  padding-bottom: 40px;
  text-align: center;
`;
