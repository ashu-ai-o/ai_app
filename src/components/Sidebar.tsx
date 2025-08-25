import React from 'react';
import { Home, Compass, Library, Command, Clock, Settings, Menu, X, Image, Newspaper, CreditCard } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface ChatThread {
  id: string;
  title: string;
  messages: any[];
}

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  chatThreads: ChatThread[];
  activeChatId: string | null;
  setActiveChatId: (id: string | null) => void;
  onNewThread: (query: string) => void;
  collapsed: boolean;
  onToggle: () => void;
  onShowAccountSettings: () => void;
  onShowPrivacySecurity: () => void;
  onShowSettings: () => void;
  onShowAppearance: () => void;
  onShowLanguageRegion: () => void;
  onShowPricing: () => void;
}

const recentSearches = [
  'what are the price plans for bolt.new',
  'check the price',
  'what is the average for sale prices of...',
  'show nvidia, microsoft, apple and a...',
  'why is AI stocks falling?',
  'explain lora in layman',
  'twitter competitor',
  'find a one service which can do all t...'
];

const Sidebar: React.FC<SidebarProps> = ({ 
  currentPage, 
  setCurrentPage, 
  chatThreads, 
  activeChatId, 
  setActiveChatId, 
  onNewThread,
  collapsed,
  onToggle
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  // Check if we're on mobile/tablet
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1024) {
        setIsCollapsed(true);
        setIsMobileMenuOpen(false);
      } else {
        setIsCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsCollapsed((prev) => !prev);
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    if (isMobile) {
      setIsMobileMenuOpen(false);
      setIsCollapsed(true) ;
    }
  };

  const handleNewThread = () => {
    setActiveChatId(null);
    setCurrentPage('home');
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleThreadClick = (threadId: string) => {
    setActiveChatId(threadId);
    setCurrentPage('home');
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleRecentSearchClick = (search: string) => {
    onNewThread(search);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
        {!isCollapsed ? (
          <button
        onClick={() => toggleMobileMenu()}
        className={`fixed top-3 left-52 z-50 p-2 bg-gray-100 dark:bg-[#1C1C1C] rounded-lg shadow-lg`}
      >
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        </button>
        ) : (
          <button
        onClick={() => toggleMobileMenu()}
        className={`fixed top-4 left-4 z-50 p-2 bg-gray-100 dark:bg-[#1C1C1C] rounded-lg shadow-lg`}
      >
          <Menu className="w-5 h-5 text-gray-900 dark:text-white" />
          </button>
        )}

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        ${isMobile ? 'fixed inset-y-0 left-0' : 'relative'}
        ${isMobile && !isMobileMenuOpen ? '-translate-x-full' : 'translate-x-0'}
        ${isCollapsed && !isMobile ? 'w-12 sm:w-16' : 'w-56 sm:w-64'}
        bg-gray-100 dark:bg-[#1C1C1C] h-screen p-2 sm:p-4 flex flex-col transition-all duration-300 z-40 overflow-y-auto
        ${isMobile ? 'shadow-xl' : ''}
      `}>
        {/* Header */}
        <div className={`flex items-center ${isCollapsed && !isMobile ? 'justify-center' : 'justify-between'} mb-4 sm:mb-6`}>
          {(!isCollapsed || isMobile) && (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black dark:bg-white rounded-sm flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-xs sm:text-sm">P</span>
              </div>
              <span className="text-gray-900 dark:text-white font-semibold text-sm sm:text-base">perplexity</span>
            </div>
          )}
          {isCollapsed && !isMobile && (
            <div className="w-5 h-5 sm:w-6 sm:h-6 mt-8 sm:mt-12 bg-black dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-black font-bold text-xs sm:text-sm">P</span>
            </div>
          )}
         
        </div>

        {/* New Thread Button */}
        <button className={`
          flex items-center gap-2 bg-gray-200 dark:bg-[#2C2C2C] text-gray-900 dark:text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg mb-4 sm:mb-6 transition-colors hover:bg-gray-300 dark:hover:bg-[#3C3C3C] text-sm sm:text-base
          ${isCollapsed && !isMobile ? 'justify-center px-1 py-1' : ''}
        `}
        onClick={handleNewThread}>
          {(!isCollapsed || isMobile) && <span className="text-xs sm:text-sm">New Thread</span>}
          {(!isCollapsed || isMobile) && (
            <div className="flex items-center gap-1 ml-auto">
              <kbd className="px-1 py-0.5 text-xs bg-gray-300 dark:bg-[#3C3C3C] rounded hidden sm:inline">⌘</kbd>
              <kbd className="px-1 py-0.5 text-xs bg-gray-300 dark:bg-[#3C3C3C] rounded hidden sm:inline">N</kbd>
            </div>
          )}
          {isCollapsed && !isMobile && <Command size={14} />}
        </button>

        {/* Navigation */}
        <nav className="space-y-1">
          <button 
            onClick={() => handleNavClick('home')}
            className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors w-full text-left ${
              currentPage === 'home' 
                ? 'text-gray-900 dark:text-white bg-gray-200 dark:bg-[#2C2C2C]'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#2C2C2C]'
            } ${isCollapsed && !isMobile ? 'justify-center px-1 py-1' : ''} text-sm sm:text-base`}
            title={isCollapsed && !isMobile ? 'Home' : ''}
          >
            <Home size={14} className="sm:w-[18px] sm:h-[18px]" />
            {(!isCollapsed || isMobile) && <span>Home</span>}
          </button>
          
          <button 
            onClick={() => handleNavClick('discover')}
            className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors w-full text-left ${
              currentPage === 'discover' 
                ? 'text-gray-900 dark:text-white bg-gray-200 dark:bg-[#2C2C2C]' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#2C2C2C]'
            } ${isCollapsed && !isMobile ? 'justify-center px-1 py-1' : ''} text-sm sm:text-base`}
            title={isCollapsed && !isMobile ? 'Discover' : ''}
          >
            <Compass size={14} className="sm:w-[18px] sm:h-[18px]" />
            {(!isCollapsed || isMobile) && <span>Discover</span>}
          </button>

          <button 
            onClick={() => handleNavClick('library')}
            className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors w-full text-left ${
              currentPage === 'library' 
                ? 'text-gray-900 dark:text-white bg-gray-200 dark:bg-[#2C2C2C]' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#2C2C2C]'
            } ${isCollapsed && !isMobile ? 'justify-center px-1 py-1' : ''} text-sm sm:text-base`}
            title={isCollapsed && !isMobile ? 'Library' : ''}
          >
            <Library size={14} className="sm:w-[18px] sm:h-[18px]" />
            {(!isCollapsed || isMobile) && <span>Library</span>}
          </button>

          <button 
            onClick={() => handleNavClick('thumbnail')}
            className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors w-full text-left ${
              currentPage === 'thumbnail' 
                ? 'text-gray-900 dark:text-white bg-gray-200 dark:bg-[#2C2C2C]' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#2C2C2C]'
            } ${isCollapsed && !isMobile ? 'justify-center px-1 py-1' : ''} text-sm sm:text-base`}
            title={isCollapsed && !isMobile ? 'Thumbnail' : ''}
          >
            <Image size={14} className="sm:w-[18px] sm:h-[18px]" />
            {(!isCollapsed || isMobile) && <span>Thumbnail</span>}
          </button>

          <button 
            onClick={() => handleNavClick('news')}
            className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors w-full text-left ${
              currentPage === 'news' 
                ? 'text-gray-900 dark:text-white bg-gray-200 dark:bg-[#2C2C2C]' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#2C2C2C]'
            } ${isCollapsed && !isMobile ? 'justify-center px-1 py-1' : ''} text-sm sm:text-base`}
            title={isCollapsed && !isMobile ? 'News' : ''}
          >
            <Newspaper size={14} className="sm:w-[18px] sm:h-[18px]" />
            {(!isCollapsed || isMobile) && <span>News</span>}
          </button>

           <button 
            onClick={() => handleNavClick('pricing')}
            className={`flex items-center gap-3 px-2 py-2 rounded-lg transition-colors w-full text-left ${
              currentPage === 'news' 
                ? 'text-gray-900 dark:text-white bg-gray-200 dark:bg-[#2C2C2C]' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#2C2C2C]'
            } ${isCollapsed && !isMobile ? 'justify-center px-1 py-1' : ''} text-sm sm:text-base`}
            title={isCollapsed && !isMobile ? 'Pricing' : ''}
          >
            <CreditCard size={14} className="sm:w-[18px] sm:h-[18px]" />
            {(!isCollapsed || isMobile) && <span>Pricing</span>}
          </button>

          {/* Spacer for collapsed mode */}
          {isCollapsed && !isMobile && <div className="pt-1 sm:pt-2" />}
          
          {(!isCollapsed || isMobile) && <div className="pt-2 sm:pt-4" />}

          {/* Recent Searches - Only show when not collapsed */}
          {(!isCollapsed || isMobile) && (
            <div className="mt-1 sm:mt-2 space-y-1 max-h-48 sm:max-h-64 overflow-y-auto">
              {/* Chat Threads */}
              {chatThreads.slice(0, 7).map((thread) => (
                <button
                  key={thread.id}
                  onClick={() => handleThreadClick(thread.id)}
                  className={`w-full flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-1 sm:py-1.5 rounded-lg text-left text-xs sm:text-sm transition-colors ${
                    activeChatId === thread.id
                      ? 'bg-gray-200 dark:bg-[#2C2C2C] text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#2C2C2C]'
                  }`}
                >
                  <Clock size={12} className="sm:w-3.5 sm:h-3.5" />
                  <span className="truncate">{thread.title}</span>
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* Bottom Section */}
        <div className="mt-auto space-y-4">
          {/* Profile Section */}
          <div className={`flex items-center px-1 sm:px-2 py-1 sm:py-2 ${isCollapsed && !isMobile ? 'justify-center' : 'justify-between'}`}>
            <button onClick={() => setCurrentPage('account')} >
              <div className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
                alt="Profile"
                className={`rounded-full ${isCollapsed && !isMobile ? 'min-w-8' : 'w-6 h-6 sm:w-8 sm:h-8'}`}
                title={isCollapsed && !isMobile ? 'melvindave (Pro)' : ''}
              />
              {(!isCollapsed || isMobile) && (
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm text-gray-900 dark:text-white">melvindave</span>
                  <span className="text-xs mr-auto text-gray-500 dark:text-gray-400">Pro</span>
                </div>
              )}
            </div>
            </button>
            {(!isCollapsed || isMobile) && <ThemeToggle />}
            {(!isCollapsed || isMobile) && (
              <button 
              onClick={() => handleNavClick('settings')}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                title="Settings"
              >
                <Settings size={14} className="sm:w-4 sm:h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;