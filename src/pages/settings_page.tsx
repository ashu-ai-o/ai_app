import React from 'react';
import { ArrowLeft, User, Bell, Shield, Palette, Globe, Download, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SettingsPageProps {
  onBack: () => void;
  onAccountSettings: () => void;
  onPrivacySecurity: () => void;
  onAppearance: () => void;
  onLanguageRegion: () => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ onBack, onAccountSettings, onPrivacySecurity, onAppearance, onLanguageRegion }) => {
  const { t } = useTranslation();

  const settingsCategories = [
    {
      title: t('settings.account'),
      items: [
        { 
          icon: User, 
          label: t('settings.account'), 
          description: t('settings.accountDesc'),
          onClick: onAccountSettings
        },
        { 
          icon: Bell, 
          label: t('settings.notifications'), 
          description: t('settings.notificationsDesc')
        },
      ]
    },
    {
      title: t('settings.privacy'),
      items: [
        { 
          icon: Shield, 
          label: t('settings.privacy'), 
          description: t('settings.privacyDesc'),
          onClick: onPrivacySecurity
        },
        { 
          icon: Download, 
          label: t('settings.dataExport'), 
          description: t('settings.dataExportDesc')
        },
      ]
    },
    {
      title: 'Preferences',
      items: [
        { 
          icon: Palette, 
          label: t('settings.appearance'), 
          description: t('settings.appearanceDesc'),
          onClick: onAppearance
        },
        { 
          icon: Globe, 
          label: t('settings.language'), 
          description: t('settings.languageDesc'),
          onClick: onLanguageRegion
        },
      ]
    },
    {
      title: 'Support',
      items: [
        { 
          icon: HelpCircle, 
          label: t('settings.help'), 
          description: t('settings.helpDesc')
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-y-auto">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-[#3C3C3C] bg-white dark:bg-[#1C1C1C]">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-center lg:justify-start gap-4">
  
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{t('settings.title')}</h1>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{t('settings.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-8 relative">
        {/* Mobile menu button */}
        {/* <button
          onClick={onBack}
          className="fixed top-3 left-3 z-50 p-1.5 sm:p-2 bg-gray-100 dark:bg-[#2C2C2C] rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-[#3C3C3C] transition-colors"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button> */}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Main Settings */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-8">
            {settingsCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-3 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">{category.title}</h2>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      onClick={item.onClick}
                      className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C] hover:bg-gray-50 dark:hover:bg-[#3C3C3C] transition-colors group"
                    >
                      <div className="flex-shrink-0">
                        <item.icon size={20} className="sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white text-sm sm:text-base">
                          {item.label}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                      <ChevronRight size={16} className="sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* User Info */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 sm:p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=faces"
                  alt="Profile"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white dark:border-[#2C2C2C] shadow-sm"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">melvindave</h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Pro Member</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">Pro</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">Verified</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Account Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Member since</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">March 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Total searches</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Threads created</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Last active</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Today</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-lg transition-colors">
                  Export Search History
                </button>
                <button className="w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-lg transition-colors">
                  Clear Cache
                </button>
                <button className="w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-lg transition-colors">
                  Contact Support
                </button>
              </div>
            </div>

            {/* Sign Out */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 sm:p-6 border border-red-200 dark:border-red-800">
              <button className="w-full flex items-center gap-3 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors">
                <LogOut size={16} className="sm:w-5 sm:h-5" />
                <div className="text-left">
                  <div className="font-medium text-sm sm:text-base">Sign Out</div>
                  <div className="text-xs sm:text-sm text-red-500 dark:text-red-500">Sign out of your account</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;