import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import { useState, useEffect } from "react";

const Pagination = ({ pageSize, data, setCurrentPageData }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  const totalPages = Math.ceil(data.length / pageSize);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, data.length);
    setCurrentPageData(data.slice(startIndex, endIndex));
  }, [currentPage, pageSize, data]);

  return (
    <div className="flex justify-end mt-1">
      <button
        className={`border-2 scale-105 transition-all text-blue-700 ${
          currentPage === 1 ? "text-gray-400" : "text-white"
        }`}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ChevronLeft />
      </button>
      <button
        className={`border-2 scale-105 transition-all text-blue-700 ${
          currentPage !== totalPages ? "text-white" : "text-gray-400"
        }`}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
