import SearchBar from './SearchBar';

export default function MainContent({ onSearch, isAuthenticated, onLogin, onSignUp }) {
  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6 pt-12 sm:pt-16 lg:pt-6 min-h-screen overflow-y-auto">
      <div className="mt-4 sm:mt-8 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 font-serif px-2">
          Welcome to Triveni
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4 leading-relaxed">
          {isAuthenticated 
            ? "Ask anything and get instant, accurate answers powered by AI. Start your search above."
            : "Ask anything and get instant, accurate answers powered by AI. Sign up or login to get started."
          }
        </p>
      </div>
      {isAuthenticated ? (
        <SearchBar onSearch={onSearch} />
      ) : (
        <div className="max-w-3xl mx-auto w-full px-3 sm:px-4 md:px-0">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 sm:left-4 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div
              className="block h-16 sm:h-20 md:h-24 w-full pl-9 sm:pl-12 pr-12 sm:pr-16 py-2 sm:py-2.5 md:py-3 bg-gray-100 dark:bg-[#2C2C2C] border border-gray-200 dark:border-[#3C3C3C] rounded-xl text-gray-400 text-sm sm:text-base md:text-[17px] flex items-center cursor-pointer"
              onClick={onLogin}
            >
              Ask anything... (Login required)
            </div>
          </div>
        </div>
      )}
    </div>
  );
}