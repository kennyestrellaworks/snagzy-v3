export const getStatusColor = (status: string): string => {
  const statusColors: Record<string, string> = {
    order_placed: 'bg-blue-100 text-blue-800',
    payment_confirmed: 'bg-green-100 text-green-800',
    awaiting_payment: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-amber-100 text-amber-800',
    shipped: 'bg-cyan-100 text-cyan-800',
    out_for_delivery: 'bg-indigo-100 text-indigo-800',
    delivered: 'bg-emerald-100 text-emerald-800',
    cancelled: 'bg-red-100 text-red-800',
    refunded: 'bg-gray-100 text-gray-800',
  };
  return statusColors[status] || 'bg-gray-100 text-gray-800';
};

export const getPaymentStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    paid: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    refunded: 'bg-gray-100 text-gray-800',
    failed: 'bg-red-100 text-red-800',
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatPaymentMethod = (method: string): string => {
  const methods: Record<string, string> = {
    credit_card: 'Credit Card',
    debit_card: 'Debit Card',
    paypal: 'PayPal',
    e_wallet: 'E-Wallet',
    bank_transfer: 'Bank Transfer',
  };
  return methods[method] || method;
};

export const formatStatus = (status: string): string => {
  return status
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
