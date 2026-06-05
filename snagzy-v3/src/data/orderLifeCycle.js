export const orderLifeCycle = [
  {
    _id: "orderlifecycle5j298pfa9wz84hrp88t027he",
    slug: "order_placed",
    label: "Order Placed",
    description: "Customer 'success'fully placed the order.",
    buyerCancelable: true,
    sequence: 1,
    type: "success",
    filterType: "order_status_success",
    isTerminal: false,
  },
  {
    _id: "orderlifecycleu16n4x2p52w89yvus87ydq89",
    slug: "payment_pending",
    label: "Payment Pending",
    description: "Waiting for customer payment confirmation.",
    buyerCancelable: true,
    sequence: 2,
    type: "success",
    filterType: "order_status_success",
    isTerminal: false,
  },
  {
    _id: "orderlifecyclefy40j79xvunz3705khf082g6",
    slug: "payment_confirmed",
    label: "Payment Confirmed",
    description: "Payment has been verified and confirmed.",
    buyerCancelable: true,
    sequence: 3,
    type: "success",
    filterType: "order_status_success",
    isTerminal: false,
  },
  {
    _id: "orderlifecycle55402om58i36ke3e94qqvydz",
    slug: "processing",
    label: "Processing",
    description: "Seller is preparing the items.",
    buyerCancelable: true,
    sequence: 4,
    type: "success",
    filterType: "order_status_success",
    isTerminal: false,
  },
  {
    _id: "orderlifecycle90j9335d6948qyshvgd9cyp1",
    slug: "packed",
    label: "Packed",
    description: "Items have been packed and ready for shipment.",
    buyerCancelable: true,
    sequence: 5,
    type: "success",
    filterType: "order_status_success",
    isTerminal: false,
  },
  {
    _id: "orderlifecyclen62z84dg615b24gky2ky06hm",
    slug: "shipped",
    label: "Shipped",
    description: "Order has been handed over to the courier.",
    buyerCancelable: false,
    sequence: 6,
    type: "success",
    filterType: "order_status_success",
    isTerminal: false,
  },
  {
    _id: "orderlifecycleut72kb5si33665cgctp8404u",
    slug: "out_for_delivery",
    label: "Out for Delivery",
    description: "Courier is delivering the order.",
    buyerCancelable: false,
    sequence: 7,
    type: "success",
    filterType: "order_status_success",
    isTerminal: false,
  },
  {
    _id: "orderlifecycle85pco9s2w20fl293x83arhf0",
    slug: "delivered",
    label: "Delivered",
    description: "Order 'success'fully delivered to the customer.",
    buyerCancelable: false,
    sequence: 8,
    type: "success",
    filterType: "order_status_success",
    isTerminal: false,
  },
  {
    _id: "orderlifecyclea54xi9kz09xd2ed6foo29916",
    slug: "completed",
    label: "Completed",
    description: "Order completed with no issues.",
    buyerCancelable: false,
    sequence: 9,
    type: "success",
    filterType: "order_status_success",
    isTerminal: true,
  },
  {
    _id: "orderlifecyclezlzy554222utwl6n6bw799h3",
    slug: "cancelled_by_buyer",
    label: "Cancelled by Buyer",
    description: "Order cancelled by the customer.",
    sequence: 99,
    type: "failure",
    filterType: "order_status_failure",
    isTerminal: true,
  },
  {
    _id: "orderlifecyclesj1i6852e1up43nqei06n04w",
    slug: "cancelled_by_seller",
    label: "Cancelled by Seller",
    description: "Order cancelled by the seller.",
    sequence: 99,
    type: "failure",
    filterType: "order_status_failure",
    isTerminal: true,
  },
  {
    _id: "orderlifecycle1s12v2592s86xasid6y0pif5",
    slug: "delivery_failed",
    label: "Delivery Failed",
    description: "Courier failed to deliver the order.",
    sequence: 99,
    type: "failure",
    filterType: "order_status_failure",
    isTerminal: true,
  },
  {
    _id: "orderlifecycle0rg16g7b64tcbg25w539xn4d",
    slug: "attempted_delivery",
    label: "Attempted Delivery",
    description: "Courier attempted to re-deliver the order.",
    sequence: 99,
    type: "failure",
    filterType: "order_status_failure",
    isTerminal: true,
  },
  {
    _id: "orderlifecycleg5u9s3258vsdfg02gz2d9u42",
    slug: "return_request",
    label: "Return Request",
    description: "Customer requested return of order.",
    sequence: 99,
    type: "failure",
    filterType: "order_status_failure",
    isTerminal: true,
  },
  {
    _id: "orderlifecyclerk3bv89940waug450br1bz69",
    slug: "order_returned",
    label: "Order Returned",
    description: "Order returned by the customer or courier.",
    sequence: 99,
    type: "failure",
    filterType: "order_status_failure",
    isTerminal: true,
  },
  {
    _id: "orderlifecycleg65u9s302gz2d9cb2jzu4z5m28",
    slug: "refund_success",
    label: "Refund Success",
    description: "Payment has been refunded to the customer.",
    sequence: 100,
    type: "failure",
    filterType: "order_status_failure",
    isTerminal: true,
  },
];

export const statusOrderPlaced = ["order_placed"];
export const statusPaymentPending = ["payment_pending"];
export const statusPaymentConfirmed = ["payment_confirmed"];
export const statusProcessing = ["processing"];
export const statusPacked = ["packed"];
export const statusShipped = ["shipped"];
export const statusOutForDelivery = ["out_for_delivery"];
export const statusDelivered = ["delivered"];
export const statusCompleted = ["completed"];
export const statusCancelledByBuyer = ["cancelled_by_buyer"];
export const statusCancelledBySeller = ["cancelled_by_seller"];
export const statusDeliveryFailed = ["delivery_failed"];
export const statusAttemptedDelivery = ["attempted_delivery"];
export const statusReturnRequest = ["return_request"];
export const statusOrderReturned = ["order_returned"];
export const statusRefundSuccess = ["refund_success"];

export const successfulOrderStatuses = ["completed", "delivered"];
export const pendingOrderStatuses = [
  "order_placed",
  "payment_pending",
  "payment_confirmed",
  "processing",
  "packed",
  "shipped",
  "out_for_delivery",
  "delivery_failed",
  "attempted_delivery",
];
export const unsuccessfulOrderStatuses = [
  "cancelled_by_buyer",
  "cancelled_by_buyer",
  "cancelled_by_seller",
  "return_request",
  "order_returned",
  "refund_success",
];
