import RegInput from "@/components/atoms/RegInput";
import styled from "@emotion/styled";
import React from "react";

const Login = () => {
  return (
    <Container>
      <Content>
        <RegInput title="아이디" placeholder="아이디를 입력해주세요"></RegInput>
        <RegInput
          title="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        ></RegInput>
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
  max-width: 380px;
`;
