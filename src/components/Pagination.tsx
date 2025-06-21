"use client"

import type React from "react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
    return pages
  }

  return (
    <div className="flex justify-center items-center space-x-3 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 bg-gradient-to-r from-white via-cream-50 to-amber-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-emerald-900/10 border border-emerald-200 dark:border-emerald-700/50 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20 hover:border-emerald-300 dark:hover:border-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md"
      >
        Previous
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 shadow-md ${
            currentPage === page
              ? "text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 border border-emerald-500 shadow-emerald-200 dark:shadow-emerald-900/50 transform scale-110"
              : "text-slate-700 dark:text-slate-300 bg-gradient-to-r from-white via-cream-50 to-amber-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-emerald-900/10 border border-emerald-200 dark:border-emerald-700/50 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20 hover:border-emerald-300 dark:hover:border-emerald-500/50"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 bg-gradient-to-r from-white via-cream-50 to-amber-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-emerald-900/10 border border-emerald-200 dark:border-emerald-700/50 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20 hover:border-emerald-300 dark:hover:border-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
