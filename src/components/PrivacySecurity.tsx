import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Key, Globe, Database, UserCheck, AlertTriangle, Download, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PrivacySecurityProps {
  onBack: () => void;
}

const PrivacySecurity: React.FC<PrivacySecurityProps> = ({ onBack }) => {
  const { t } = useTranslation();
  const [twoFactorEnabled, setTwoFactorEnabled] = React.useState(false);
  const [dataCollection, setDataCollection] = React.useState(true);
  const [searchHistory, setSearchHistory] = React.useState(true);
  const [analytics, setAnalytics] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleTwoFactorToggle = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setTwoFactorEnabled(!twoFactorEnabled);
    setIsLoading(false);
  };

  const handleDataCollectionToggle = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setDataCollection(!dataCollection);
    setIsLoading(false);
  };

  const handleSearchHistoryToggle = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setSearchHistory(!searchHistory);
    setIsLoading(false);
  };

  const handleAnalyticsToggle = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setAnalytics(!analytics);
    setIsLoading(false);
  };

  const handleChangePassword = () => {
    console.log('Change password clicked');
    // Add password change logic here
  };

  const handleManageSessions = () => {
    console.log('Manage sessions clicked');
    // Add session management logic here
  };

  const handleExportData = () => {
    console.log('Export data clicked');
    // Add data export logic here
  };

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear all search history? This action cannot be undone.')) {
      console.log('Clear history confirmed');
      // Add clear history logic here
    }
  };

  return (
    <div className="min-h-full bg-white dark:bg-black">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-[#3C3C3C] bg-white dark:bg-[#1C1C1C] sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4">
            <button
              onClick={onBack}
              className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2C2C2C] transition-colors hidden lg:block"
            >
              <ArrowLeft size={18} className="sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <div className="text-center lg:text-left">
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{t('privacy.title')}</h1>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{t('privacy.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-8 relative">
        {/* Mobile back button */}
        <button
          onClick={onBack}
          className="fixed top-3 left-3 z-50 p-2 bg-gray-100 dark:bg-[#2C2C2C] rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-[#3C3C3C] transition-colors lg:hidden"
        >
          <ArrowLeft size={16} className="text-gray-600 dark:text-gray-400" />
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-8">
            {/* Security Settings */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-3 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Shield className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5" />
                {t('privacy.securitySettings')}
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                {/* Two-Factor Authentication */}
                <div className="flex items-start p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-3 flex-1 min-w-0 pr-3">
                    <Key size={18} className="sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <div className="flex-1 min-w-0 pr-2">
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{t('privacy.twoFactor')}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{t('privacy.twoFactorDesc')}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0 min-w-0">
                    <span className={`text-xs font-medium whitespace-nowrap ${twoFactorEnabled ? 'text-green-600' : 'text-gray-500'}`}>
                      {twoFactorEnabled ? t('privacy.enabled') : t('privacy.disabled')}
                    </span>
                    <button 
                      onClick={handleTwoFactorToggle}
                      disabled={isLoading}
                      className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-md transition-colors text-xs font-medium disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap ${
                        twoFactorEnabled 
                          ? 'bg-red-600 text-white hover:bg-red-700' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {isLoading ? '...' : (twoFactorEnabled ? t('privacy.disable') : t('privacy.enable'))}
                    </button>
                  </div>
                </div>

                {/* Change Password */}
                <div className="flex items-start p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-3 flex-1 min-w-0 pr-3">
                    <Lock size={18} className="sm:w-5 sm:h-5 text-orange-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <div className="flex-1 min-w-0 pr-2">
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Change Password</h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">Update your account password regularly</p>
                    </div>
                  </div>
                  <div className="flex items-start pt-1 flex-shrink-0">
                  <button 
                    onClick={handleChangePassword}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 border border-gray-300 dark:border-[#3C3C3C] text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-[#3C3C3C] transition-colors text-xs font-medium whitespace-nowrap"
                  >
                    Change
                  </button>
                  </div>
                </div>

                {/* Active Sessions */}
                <div className="flex items-start p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-3 flex-1 min-w-0 pr-3">
                    <UserCheck size={18} className="sm:w-5 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <div className="flex-1 min-w-0 pr-2">
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Active Sessions</h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">Manage devices logged into your account</p>
                    </div>
                  </div>
                  <div className="flex items-start pt-1 flex-shrink-0">
                  <button 
                    onClick={handleManageSessions}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 border border-gray-300 dark:border-[#3C3C3C] text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-[#3C3C3C] transition-colors text-xs font-medium whitespace-nowrap"
                  >
                    Manage
                  </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-3 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Eye className="text-indigo-600 w-4 h-4 sm:w-5 sm:h-5" />
                Privacy Settings
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                {/* Data Collection */}
                <div className="flex items-start p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-3 flex-1 min-w-0 pr-4">
                    <Database size={18} className="sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <div className="flex-1 min-w-0 pr-2">
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Data Collection</h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">Allow collection of usage data to improve service</p>
                    </div>
                  </div>
                  <div className="flex items-start pt-2 flex-shrink-0">
                  <button
                    onClick={handleDataCollectionToggle}
                    disabled={isLoading}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                      dataCollection ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  >
                    <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                      dataCollection ? 'translate-x-5' : 'translate-x-1'
                    }`} />
                  </button>
                  </div>
                </div>

                {/* Search History */}
                <div className="flex items-start p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-3 flex-1 min-w-0 pr-4">
                    <Globe size={18} className="sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <div className="flex-1 min-w-0 pr-2">
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Search History</h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">Save your search history for better recommendations</p>
                    </div>
                  </div>
                  <div className="flex items-start pt-2 flex-shrink-0">
                  <button
                    onClick={handleSearchHistoryToggle}
                    disabled={isLoading}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                      searchHistory ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  >
                    <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                      searchHistory ? 'translate-x-5' : 'translate-x-1'
                    }`} />
                  </button>
                  </div>
                </div>

                {/* Analytics & Performance */}
                <div className="flex items-start p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-3 flex-1 min-w-0 pr-4">
                    <AlertTriangle size={18} className="sm:w-5 sm:h-5 text-yellow-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <div className="flex-1 min-w-0 pr-2">
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Analytics & Performance</h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">Help improve performance through anonymous analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start pt-2 flex-shrink-0">
                  <button
                    onClick={handleAnalyticsToggle}
                    disabled={isLoading}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                      analytics ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  >
                    <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                      analytics ? 'translate-x-5' : 'translate-x-1'
                    }`} />
                  </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Management */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-3 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Database className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5" />
                Data Management
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                {/* Export Data */}
                <div className="flex items-start p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-3 flex-1 min-w-0 pr-3">
                    <Download size={18} className="sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <div className="flex-1 min-w-0 pr-2">
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Export Data</h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">Download all your data including searches and conversations</p>
                    </div>
                  </div>
                  <div className="flex items-start pt-1 flex-shrink-0">
                  <button 
                    onClick={handleExportData}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-xs font-medium whitespace-nowrap"
                  >
                    Export
                  </button>
                  </div>
                </div>

                {/* Clear Search History */}
                <div className="flex items-start p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-3 flex-1 min-w-0 pr-3">
                    <Trash2 size={18} className="sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <div className="flex-1 min-w-0 pr-2">
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Clear Search History</h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">Permanently delete all your search history</p>
                    </div>
                  </div>
                  <div className="flex items-start pt-1 flex-shrink-0">
                  <button 
                    onClick={handleClearHistory}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-xs font-medium whitespace-nowrap"
                  >
                    Clear
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Security Status */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 sm:p-6 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Shield size={18} className="sm:w-5 sm:h-5 text-green-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Security Status</h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Account Security</span>
                  <span className="text-xs sm:text-sm font-medium text-green-600">Strong</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">2FA Status</span>
                  <span className={`text-xs sm:text-sm font-medium ${twoFactorEnabled ? 'text-green-600' : 'text-orange-600'}`}>
                    {twoFactorEnabled ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Last Password Change</span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">30 days ago</span>
                </div>
              </div>
            </div>

            {/* Privacy Summary */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Privacy Summary</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Data Collection</span>
                  <span className={`text-xs sm:text-sm font-medium ${dataCollection ? 'text-blue-600' : 'text-gray-500'}`}>
                    {dataCollection ? 'On' : 'Off'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Search History</span>
                  <span className={`text-xs sm:text-sm font-medium ${searchHistory ? 'text-blue-600' : 'text-gray-500'}`}>
                    {searchHistory ? 'Saved' : 'Not Saved'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Analytics</span>
                  <span className={`text-xs sm:text-sm font-medium ${analytics ? 'text-blue-600' : 'text-gray-500'}`}>
                    {analytics ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-lg transition-colors">
                  Review Login Activity
                </button>
                <button className="w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-lg transition-colors">
                  Update Recovery Email
                </button>
                <button className="w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-lg transition-colors">
                  Download Security Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySecurity;