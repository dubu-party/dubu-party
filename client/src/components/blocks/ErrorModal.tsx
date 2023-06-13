import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";

interface ErrorModalProps {
  errMsg?: string;
  onClose: () => void;
}

const ErrorModal = ({ errMsg, onClose }: ErrorModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        // 너무 쉽게 닫히는 것 같아서 보고 풀기
        // onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <Container>
      <ModalContent ref={modalRef}>
        <Title>Error</Title>
        <Content>{errMsg ?? "알 수 없는 에러가 발생했습니다."}</Content>
        <Button onClick={onClose}>Close</Button>
      </ModalContent>
    </Container>
  );
};

export default ErrorModal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 400px;
  height: 240px;
  background-color: white;
  box-shadow: 20px 20px 80px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 50px 40px 30px;
  display: flex;

  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 20px;
`;

const Title = styled.div`
  font-family: ${theme.font.bold};
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  flex: 1;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background-color: #2b533c; // #4D7C4E,#2B533C,#162C24

  font-family: ${theme.font.semibold};
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
