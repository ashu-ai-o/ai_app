import { MessageCircle, Share2, Copy, MoreHorizontal, User, Bot } from 'lucide-react';

export default function ChatThread({ thread }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 pt-16 lg:pt-6">
      <div className="space-y-6">
        {thread.messages.map((message) => (
          <div key={message.id} className="flex gap-4">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {message.type === 'user' ? (
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
              ) : (
                <div className="w-8 h-8 bg-gray-600 dark:bg-gray-400 rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-white dark:text-black" />
                </div>
              )}
            </div>

            {/* Message Content */}
            <div className="flex-1 min-w-0">
              {message.type === 'user' ? (
                <div className="bg-gray-100 dark:bg-[#2C2C2C] rounded-2xl px-4 py-3 inline-block max-w-2xl">
                  <p className="text-gray-900 dark:text-white text-sm sm:text-base">
                    {message.content}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="prose dark:prose-invert max-w-none">
                    <div className="text-gray-800 dark:text-gray-200 text-sm sm:text-base leading-relaxed">
                      {message.content.split('\n').map((paragraph, index) => {
                        if (paragraph.startsWith('•')) {
                          return (
                            <div key={index} className="flex items-start gap-2 my-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span>{paragraph.substring(1).trim()}</span>
                            </div>
                          );
                        }
                        return paragraph.trim() ? (
                          <p key={index} className="my-3">{paragraph}</p>
                        ) : (
                          <div key={index} className="h-2" />
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 sm:gap-4 mt-4 flex-wrap">
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white flex items-center gap-2 transition-colors">
                      <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                      <span className="text-xs sm:text-sm">Follow-up</span>
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white flex items-center gap-2 transition-colors">
                      <Share2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white flex items-center gap-2 transition-colors">
                      <Copy size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white ml-auto transition-colors">
                      <MoreHorizontal size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Follow-up Input */}
      <div className="mt-8 sticky bottom-4">
        <div className="relative">
          <input
            type="text"
            className="block w-full px-4 py-3 bg-gray-100 dark:bg-[#2C2C2C] border border-gray-200 dark:border-[#3C3C3C] rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            placeholder="Ask a follow-up question..."
          />
          <div className="absolute inset-y-0 right-4 flex items-center">
            <span className="text-xs text-gray-400 bg-gray-200 dark:bg-[#3C3C3C] px-2 py-1 rounded">Pro</span>
          </div>
        </div>
      </div>
    </div>
  );
}