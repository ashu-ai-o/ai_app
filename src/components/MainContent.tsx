import SearchBar from './SearchBar';

export default function MainContent({ onSearch }) {
  return (
    <div className="max-w-5xl mx-auto px-2 xs:px-3 sm:px-4 py-3 xs:py-4 sm:py-6 pt-8 xs:pt-12 sm:pt-16 lg:pt-6 min-h-screen overflow-y-auto">
      <div className="mt-3 xs:mt-4 sm:mt-8 text-center">
        <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 xs:mb-3 sm:mb-4 font-serif px-2">
          Welcome to Perplexity
        </h2>
        <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 xs:mb-8 sm:mb-12 md:mb-16 px-3 xs:px-4 leading-relaxed">
          Ask anything and get instant, accurate answers powered by AI. Start your search above.
        </p>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}