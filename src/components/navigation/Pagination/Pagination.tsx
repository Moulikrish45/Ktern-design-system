import React from 'react';

interface PaginationProps {
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
}

export const Pagination = ({
    currentPage = 1,
    totalPages = 12,
    onPageChange,
}: PaginationProps) => {
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange?.(page);
        }
    };

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 5) {
            // Show all pages if 5 or fewer
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Show first 3 pages, ellipsis, and last page
            pages.push(1, 2, 3);
            if (totalPages > 4) {
                pages.push('...');
            }
            pages.push(totalPages);
        }

        return pages;
    };

    const pages = getPageNumbers();

    return (
        <div className="flex items-center gap-2">
            {/* Previous Button */}
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Go to previous page"
                className="w-10 h-10 flex items-center justify-center rounded-xl rounded-tl-none border border-border-light dark:border-border-dark hover:border-brand-primary hover:text-brand-primary transition-all disabled:opacity-50"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>

            {/* Page Numbers */}
            {pages.map((page, index) => {
                if (page === '...') {
                    return (
                        <span key={`ellipsis-${index}`} className="text-text-muted-light px-2">
                            ...
                        </span>
                    );
                }

                const pageNum = page as number;
                const isActive = pageNum === currentPage;

                return (
                    <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        aria-label={`Go to page ${pageNum}`}
                        aria-current={isActive ? 'page' : undefined}
                        className={
                            isActive
                                ? 'w-10 h-10 flex items-center justify-center bg-brand-primary text-white font-bold rounded-xl rounded-tl-none shadow-lg shadow-brand-primary/20'
                                : 'w-10 h-10 flex items-center justify-center rounded-xl rounded-tl-none border border-border-light dark:border-border-dark hover:border-brand-primary hover:text-brand-primary transition-all font-medium'
                        }
                    >
                        {pageNum}
                    </button>
                );
            })}

            {/* Next Button */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Go to next page"
                className="w-10 h-10 flex items-center justify-center rounded-xl rounded-tl-none border border-border-light dark:border-border-dark hover:border-brand-primary hover:text-brand-primary transition-all disabled:opacity-50"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
