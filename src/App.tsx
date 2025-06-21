
import { ThemeProvider } from "./contexts/ThemeContext"
import ThemeToggle from "./components/ThemeToggle"
import { trainings, certifications, categories } from "./data/mockData"

import TrainingSection from "./components/TrainingSection"
import CertificationsSection from "./components/CertificationsSection"

function App() {
  return (

     <ThemeProvider>

      <div className="min-h-screen bg-gradient-to-br from-cream-50 via-amber-30 to-amber-100    dark:from-slate-900 dark:via-slate-900 dark:to-emerald-900/90 transition-colors duration-500">
  <header className="bg-gradient-to-r from-cream-100 via-amber-50 to-amber-100 dark:from-slate-800/90 dark:via-slate-800/90 dark:to-emerald-900/20 backdrop-blur-lg shadow-xl border-b border-emerald-200/50 dark:border-emerald-700/30 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-5xl font-bold leading-[1.25] bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-800 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-300 bg-clip-text text-transparent">
                Training Programs & Industry Certifications
                </h1>
                <p className="mt-3 text-xl text-slate-600 dark:text-slate-300 font-medium">
                   See how continuous learning fuels innovation and success.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-slate-900 dark:text-slate-300 font-medium">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>



{/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <TrainingSection trainings={trainings} />
          <CertificationsSection certifications={certifications} categories={categories} />
        </main>









 {/* Footer */}
        <footer className="bg-gradient-to-r from-white/90 via-cream-50/90 to-amber-50/90 dark:from-slate-800/90 dark:via-slate-800/90 dark:to-emerald-900/20 backdrop-blur-lg border-t border-emerald-200/50 dark:border-emerald-700/30 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                © 2024 Professional Development Portfolio. All rights reserved.
              </p>
              <p className="text-slate-400 dark:text-slate-500 text-sm mt-2">
                Crafted with precision and attention to detail
              </p>
            </div>
          </div>
        </footer>



    </div>

    </ThemeProvider>
    
  )
}

export default App