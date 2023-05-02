import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React, { useState } from "react";

interface RegInputProps {
  title: string;
  placeholder: string;
  type?: string;
}

const RegInput = ({ title, placeholder, type }: RegInputProps) => {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type || "text"}
      />
      <Warning>이메일 형식이 아닙니다.</Warning>
    </Container>
  );
};

export default RegInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const Title = styled.div`
  font-family: ${theme.font.medium};
  font-size: 13px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  background: "white";
  border-radius: 8px;
  border: 2px solid ${theme.color.inputBorder};
  box-shadow: 10px 10px 30px ${theme.color.inputShadow};

  ::placeholder {
    color: ${theme.color.placeholder};
  }
  &:focus {
    outline: none;
    background: ${theme.color.lightBackground};
  }
`;

const Warning = styled.div`
  width: 100%;
  text-align: right;
  font-family: ${theme.font.regular};
  font-size: 12px;
  color: ${theme.color.warning};
`;
