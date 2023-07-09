import theme from "@/styles/theme";
import styled from "@emotion/styled";
import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNum: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetPage = Number(event.currentTarget.dataset.page);
    onPageChange(targetPage);
  };

  return (
    <div>
      <ArrowButton
        onClick={handlePageChange}
        data-page={Math.max(0, currentPage - 1)}
        disabled={currentPage === 0}
      >
        {`<`}
      </ArrowButton>
      {Array.from({ length: totalPages }, (_, index) => index).map((page) => (
        <NumButton
          key={page}
          onClick={handlePageChange}
          data-page={page}
          disabled={currentPage === page}
          current={currentPage === page}
        >
          {page + 1}
        </NumButton>
      ))}
      <ArrowButton
        onClick={handlePageChange}
        data-page={Math.min(totalPages, currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {`>`}
      </ArrowButton>
    </div>
  );
};

export default Pagination;

const ArrowButton = styled.button`
  font-size: 14px;
  font-family: ${theme.font.extraBold};
  background: none;
  border: none;
`;

const NumButton = styled.button<{ current: boolean }>`
  font-size: 14px;
  font-family: ${theme.font.bold};
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  color: ${({ current }) => (current ? "#4D7C4E" : "black")};
  &:hover {
    color: ${({ current }) => (current ? "#4D7C4E" : "#333")};
  }
`;
