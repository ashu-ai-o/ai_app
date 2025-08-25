import React from 'react';
import { ArrowLeft, User, Mail, Phone, Calendar, Shield, CreditCard, Trash2, Edit3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AccountSettingsProps {
  onBack: () => void;
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ onBack }) => {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: 'Melvin Dave',
    username: 'melvindave',
    email: 'melvin@example.com',
    phone: '+1 (555) 123-4567'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Here you would typically save the data to your backend
    console.log('Saving profile data:', formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form data to original values
    setFormData({
      fullName: 'Melvin Dave',
      username: 'melvindave',
      email: 'melvin@example.com',
      phone: '+1 (555) 123-4567'
    });
    setIsEditing(false);
  };

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
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white text-center lg:text-left">{t('account.title')}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('account.subtitle')}</p>
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
          {/* Profile Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Information */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{t('account.profile')}</h2>
                {!isEditing ? (
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Edit3 size={14} />
                    {t('account.edit')}
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handleCancel}
                      className="px-3 py-1.5 text-sm border border-gray-300 dark:border-[#3C3C3C] text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-[#3C3C3C] transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleSave}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Save
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces"
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-4 border-white dark:border-[#2C2C2C] shadow-sm"
                  />
                  <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Edit3 size={12} className="text-white" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">melvindave</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">Pro Member since March 2024</p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">Pro</span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">Verified</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('account.fullName')}</label>
                  {isEditing ? (
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full pl-10 pr-3 py-3 bg-white dark:bg-[#2C2C2C] border border-gray-200 dark:border-[#3C3C3C] rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-[#2C2C2C] border border-gray-200 dark:border-[#3C3C3C] rounded-lg">
                      <User size={16} className="text-gray-400" />
                      <span className="text-gray-900 dark:text-white">{formData.fullName}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('account.username')}</label>
                  {isEditing ? (
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">@</span>
                      <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        className="w-full pl-8 pr-3 py-3 bg-white dark:bg-[#2C2C2C] border border-gray-200 dark:border-[#3C3C3C] rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-[#2C2C2C] border border-gray-200 dark:border-[#3C3C3C] rounded-lg">
                      <span className="text-gray-400">@</span>
                      <span className="text-gray-900 dark:text-white">{formData.username}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('account.email')}</label>
                  {isEditing ? (
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full pl-10 pr-3 py-3 bg-white dark:bg-[#2C2C2C] border border-gray-200 dark:border-[#3C3C3C] rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-[#2C2C2C] border border-gray-200 dark:border-[#3C3C3C] rounded-lg">
                      <Mail size={16} className="text-gray-400" />
                      <span className="text-gray-900 dark:text-white">{formData.email}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('account.phone')}</label>
                  {isEditing ? (
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full pl-10 pr-3 py-3 bg-white dark:bg-[#2C2C2C] border border-gray-200 dark:border-[#3C3C3C] rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-[#2C2C2C] border border-gray-200 dark:border-[#3C3C3C] rounded-lg">
                      <Phone size={16} className="text-gray-400" />
                      <span className="text-gray-900 dark:text-white">{formData.phone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Security & Privacy</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-center gap-3">
                    <Shield size={20} className="text-blue-600" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security to your account</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Enable
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-green-600" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Login Activity</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">View recent login attempts and active sessions</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 dark:border-[#3C3C3C] text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-[#3C3C3C] transition-colors text-sm">
                    View
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#2C2C2C] rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                  <div className="flex items-center gap-3">
                    <Shield size={20} className="text-orange-600" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Change Password</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Update your account password</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 dark:border-[#3C3C3C] text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-[#3C3C3C] transition-colors text-sm">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Subscription */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard size={20} className="text-blue-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Pro Subscription</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                You're currently on the Pro plan with unlimited searches and advanced features.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Next billing</span>
                  <span className="text-gray-900 dark:text-white font-medium">Apr 15, 2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Amount</span>
                  <span className="text-gray-900 dark:text-white font-medium">$20/month</span>
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Manage Subscription
              </button>
            </div>

            {/* Usage Stats */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">This Month</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Searches</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Threads</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Follow-ups</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">342</span>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-3 mb-4">
                <Trash2 size={20} className="text-red-600" />
                <h3 className="font-semibold text-red-900 dark:text-red-400">Danger Zone</h3>
              </div>
              <p className="text-sm text-red-700 dark:text-red-300 mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;