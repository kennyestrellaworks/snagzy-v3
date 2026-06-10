import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Package,
  MapPin,
  CreditCard,
  Truck,
  User,
  Store,
  ChevronDown,
} from 'lucide-react';
import { orders } from '../data/orders';
import OrderTimeline from '../components/OrderTimeline';
import {
  formatCurrency,
  formatDate,
  formatDateTime,
  getStatusColor,
  getPaymentStatusColor,
  formatPaymentMethod,
  formatStatus,
} from '../utils/orderHelpers';

const STATUS_OPTIONS = [
  { value: 'order_placed', label: 'Order Placed' },
  { value: 'payment_confirmed', label: 'Payment Confirmed' },
  { value: 'awaiting_payment', label: 'Awaiting Payment' },
  { value: 'processing', label: 'Processing' },
  { value: 'shipped', label: 'Shipped' },
  { value: 'out_for_delivery', label: 'Out for Delivery' },
  { value: 'delivered', label: 'Delivered' },
  { value: 'cancelled', label: 'Cancelled' },
  { value: 'refunded', label: 'Refunded' },
];

export default function OrderDetailPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  const order = orders.find((o) => o._id === orderId);

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Order Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            The order you're looking for doesn't exist
          </p>
          <button
            onClick={() => navigate('/orders')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Orders
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/orders')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Orders</span>
        </button>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {order.orderNumber}
              </h1>
              <p className="text-sm text-gray-500">
                Placed on {formatDate(order.createdAt)}
              </p>
            </div>
            {order.currentStatus !== 'delivered' && order.currentStatus !== 'cancelled' ? (
              <div className="relative w-fit">
                <button
                  onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
                    order.currentStatus
                  )} hover:opacity-80 transition-opacity`}
                >
                  {formatStatus(order.currentStatus)}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isStatusDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    <div className="p-2">
                      {STATUS_OPTIONS.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setIsStatusDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                            option.value === order.currentStatus
                              ? `${getStatusColor(option.value)} cursor-default`
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
                  order.currentStatus
                )}`}
              >
                {formatStatus(order.currentStatus)}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">Buyer</p>
                <p className="text-sm text-gray-600">
                  {order.buyerInfo.firstName} {order.buyerInfo.lastName}
                </p>
                <p className="text-sm text-gray-500">{order.buyerInfo.email}</p>
                <p className="text-sm text-gray-500">{order.buyerInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">Payment</p>
                <p className="text-sm text-gray-600">
                  {formatPaymentMethod(order.paymentInfo.method)}
                </p>
                <span
                  className={`inline-block px-2 py-0.5 rounded text-xs font-medium mt-1 ${getPaymentStatusColor(
                    order.paymentInfo.status
                  )}`}
                >
                  {formatStatus(order.paymentInfo.status)}
                </span>
                {order.paymentInfo.paidAt && (
                  <p className="text-xs text-gray-500 mt-1">
                    Paid: {formatDateTime(order.paymentInfo.paidAt)}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">Shipping</p>
                <p className="text-sm text-gray-600 capitalize">
                  {order.shippingInfo.method} ({order.shippingInfo.estimatedDays}{' '}
                  days)
                </p>
                <p className="text-sm text-gray-500">{order.shippingInfo.carrier}</p>
                {order.shippingInfo.trackingNumber && (
                  <p className="text-xs text-gray-500 mt-1 font-mono">
                    {order.shippingInfo.trackingNumber}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Order Items
              </h2>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item._id}
                    className="flex gap-4 pb-4 border-b border-gray-100 last:border-0"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">
                        {item.productName}
                      </h3>
                      {item.storeName && (
                        <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                          <Store className="w-3 h-3" />
                          <span>{item.storeName}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            {formatCurrency(item.subtotal, order.summary.currency)}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatCurrency(item.price, order.summary.currency)} each
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">
                    {formatCurrency(order.summary.subtotal, order.summary.currency)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping Fee</span>
                  <span className="text-gray-900">
                    {order.summary.shippingFee === 0
                      ? 'Free'
                      : formatCurrency(
                          order.summary.shippingFee,
                          order.summary.currency
                        )}
                  </span>
                </div>
                {order.summary.discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Discount</span>
                    <span className="text-green-600">
                      -{formatCurrency(order.summary.discount, order.summary.currency)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-semibold text-gray-900 text-lg">
                    {formatCurrency(order.summary.total, order.summary.currency)}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Delivery Address
                  </h2>
                  <p className="font-medium text-gray-900">
                    {order.shippingInfo.recipientName}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {order.shippingInfo.recipientPhone}
                  </p>
                  <div className="mt-3 text-sm text-gray-600">
                    <p>{order.shippingInfo.address.addressLine1}</p>
                    {order.shippingInfo.address.addressLine2 && (
                      <p>{order.shippingInfo.address.addressLine2}</p>
                    )}
                    <p>
                      {order.shippingInfo.address.city},{' '}
                      {order.shippingInfo.address.stateOrProvince}{' '}
                      {order.shippingInfo.address.zipCode}
                    </p>
                    <p>{order.shippingInfo.address.country}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <OrderTimeline
              timeline={order.timeline}
              currentStatus={order.currentStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
