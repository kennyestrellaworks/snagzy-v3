import { useState } from 'react';
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  X,
  Lightbulb,
} from 'lucide-react';

export function Alerts() {
  const [showDismissible, setShowDismissible] = useState(true);

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Alerts</h1>
        <p className="text-slate-600 mb-8">
          Notification messages for different contexts
        </p>

        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Basic Alerts
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-blue-900 font-medium mb-1">
                    Information
                  </p>
                  <p className="text-sm text-blue-800">
                    This is an informational alert message.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-emerald-900 font-medium mb-1">
                    Success
                  </p>
                  <p className="text-sm text-emerald-800">
                    Your action was completed successfully.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-orange-900 font-medium mb-1">
                    Warning
                  </p>
                  <p className="text-sm text-orange-800">
                    Please review this warning message carefully.
                  </p>
                </div>
              </div>

              <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-rose-900 font-medium mb-1">
                    Error
                  </p>
                  <p className="text-sm text-rose-800">
                    An error occurred while processing your request.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Solid Alerts
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-600 rounded-lg p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-white font-medium mb-1">
                    Information
                  </p>
                  <p className="text-sm text-blue-50">
                    This is an informational alert with a solid background.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-600 rounded-lg p-4 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-white font-medium mb-1">Success</p>
                  <p className="text-sm text-emerald-50">
                    Your changes have been saved successfully.
                  </p>
                </div>
              </div>

              <div className="bg-orange-600 rounded-lg p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-white font-medium mb-1">Warning</p>
                  <p className="text-sm text-orange-50">
                    This action may have unintended consequences.
                  </p>
                </div>
              </div>

              <div className="bg-rose-600 rounded-lg p-4 flex items-start gap-3">
                <XCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-white font-medium mb-1">Error</p>
                  <p className="text-sm text-rose-50">
                    Failed to connect to the server.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Dismissible Alerts
            </h2>
            <div className="space-y-4">
              {showDismissible && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-blue-900 font-medium mb-1">
                      Dismissible Alert
                    </p>
                    <p className="text-sm text-blue-800">
                      You can close this alert by clicking the X button.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowDismissible(false)}
                    className="text-blue-600 hover:text-blue-700 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {!showDismissible && (
                <button
                  onClick={() => setShowDismissible(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Show Dismissible Alert
                </button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Alerts with Actions
            </h2>
            <div className="space-y-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-orange-900 font-medium mb-1">
                      Update Available
                    </p>
                    <p className="text-sm text-orange-800">
                      A new version of the application is available. Update now
                      to get the latest features.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 ml-8">
                  <button className="px-4 py-1.5 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                    Update Now
                  </button>
                  <button className="px-4 py-1.5 border border-orange-300 text-orange-700 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors">
                    Later
                  </button>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-emerald-900 font-medium mb-1">
                      Verification Complete
                    </p>
                    <p className="text-sm text-emerald-800">
                      Your email has been verified. You now have access to all
                      features.
                    </p>
                  </div>
                </div>
                <button className="ml-8 px-4 py-1.5 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Custom Alert
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-base text-purple-900 font-semibold mb-2">
                    Pro Tip
                  </p>
                  <p className="text-sm text-purple-800 leading-relaxed">
                    You can create custom alerts with gradients and unique
                    styling to match your brand identity. Get creative with
                    colors and layouts!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
