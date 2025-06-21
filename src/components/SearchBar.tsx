"use client"

import type React from "react"

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (term: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg
          className="h-6 w-6 text-emerald-500 dark:text-emerald-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search certifications by title, issuer, or description..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="block w-full pl-12 pr-4 py-4 text-lg border border-emerald-200 dark:border-emerald-700/50 rounded-2xl leading-5 bg-gradient-to-r from-white via-cream-50 to-amber-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-emerald-900/10 placeholder-slate-500 dark:placeholder-slate-400 text-slate-800 dark:text-cream-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 shadow-lg transition-all duration-300"
      />
    </div>
  )
}

export default SearchBar
