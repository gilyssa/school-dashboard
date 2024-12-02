import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
    const handlePageClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => handlePageClick(currentPage - 1)}>
                        Previous
                    </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <li
                        key={page}
                        className={`page-item ${page === currentPage ? "active" : ""}`}
                    >
                        <button className="page-link" onClick={() => handlePageClick(page)}>
                            {page}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => handlePageClick(currentPage + 1)}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
