import React from 'react';
import { Trash2, MoreHorizontal, Filter, Bell, User, Heart, Download, Share2, Menu } from 'lucide-react';

interface GeneratedImage {
  id: string;
  title: string;
  prompt: string;
  image: string;
  timestamp: string;
  date: string;
}

const generatedImages: GeneratedImage[] = [
  {
    id: '1',
    title: 'Porsche at Sunrise',
    prompt: 'A sleek, cinematic visual narrative unfolds as a matte black carbon fiber Porsche 911 GT3 navigating a winding mountain road at sunrise',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop',
    timestamp: '2:01pm',
    date: 'Thu Jul 10'
  },
  {
    id: '2',
    title: 'Mountain Porsche Drive',
    prompt: 'Dramatic mountain landscape with a sleek sports car on a curved road, golden hour lighting, cinematic composition',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
    timestamp: '1:58pm',
    date: 'Thu Jul 10'
  },
  {
    id: '3',
    title: 'Majestic Sunrise Lion',
    prompt: 'A majestic lion with a golden mane sitting on a rocky cliff at sunrise, ultra-realistic style, warm golden lighting',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&h=300&fit=crop',
    timestamp: '1:45pm',
    date: 'Thu Jul 10'
  },
  {
    id: '4',
    title: 'Lion Portrait Golden Hour',
    prompt: 'Close-up portrait of a powerful lion during golden hour, intense gaze, natural wildlife photography style',
    image: 'https://images.unsplash.com/photo-1552410260-0fd9b577afa6?w=400&h=300&fit=crop',
    timestamp: '1:42pm',
    date: 'Thu Jul 10'
  },
  {
    id: '5',
    title: 'Regal Lion Sunset',
    prompt: 'Regal lion standing majestically against a sunset backdrop, African savanna setting, warm orange tones',
    image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&h=300&fit=crop',
    timestamp: '1:38pm',
    date: 'Thu Jul 10'
  },
  {
    id: '6',
    title: 'Wild Lion Nature',
    prompt: 'Wild lion in natural habitat, detailed fur texture, professional wildlife photography, natural lighting',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    timestamp: '1:35pm',
    date: 'Thu Jul 10'
  },
  {
    id: '7',
    title: 'Cyberpunk City Night',
    prompt: 'A futuristic cyberpunk cityscape at night with neon lights, flying cars, and towering skyscrapers, blade runner aesthetic',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    timestamp: '1:28pm',
    date: 'Thu Jul 10'
  },
  {
    id: '8',
    title: 'Ocean Sunset Serenity',
    prompt: 'A peaceful ocean sunset with gentle waves, golden hour lighting, and seagulls flying in the distance, serene atmosphere',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    timestamp: '1:22pm',
    date: 'Thu Jul 10'
  },
  {
    id: '9',
    title: 'Tropical Beach Paradise',
    prompt: 'Crystal clear turquoise water meeting white sand beach, palm trees swaying, tropical paradise setting',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop',
    timestamp: '1:18pm',
    date: 'Thu Jul 10'
  },
  {
    id: '10',
    title: 'Golden Beach Sunset',
    prompt: 'Beautiful beach at sunset with golden reflections on wet sand, peaceful waves, romantic atmosphere',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
    timestamp: '1:15pm',
    date: 'Thu Jul 10'
  },
  {
    id: '11',
    title: 'Mountain Adventure Peak',
    prompt: 'Epic mountain landscape with snow-capped peaks, alpine lakes, and hiking trails winding through valleys',
    image: 'https://images.unsplash.com/photo-1464822759844-d150baec0494?w=400&h=300&fit=crop',
    timestamp: '1:12pm',
    date: 'Thu Jul 10'
  },
  {
    id: '12',
    title: 'Mountain Lake Reflection',
    prompt: 'Serene mountain lake with perfect reflections of peaks, morning mist, pristine wilderness setting',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    timestamp: '1:08pm',
    date: 'Thu Jul 10'
  },
  {
    id: '13',
    title: 'Abstract Digital Flow',
    prompt: 'Colorful abstract digital art with flowing shapes, vibrant gradients, and geometric patterns, modern artistic style',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop',
    timestamp: '1:05pm',
    date: 'Thu Jul 10'
  },
  {
    id: '14',
    title: 'Geometric Abstract Art',
    prompt: 'Bold geometric abstract composition with bright colors, sharp angles, contemporary digital art style',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    timestamp: '1:02pm',
    date: 'Thu Jul 10'
  },
  {
    id: '15',
    title: 'Space Exploration',
    prompt: 'Astronaut floating in space with Earth in the background, stars, and nebula clouds creating a cosmic atmosphere',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop',
    timestamp: '12:58pm',
    date: 'Thu Jul 10'
  },
  {
    id: '16',
    title: 'Enchanted Forest Mist',
    prompt: 'Enchanted forest with misty atmosphere, ancient trees, magical lighting filtering through leaves, mystical mood',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
    timestamp: '12:55pm',
    date: 'Thu Jul 10'
  },
  {
    id: '17',
    title: 'Forest Path Mystery',
    prompt: 'Mysterious forest path with dappled sunlight, tall trees creating natural cathedral, peaceful woodland scene',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop',
    timestamp: '12:52pm',
    date: 'Thu Jul 10'
  },
  {
    id: '18',
    title: 'Modern Architecture Glass',
    prompt: 'Modern architectural masterpiece with glass facades, geometric designs, and urban environment, contemporary style',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    timestamp: '12:48pm',
    date: 'Thu Jul 10'
  },
  {
    id: '19',
    title: 'Urban Skyscraper View',
    prompt: 'Towering urban skyscrapers from low angle perspective, modern city architecture, dramatic composition',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
    timestamp: '12:45pm',
    date: 'Thu Jul 10'
  },
  {
    id: '20',
    title: 'Classic Vintage Car',
    prompt: 'Classic vintage car from the 1960s in a retro garage setting with warm lighting and nostalgic atmosphere',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop',
    timestamp: '12:42pm',
    date: 'Thu Jul 10'
  },
  {
    id: '21',
    title: 'Red Sports Car Classic',
    prompt: 'Vintage red sports car with chrome details, classic automotive design, studio lighting photography',
    image: 'https://images.unsplash.com/photo-1494976688153-c91c4d0b4eae?w=400&h=300&fit=crop',
    timestamp: '12:38pm',
    date: 'Thu Jul 10'
  },
  {
    id: '22',
    title: 'Desert Landscape Dunes',
    prompt: 'Vast desert landscape with sand dunes, cacti, and dramatic sunset sky creating a serene wilderness scene',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop',
    timestamp: '12:35pm',
    date: 'Thu Jul 10'
  }
];

