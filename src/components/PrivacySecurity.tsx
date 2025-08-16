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
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white text-center lg:text-lefts">{t('privacy.title')}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('privacy.subtitle')}</p>
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
        </button> */}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Security Settings */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Shield className="text-blue-600" size={20} />
                {t('privacy.securitySettings')}
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-center gap-3">
                    <Key size={20} className="text-green-600" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{t('privacy.twoFactor')}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('privacy.twoFactorDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm ${twoFactorEnabled ? 'text-green-600' : 'text-gray-500'}`}>
                      {twoFactorEnabled ? t('privacy.enabled') : t('privacy.disabled')}
                    </span>
                    <button 
                      onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                      className={`px-4 py-2 rounded-lg transition-colors text-sm ${
                        twoFactorEnabled 
                          ? 'bg-red-600 text-white hover:bg-red-700' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {twoFactorEnabled ? t('privacy.disable') : t('privacy.enable')}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-center gap-3">
                    <Lock size={20} className="text-orange-600" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Change Password</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Update your account password regularly</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 dark:border-[#3C3C3C] text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-[#3C3C3C] transition-colors text-sm">
                    Change
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-center gap-3">
                    <UserCheck size={20} className="text-purple-600" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Active Sessions</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Manage devices logged into your account</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 dark:border-[#3C3C3C] text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-[#3C3C3C] transition-colors text-sm">
                    Manage
                  </button>
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Eye className="text-indigo-600" size={20} />
                Privacy Settings
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-center gap-3">
                    <Database size={20} className="text-blue-600" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Data Collection</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Allow collection of usage data to improve service</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setDataCollection(!dataCollection)}
                    className={`relative inline-flex h-5 w-9 xs:h-6 xs:w-11 items-center rounded-full transition-colors ${
                      dataCollection ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  >
                    <span className={`inline-block h-3 w-3 xs:h-4 xs:w-4 transform rounded-full bg-white transition-transform ${
                      dataCollection ? 'translate-x-5 xs:translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-center gap-3">
                    <Globe size={20} className="text-green-600" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Search History</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Save your search history for better recommendations</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSearchHistory(!searchHistory)}
                    className={`relative inline-flex h-5 w-9 xs:h-6 xs:w-11 items-center rounded-full transition-colors ${
                      searchHistory ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  >
                    <span className={`inline-block h-3 w-3 xs:h-4 xs:w-4 transform rounded-full bg-white transition-transform ${
                      searchHistory ? 'translate-x-5 xs:translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-center gap-3">
                    <AlertTriangle size={20} className="text-yellow-600" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Analytics & Performance</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Help improve performance through anonymous analytics</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setAnalytics(!analytics)}
                    className={`relative inline-flex h-5 w-9 xs:h-6 xs:w-11 items-center rounded-full transition-colors ${
                      analytics ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  >
                    <span className={`inline-block h-3 w-3 xs:h-4 xs:w-4 transform rounded-full bg-white transition-transform ${
                      analytics ? 'translate-x-5 xs:translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Data Management */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Database className="text-purple-600" size={20} />
                Data Management
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-center gap-3">
                    <Download size={20} className="text-blue-600" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Export Data</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Download all your data including searches and conversations</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Export
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-center gap-3">
                    <Trash2 size={20} className="text-red-600" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Clear Search History</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Permanently delete all your search history</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Security Status */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={20} className="text-green-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Security Status</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Account Security</span>
                  <span className="text-sm font-medium text-green-600">Strong</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">2FA Status</span>
                  <span className={`text-sm font-medium ${twoFactorEnabled ? 'text-green-600' : 'text-orange-600'}`}>
                    {twoFactorEnabled ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Last Password Change</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">30 days ago</span>
                </div>
              </div>
            </div>

            {/* Privacy Summary */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Privacy Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Data Collection</span>
                  <span className={`text-sm font-medium ${dataCollection ? 'text-blue-600' : 'text-gray-500'}`}>
                    {dataCollection ? 'On' : 'Off'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Search History</span>
                  <span className={`text-sm font-medium ${searchHistory ? 'text-blue-600' : 'text-gray-500'}`}>
                    {searchHistory ? 'Saved' : 'Not Saved'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Analytics</span>
                  <span className={`text-sm font-medium ${analytics ? 'text-blue-600' : 'text-gray-500'}`}>
                    {analytics ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-lg transition-colors">
                  Review Login Activity
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-lg transition-colors">
                  Update Recovery Email
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-lg transition-colors">
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