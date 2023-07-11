import { useState, useEffect } from "react";

interface PaginationResult<T> {
  data: T[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
}

interface PaginationOptions {
  page: number;
  size: number;
  sort?: string;
}

type UsePaginationResult<T> = [
  PaginationResult<T> | null,
  (page: number) => void,
];

function usePagination<T>(
  getData: (page: number) => Promise<PaginationResult<T>>,
  initialPage: number = 1,
  initialSize: number = 10,
): UsePaginationResult<T> {
  const [page, setPage] = useState(initialPage);
  const [result, setResult] = useState<PaginationResult<T> | null>(null);

  const fetchPage = async (pageNumber: number): Promise<void> => {
    const data = await getData(pageNumber);
    setResult(data);
  };

  useEffect(() => {
    fetchPage(page);
  }, [page]);

  const goToPage = (pageNumber: number): void => {
    setPage(pageNumber);
  };

  return [result, goToPage];
}

export default usePagination;
