"use client"

import type React from "react"
import { useState, useMemo } from "react"
import type { Certification, Category } from "../types"
import CertificationCard from "./CertificationCard"
import CategorySidebar from "./CategorySidebar"
import SearchBar from "./SearchBar"
import Pagination from "./Pagination"

interface CertificationsSectionProps {
  certifications: Certification[]
  categories: Category[]
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const filteredCertifications = useMemo(() => {
    let filtered = certifications

    // Filter by category
    if (selectedCategory !== "all") {
      const categoryName = categories.find((c) => c.id === selectedCategory)?.name
      filtered = filtered.filter((cert) => cert.category === categoryName)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (cert) =>
          cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cert.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    return filtered
  }, [certifications, selectedCategory, searchTerm, categories])

  const totalPages = Math.ceil(filteredCertifications.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedCertifications = filteredCertifications.slice(startIndex, startIndex + itemsPerPage)

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }

  const handleSearchChange = (term: string) => {
    setSearchTerm(term)
    setCurrentPage(1)
  }

  return (
    <section>
      <div className="mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-800 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-300 bg-clip-text text-transparent mb-4">
          Professional Certifications
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          Industry-recognized certifications demonstrating expertise and commitment to professional development
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

          {paginatedCertifications.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {paginatedCertifications.map((certification) => (
                  <CertificationCard key={certification.id} certification={certification} />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <svg
                  className="mx-auto h-16 w-16 text-emerald-400 dark:text-emerald-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">No certifications found</p>
                <p className="text-slate-400 dark:text-slate-500 text-sm mt-2">
                  Try adjusting your search criteria or category filter
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <CategorySidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
