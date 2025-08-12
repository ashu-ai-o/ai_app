import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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

interface ChatThread {
  id: string;
  title: string;
  messages: any[];
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

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

  useEffect(() => {
    const handleResize = () => {
      setSidebarCollapsed(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setSidebarCollapsed(prev => !prev);

  const handleSwitchToSignUp = () => navigate('/signup');
  const handleSwitchToLogin = () => navigate('/login');
  const handleSwitchToForgotPassword = () => navigate('/forgot-password');

  const handleLogin = (credentials: { email: string; password: string; rememberMe: boolean }) => {
    // Simulate login process
    console.log('Login attempt:', credentials);
    setIsAuthenticated(true);
    // Small delay to ensure state is updated before navigation
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 100);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  const createNewThread = (query: string) => {
    const newThread: ChatThread = {
      id: Date.now().toString(),
      title: query,
      messages: [],
    };
    setChatThreads(prev => [newThread, ...prev]);
    setActiveChatId(newThread.id);
    navigate('/');
  };

  const activeThread = chatThreads.find(t => t.id === activeChatId);

  // Check if user is on auth pages
  const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(location.pathname);

  // If on auth pages, show only auth components
  if (isAuthPage) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <Routes>
          <Route path="/login" element={
            <Login 
              onLogin={handleLogin}
              onSwitchToSignUp={handleSwitchToSignUp}
              onSwitchToForgotPassword={handleSwitchToForgotPassword} 
            />
          } />
          <Route path="/signup" element={
            <SignUp onSwitchToLogin={handleSwitchToLogin} />
          } />
          <Route path="/forgot-password" element={
            <ForgotPassword onBackToLogin={handleSwitchToLogin} />
          } />
        </Routes>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors overflow-hidden">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
        currentPath={location.pathname}
        chatThreads={chatThreads}
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}
        onNewThread={createNewThread}
        onLogout={handleLogout}
        isAuthenticated={isAuthenticated}
      />

      {!sidebarCollapsed && typeof window !== 'undefined' && window.innerWidth < 1024 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarCollapsed(true)} />
      )}

      <main className="flex-1 overflow-auto w-full">
        <Routes>
          <Route path="/" element={
            <div className="max-w-5xl mx-auto px-4 py-6">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">triveni</h1>
              </div>
              {activeThread ? <ChatThread thread={activeThread} /> : <MainContent onSearch={createNewThread} isAuthenticated={isAuthenticated} onLogin={() => navigate('/login')} onSignUp={() => navigate('/signup')} />}
            </div>
          } />
          
          <Route path="/library" element={<Library />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/news" element={<News />} />
          <Route path="/thumbnail" element={<Thumbnail />} />
          <Route path="/pricing" element={<PricingPage onBack={() => navigate('/')} />} />
          
          <Route path="/settings" element={
            <SettingsPage
              onBack={() => navigate('/')}
              onAccountSettings={() => navigate('/settings/account')}
              onPrivacySecurity={() => navigate('/settings/privacy')}
              onAppearance={() => navigate('/settings/appearance')}
              onLanguageRegion={() => navigate('/settings/language')}
            />
          } />
          
          <Route path="/settings/account" element={
            <AccountSettings onBack={() => navigate('/settings')} />
          } />
          
          <Route path="/settings/privacy" element={
            <PrivacySecurity onBack={() => navigate('/settings')} />
          } />
          
          <Route path="/settings/appearance" element={
            <AppearancePage onBack={() => navigate('/settings')} />
          } />
          
          <Route path="/settings/language" element={
            <LanguageRegionPage onBack={() => navigate('/settings')} />
          } />

          <Route path="/terms" element={
            <TermsOfService onBack={() => navigate('/settings')} />
          } />
          
          <Route path="/privacy-policy" element={
            <PrivacyPolicy onBack={() => navigate('/settings')} />
          } />
        </Routes>
      </main>

      {/* Auth Buttons - Show only when not authenticated and not on auth pages */}
      {!isAuthenticated && !isAuthPage && (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          <button
            onClick={() => navigate('/signup')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium shadow-lg border border-gray-300 dark:border-gray-600"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}