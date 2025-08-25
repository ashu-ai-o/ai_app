import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Library from './components/Library';
import Discover from './components/Discover';
import ChatThread from './components/ChatThread';
import News from './components/News';
import Thumbnail from './components/Thumbnail';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SettingsPage from './pages/settings_page';
import PrivacySecurity from './components/PrivacySecurity';
import AppearancePage from './components/AppearancePage';
import LanguageRegionPage from './components/LanguageRegionPage';
import PricingPage from './components/PricingPage';
import AccountSettings from './components/AccountSetting';
import ForgotPassword from './components/ForgotPassword';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotificationSettings from './components/NotificationSettings';
import DataExportPage from './components/DataExportPage';

interface ChatThread {
  id: string;
  title: string;
  messages: any[];
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('login');
  const [currentView, setCurrentView] = useState<string>('home');

  const [chatThreads, setChatThreads] = useState<ChatThread[]>([
    {id: '1', title: 'Welcome Thread', messages: []},
    {id: '2', title: 'Sample Thread', messages: []},
    {id: '3', title: 'Another Thread', messages: []},
    {id: '4', title: 'Test Thread', messages: []},
    {id: '5', title: 'Example Thread', messages: []},
    {id: '6', title: 'Demo Thread', messages: []},
    {id: '7', title: 'Chat Thread 1', messages: []},
    {id: '8', title: 'Chat Thread 2', messages: []},
    {id: '9', title: 'Chat Thread 3', messages: []},
    {id: '10', title: 'Chat Thread 4', messages: []}
  ]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

  // Handle navigation events from other components
  useEffect(() => {
    const handleNavigate = (event: any) => {
      setCurrentPage(event.detail);
    };

    window.addEventListener('navigate', handleNavigate);
    return () => window.removeEventListener('navigate', handleNavigate);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSidebarCollapsed(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleShowAccountSettings = () => {
    setCurrentPage("account");
  }
  const handleShowPrivacySecurity = () => setCurrentPage('privacy');
  const handleShowAppearance = () => setCurrentPage('appearance');
  const handleShowLanguageRegion = () => setCurrentPage('language');
  const handleShowPricing = () => setCurrentPage('pricing');
  const handleShowSettings = () => setCurrentPage('settings');
  const handleShowNotifications = () => setCurrentPage('notifications');
  const handleShowDataExport = () => setCurrentPage('data-export');

  const handleBackToHome = () => {
    setCurrentPage('settings');
    if (window.innerWidth < 1024) setSidebarCollapsed(true);
  };

  const toggleSidebar = () => setSidebarCollapsed(prev => !prev);

  const handleSwitchToSignUp = () => setCurrentPage('signup');
  const handleSwitchToLogin = () => setCurrentPage('login');
  const handleSwitchToForgotPassword = () => setCurrentPage('forgot-password');

  const createNewThread = (query: string) => {
    const newThread: ChatThread = {
      id: Date.now().toString(),
      title: query,
      messages: [],
    };
    setChatThreads(prev => [newThread, ...prev]);
    setActiveChatId(newThread.id);
    setCurrentPage('home');
  };

  const activeThread = chatThreads.find(t => t.id === activeChatId);

  return (
    <div className="flex h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors overflow-hidden">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        chatThreads={chatThreads}
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}
        onNewThread={createNewThread}
        onShowAccountSettings={handleShowAccountSettings}
        onShowPrivacySecurity={handleShowPrivacySecurity}
        onShowSettings={handleShowSettings}
        onShowAppearance={handleShowAppearance}
        onShowLanguageRegion={handleShowLanguageRegion}
        onShowPricing={handleShowPricing}
      />

      {!sidebarCollapsed && window.innerWidth < 1024 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarCollapsed(true)} />
      )}

      <main className="flex-1 overflow-auto w-full">
        {currentPage === 'login' && <Login onSwitchToSignUp={handleSwitchToSignUp} onSwitchToForgotPassword={handleSwitchToForgotPassword} />}
        {currentPage === 'signup' && <SignUp onSwitchToLogin={handleSwitchToLogin} />}
        {currentPage === 'forgot-password' && <ForgotPassword onBackToLogin={handleSwitchToLogin} />}

        {currentPage !== 'login' && currentPage !== 'signup' && (
          <>
            {currentView === 'home' && currentPage === 'home' && (
              <div className="max-w-5xl mx-auto px-4 py-6">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white">triveni</h1>
                </div>
                {activeThread ? <ChatThread thread={activeThread} /> : <MainContent onSearch={createNewThread} />}
              </div>
            )}

            {currentPage === 'library' && <Library />}
            {currentPage === 'discover' && <Discover />}
            {currentPage === 'news' && <News />}
            {currentPage === 'thumbnail' && <Thumbnail />}
             {currentPage === 'settings' && (
                <SettingsPage
                onBack={handleBackToHome} 
                  onAccountSettings={handleShowAccountSettings}
                  onPrivacySecurity={handleShowPrivacySecurity}
                  onAppearance={handleShowAppearance}
                  onLanguageRegion={handleShowLanguageRegion} 
                  onNotifications={handleShowNotifications}
                  onDataExport={handleShowDataExport}
                />
        )}
        { currentPage === 'account' &&  <AccountSettings onBack={handleBackToHome} />}
        { currentPage === 'privacy' &&  <PrivacySecurity onBack={handleBackToHome} />}
        { currentPage === 'appearance' && <AppearancePage onBack={handleBackToHome} />}
        { currentPage === 'language' && <LanguageRegionPage onBack={handleBackToHome} />}
        { currentPage === 'pricing' && <PricingPage onBack={handleBackToHome} />}
        { currentPage === 'notifications' && <NotificationSettings onBack={handleBackToHome} />}
        { currentPage === 'data-export' && <DataExportPage onBack={handleBackToHome} />}

        {currentPage === 'terms' && <TermsOfService onBack={handleBackToHome} />}
        {currentPage === 'privacy-policy' && <PrivacyPolicy onBack={handleBackToHome} />}
          </>
        )}
      </main>
    </div>
  );
}