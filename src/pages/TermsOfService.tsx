import React from 'react';
import { ArrowLeft, Shield, FileText, Users, Globe, AlertTriangle, Mail } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-[#3C3C3C] bg-white dark:bg-[#1C1C1C] sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center text-center lg:text-left gap-4">
            <button
              onClick={onBack}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2C2C2C] transition-colors hidden lg:block"
            >
              <ArrowLeft size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white text-center lg:text-left">Terms of Service</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Last updated: January 15, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-2 xs:px-4 sm:px-6 py-4 xs:py-6 sm:py-8 md:py-12">
        {/* Introduction */}
        <div className="mb-4 xs:mb-6 sm:mb-8 md:mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 md:p-8 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <FileText className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 xs:mb-3">Welcome to Perplexity</h2>
                <p className="text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  These Terms of Service ("Terms") govern your use of Perplexity's AI-powered search platform and services. 
                  By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-4 xs:space-y-6 sm:space-y-8 md:space-y-12">
          {/* Section 1: Acceptance of Terms */}
          <section>
            <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs xs:text-sm">1</span>
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Acceptance of Terms</h3>
            </div>
            <div className="ml-8 xs:ml-10 sm:ml-11 space-y-2 xs:space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                By creating an account, accessing, or using Perplexity's services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p>
                If you do not agree to these Terms, you may not access or use our services. We may modify these Terms 
                at any time, and such modifications will be effective immediately upon posting.
              </p>
            </div>
          </section>

          {/* Section 2: Description of Service */}
          <section>
            <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-semibold text-xs xs:text-sm">2</span>
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Description of Service</h3>
            </div>
            <div className="ml-8 xs:ml-10 sm:ml-11 space-y-2 xs:space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Perplexity provides an AI-powered search and question-answering platform that helps users find 
                information, generate content, and explore topics through natural language interactions.
              </p>
              <p>Our services include:</p>
              <ul className="list-disc list-inside space-y-1 xs:space-y-2 ml-2 xs:ml-3 sm:ml-4">
                <li>AI-powered search and information retrieval</li>
                <li>Natural language question answering</li>
                <li>Content generation and summarization</li>
                <li>Image generation and editing tools</li>
                <li>Conversation threads and history</li>
              </ul>
            </div>
          </section>

          {/* Section 3: User Accounts */}
          <section>
            <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <Users className="w-3 h-3 xs:w-4 xs:h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">User Accounts</h3>
            </div>
            <div className="ml-8 xs:ml-10 sm:ml-11 space-y-2 xs:space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                To access certain features, you may need to create an account. You are responsible for maintaining 
                the confidentiality of your account credentials and for all activities under your account.
              </p>
              <p>You agree to:</p>
              <ul className="list-disc list-inside space-y-1 xs:space-y-2 ml-2 xs:ml-3 sm:ml-4">
                <li>Provide accurate and complete information</li>
                <li>Keep your account information updated</li>
                <li>Maintain the security of your password</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Acceptable Use */}
          <section>
            <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                <Shield className="w-3 h-3 xs:w-4 xs:h-4 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Acceptable Use Policy</h3>
            </div>
            <div className="ml-8 xs:ml-10 sm:ml-11 space-y-2 xs:space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>You agree not to use our services to:</p>
              <ul className="list-disc list-inside space-y-1 xs:space-y-2 ml-2 xs:ml-3 sm:ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Generate harmful, offensive, or inappropriate content</li>
                <li>Attempt to reverse engineer or hack our systems</li>
                <li>Spam, harass, or abuse other users</li>
                <li>Distribute malware or malicious code</li>
                <li>Use the service for commercial purposes without authorization</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Intellectual Property */}
          <section>
            <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-xs xs:text-sm">5</span>
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Intellectual Property</h3>
            </div>
            <div className="ml-8 xs:ml-10 sm:ml-11 space-y-2 xs:space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The Perplexity service, including its software, design, text, graphics, and other content, is owned by 
                Perplexity and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You retain ownership of content you create using our services, but you grant us a license to use, 
                modify, and display such content as necessary to provide our services.
              </p>
            </div>
          </section>

          {/* Section 6: Privacy */}
          <section>
            <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                <Globe className="w-3 h-3 xs:w-4 xs:h-4 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Privacy</h3>
            </div>
            <div className="ml-8 xs:ml-10 sm:ml-11 space-y-2 xs:space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your 
                information when you use our services.
              </p>
              <p>
                By using our services, you consent to the collection and use of your information as described in our 
                Privacy Policy.
              </p>
            </div>
          </section>

          {/* Section 7: Disclaimers */}
          <section>
            <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-3 h-3 xs:w-4 xs:h-4 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Disclaimers</h3>
            </div>
            <div className="ml-8 xs:ml-10 sm:ml-11 space-y-2 xs:space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Our services are provided "as is" without warranties of any kind. We do not guarantee the accuracy, 
                completeness, or reliability of AI-generated content.
              </p>
              <p>
                You acknowledge that AI-generated responses may contain errors, biases, or inaccuracies, and you should 
                verify important information independently.
              </p>
            </div>
          </section>

          {/* Section 8: Limitation of Liability */}
          <section>
            <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 dark:text-yellow-400 font-semibold text-xs xs:text-sm">8</span>
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Limitation of Liability</h3>
            </div>
            <div className="ml-8 xs:ml-10 sm:ml-11 space-y-2 xs:space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                To the maximum extent permitted by law, Perplexity shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages arising from your use of our services.
              </p>
              <p>
                Our total liability for any claims related to our services shall not exceed the amount you paid us in 
                the twelve months preceding the claim.
              </p>
            </div>
          </section>

          {/* Section 9: Termination */}
          <section>
            <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3 sm:mb-4 md:mb-6">
              <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-400 font-semibold text-xs xs:text-sm">9</span>
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Termination</h3>
            </div>
            <div className="ml-8 xs:ml-10 sm:ml-11 space-y-2 xs:space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                We may terminate or suspend your account and access to our services at any time, with or without cause, 
                with or without notice.
              </p>
              <p>
                You may terminate your account at any time by contacting us or using the account deletion feature in 
                your settings.
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
                <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 xs:mb-2">Questions?</h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2 xs:mb-3 sm:mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-1 xs:space-y-2 text-xs xs:text-sm text-gray-600 dark:text-gray-400">
                  <p>Email: legal@perplexity.ai</p>
                  <p>Address: 123 AI Street, San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;