export default function Discover() {
  const [hoveredImage, setHoveredImage] = React.useState<string | null>(null);
  const [showMoreMenu, setShowMoreMenu] = React.useState<string | null>(null);

  const handleDeleteImage = (id: string) => {
    console.log('Delete image:', id);
  };

  const handleFavorite = (id: string) => {
    console.log('Favorite image:', id);
    setShowMoreMenu(null);
  };

  const handleDownload = (id: string) => {
    console.log('Download image:', id);
    setShowMoreMenu(null);
  };

  const handleLike = (id: string) => {
    console.log('Like image:', id);
  };

  const handleShare = (id: string) => {
    console.log('Share image:', id);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Discover</h1>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <Filter size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <Menu size={20} className="text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <Bell size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <User size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date Header */}
        <div className="mb-6">
          <h2 className="text-gray-600 dark:text-gray-400 text-sm font-medium">Thu Jul 10</h2>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {generatedImages.map((item) => (
            <div 
              key={item.id} 
              className="group"
              onMouseEnter={() => setHoveredImage(item.id)}
              onMouseLeave={() => {
                setHoveredImage(null);
                setShowMoreMenu(null);
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900">
                <div className="aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/50 dark:bg-black transition-opacity duration-200 ${
                  hoveredImage === item.id ? 'opacity-85' : 'opacity-0'
                }`} />

                {/* Action Buttons */}
                <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-1 sm:gap-2 transition-opacity duration-200 ${
                  hoveredImage === item.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button 
                    onClick={() => handleDeleteImage(item.id)}
                    className="p-1.5 sm:p-2 bg-black/60 hover:bg-red-600/80 rounded-lg backdrop-blur-sm transition-colors"
                    title="Delete image"
                  >
                    <Trash2 size={14} className="text-white sm:w-4 sm:h-4" />
                  </button>
                  <div className="relative">
                    <button 
                      onClick={() => setShowMoreMenu(showMoreMenu === item.id ? null : item.id)}
                      className="p-1.5 sm:p-2 bg-black/60 hover:bg-black/80 rounded-lg backdrop-blur-sm transition-colors"
                      title="More options"
                    >
                      <MoreHorizontal size={14} className="text-white sm:w-4 sm:h-4" />
                    </button>
                    
                    {/* More Options Menu */}
                    {showMoreMenu === item.id && (
                      <div className="absolute top-full right-0 mt-1 sm:mt-2 w-36 sm:w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-10">
                        <button
                          onClick={() => handleFavorite(item.id)}
                          className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Heart size={12} className="sm:w-3.5 sm:h-3.5" />
                          Add to favorites
                        </button>
                        <button
                          onClick={() => handleDownload(item.id)}
                          className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Download size={12} className="sm:w-3.5 sm:h-3.5" />
                          Download
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Username (Bottom Left) */}
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 flex items-center gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=faces"
                    alt="User"
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white dark:border-white"
                  />
                  <span className="text-white dark:text-white text-xs sm:text-sm font-medium">melvindave</span>
                </div>

                {/* Action Buttons (Bottom Right) */}
                <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 flex gap-1 sm:gap-2">
                  <button 
                    onClick={() => handleLike(item.id)}
                    className="p-1.5 sm:p-2 bg-black/60 hover:bg-red-600/80 rounded-lg backdrop-blur-sm transition-colors"
                    title="Like image"
                  >
                    <Heart size={14} className="text-white dark:text-white sm:w-4 sm:h-4" />
                  </button>
                  <button 
                    onClick={() => handleShare(item.id)}
                    className="p-1.5 sm:p-2 bg-black/60 hover:bg-blue-600/80 rounded-lg backdrop-blur-sm transition-colors"
                    title="Share image"
                  >
                    <Share2 size={14} className="text-white dark:text-white sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}