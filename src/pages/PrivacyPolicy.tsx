import React from 'react';
import { ArrowLeft, Shield, Eye, Database, Cookie, Globe, Users, Lock, Mail, X } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-[#3C3C3C] bg-white dark:bg-[#1C1C1C] sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center lg:justify-start gap-4">
            <button
              onClick={onBack}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2C2C2C] transition-colors hidden lg:block"
            >
              <ArrowLeft size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white text-center lg:text-left">Privacy Policy</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Last updated: January 15, 2025</p>
            </div>
            </div>
            <button
              onClick={onBack}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2C2C2C] transition-colors"
              title="Close"
            >
              <X size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-2 xs:px-4 sm:px-6 py-4 xs:py-6 sm:py-8 md:py-12">
        {/* Introduction */}
        <div className="mb-4 xs:mb-6 sm:mb-8 md:mb-12">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 md:p-8 border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <Shield className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <div>
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 xs:mb-3">Your Privacy Matters</h2>
                <p className="text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  At Perplexity, we are committed to protecting your privacy and being transparent about how we collect, 
                  use, and share your information. This Privacy Policy explains our practices regarding your personal data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-4 xs:space-y-6 sm:space-y-8 md:space-y-12">
          {/* Section 1: Information We Collect */}
          <section>
            <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Database className="w-3 h-3 xs:w-4 xs:h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Information We Collect</h3>
            </div>
            <div className="ml-8 xs:ml-10 sm:ml-11 space-y-2 xs:space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>We collect information you provide directly to us, such as:</p>
              <ul className="list-disc list-inside space-y-1 xs:space-y-2 ml-2 xs:ml-3 sm:ml-4">
                <li><strong>Account Information:</strong> Name, email address, password, and profile details</li>
                <li><strong>Search Queries:</strong> Questions and prompts you submit to our AI system</li>
                <li><strong>Generated Content:</strong> Images, text, and other content created using our services</li>
                <li><strong>Communication:</strong> Messages you send to our support team</li>
                <li><strong>Payment Information:</strong> Billing details for premium subscriptions</li>
              </ul>
              <p>We also automatically collect certain information:</p>
              <ul className="list-disc list-inside space-y-1 xs:space-y-2 ml-2 xs:ml-3 sm:ml-4">
                <li><strong>Usage Data:</strong> How you interact with our services</li>
                <li><strong>Device Information:</strong> Browser type, operating system, IP address</li>
                <li><strong>Cookies:</strong> Small files stored on your device for functionality and analytics</li>
              </ul>
            </div>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section>
            <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <Eye className="w-3 h-3 xs:w-4 xs:h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">How We Use Your Information</h3>
            </div>
            <div className="ml-8 xs:ml-10 sm:ml-11 space-y-2 xs:space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-1 xs:space-y-2 ml-2 xs:ml-3 sm:ml-4">
                <li>Provide, maintain, and improve our AI services</li>
                <li>Process your search queries and generate responses</li>
                <li>Personalize your experience and recommendations</li>
                <li>Communicate with you about our services</li>
                <li>Process payments and manage subscriptions</li>
                <li>Detect and prevent fraud and abuse</li>
                <li>Comply with legal obligations</li>
                <li>Conduct research and development to improve our AI models</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Information Sharing */}
          <section>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Information Sharing</h3>
            </div>
            <div className="ml-11 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>We may share your information in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>Public Content:</strong> Content you choose to make public through our platform</li>
              </ul>
              <p>
                <strong>We do not sell your personal information to third parties for their marketing purposes.</strong>
              </p>
            </div>
          </section>

          {/* Section 4: Data Security */}
          <section>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                <Lock className="w-4 h-4 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Data Security</h3>
            </div>
            <div className="ml-11 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>We implement appropriate security measures to protect your information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication systems</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p>
                However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security 
                but we strive to use commercially acceptable means to protect your information.
              </p>
            </div>
          </section>

          {/* Section 5: Cookies and Tracking */}
          <section>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                <Cookie className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Cookies and Tracking</h3>
            </div>
            <div className="ml-11 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Authenticate your account</li>
                <li>Analyze usage patterns and improve our services</li>
                <li>Provide personalized content and recommendations</li>
                <li>Measure the effectiveness of our marketing campaigns</li>
              </ul>
              <p>
                You can control cookies through your browser settings. However, disabling cookies may affect the 
                functionality of our services.
              </p>
            </div>
          </section>

          {/* Section 6: Your Rights and Choices */}
          <section>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                <Globe className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Your Rights and Choices</h3>
            </div>
            <div className="ml-11 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restriction:</strong> Limit how we process your information</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided at the end of this policy.
              </p>
            </div>
          </section>

          {/* Section 7: Data Retention */}
          <section>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                <span className="text-teal-600 dark:text-teal-400 font-semibold text-sm">7</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Data Retention</h3>
            </div>
            <div className="ml-11 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>We retain your information for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our AI models and services</li>
              </ul>
              <p>
                When you delete your account, we will delete or anonymize your personal information, except where we 
                are required to retain it for legal or regulatory purposes.
              </p>
            </div>
          </section>

          {/* Section 8: International Transfers */}
          <section>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center">
                <Globe className="w-4 h-4 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">International Transfers</h3>
            </div>
            <div className="ml-11 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure 
                appropriate safeguards are in place to protect your information during international transfers.
              </p>
              <p>
                These safeguards include standard contractual clauses, adequacy decisions, and other legally 
                recognized transfer mechanisms.
              </p>
            </div>
          </section>

          {/* Section 9: Children's Privacy */}
          <section>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-semibold text-sm">9</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Children's Privacy</h3>
            </div>
            <div className="ml-11 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13.
              </p>
              <p>
                If we become aware that we have collected personal information from a child under 13, we will 
                take steps to delete such information promptly.
              </p>
            </div>
          </section>

          {/* Section 10: Changes to This Policy */}
          <section>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-400 font-semibold text-sm">10</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Changes to This Policy</h3>
            </div>
            <div className="ml-11 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new policy on our website and updating the "Last updated" date.
              </p>
              <p>
                Your continued use of our services after any changes indicates your acceptance of the updated policy.
              </p>
            </div>
          </section>
        </div>

        {/* Contact Information */}
        <div className="mt-6 xs:mt-8 sm:mt-12 md:mt-16">
          <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-[#3C3C3C]">
            <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <Mail className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 xs:mb-2">Contact Us</h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2 xs:mb-3 sm:mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-1 xs:space-y-2 text-xs xs:text-sm text-gray-600 dark:text-gray-400">
                  <p>Email: privacy@perplexity.ai</p>
                  <p>Address: 123 AI Street, San Francisco, CA 94105</p>
                  <p>Phone: +1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;