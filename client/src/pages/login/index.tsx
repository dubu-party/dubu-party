import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import BasicBtn from "@/components/atoms/BasicBtn";
import LinkText from "@/components/atoms/LinkText";
import RegInput from "@/components/atoms/RegInput";

// TODO: 로그인 할 때도 형식 검사가 필요한가?
const Login = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const type = e.target.dataset.reg;
    switch (type) {
      case "아이디":
        setId(newValue);
        break;
      case "비밀번호":
        setPassword(newValue);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Content>
        <ImageContainer>
          <TitleText>
            DUBU
            <br />
            PARTY
          </TitleText>
          <LinkText
            text="DUBU에 대해 더 알고싶다면?"
            goto="/"
            color={theme.color.border}
            LinkEffect={false}
          />
        </ImageContainer>
        <InputsContainer>
          <UpperContainer>
            <LinkText
              text="회원가입"
              goto="register"
              LinkEffect={false}
              color={theme.color.placeholder}
            />
          </UpperContainer>
          <RegInput title="아이디" value={id} onChange={onChange} warning />
          <RegInput
            title="비밀번호"
            type="password"
            value={password}
            onChange={onChange}
            warning
          />
          <LinkContainer>
            <LinkText text="비밀번호 찾기" goto="/" />
          </LinkContainer>
          <ButtonContainer>
            <BasicBtn text="로그인" />
          </ButtonContainer>
        </InputsContainer>
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
  max-width: 700px;
  display: flex;
  border: 2px solid ${theme.color.inputBorder};
  border-radius: 8px;
`;

const ImageContainer = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.color.inputBorder};
  padding: 20px;
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
const ButtonContainer = styled.div``;
