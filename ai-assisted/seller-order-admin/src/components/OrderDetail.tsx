import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Package,
  MapPin,
  CreditCard,
  Truck,
  Calendar,
  User,
  Mail,
  Phone,
  CheckCircle,
} from "lucide-react";
import { orders as ordersData } from "../data/orders.ts";
import type { Order } from "../data/orders.ts";

interface OrderDetailProps {
  orderId: string;
  onBack: () => void;
}

export default function OrderDetail({ orderId, onBack }: OrderDetailProps) {
  // single order (or null if not found)
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const statusOptions = [
    "order_placed",
    "payment_confirmed",
    "processing",
    "shipped",
    "out_for_delivery",
    "delivered",
    "cancelled",
    "awaiting_payment",
  ];

  useEffect(() => {
    // load initial data and find the right order
    const found = ordersData.find((o) => o._id === orderId) ?? null;
    setOrder(found);
    setLoading(false);
  }, [orderId]);

  const handleStatusChange = async (newStatus: string) => {
    console.log(newStatus);
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      delivered: "bg-green-100 text-green-800 border-green-300",
      shipped: "bg-blue-100 text-blue-800 border-blue-300",
      processing: "bg-yellow-100 text-yellow-800 border-yellow-300",
      cancelled: "bg-red-100 text-red-800 border-red-300",
      awaiting_payment: "bg-gray-100 text-gray-800 border-gray-300",
      order_placed: "bg-cyan-100 text-cyan-800 border-cyan-300",
      payment_confirmed: "bg-teal-100 text-teal-800 border-teal-300",
      out_for_delivery: "bg-indigo-100 text-indigo-800 border-indigo-300",
    };
    return colors[status] || "bg-gray-100 text-gray-800 border-gray-300";
  };

  // safer formatting: handles undefined/null
  const formatStatus = (str?: string | null): string => {
    if (!str) return "";
    // includes is safe on a real string; MDN notes it's been around since 2015
    // so normal modern environments support it. :contentReference[oaicite:0]{index=0}
    return str.includes("_") ? str.replace(/_/g, " ") : str;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Order not found
          </h2>
          <button
            onClick={onBack}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Back to orders
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Orders</span>
        </button>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Order Details
              </h1>
              <p className="text-gray-600">Order ID: {order._id}</p>
            </div>
            <div className="mt-4 lg:mt-0">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Update Status
              </label>

              <select
                value={order.currentStatus}
                onChange={(e) => handleStatusChange(e.target.value)}
                disabled={updating}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {formatStatus(status)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${getStatusColor(
              order.currentStatus
            )}`}
          >
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">
              {formatStatus(order.currentStatus)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">
                Customer Information
              </h2>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium text-gray-900">
                  {order.buyerInfo.buyerName}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <p className="text-sm text-gray-900">{order.buyerInfo.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <p className="text-sm text-gray-900">{order.buyerInfo.phone}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">
                Shipping Address
              </h2>
            </div>
            <div className="space-y-1 text-sm text-gray-900">
              <p>{order.buyerInfo.shippingInfo.address.addressLine1}</p>
              {order.buyerInfo.shippingInfo.address.addressLine2 && (
                <p>{order.buyerInfo.shippingInfo.address.addressLine2}</p>
              )}
              <p>
                {order.buyerInfo.shippingInfo.address.city},{" "}
                {order.buyerInfo.shippingInfo.address.stateOrProvince}{" "}
                {order.buyerInfo.shippingInfo.address.zipCode}
              </p>
              <p>{order.buyerInfo.shippingInfo.address.country}</p>
            </div>
            {order.buyerInfo.shippingInfo.trackingNumber && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Tracking Number</p>
                    <p className="text-sm font-medium text-gray-900">
                      {order.buyerInfo.shippingInfo.trackingNumber}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-900">
                Payment Information
              </h2>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Payment Method</p>
                <p className="font-medium text-gray-900 capitalize">
                  {formatStatus(order.paymentInfo.method)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Payment Status</p>
                <p className="font-medium text-gray-900 capitalize">
                  {order.paymentInfo.status}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Transaction ID</p>
                <p className="font-mono text-xs text-gray-900">
                  {order.paymentInfo.transactionId}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">Order Items</h2>
          </div>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div
                key={item._id}
                className="flex gap-4 pb-4 border-b border-gray-200 last:border-0"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.productName}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.description}
                  </p>
                  {item.variant.attributeOptions &&
                    item.variant.attributeOptions.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {item.variant.attributeOptions.map((option, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {option.attribute}: {option.value}
                          </span>
                        ))}
                      </div>
                    )}
                  <p className="text-sm text-gray-600">
                    Store: {item.variant.storeInfo.storeName}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">
                    Qty: {item.variant.quantity}
                  </p>
                  <p className="font-semibold text-gray-900">
                    ${item.variant.subTotal.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Items Total</span>
                <span className="text-gray-900">
                  ${order.summary.itemsTotalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping Fee</span>
                <span className="text-gray-900">
                  ${order.summary.shippingFee.toFixed(2)}
                </span>
              </div>
              {order.summary.discount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-green-600">
                    -${order.summary.discount.toFixed(2)}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">
                  {order.summary.currency} $
                  {order.summary.orderTotalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Order Timeline
            </h2>
          </div>
          <div className="space-y-4">
            {order.timeline.map((event, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      index === order.timeline.length - 1
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    }`}
                  ></div>
                  {index < order.timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-300 my-1"></div>
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {event.label}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {event.description}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500">
                      {formatDate(event.timestamp)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
