import React from 'react';
import { ArrowLeft, Palette, Monitor, Sun, Moon, Type, Layout, Eye, Zap, Smartphone, Tablet, LampDesk as Desktop } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

interface AppearancePageProps {
  onBack: () => void;
}

const AppearancePage: React.FC<AppearancePageProps> = ({ onBack }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [fontSize, setFontSize] = React.useState('medium');
  const [layout, setLayout] = React.useState('comfortable');
  const [animations, setAnimations] = React.useState(true);
  const [compactMode, setCompactMode] = React.useState(false);

  const themeOptions = [
    { id: 'light', label: t('appearance.light'), icon: Sun, description: t('appearance.lightDesc') },
    { id: 'dark', label: t('appearance.dark'), icon: Moon, description: t('appearance.darkDesc') },
    { id: 'system', label: t('appearance.system'), icon: Monitor, description: t('appearance.systemDesc') }
  ];

  const fontSizes = [
    { id: 'small', label: t('appearance.small'), size: '14px' },
    { id: 'medium', label: t('appearance.medium'), size: '16px' },
    { id: 'large', label: t('appearance.large'), size: '18px' },
    { id: 'extra-large', label: t('appearance.extraLarge'), size: '20px' }
  ];

  const layoutOptions = [
    { id: 'compact', label: t('appearance.compact'), description: t('appearance.compactDesc') },
    { id: 'comfortable', label: t('appearance.comfortable'), description: t('appearance.comfortableDesc') },
    { id: 'spacious', label: t('appearance.spacious'), description: t('appearance.spaciousDesc') }
  ];

  return (
    <div className="min-h-full bg-white dark:bg-black">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-[#3C3C3C] bg-white dark:bg-[#1C1C1C]">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <button
              onClick={onBack}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2C2C2C] transition-colors hidden lg:block"
            >
              <ArrowLeft size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white text-center lg:text-left">{t('appearance.title')}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('appearance.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-8 relative">
        {/* Mobile menu button */}
        {/* <button
          onClick={onBack}
          className="fixed top-4 left-4 z-50 p-2 bg-gray-100 dark:bg-[#2C2C2C] rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-[#3C3C3C] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
         */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Theme Selection */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Palette className="text-blue-600" size={20} />
                {t('appearance.theme')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {themeOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => option.id !== 'system' && toggleTheme()}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      (option.id === theme) || (option.id === 'system' && theme === 'dark')
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                        : 'border-gray-200 dark:border-[#3C3C3C] hover:border-gray-300 dark:hover:border-[#4C4C4C]'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className={`p-3 rounded-full ${
                        (option.id === theme) || (option.id === 'system' && theme === 'dark')
                          ? 'bg-blue-100 dark:bg-blue-800' 
                          : 'bg-gray-100 dark:bg-[#2C2C2C]'
                      }`}>
                        <option.icon size={24} className={
                          (option.id === theme) || (option.id === 'system' && theme === 'dark')
                            ? 'text-blue-600' 
                            : 'text-gray-600 dark:text-gray-400'
                        } />
                      </div>
                      <div className="text-center">
                        <h3 className="font-medium text-gray-900 dark:text-white">{option.label}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{option.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Type className="text-green-600" size={20} />
                Typography
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Font Size</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {fontSizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => setFontSize(size.id)}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          fontSize === size.id
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                            : 'border-gray-200 dark:border-[#3C3C3C] hover:border-gray-300 dark:hover:border-[#4C4C4C]'
                        }`}
                      >
                        <div className="font-medium text-gray-900 dark:text-white" style={{ fontSize: size.size }}>
                          Aa
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{size.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Preview</h4>
                    <p className="text-gray-600 dark:text-gray-300" style={{ 
                      fontSize: fontSizes.find(s => s.id === fontSize)?.size 
                    }}>
                      This is how your text will appear with the selected font size. 
                      You can adjust this setting to make text more comfortable to read.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Layout & Spacing */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Layout className="text-purple-600" size={20} />
                Layout & Spacing
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Layout Density</label>
                  <div className="space-y-2">
                    {layoutOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setLayout(option.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-lg border transition-all ${
                          layout === option.id
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                            : 'border-gray-200 dark:border-[#3C3C3C] hover:border-gray-300 dark:hover:border-[#4C4C4C]'
                        }`}
                      >
                        <div className="text-left">
                          <h3 className="font-medium text-gray-900 dark:text-white">{option.label}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{option.description}</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          layout === option.id
                            ? 'border-blue-500 bg-blue-500' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-center gap-3">
                    <Smartphone size={20} className="text-orange-600" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Compact Mode</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Reduce spacing for mobile devices</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setCompactMode(!compactMode)}
                    className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
                      compactMode ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      compactMode ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Animations & Effects */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Zap className="text-yellow-600" size={20} />
                Animations & Effects
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-center gap-3">
                    <Eye size={20} className="text-indigo-600" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Smooth Animations</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Enable transitions and hover effects</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setAnimations(!animations)}
                    className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
                      animations ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      animations ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Settings */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <Palette size={20} className="text-blue-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Current Settings</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Theme</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">{theme}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Font Size</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">{fontSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Layout</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">{layout}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Animations</span>
                  <span className={`text-sm font-medium ${animations ? 'text-green-600' : 'text-gray-500'}`}>
                    {animations ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
              </div>
            </div>

            {/* Device Preview */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Preview</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Desktop size={16} className="text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Desktop</span>
                  <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full ml-auto">
                    Optimized
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Tablet size={16} className="text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Tablet</span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full ml-auto">
                    Responsive
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone size={16} className="text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Mobile</span>
                  <span className={`text-xs px-2 py-1 rounded-full ml-auto ${
                    compactMode 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`}>
                    {compactMode ? 'Compact' : 'Standard'}
                  </span>
                </div>
              </div>
            </div>

            {/* Reset Options */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Reset Options</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-lg transition-colors">
                  Reset to Defaults
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-lg transition-colors">
                  Import Settings
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-lg transition-colors">
                  Export Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppearancePage;