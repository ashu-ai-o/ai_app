import React from 'react';
import { ArrowLeft, Download, FileText, Database, Calendar, Clock, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface DataExportPageProps {
  onBack: () => void;
}

const DataExportPage: React.FC<DataExportPageProps> = ({ onBack }) => {
  const [selectedData, setSelectedData] = React.useState<string[]>(['searches', 'conversations']);
  const [exportFormat, setExportFormat] = React.useState('json');
  const [dateRange, setDateRange] = React.useState('all');
  const [isExporting, setIsExporting] = React.useState(false);
  const [exportStatus, setExportStatus] = React.useState<'idle' | 'processing' | 'completed' | 'error'>('idle');

  const dataTypes = [
    { id: 'searches', label: 'Search History', description: 'All your search queries and results', icon: FileText },
    { id: 'conversations', label: 'Conversations', description: 'Chat threads and messages', icon: Database },
    { id: 'preferences', label: 'Settings & Preferences', description: 'Your account settings and preferences', icon: Calendar },
    { id: 'activity', label: 'Activity Log', description: 'Login history and account activity', icon: Clock }
  ];

  const formatOptions = [
    { id: 'json', label: 'JSON', description: 'Machine-readable format' },
    { id: 'csv', label: 'CSV', description: 'Spreadsheet-compatible format' },
    { id: 'pdf', label: 'PDF', description: 'Human-readable document' }
  ];

  const dateRangeOptions = [
    { id: 'all', label: 'All Time', description: 'Export all available data' },
    { id: '30days', label: 'Last 30 Days', description: 'Recent activity only' },
    { id: '90days', label: 'Last 3 Months', description: 'Quarterly data' },
    { id: 'year', label: 'Last Year', description: 'Annual data' },
    { id: 'custom', label: 'Custom Range', description: 'Choose specific dates' }
  ];

  const handleDataTypeToggle = (typeId: string) => {
    setSelectedData(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    );
  };

  const handleExport = async () => {
    setIsExporting(true);
    setExportStatus('processing');
    
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsExporting(false);
    setExportStatus('completed');
    
    // Reset after 5 seconds
    setTimeout(() => {
      setExportStatus('idle');
    }, 5000);
  };

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
              <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">Data Export</h1>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5 xs:mt-1">Download your data and search history</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-2 xs:px-3 sm:px-6 py-3 xs:py-4 sm:py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8">
            {/* Data Selection */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 xs:mb-4 sm:mb-6 flex items-center gap-1.5 xs:gap-2">
                <Database className="text-blue-600" size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                Select Data to Export
              </h2>
              
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                {dataTypes.map((type) => (
                  <div key={type.id} className="p-2.5 xs:p-3 sm:p-4 bg-white dark:bg-[#2C2C2C] rounded-md xs:rounded-lg border border-gray-200 dark:border-[#3C3C3C]">
                    <div className="flex items-start gap-2 xs:gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          id={type.id}
                          checked={selectedData.includes(type.id)}
                          onChange={() => handleDataTypeToggle(type.id)}
                          className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      <type.icon size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <label htmlFor={type.id} className="text-xs xs:text-sm sm:text-base font-medium text-gray-900 dark:text-white leading-tight cursor-pointer">
                          {type.label}
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 xs:mt-1 leading-tight">{type.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Format */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 xs:mb-4 sm:mb-6 flex items-center gap-1.5 xs:gap-2">
                <FileText className="text-green-600" size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                Export Format
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 xs:gap-3">
                {formatOptions.map((format) => (
                  <button
                    key={format.id}
                    onClick={() => setExportFormat(format.id)}
                    className={`p-2.5 xs:p-3 sm:p-4 rounded-md xs:rounded-lg border transition-all text-left ${
                      exportFormat === format.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                        : 'border-gray-200 dark:border-[#3C3C3C] hover:border-gray-300 dark:hover:border-[#4C4C4C] bg-white dark:bg-[#2C2C2C]'
                    }`}
                  >
                    <h3 className="text-xs xs:text-sm font-medium text-gray-900 dark:text-white leading-tight">{format.label}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 xs:mt-1 leading-tight">{format.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Date Range */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h2 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 xs:mb-4 sm:mb-6 flex items-center gap-1.5 xs:gap-2">
                <Calendar className="text-purple-600" size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                Date Range
              </h2>
              
              <div className="space-y-2 xs:space-y-3">
                {dateRangeOptions.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setDateRange(range.id)}
                    className={`w-full flex items-center justify-between p-2.5 xs:p-3 sm:p-4 rounded-md xs:rounded-lg border transition-all ${
                      dateRange === range.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                        : 'border-gray-200 dark:border-[#3C3C3C] hover:border-gray-300 dark:hover:border-[#4C4C4C] bg-white dark:bg-[#2C2C2C]'
                    }`}
                  >
                    <div className="text-left">
                      <h3 className="text-xs xs:text-sm font-medium text-gray-900 dark:text-white leading-tight">{range.label}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">{range.description}</p>
                    </div>
                    <div className={`w-3 h-3 xs:w-4 xs:h-4 rounded-full border-2 ${
                      dateRange === range.id
                        ? 'border-blue-500 bg-blue-500' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Export Button */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div>
                  <h3 className="text-xs xs:text-sm sm:text-base font-medium text-gray-900 dark:text-white leading-tight">Ready to Export</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 xs:mt-1 leading-tight">
                    {selectedData.length} data type{selectedData.length !== 1 ? 's' : ''} selected • {exportFormat.toUpperCase()} format
                  </p>
                </div>
                <button
                  onClick={handleExport}
                  disabled={selectedData.length === 0 || isExporting}
                  className="w-full sm:w-auto px-4 xs:px-6 py-2 xs:py-3 bg-blue-600 text-white rounded-md xs:rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 text-xs xs:text-sm font-medium"
                >
                  {isExporting ? (
                    <>
                      <Loader size={14} className="animate-spin" />
                      Exporting...
                    </>
                  ) : (
                    <>
                      <Download size={14} />
                      Start Export
                    </>
                  )}
                </button>
              </div>

              {/* Export Status */}
              {exportStatus !== 'idle' && (
                <div className="mt-3 xs:mt-4 p-2.5 xs:p-3 rounded-md xs:rounded-lg border">
                  {exportStatus === 'processing' && (
                    <div className="flex items-center gap-2 text-blue-600">
                      <Loader size={14} className="animate-spin" />
                      <span className="text-xs xs:text-sm">Processing your export request...</span>
                    </div>
                  )}
                  {exportStatus === 'completed' && (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle size={14} />
                      <span className="text-xs xs:text-sm">Export completed! Check your downloads folder.</span>
                    </div>
                  )}
                  {exportStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-600">
                      <AlertCircle size={14} />
                      <span className="text-xs xs:text-sm">Export failed. Please try again.</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-3 xs:space-y-4 sm:space-y-6">
            {/* Export Summary */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3 sm:mb-4">
                <Download size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-blue-600" />
                <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Export Summary</h3>
              </div>
              <div className="space-y-1.5 xs:space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 dark:text-gray-300">Data Types</span>
                  <span className="text-xs font-medium text-gray-900 dark:text-white">{selectedData.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 dark:text-gray-300">Format</span>
                  <span className="text-xs font-medium text-gray-900 dark:text-white">{exportFormat.toUpperCase()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 dark:text-gray-300">Date Range</span>
                  <span className="text-xs font-medium text-gray-900 dark:text-white">
                    {dateRangeOptions.find(r => r.id === dateRange)?.label}
                  </span>
                </div>
              </div>
            </div>

            {/* Important Information */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3 sm:mb-4">
                <AlertCircle size={14} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-yellow-600" />
                <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Important</h3>
              </div>
              <div className="space-y-2 xs:space-y-3 text-xs text-gray-700 dark:text-gray-300 leading-tight">
                <p>• Export files are available for 7 days</p>
                <p>• Large exports may take several minutes</p>
                <p>• You'll receive an email when ready</p>
                <p>• Files are encrypted for security</p>
              </div>
            </div>

            {/* Recent Exports */}
            <div className="bg-gray-50 dark:bg-[#1C1C1C] rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-6 border border-gray-200 dark:border-[#3C3C3C]">
              <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2 xs:mb-3 sm:mb-4">Recent Exports</h3>
              <div className="space-y-2 xs:space-y-3">
                <div className="flex items-center justify-between p-2 xs:p-2.5 bg-white dark:bg-[#2C2C2C] rounded-md border border-gray-200 dark:border-[#3C3C3C]">
                  <div>
                    <p className="text-xs font-medium text-gray-900 dark:text-white">Complete Export</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">2 days ago</p>
                  </div>
                  <span className="text-xs text-green-600 font-medium">Ready</span>
                </div>
                <div className="flex items-center justify-between p-2 xs:p-2.5 bg-white dark:bg-[#2C2C2C] rounded-md border border-gray-200 dark:border-[#3C3C3C]">
                  <div>
                    <p className="text-xs font-medium text-gray-900 dark:text-white">Search History</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">1 week ago</p>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">Expired</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataExportPage;