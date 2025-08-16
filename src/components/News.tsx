import React from 'react';
import { Search, TrendingUp, Clock, ArrowUpRight, ChevronDown } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  timeAgo: string;
  category: string;
  trending?: boolean;
  image?: string;
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'OpenAI announces GPT-5 with breakthrough reasoning capabilities',
    summary: 'The latest model shows significant improvements in mathematical reasoning and code generation, marking a major leap forward in AI capabilities.',
    source: 'TechCrunch',
    timeAgo: '2h',
    category: 'AI',
    trending: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop'
  },
  {
    id: '2',
    title: 'Tesla unveils new Model Y refresh with 400-mile range',
    summary: 'The updated electric SUV features improved battery technology and enhanced autopilot capabilities, setting new standards for EV performance.',
    source: 'Electrek',
    timeAgo: '4h',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=240&fit=crop'
  },
  {
    id: '3',
    title: 'Climate summit reaches historic agreement on carbon reduction',
    summary: 'World leaders commit to ambitious new targets for 2030, with binding agreements on renewable energy transition and carbon pricing.',
    source: 'Reuters',
    timeAgo: '6h',
    category: 'Climate',
    trending: true,
    image: 'https://images.unsplash.com/photo-1569163139394-de44cb5894c6?w=400&h=240&fit=crop'
  },
  {
    id: '4',
    title: 'Breakthrough in quantum computing achieved by Google',
    summary: 'New quantum processor demonstrates error correction at scale, bringing practical quantum computing closer to reality.',
    source: 'Nature',
    timeAgo: '8h',
    category: 'Science',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=240&fit=crop'
  },
  {
    id: '5',
    title: 'SpaceX successfully launches Starship to Mars orbit',
    summary: 'Historic mission marks first successful interplanetary flight of the massive rocket system, paving way for Mars colonization.',
    source: 'Space News',
    timeAgo: '12h',
    category: 'Space',
    trending: true,
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=240&fit=crop'
  },
  {
    id: '6',
    title: 'Apple Vision Pro 2 rumored with lighter design and lower price',
    summary: 'Industry sources suggest significant hardware improvements and cost reductions for the next-generation mixed reality headset.',
    source: '9to5Mac',
    timeAgo: '14h',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=240&fit=crop'
  },
  {
    id: '7',
    title: 'Major cybersecurity breach affects millions of users',
    summary: 'Security researchers discover vulnerability in popular cloud service, prompting immediate patches and user notifications.',
    source: 'Wired',
    timeAgo: '16h',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=240&fit=crop'
  },
  {
    id: '8',
    title: 'New gene therapy shows promise for treating Alzheimer\'s',
    summary: 'Clinical trials demonstrate significant cognitive improvements in early-stage patients, offering hope for millions worldwide.',
    source: 'Science',
    timeAgo: '18h',
    category: 'Health',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=240&fit=crop'
  },
  {
    id: '9',
    title: 'Cryptocurrency market surges following regulatory clarity',
    summary: 'Bitcoin and Ethereum see significant gains after government announces comprehensive digital asset framework.',
    source: 'CoinDesk',
    timeAgo: '20h',
    category: 'Crypto',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=240&fit=crop'
  },
  {
    id: '10',
    title: 'Renewable energy reaches 50% of global electricity generation',
    summary: 'Milestone achievement driven by rapid solar and wind deployment, accelerating the transition away from fossil fuels.',
    source: 'Bloomberg',
    timeAgo: '22h',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=240&fit=crop'
  }
];

const categories = ['All', 'AI', 'Tech', 'Science', 'Climate', 'Space', 'Health', 'Security', 'Crypto', 'Energy'];

export default function News() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredItems = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="sticky top-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Discover</h1>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <TrendingUp size={16} />
              <span>Trending topics</span>
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for topics, questions, or keywords..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </form>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-black text-white border border-black dark:border-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-black hover:text-white hover:border-black dark:hover:border-white border border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Trending Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-orange-500" size={20} />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Trending</h2>
          </div>
          <div className="grid gap-4">
            {filteredItems.filter(item => item.trending).map((item) => (
              <div
                key={item.id}
                className="group p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="flex gap-4">
                  {item.image && (
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-16 sm:w-32 sm:h-20 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-medium rounded-full">
                        Trending
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.category}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.timeAgo}</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                      {item.summary}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>{item.source}</span>
                      <Clock size={14} />
                      <span>{item.timeAgo} ago</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All News Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {selectedCategory === 'All' ? 'Latest' : selectedCategory}
            </h2>
            <button className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              <span>Sort by relevance</span>
              <ChevronDown size={16} />
            </button>
          </div>
          
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="flex gap-4">
                  {item.image && (
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-16 sm:w-32 sm:h-20 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.source}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.timeAgo}</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-gray-100 dark:bg-black text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-900 dark:hover:border dark:hover:border-white border border-transparent transition-colors font-medium">
              Load more stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}