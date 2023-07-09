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
      <button
        onClick={handlePageChange}
        data-page={currentPage - 1}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, index) => index).map((page) => (
        <button
          key={page}
          onClick={handlePageChange}
          data-page={page}
          disabled={currentPage === page}
        >
          {page + 1}
        </button>
      ))}
      <button
        onClick={handlePageChange}
        data-page={currentPage + 1}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
