import { Link } from 'react-router-dom';
import { ChevronRight, Package } from 'lucide-react';
import {
  formatCurrency,
  formatDate,
  getStatusColor,
  formatStatus,
} from '../utils/orderHelpers';

interface OrderItem {
  _id: string;
  productName: string;
  quantity: number;
  price: number;
  subtotal: number;
  image: string;
}

interface Order {
  _id: string;
  orderNumber: string;
  items: OrderItem[];
  summary: {
    total: number;
    currency: string;
  };
  currentStatus: string;
  createdAt: string;
}

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  const firstThreeItems = order.items.slice(0, 3);
  const remainingCount = order.items.length - 3;

  return (
    <Link
      to={`/orders/${order._id}`}
      className="block bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-900">{order.orderNumber}</h3>
            </div>
            <p className="text-sm text-gray-500">{formatDate(order.createdAt)}</p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
              order.currentStatus
            )}`}
          >
            {formatStatus(order.currentStatus)}
          </span>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex -space-x-2">
            {firstThreeItems.map((item) => (
              <div
                key={item._id}
                className="w-16 h-16 rounded-lg border-2 border-white overflow-hidden bg-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.productName}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {remainingCount > 0 && (
              <div className="w-16 h-16 rounded-lg border-2 border-white bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  +{remainingCount}
                </span>
              </div>
            )}
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-600">
              {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-sm text-gray-500 mb-1">Order Total</p>
            <p className="text-lg font-semibold text-gray-900">
              {formatCurrency(order.summary.total, order.summary.currency)}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </Link>
  );
}
