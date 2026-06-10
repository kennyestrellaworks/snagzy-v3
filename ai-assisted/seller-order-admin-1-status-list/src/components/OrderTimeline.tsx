import { CheckCircle2, Circle } from 'lucide-react';
import { formatDateTime } from '../utils/orderHelpers';

interface TimelineItem {
  status: string;
  label: string;
  timestamp: string;
  description: string;
}

interface OrderTimelineProps {
  timeline: TimelineItem[];
  currentStatus: string;
}

export default function OrderTimeline({ timeline, currentStatus }: OrderTimelineProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Timeline</h2>
      <div className="space-y-6">
        {timeline.map((item, index) => {
          const isCompleted = !!item.timestamp;
          const isLast = index === timeline.length - 1;

          return (
            <div key={item.status} className="relative">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  {isCompleted ? (
                    <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                  ) : (
                    <Circle className="w-8 h-8 text-gray-300 flex-shrink-0" />
                  )}
                  {!isLast && (
                    <div
                      className={`w-0.5 flex-1 mt-2 ${
                        isCompleted ? 'bg-green-500' : 'bg-gray-200'
                      }`}
                      style={{ minHeight: '40px' }}
                    />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3
                        className={`font-semibold ${
                          isCompleted ? 'text-gray-900' : 'text-gray-400'
                        }`}
                      >
                        {item.label}
                      </h3>
                      <p
                        className={`text-sm mt-1 ${
                          isCompleted ? 'text-gray-600' : 'text-gray-400'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                    {item.timestamp && (
                      <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                        {formatDateTime(item.timestamp)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
