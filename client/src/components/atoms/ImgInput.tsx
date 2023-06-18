import theme from "@/styles/theme";
import styled from "@emotion/styled";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface ImgInputProps {
  initialImg?: string;
  onChangeFile: (file: File, img: string) => void;
  disabled?: boolean;
}
export default function ImgInput({
  onChangeFile,
  initialImg,
  disabled,
}: ImgInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve: any) => {
      reader.onload = () => {
        onChangeFile(file, reader.result as string);
        resolve();
      };
    });
  };

  const handleClick = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  return (
    <Container>
      <Title>프로필 이미지</Title>
      <ImgContainer onClick={handleClick}>
        {initialImg ? (
          <img width={200} height={200} src={initialImg} alt="Selected" />
        ) : (
          <NoImg>No Image</NoImg>
        )}
      </ImgContainer>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: "none" }}
        disabled={disabled}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 9px;
`;

const Title = styled.div`
  font-family: ${theme.font.medium};
  font-size: 13px;
  padding: 0 5px;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  border: 2px solid ${theme.color.inputBorder};
  overflow: hidden;
`;

const NoImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
