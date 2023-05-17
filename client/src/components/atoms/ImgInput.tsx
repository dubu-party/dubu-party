import theme from "@/styles/theme";
import styled from "@emotion/styled";
import Image from "next/image";
import React, { useRef, useState } from "react";

// TODO: 디자인 추후 변경하기
export default function ImgInput() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      console.log("file: ", file);

      // onImageUpload(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Container>
      <ImgContainer onClick={handleClick}>
        {selectedImage ? (
          <Image width={460} height={360} src={selectedImage} alt="Selected" />
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
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 460px;
  height: 360px;
  border-radius: 10%;
  border: 2px solid ${theme.color.inputBorder};
  overflow: hidden;
`;

const NoImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
