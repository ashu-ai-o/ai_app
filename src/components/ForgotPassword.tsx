import React from 'react';
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react';

interface ForgotPasswordProps {
  onBackToLogin: () => void;
}

export default function ForgotPassword({ onBackToLogin }: ForgotPasswordProps) {
  const [email, setEmail] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    console.log('Password reset requested for:', email);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
        <div className="w-full max-w-md mx-auto my-4">
          {/* Success State */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4 sm:mb-6">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
            </div>
            
            <h1 className="text-gray-900 dark:text-white text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
              Check your email
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 leading-relaxed px-2">
              We've sent a password reset link to <span className="font-medium text-gray-900 dark:text-white">{email}</span>
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={onBackToLogin}
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-black font-semibold py-2.5 sm:py-3 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                Back to sign in
              </button>
              
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm px-2 leading-relaxed">
                Didn't receive the email? Check your spam folder or{' '}
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-400 hover:text-blue-300 transition-colors underline text-xs sm:text-sm"
                >
                  try again
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-md mx-auto my-4">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <button
            onClick={onBackToLogin}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4 sm:mb-6 group text-sm sm:text-base"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to sign in</span>
          </button>
          
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 dark:bg-white rounded-lg mb-4">
            <span className="text-white dark:text-black font-bold text-xl">X</span>
          </div>
          
          <h1 className="text-gray-900 dark:text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2">
            Forgot your password?
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            No worries! Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {/* Reset Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-900 dark:text-white mb-2">
              Email address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-8 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                placeholder="Enter your email address"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gray-900 dark:bg-white text-white dark:text-black font-semibold py-2.5 sm:py-3 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></div>
                Sending reset link...
              </>
            ) : (
              'Send reset link'
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm px-2">
            Remember your password?{' '}
            <button 
              onClick={onBackToLogin}
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-xs sm:text-sm"
            >
              Sign in
            </button>
          </p>
        </div>

        {/* Additional Help */}
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white mb-2">
            Need help?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
            If you're having trouble accessing your account, contact our support team for assistance.
          </p>
          <button className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium">
            Contact support →
          </button>
        </div>
      </div>
    </div>
  );
}