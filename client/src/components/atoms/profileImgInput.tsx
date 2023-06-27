import theme from "@/styles/theme";
import styled from "@emotion/styled";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface ImgInputProps {
  initialImg?: string;
  onChangeFile?: (file: File, img: string) => void;
  disabled: boolean;
}
export default function ProfileImgInput({
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
        if (onChangeFile) {
          onChangeFile(file, reader.result as string);
          resolve();
        }
      };
    });
  };

  const handleClick = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  return (
    <Container>
      <ImgContainer
        disabled={disabled}
        onClick={handleClick}
        src={initialImg}
      />
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

interface ImgContainerProps {
  disabled: boolean;
  src?: string;
}
const ImgContainer = styled.div<ImgContainerProps>`
  display: flex;
  width: 154px;
  height: 154px;
  border-radius: 20px;
  border: 2px solid ${theme.color.inputBorder};
  background-image: url(${({ src }) => `'${src}'`});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${({ disabled }) => !disabled && "cursor: pointer"};

  @media all and (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;
