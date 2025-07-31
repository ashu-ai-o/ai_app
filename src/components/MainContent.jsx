import SearchBar from './SearchBar';

export default function MainContent({ onSearch }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 pt-16 lg:pt-6">
          <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-serif">
          Welcome to Perplexity
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
          Ask anything and get instant, accurate answers powered by AI. Start your search above.
        </p>
      </div>
      <SearchBar onSearch={onSearch} />
  
    </div>
  );
}