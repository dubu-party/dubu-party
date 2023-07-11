import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import theme from "@/styles/theme";
import BasicBtn from "@/components/atoms/BasicBtn";
import RegInput from "@/components/atoms/RegInput";
import Router, { useRouter } from "next/router";
import { emailRegEx, nameRegEx, passwordRegEx } from "@/utils/RegEx";
import LinkText from "@/components/atoms/LinkText";
import ImgInput from "@/components/atoms/ImgInput";
import { AuthAPI, RegisterForm } from "@/api/auth";
import SEO from "@/components/atoms/SEO";
import useErrorModal from "@/hooks/useErrorModal";
import ErrorModal from "@/components/blocks/common/ErrorModal";

interface CheckProps {
  email: boolean;
  password: boolean;
  name: boolean;
}
// 형식이 확정되면 형식 안내 추가하기
const Register = () => {
  const { isOpen, openModal, closeModal } = useErrorModal();

  const [img, setImg] = useState<string>("");
  const [file, setFile] = useState<File | undefined>();

  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<CheckProps>({
    email: false,
    password: false,
    name: false,
  });
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    // 이미 로그인한 경우 우회되도록 수정
    const token = sessionStorage.getItem("token");
    if (token) {
      Router.push("/");
    }
  }, []);

  const checkValid = (value: string, type: string) => {
    switch (type) {
      case "이메일":
        setEmail(value);
        setIsValid((prev) => ({ ...prev, email: emailRegEx.test(value) }));
        break;
      case "비밀번호":
        setPassword(value);
        setIsValid((prev) => ({
          ...prev,
          password: passwordRegEx.test(value),
        }));
        break;
      case "닉네임":
        setNickname(value);
        setIsValid((prev) => ({ ...prev, name: nameRegEx.test(value) }));
        break;
      default:
        setIsValid({
          email: false,
          password: false,
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

  const onChangeFile = (file: File, img: string) => {
    setFile(file);
    setImg(img);
  };

  const onClickRegister = async () => {
    const data = {
      email,
      password,
      nickname,
      profileImage: file,
    };
    const res = await AuthAPI.register(data);
    if (res?.error) {
      openModal();
      setErrMsg(res.error as string);
    } else {
      Router.push("/login");
    }
  };

  const onClickCancel = () => {
    Router.push("/");
  };

  return (
    <Container>
      <SEO title="Join us" />
      <Content>
        <UpperContainer>
          <TitleText>Title</TitleText>
          <LinkContainer>
            <LinkText text="로그인" goto="login" LinkEffect={false} />
          </LinkContainer>
        </UpperContainer>

        <ImgInputContainer>
          <ImgInput initialImg={img} onChangeFile={onChangeFile} />
        </ImgInputContainer>

        <RegInput
          title="닉네임"
          value={nickname}
          onChange={onChange}
          warning={isValid.name}
        />
        <RegInput
          title="이메일"
          type="email"
          value={email}
          onChange={onChange}
          warning={isValid.email}
        />
        <RegInput
          title="비밀번호"
          type="password"
          value={password}
          onChange={onChange}
          warning={isValid.password}
        />
        <ButtonContainer>
          <BasicBtn text="취소" color="black" onClick={onClickCancel} />
          <BasicBtn
            text="회원가입"
            disabled={!isFormValid}
            onClick={onClickRegister}
          />
        </ButtonContainer>
      </Content>
      {isOpen && <ErrorModal errMsg={errMsg} onClose={closeModal} />}
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100%;
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
  padding: 20px;
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

const ImgInputContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
`;
