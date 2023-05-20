import theme from "@/styles/theme";
import { emailRegEx, idRegEx, nameRegEx, passwordRegEx } from "@/utils/RegEx";
import styled from "@emotion/styled";
import React, { useState } from "react";

interface RegInputProps {
  title: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  warning?: boolean; // TODO: 어던 형식인지 알려주기 위해 스트링으로 텍스트 받기
}

const RegInput = ({
  title,
  type,
  value,
  onChange,
  onKeyPress,
  warning,
}: RegInputProps) => {
  const placeholder = `${title}을/를 입력해주세요`; // TODO: 분리하기?

  return (
    <Container>
      <Title>{title}</Title>
      <Input
        value={value}
        onChange={onChange}
        onKeyUp={onKeyPress}
        placeholder={placeholder}
        type={type || "text"}
        data-reg={title}
      />
      <Warning>{warning ? "" : `${title} 형식이 아닙니다.`}</Warning>
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
    color: ${theme.color.fontColor};
    /* color: ${theme.color.placeholder}; */
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
  height: 15px;
`;
