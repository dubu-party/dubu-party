import BasicInput from "@/components/atoms/BasicInput";
import ImgInput from "@/components/atoms/ImgInput";
import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React from "react";

// TODO: /api/users
export default function Edit() {
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    console.log(newValue);
  };

  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    console.log(newValue);
  };

  return (
    <Container>
      <ImgInput />
      <BasicInput value="temp" title="nickname" onChange={onChangeName} />
      <BasicInput value="temp" title="phone number" onChange={onChangePhone} />
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
