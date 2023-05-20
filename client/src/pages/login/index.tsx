import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import BasicBtn from "@/components/atoms/BasicBtn";
import LinkText from "@/components/atoms/LinkText";
import RegInput from "@/components/atoms/RegInput";
import { AuthAPI } from "@/api/auth";
import Router from "next/router";

// TODO: 로그인 할 때도 형식 검사가 필요한가?
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const type = e.target.dataset.reg;
    switch (type) {
      case "이메일":
        setEmail(newValue);
        break;
      case "비밀번호":
        setPassword(newValue);
        break;
      default:
        break;
    }
  };

  const onClickLogin = async () => {
    const data = { email, password };
    const res = await AuthAPI.login(data);
    if (res?.error) {
      // 에러 모달 만들기
      console.log(res.error);
    } else {
      Router.push("/");
    }
  };
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickLogin();
    }
  };

  return (
    <Container>
      <Content>
        <TitleText>Title</TitleText>
        <InputsContainer>
          <UpperContainer>
            <LinkText
              text="회원가입"
              goto="register"
              LinkEffect={false}
              color={theme.color.fontColor}
            />
          </UpperContainer>
          <RegInput
            title="이메일"
            type="email"
            value={email}
            onChange={onChange}
            warning
          />
          <RegInput
            title="비밀번호"
            type="password"
            value={password}
            onChange={onChange}
            onKeyPress={onKeyPress}
            warning
          />
          <LinkContainer>
            <LinkText text="비밀번호 찾기" goto="/" />
          </LinkContainer>
          <ButtonContainer>
            <BasicBtn text="로그인" onClick={onClickLogin} />
          </ButtonContainer>
        </InputsContainer>
        <IntroContainer>
          <LinkText
            text="title에 대해 더 알고싶다면?"
            goto="/"
            LinkEffect={false}
          />
        </IntroContainer>
      </Content>
    </Container>
  );
};

export default Login;

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
  /* max-width: 700px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.div`
  font-family: ${theme.font.extraBold};
  font-size: 40px;
  line-height: 42px;
`;

const InputsContainer = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px;
`;

const LinkContainer = styled.div`
  padding: 0 0 70px;
`;

const UpperContainer = styled.div`
  padding: 0 0 10px;
  display: flex;
  justify-content: flex-end;
`;

const IntroContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

const ButtonContainer = styled.div``;
