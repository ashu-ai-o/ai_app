import React from 'react';
import { 
  Search, 
  Plus, 
  Grid3X3, 
  Image, 
  Type, 
  Shapes, 
  Palette, 
  Upload, 
  Download, 
  Share2, 
  Undo, 
  Redo, 
  ZoomIn, 
  ZoomOut,
  Play,
  Star,
  Crown,
  Sparkles,
  ChevronDown,
  MoreHorizontal,
  Heart,
  Bookmark
} from 'lucide-react';

interface Template {
  id: string;
  title: string;
  category: string;
  image: string;
  isPro?: boolean;
  isPopular?: boolean;
}

const templates: Template[] = [
  {
    id: '1',
    title: 'Instagram Post',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=300&fit=crop',
    isPopular: true
  }
];

const categories = [
  'All', 'Social Media', 'YouTube', 'Print', 'Presentation', 'Logo', 'Document'
];

export default function Thumbnail() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showDesignEditor, setShowDesignEditor] = React.useState(false);

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTemplateClick = (template: Template) => {
    setShowDesignEditor(true);
  };

  if (showDesignEditor) {
    return (
      <div className="h-screen bg-white dark:bg-gray-900 flex flex-col">
        {/* Editor Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowDesignEditor(false)}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              ← Back to templates
            </button>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <Undo size={18} />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <Redo size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <ZoomOut size={18} />
              </button>
              <span className="text-sm">100%</span>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <ZoomIn size={18} />
              </button>
            </div>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center gap-2">
              <Share2 size={16} />
              Share
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2">
              <Download size={16} />
              Download
            </button>
          </div>
        </div>

        <div className="flex-1 flex">
          {/* Left Sidebar - Tools */}
          <div className="w-16 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col items-center py-4 gap-4">
            <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" title="Templates">
              <Grid3X3 size={20} />
            </button>
            <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" title="Elements">
              <Shapes size={20} />
            </button>
            <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" title="Text">
              <Type size={20} />
            </button>
            <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" title="Photos">
              <Image size={20} />
            </button>
            <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" title="Colors">
              <Palette size={20} />
            </button>
            <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" title="Upload">
              <Upload size={20} />
            </button>
          </div>

          {/* Canvas Area */}
          <div className="flex-1 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
            <div className="bg-white shadow-lg" style={{ width: '400px', height: '400px' }}>
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl font-bold">
                Your Design Here
              </div>
            </div>
          </div>

          {/* Right Sidebar - Properties */}
          <div className="w-64 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-4">
            <h3 className="font-semibold mb-4">Properties</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Background</label>
                <div className="grid grid-cols-4 gap-2">
                  <div className="w-12 h-12 bg-red-500 rounded cursor-pointer"></div>
                  <div className="w-12 h-12 bg-blue-500 rounded cursor-pointer"></div>
                  <div className="w-12 h-12 bg-green-500 rounded cursor-pointer"></div>
                  <div className="w-12 h-12 bg-yellow-500 rounded cursor-pointer"></div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <div className="space-y-2">
                  <input 
                    type="number" 
                    placeholder="Width" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg"
                  />
                  <input 
                    type="number" 
                    placeholder="Height" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-6">
        
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Design anything.<br />
            Publish anywhere.
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Create stunning designs with our easy-to-use design tools
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What will you design today?"
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>

          <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors">
            Start designing
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {selectedCategory === 'All' ? 'Popular templates' : `${selectedCategory} templates`}
          </h2>
          <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
            See all
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              onClick={() => handleTemplateClick(template)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 aspect-[3/4] mb-3">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex gap-1">
                  {template.isPro && (
                    <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
                      <Crown size={10} />
                      PRO
                    </span>
                  )}
                  {template.isPopular && (
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
                      <Star size={10} />
                      Popular
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-1">
                  <button className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-sm">
                    <Heart size={14} className="text-gray-600" />
                  </button>
                  <button className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-sm">
                    <Bookmark size={14} className="text-gray-600" />
                  </button>
                  <button className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-sm">
                    <MoreHorizontal size={14} className="text-gray-600" />
                  </button>
                </div>

                {/* Use Template Button */}
                <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700">
                    Use template
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white text-sm">{template.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{template.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Custom Size */}
      
    </div>
  );
}