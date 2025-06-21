import type React from "react"
import type { Training } from "../types"

interface TrainingSectionProps {
  trainings: Training[]
}

const TrainingSection: React.FC<TrainingSectionProps> = ({ trainings }) => {
  return (
    <section className="mb-16">
      <div className="mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-800 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-300 bg-clip-text text-transparent mb-4">
          Training & Hackathons
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          Comprehensive training programs completed to enhance technical expertise and professional development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {trainings.map((training) => (
          <div
            key={training.id}
            className="group relative bg-gradient-to-br from-white via-cream-50 to-amber-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-emerald-900/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-emerald-200/50 dark:border-emerald-700/30 hover:border-emerald-300 dark:hover:border-emerald-500/50"
          >
            {/* Shine effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/20 dark:via-emerald-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

            <div className="relative">
              <div className="relative overflow-hidden">
                <img
                  src={training.image || "/placeholder.svg"}
                  alt={training.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent" />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-cream-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {training.title}
                  </h3>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm ${
                      training.level === "Advanced"
                        ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-rose-200 dark:shadow-rose-900/50"
                        : training.level === "Intermediate"
                          ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-amber-200 dark:shadow-amber-900/50"
                          : "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-200 dark:shadow-emerald-900/50"
                    }`}
                  >
                    {training.level}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{training.description}</p>

                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-amber-600 dark:text-amber-400"
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
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Duration: {training.duration}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {training.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-800 dark:text-emerald-300 text-sm rounded-lg font-medium border border-emerald-200 dark:border-emerald-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrainingSection
