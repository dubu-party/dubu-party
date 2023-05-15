import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import BasicBtn from "@/components/atoms/BasicBtn";
import RegInput from "@/components/atoms/RegInput";
import Router, { useRouter } from "next/router";
import { emailRegEx, idRegEx, nameRegEx, passwordRegEx } from "@/utils/RegEx";
import LinkText from "@/components/atoms/LinkText";

interface CheckProps {
  id: boolean;
  password: boolean;
  email: boolean;
  name: boolean;
}
// 아이디, 비밀번호, 이메일, 닉네임 필수 입력
// TODO: alert 만들기
const Register = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isValid, setIsValid] = useState<CheckProps>({
    id: false,
    password: false,
    email: false,
    name: false,
  });

  const onClickCancel = () => {
    Router.push("/");
  };

  const checkValid = (value: string, type: string) => {
    switch (type) {
      case "아이디":
        setId(value);
        setIsValid((prev) => ({ ...prev, id: idRegEx.test(value) }));
        break;
      case "비밀번호":
        setPassword(value);
        setIsValid((prev) => ({
          ...prev,
          password: passwordRegEx.test(value),
        }));
        break;
      case "이메일":
        setEmail(value);
        setIsValid((prev) => ({ ...prev, email: emailRegEx.test(value) }));
        break;
      case "닉네임":
        setName(value);
        setIsValid((prev) => ({ ...prev, name: nameRegEx.test(value) }));
        break;
      default:
        setIsValid({
          id: false,
          password: false,
          email: false,
          name: false,
        });
        break;
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const type = e.target.dataset.reg;
    checkValid(newValue, type || "");
  };

  const isFormValid = Object.values(isValid).every((valid) => valid);

  return (
    <Container>
      <Content>
        <UpperContainer>
          <TitleText>DUBU PARTY</TitleText>
          <LinkContainer>
            <LinkText
              text="로그인"
              goto="login"
              LinkEffect={false}
              color={theme.color.placeholder}
            />
          </LinkContainer>
        </UpperContainer>

        <RegInput
          title="아이디"
          value={id}
          onChange={onChange}
          warning={isValid.id}
        />
        <RegInput
          title="비밀번호"
          type="password"
          value={password}
          onChange={onChange}
          warning={isValid.password}
        />
        <RegInput
          title="이메일"
          type="email"
          value={email}
          onChange={onChange}
          warning={isValid.email}
        />
        <RegInput
          title="닉네임"
          value={name}
          onChange={onChange}
          warning={isValid.name}
        />
        <ButtonContainer>
          <BasicBtn text="취소" color="#595e63" onClick={onClickCancel} />
          <BasicBtn text="회원가입" disabled={!isFormValid} />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UpperContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 40px;
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
  text-align: center;
`;
