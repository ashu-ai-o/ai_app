import React from 'react';
import { ArrowLeft, Bell, Mail, Smartphone, Globe, Volume2, VolumeX, Clock, Users, MessageSquare, Heart, Star, Zap } from 'lucide-react';

interface NotificationSettingsProps {
  onBack: () => void;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({ onBack }) => {
  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [pushNotifications, setPushNotifications] = React.useState(true);
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  const [searchUpdates, setSearchUpdates] = React.useState(true);
  const [accountActivity, setAccountActivity] = React.useState(true);
  const [productUpdates, setProductUpdates] = React.useState(false);
  const [marketingEmails, setMarketingEmails] = React.useState(false);
  const [weeklyDigest, setWeeklyDigest] = React.useState(true);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-[#3C3C3C] bg-white dark:bg-[#1C1C1C] sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-2 xs:px-3 sm:px-6 py-2 xs:py-3 sm:py-4">
          <div className="flex items-center gap-2 xs:gap-3 sm:gap-4">
            <button
              onClick={onBack}
              className="p-1.5 xs:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2C2C2C] transition-colors"
            >
              <ArrowLeft size={16} className="xs:w-5 xs:h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <div>
              <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">Notifications</h1>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5 xs:mt-1">Control how you receive notifications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-2 xs:px-3 sm:px-6 py-3 xs:py-4 sm:py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8">
            {/* Notification Methods */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 xs:mb-4 sm:mb-6 flex items-center gap-1.5 xs:gap-2">
                <Bell className="text-blue-600" size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                Notification Methods
              </h2>
              
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                <div className="p-2.5 xs:p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-md xs:rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-2 xs:gap-3">
                    <Mail size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs xs:text-sm sm:text-base font-medium text-gray-900 dark:text-white leading-tight">Email Notifications</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 xs:mt-1 leading-tight">Receive notifications via email</p>
                    </div>
                    <div className="flex-shrink-0">
                      <button 
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`relative inline-flex h-4 w-7 xs:h-5 xs:w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                          emailNotifications ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span className={`inline-block h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                          emailNotifications ? 'translate-x-3.5 xs:translate-x-5 sm:translate-x-6' : 'translate-x-0.5 xs:translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 xs:p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-md xs:rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-2 xs:gap-3">
                    <Smartphone size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs xs:text-sm sm:text-base font-medium text-gray-900 dark:text-white leading-tight">Push Notifications</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 xs:mt-1 leading-tight">Get instant notifications on your device</p>
                    </div>
                    <div className="flex-shrink-0">
                      <button 
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className={`relative inline-flex h-4 w-7 xs:h-5 xs:w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                          pushNotifications ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span className={`inline-block h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                          pushNotifications ? 'translate-x-3.5 xs:translate-x-5 sm:translate-x-6' : 'translate-x-0.5 xs:translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 xs:p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-md xs:rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-2 xs:gap-3">
                    {soundEnabled ? (
                      <Volume2 size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <VolumeX size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs xs:text-sm sm:text-base font-medium text-gray-900 dark:text-white leading-tight">Sound Notifications</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 xs:mt-1 leading-tight">Play sound for notifications</p>
                    </div>
                    <div className="flex-shrink-0">
                      <button 
                        onClick={() => setSoundEnabled(!soundEnabled)}
                        className={`relative inline-flex h-4 w-7 xs:h-5 xs:w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                          soundEnabled ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span className={`inline-block h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                          soundEnabled ? 'translate-x-3.5 xs:translate-x-5 sm:translate-x-6' : 'translate-x-0.5 xs:translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Types */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 xs:mb-4 sm:mb-6 flex items-center gap-1.5 xs:gap-2">
                <MessageSquare className="text-indigo-600" size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                What to Notify
              </h2>
              
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                <div className="p-2.5 xs:p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-md xs:rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-2 xs:gap-3">
                    <Zap size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs xs:text-sm sm:text-base font-medium text-gray-900 dark:text-white leading-tight">Search Updates</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 xs:mt-1 leading-tight">Get notified about search results and follow-ups</p>
                    </div>
                    <div className="flex-shrink-0">
                      <button 
                        onClick={() => setSearchUpdates(!searchUpdates)}
                        className={`relative inline-flex h-4 w-7 xs:h-5 xs:w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                          searchUpdates ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span className={`inline-block h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                          searchUpdates ? 'translate-x-3.5 xs:translate-x-5 sm:translate-x-6' : 'translate-x-0.5 xs:translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 xs:p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-md xs:rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-2 xs:gap-3">
                    <Users size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs xs:text-sm sm:text-base font-medium text-gray-900 dark:text-white leading-tight">Account Activity</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 xs:mt-1 leading-tight">Security alerts and account changes</p>
                    </div>
                    <div className="flex-shrink-0">
                      <button 
                        onClick={() => setAccountActivity(!accountActivity)}
                        className={`relative inline-flex h-4 w-7 xs:h-5 xs:w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                          accountActivity ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span className={`inline-block h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                          accountActivity ? 'translate-x-3.5 xs:translate-x-5 sm:translate-x-6' : 'translate-x-0.5 xs:translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 xs:p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-md xs:rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-2 xs:gap-3">
                    <Star size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs xs:text-sm sm:text-base font-medium text-gray-900 dark:text-white leading-tight">Product Updates</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 xs:mt-1 leading-tight">New features and improvements</p>
                    </div>
                    <div className="flex-shrink-0">
                      <button 
                        onClick={() => setProductUpdates(!productUpdates)}
                        className={`relative inline-flex h-4 w-7 xs:h-5 xs:w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                          productUpdates ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span className={`inline-block h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                          productUpdates ? 'translate-x-3.5 xs:translate-x-5 sm:translate-x-6' : 'translate-x-0.5 xs:translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 xs:p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-md xs:rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-2 xs:gap-3">
                    <Heart size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs xs:text-sm sm:text-base font-medium text-gray-900 dark:text-white leading-tight">Marketing Emails</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 xs:mt-1 leading-tight">Tips, tutorials, and promotional content</p>
                    </div>
                    <div className="flex-shrink-0">
                      <button 
                        onClick={() => setMarketingEmails(!marketingEmails)}
                        className={`relative inline-flex h-4 w-7 xs:h-5 xs:w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                          marketingEmails ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span className={`inline-block h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                          marketingEmails ? 'translate-x-3.5 xs:translate-x-5 sm:translate-x-6' : 'translate-x-0.5 xs:translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 xs:p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-md xs:rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-start gap-2 xs:gap-3">
                    <Clock size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs xs:text-sm sm:text-base font-medium text-gray-900 dark:text-white leading-tight">Weekly Digest</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 xs:mt-1 leading-tight">Summary of your activity and trending topics</p>
                    </div>
                    <div className="flex-shrink-0">
                      <button 
                        onClick={() => setWeeklyDigest(!weeklyDigest)}
                        className={`relative inline-flex h-4 w-7 xs:h-5 xs:w-9 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                          weeklyDigest ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span className={`inline-block h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                          weeklyDigest ? 'translate-x-3.5 xs:translate-x-5 sm:translate-x-6' : 'translate-x-0.5 xs:translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-3 xs:space-y-4 sm:space-y-6">
            {/* Notification Summary */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3 sm:mb-4">
                <Bell size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-blue-600" />
                <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Notification Status</h3>
              </div>
              <div className="space-y-1.5 xs:space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 dark:text-gray-300">Email</span>
                  <span className={`text-xs font-medium ${emailNotifications ? 'text-green-600' : 'text-gray-500'}`}>
                    {emailNotifications ? 'On' : 'Off'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 dark:text-gray-300">Push</span>
                  <span className={`text-xs font-medium ${pushNotifications ? 'text-green-600' : 'text-gray-500'}`}>
                    {pushNotifications ? 'On' : 'Off'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 dark:text-gray-300">Sound</span>
                  <span className={`text-xs font-medium ${soundEnabled ? 'text-green-600' : 'text-gray-500'}`}>
                    {soundEnabled ? 'On' : 'Off'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Settings */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2 xs:mb-3 sm:mb-4">Quick Actions</h3>
              <div className="space-y-1 xs:space-y-1 sm:space-y-2">
                <button className="w-full text-left px-2 xs:px-3 py-1.5 xs:py-2 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-md xs:rounded-lg transition-colors">
                  Turn Off All
                </button>
                <button className="w-full text-left px-2 xs:px-3 py-1.5 xs:py-2 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-md xs:rounded-lg transition-colors">
                  Essential Only
                </button>
                <button className="w-full text-left px-2 xs:px-3 py-1.5 xs:py-2 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-md xs:rounded-lg transition-colors">
                  Reset to Default
                </button>
              </div>
            </div>

            {/* Notification Schedule */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2 xs:mb-3 sm:mb-4">Do Not Disturb</h3>
              <div className="space-y-1.5 xs:space-y-2 sm:space-y-3">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Quiet Hours</span>
                  <span className="text-xs font-medium text-gray-900 dark:text-white">10 PM - 8 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Weekend Mode</span>
                  <span className="text-xs font-medium text-gray-500">Off</span>
                </div>
                <button className="w-full text-left px-2 xs:px-3 py-1.5 xs:py-2 text-xs text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md xs:rounded-lg transition-colors">
                  Configure Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;