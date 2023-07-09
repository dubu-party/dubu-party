import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
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
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            onClick={handlePageChange}
            data-page={page}
            disabled={currentPage === page}
          >
            {page}
          </button>
        ),
      )}
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
