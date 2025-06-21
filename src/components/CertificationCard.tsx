import type React from "react"
import type { Certification } from "../types"

interface CertificationCardProps {
  certification: Certification
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const isExpired = certification.expiryDate && new Date(certification.expiryDate) < new Date()

  return (
    <div className="group relative bg-gradient-to-br from-white via-cream-50 to-amber-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-emerald-900/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-emerald-200/50 dark:border-emerald-700/30 hover:border-emerald-300 dark:hover:border-emerald-500/50">
      {/* Shine effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/30 dark:via-amber-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

      <div className="relative">
        <div className="relative overflow-hidden">
          <img
            src={certification.image || "/placeholder.svg"}
            alt={certification.title}
            className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-bold text-slate-800 dark:text-cream-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-300 leading-tight">
              {certification.title}
            </h3>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
                isExpired
                  ? "bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-rose-200 dark:shadow-rose-900/50"
                  : "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-200 dark:shadow-emerald-900/50"
              }`}
            >
              {isExpired ? "Expired" : "Active"}
            </span>
          </div>

          <p className="text-amber-700 dark:text-amber-400 font-semibold mb-3 text-sm">{certification.issuer}</p>

          <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 leading-relaxed">{certification.description}</p>

          <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400 mb-5">
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 text-emerald-600 dark:text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6m-6 0a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V8a1 1 0 00-1-1"
                />
              </svg>
              <span>
                <span className="font-medium">Issued:</span> {formatDate(certification.dateIssued)}
              </span>
            </div>

            {certification.expiryDate && (
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-amber-600 dark:text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  <span className="font-medium">Expires:</span> {formatDate(certification.expiryDate)}
                </span>
              </div>
            )}

            {certification.credentialId && (
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-teal-600 dark:text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>
                  <span className="font-medium">ID:</span> {certification.credentialId}
                </span>
              </div>
            )}
          </div>

          <div className="mt-4">
            <span className="px-4 py-2 bg-gradient-to-r from-slate-100 via-cream-100 to-amber-100/50 dark:from-slate-700 dark:via-slate-600 dark:to-emerald-900/30 text-slate-700 dark:text-slate-300 text-sm rounded-lg font-medium border border-emerald-200/50 dark:border-emerald-700/30">
              {certification.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificationCard
