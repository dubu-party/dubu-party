import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React from "react";

interface BasicInputProps {
  disabled?: boolean;
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function BasicInput({
  disabled,
  title,
  value,
  onChange,
}: BasicInputProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Input
        disabled={disabled}
        value={value}
        onChange={onChange}
        type={title === "password" ? "password" : "text"}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
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
