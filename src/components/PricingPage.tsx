import React from 'react';
import { ArrowLeft, Check, Star, Zap, Crown, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PricingPageProps {
  onBack: () => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onBack }) => {
  const { t } = useTranslation();

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started',
      icon: Star,
      color: 'from-gray-500 to-gray-700',
      borderColor: 'border-gray-200 dark:border-[#3C3C3C]',
      buttonColor: 'bg-gray-800 dark:bg-gray-200 text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100',
      features: [
        '10 searches per day',
        'Basic AI responses',
        'Standard support',
        'Web access only',
        'Limited history'
      ],
      popular: false
    },
    {
      name: 'Basic',
      price: '$9.99',
      period: '/month',
      description: 'Great for regular users',
      icon: Zap,
      color: 'from-gray-600 to-gray-800',
      borderColor: 'border-gray-300 dark:border-[#4C4C4C]',
      buttonColor: 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100',
      features: [
        '100 searches per day',
        'Advanced AI responses',
        'Priority support',
        'Mobile & web access',
        'Full search history',
        'Export conversations'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$19.99',
      period: '/month',
      description: 'For power users and professionals',
      icon: Crown,
      color: 'from-gray-700 to-gray-900',
      borderColor: 'border-gray-400 dark:border-[#5C5C5C]',
      buttonColor: 'bg-gray-900 dark:bg-gray-100 text-white dark:text-black hover:bg-black dark:hover:bg-white',
      features: [
        'Unlimited searches',
        'Premium AI models',
        '24/7 priority support',
        'All platform access',
        'Advanced analytics',
        'API access',
        'Custom integrations',
        'Team collaboration'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-full bg-white dark:bg-black">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-[#3C3C3C] bg-white dark:bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center lg:justify-normal gap-4">
      
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white text-center lg:text-left">Pricing Plans</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Choose the perfect plan for your needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative">
        {/* Mobile menu button */}
        {/* <button
          onClick={onBack}
          className="fixed top-4 left-4 z-50 p-2 bg-gray-100 dark:bg-[#2C2C2C] rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-[#3C3C3C] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button> */}
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-[#2C2C2C] rounded-full border border-gray-200 dark:border-[#3C3C3C] mb-4 sm:mb-6">
            <Sparkles size={14} className="sm:w-4 sm:h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Simple, transparent pricing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
            Choose Your Plan
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-xs sm:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto px-4">
            Start for free and upgrade as you grow. All plans include our core AI search capabilities.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-black dark:bg-white text-white dark:text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Glass Card */}
              <div className={`relative h-full bg-gray-50 dark:bg-[#1C1C1C] rounded-2xl border ${plan.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden`}>
                
                {/* Card Content */}
                <div className="relative p-4 sm:p-6 lg:p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br ${plan.color} mb-3 sm:mb-4 shadow-lg`}>
                      <plan.icon size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 px-2">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                      <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                          <Check size={10} className="sm:w-3 sm:h-3 text-white" />
                        </div>
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl ${plan.buttonColor} text-sm sm:text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}>
                    {plan.name === 'Free' ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-2xl border border-gray-200 dark:border-[#3C3C3C] p-4 sm:p-6 lg:p-8 max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 text-left">
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">Can I change plans anytime?</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">Is there a free trial?</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Our Free plan lets you try our service with no time limit. Upgrade when you're ready for more features.</p>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">What payment methods do you accept?</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">Do you offer refunds?</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Yes, we offer a 30-day money-back guarantee for all paid plans. No questions asked.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;