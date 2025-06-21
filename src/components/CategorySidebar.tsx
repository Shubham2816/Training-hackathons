"use client"

import type React from "react"
import type { Category } from "../types"

interface CategorySidebarProps {
  categories: Category[]
  selectedCategory: string
  onCategorySelect: (categoryId: string) => void
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="bg-gradient-to-br from-white via-cream-50 to-amber-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-emerald-900/10 rounded-2xl shadow-lg p-8 border border-emerald-200/50 dark:border-emerald-700/30 sticky top-8">
      <h3 className="text-xl font-bold text-slate-800 dark:text-cream-100 mb-6 flex items-center">
        <svg
          className="w-6 h-6 text-amber-600 dark:text-amber-400 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14-7l2 2-2 2m2-2H9m10 0V9M5 19l2-2-2-2m2 2H3m2 0v2"
          />
        </svg>
        Categories
      </h3>
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => onCategorySelect(category.id)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex justify-between items-center group ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/50 transform scale-105"
                  : "text-slate-600 dark:text-slate-300 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20 hover:text-emerald-700 dark:hover:text-emerald-400"
              }`}
            >
              <span className="font-medium">{category.name}</span>
              <span
                className={`text-sm px-3 py-1 rounded-full font-semibold transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? "bg-white/20 text-white"
                    : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 group-hover:text-emerald-700 dark:group-hover:text-emerald-300"
                }`}
              >
                {category.count}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategorySidebar
