import React from 'react';
import { Search, Send } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
      setQuery('');
    }
  };

  const handleEnterClick = () => {
    if (query.trim() && onSearch) {
      onSearch(query.trim());
      setQuery('');
    }
  };
  return (
    <div className="max-w-3xl mx-auto w-full px-2 sm:px-0">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="block h-24 w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-gray-100 dark:bg-[#2C2C2C] border border-gray-200 dark:border-[#3C3C3C] rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-sm sm:text-[17px]"
            placeholder="Ask anything..."
          />
          <div className="absolute inset-y-0 right-4 flex items-center">
            <button 
              type="button"
              onClick={handleEnterClick}
              className="p-2 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-200 cursor-pointer group"
              title="Submit search"
            >
              <Send size={18} className="text-gray-400 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}