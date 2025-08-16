import React from 'react';
import { ArrowLeft, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface LanguageRegionPageProps {
  onBack: () => void;
}

const LanguageRegionPage: React.FC<LanguageRegionPageProps> = ({ onBack }) => {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano' },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    { code: 'ko', name: 'Korean', nativeName: '한국어' },
    { code: 'zh', name: 'Chinese (Simplified)', nativeName: '简体中文' },
    { code: 'zh-TW', name: 'Chinese (Traditional)', nativeName: '繁體中文' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
    { code: 'fa', name: 'Persian', nativeName: 'فارسی' },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
    { code: 'pl', name: 'Polish', nativeName: 'Polski' },
    { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
    { code: 'sv', name: 'Swedish', nativeName: 'Svenska' },
    { code: 'da', name: 'Danish', nativeName: 'Dansk' },
    { code: 'no', name: 'Norwegian', nativeName: 'Norsk' },
    { code: 'fi', name: 'Finnish', nativeName: 'Suomi' },
    { code: 'el', name: 'Greek', nativeName: 'Ελληνικά' },
    { code: 'he', name: 'Hebrew', nativeName: 'עברית' },
    { code: 'th', name: 'Thai', nativeName: 'ไทย' },
    { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
    { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
    { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' },
    { code: 'tl', name: 'Filipino', nativeName: 'Filipino' },
    { code: 'uk', name: 'Ukrainian', nativeName: 'Українська' },
    { code: 'cs', name: 'Czech', nativeName: 'Čeština' },
    { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina' },
    { code: 'hu', name: 'Hungarian', nativeName: 'Magyar' },
    { code: 'ro', name: 'Romanian', nativeName: 'Română' },
    { code: 'bg', name: 'Bulgarian', nativeName: 'Български' },
    { code: 'hr', name: 'Croatian', nativeName: 'Hrvatski' },
    { code: 'sr', name: 'Serbian', nativeName: 'Српски' },
    { code: 'sl', name: 'Slovenian', nativeName: 'Slovenščina' },
    { code: 'et', name: 'Estonian', nativeName: 'Eesti' },
    { code: 'lv', name: 'Latvian', nativeName: 'Latviešu' },
    { code: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių' },
    { code: 'mt', name: 'Maltese', nativeName: 'Malti' },
    { code: 'is', name: 'Icelandic', nativeName: 'Íslenska' },
    { code: 'ga', name: 'Irish', nativeName: 'Gaeilge' },
    { code: 'cy', name: 'Welsh', nativeName: 'Cymraeg' },
    { code: 'eu', name: 'Basque', nativeName: 'Euskera' },
    { code: 'ca', name: 'Catalan', nativeName: 'Català' },
    { code: 'gl', name: 'Galician', nativeName: 'Galego' },
    { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili' },
    { code: 'am', name: 'Amharic', nativeName: 'አማርኛ' },
    { code: 'zu', name: 'Zulu', nativeName: 'isiZulu' },
    { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans' }
  ];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  const selectedLanguageObj = languages.find(lang => lang.code === i18n.language);

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
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white text-center lg:text-left">{t('language.title')}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('language.subtitle')}</p>
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
            {/* Language Selection */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Globe className="text-blue-600" size={20} />
                {t('language.title')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                      i18n.language === language.code
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                        : 'border-gray-200 dark:border-[#3C3C3C] hover:border-gray-300 dark:hover:border-[#4C4C4C]'
                    }`}
                  >
                    <div className="text-left">
                      <div className="font-medium text-gray-900 dark:text-white">{language.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{language.nativeName}</div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      i18n.language === language.code
                        ? 'border-blue-500 bg-blue-500' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`} />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Settings */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <Globe size={20} className="text-blue-600" />
                <h3 className="font-semibold text-gray-900 dark:text-white">{t('language.currentSettings')}</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">{t('language.title')}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {selectedLanguageObj?.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Reset Options */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-xl p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{t('language.resetOptions')}</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => {
                    i18n.changeLanguage('en');
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2C2C2C] rounded-lg transition-colors"
                >
                  {t('language.resetDefaults')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageRegionPage;