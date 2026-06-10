export interface Order {
  _id: string;
  buyerInfo: BuyerInfo;
  items: OrderItem[];
  summary: OrderSummary;
  paymentInfo: PaymentInfo;
  currentStatus: string;
  timeline: OrderTimeline[];
  createdAt: string;
  updatedAt: string;
}

export interface BuyerInfo {
  buyerId: string;
  buyerName: string;
  email: string;
  phone: string;
  image: string;
  shippingInfo: ShippingInfo;
}

export interface ShippingInfo {
  method: string;
  estimatedDays: number;
  carrier: string;
  trackingNumber: string;
  address: ShippingAddress;
}

export interface ShippingAddress {
  addressLine1: string;
  addressLine2: string;
  city: string;
  stateOrProvince: string;
  barangay: string;
  zipCode: string;
  country: string;
}

export interface OrderItem {
  _id: string;
  productId: string;
  productName: string;
  description: string;
  variant: Variant;
}

export interface Variant {
  _id: string;
  sku: string;
  attributeOptions: AttributeOption[];
  price: number;
  quantity: number;
  subTotal: number;
  images: string[];
  storeInfo: StoreInfo;
}

export interface AttributeOption {
  attribute: string;
  value: string;
}

export interface StoreInfo {
  storeId: string;
  storeName: string;
  storeImage: string;
  ownerId: string;
  ownerName: string;
  phone: string;
  email: string;
}

export interface OrderSummary {
  itemsTotalPrice: number;
  shippingFee: number;
  discount: number;
  orderTotalPrice: number;
  currency: string;
}

export interface PaymentInfo {
  method: string;
  status: string;
  paidAt: string;
  transactionId: string;
}

export interface OrderTimeline {
  status: string;
  label: string;
  timestamp: string;
  description: string;
}

export const orders: Order[] = [
  {
    _id: "orderv47q9zgg0p3c66q5b6",
    buyerInfo: {
      buyerId: "people15428116hinbtegp",
      buyerName: "Christian Rogers",
      email: "christian.rodgers@gmail.com",
      phone: "+639991059200",
      image: "images/user-male-christian-harris-rogers.jpg",
      shippingInfo: {
        method: "express",
        estimatedDays: 2,
        carrier: "UPS",
        trackingNumber: "997610804017404",
        address: {
          addressLine1: "53211 Joyce Wall",
          addressLine2: "",
          city: "New Vanessa",
          stateOrProvince: "CT",
          barangay: "",
          zipCode: "00950",
          country: "United States",
        },
      },
    },
    items: [
      {
        _id: "orderitemjjf8320t717rzaep21",
        productId: "product66e92ee00051dc2c4fa652a7",
        productName: "Nike Sportswear Club Tee",
        description:
          "Classic cotton tee featuring the Nike logo, perfect for casual wear and sports activities.",
        variant: {
          _id: "variantbh39yu06t1t8mx347m5p",
          sku: "nike-sportswear-club-tee-xs-red",
          attributeOptions: [
            { attribute: "Shirt Size", value: "XS" },
            { attribute: "Color", value: "black" },
          ],
          price: 31.5,
          quantity: 2,
          subTotal: 63.0,
          images: ["images/nike-sportswear-club-tee-red.jpg"],
          storeInfo: {
            storeId: "store7840556196lkonidlvdn",
            storeName: "Kenstore",
            storeImage: "images/store-kenstore-profile.jpg",
            ownerId: "people43210987nopqrstu",
            ownerName: "Kenny Estrella",
            phone: "+6392223334455",
            email: "kennyestrellaworks@email.com",
          },
        },
      },
      {
        _id: "orderitemzmo0upx65vs056i583",
        productId: "product66e928f70051dc2c4fa65252",
        productName: "Adidas Ultraboost 21",
        description:
          "A high-performance running shoe that offers ultimate comfort with responsive Boost cushioning and a sleek, sock-like fit",
        variant: {
          _id: "variant4750g54lg5t2gkur2p",
          sku: "adidas-ultraboost-21-us-7-5",
          attributeOptions: [{ attribute: "Shoe Size", value: "US 7.5" }],
          price: 23.75,
          quantity: 1,
          subTotal: 23.75,
          images: ["images/adidas-ultraboost-21.jpg"],
          storeInfo: {
            storeId: "store9d8f7g6h5j4k3l2m1n0b",
            storeName: "EverChic Apparel",
            storeImage: "images/store-everchic-apparel-profile.jpg",
            ownerId: "people99001122hijklmno",
            ownerName: "Jessica Garcia",
            phone: "+639201112233",
            email: "jessica.garcia@email.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 86.75,
      shippingFee: 10.0,
      discount: 0,
      orderTotalPrice: 96.75,
      currency: "USD",
    },
    paymentInfo: {
      method: "credit_card",
      status: "paid",
      paidAt: "2024-10-15T10:35:00.000Z",
      transactionId: "TXN-NT20D1P6OZ36CK474Z",
    },
    currentStatus: "delivered",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-15T10:30:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-15T10:35:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "processing",
        label: "Processing",
        timestamp: "2024-10-15T11:45:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        status: "shipped",
        label: "Shipped",
        timestamp: "2024-10-16T14:20:00.000Z",
        description: "Your order is on the way! Track it with FedEx.",
      },
      {
        status: "out_for_delivery",
        label: "Out for Delivery",
        timestamp: "2024-10-19T08:00:00.000Z",
        description: "Your order is out for delivery today.",
      },
      {
        status: "delivered",
        label: "Delivered",
        timestamp: "2024-10-19T09:15:00.000Z",
        description: "Package delivered successfully.",
      },
    ],
    createdAt: "2024-10-15T10:30:00.000Z",
    updatedAt: "2024-10-19T09:15:00.000Z",
  },
  {
    _id: "orderueh12j889dno70l6a5",
    buyerInfo: {
      buyerId: "people12353156xtyhhnxf",
      buyerName: "Michael Ford",
      phone: "+639041729500",
      email: "michael.ford@gmail.com",
      image: "images/user-male-michael-lee-ford.jpg",
      shippingInfo: {
        method: "express",
        estimatedDays: 2,
        carrier: "UPS",
        trackingNumber: "925636646875470",
        address: {
          addressLine1: "61920 Stephanie Square",
          addressLine2: "Apt. 342",
          city: "Rhodesview",
          stateOrProvince: "WV",
          barangay: "",
          zipCode: "11383",
          country: "United States",
        },
      },
    },
    items: [
      {
        _id: "orderitemz8v4c63lsug8hd6422",
        productId: "product66e929400051dc2c4fa6525b",
        productName: "Asics Gel-Kayano 28",
        description:
          "Stability running shoe with responsive GEL technology, designed for overpronators. It offers superior support and cushioning.",
        variant: {
          _id: "variantan9og0394w8pxwy102",
          sku: "asics-gel-kayano-28-us-8",
          attributeOptions: [{ attribute: "Shoe Size", value: "US 8" }],
          price: 26.25,
          quantity: 1,
          subTotal: 26.25,
          images: ["images/asics-gel-kayano-28.jpg"],
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage: "images/store-thread-and-co-profile.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
      {
        _id: "orderitem6938a1f9e91tsg4mzu",
        productId: "product66e929bd0051dc2c4fa6526a",
        productName: "Converse Chuck Taylor All Star",
        description:
          "Classic high-top sneaker with a canvas upper, rubber sole, and timeless design that has been popular for generations.",
        variant: {
          _id: "variant2xden6h0rm29d1r7w780",
          sku: "converse-chuck-taylor-all-star-us-7-5",
          attributeOptions: [{ attribute: "Shoe Size", value: "US 7.5" }],
          price: 26.75,
          quantity: 2,
          subTotal: 53.5,
          images: ["images/converse-chuck-taylor-all-star.jpg"],
          storeInfo: {
            storeId: "store9d8f7g6h5j4k3l2m1n0b",
            storeName: "EverChic Apparel",
            storeImage: "images/store-everchic-apparel-profile.jpg",
            ownerId: "people99001122hijklmno",
            ownerName: "Jessica Garcia",
            phone: "+639201112233",
            email: "jessica.garcia@email.com",
          },
        },
      },
      {
        _id: "orderitem9lz33op52uxf76wd26",
        productId: "product66e92f670051dc2c4fa652b9",
        productName: "Hanes Men's Tagless T-Shirt",
        description:
          "Basic tagless t-shirt made with comfort and affordability in mind, perfect for daily wear.",
        variant: {
          _id: "variantajcgjy59oq97v32204",
          sku: "converse-chuck-taylor-all-star-us-7-5",
          attributeOptions: [
            { attribute: "Shirt Size", value: "M" },
            { attribute: "Color", value: "White" },
          ],
          price: 25.75,
          quantity: 2,
          subTotal: 51.5,
          images: ["images/hanes-mens-tagless-t-shirt-white.jpg"],
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage: "images/store-thread-and-co-profile.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 131.25,
      shippingFee: 7.0,
      discount: 0,
      orderTotalPrice: 138.25,
      currency: "USD",
    },
    paymentInfo: {
      method: "paypal",
      status: "paid",
      paidAt: "2024-10-18T14:25:00.000Z",
      transactionId: "TXN-20241018-0002",
    },
    currentStatus: "delivered",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-18T14:20:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-18T14:25:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "processing",
        label: "Processing",
        timestamp: "2024-10-18T15:30:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        status: "shipped",
        label: "Shipped",
        timestamp: "2024-10-19T16:00:00.000Z",
        description: "Your order is on the way! Track it with UPS.",
      },
      {
        status: "delivered",
        label: "Delivered",
        timestamp: "2024-10-22T10:45:00.000Z",
        description: "Package delivered successfully.",
      },
    ],
    createdAt: "2024-10-15T10:30:00.000Z",
    updatedAt: "2024-10-19T09:15:00.000Z",
  },
  {
    _id: "order278rw8i88ye1k1ux7y",
    buyerInfo: {
      buyerId: "people09176612nvhufunv",
      buyerName: "Lauren Peterson",
      phone: "+639528648200",
      email: "lauren.peterson@yahoo.com",
      image: "images/user-female-lauren-wilson-peterson.jpg",
      shippingInfo: {
        method: "standard",
        estimatedDays: 3,
        carrier: "DHL",
        trackingNumber: "845368780190491",
        address: {
          addressLine1: "Unit 3220",
          addressLine2: "Box 4324",
          city: "DPO",
          stateOrProvince: "AA",
          barangay: "",
          zipCode: "56524",
          country: "United States",
        },
      },
    },
    items: [
      {
        _id: "orderitem6gu6l21rhp0364qnf8",
        productId: "product66e92f290051dc2c4fa652b0",
        productName: "Carhartt K87 Workwear Pocket T-Shirt",
        description:
          "Heavyweight cotton t-shirt with a front pocket, designed for durability and everyday workwear.",
        variant: {
          _id: "variant9uoa1pzdpdyt16155821",
          sku: "carhartt-k87-workwear-pocket-t-shirt-s-navy-blue",
          attributeOptions: [
            { attribute: "Shirt Size", value: "S" },
            { attribute: "Color", value: "Navy Blue" },
          ],
          price: 27.25,
          quantity: 2,
          subTotal: 54.55,
          images: ["images/carhartt-k87-workwear-pocket-t-shirt-navy-blue.jpg"],
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage: "images/store-velvet-hanger-profile.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 54.55,
      shippingFee: 12.0,
      discount: 0,
      orderTotalPrice: 66.55,
      currency: "USD",
    },
    paymentInfo: {
      method: "debit_card",
      status: "paid",
      paidAt: "2024-10-20T09:05:00.000Z",
      transactionId: "TXN-3K3GMAX218Z72DPU02",
    },
    currentStatus: "delivered",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-20T09:00:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-20T09:05:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "processing",
        label: "Processing",
        timestamp: "2024-10-20T10:15:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        status: "shipped",
        label: "Shipped",
        timestamp: "2024-10-21T08:30:00.000Z",
        description: "Your order is on the way! Track it with DHL.",
      },
      {
        status: "delivered",
        label: "Delivered",
        timestamp: "2024-10-24T14:00:00.000Z",
        description: "Package delivered successfully.",
      },
    ],
    createdAt: "2024-10-20T09:00:00.000Z",
    updatedAt: "2024-10-24T14:00:00.000Z",
  },
  {
    _id: "orderba6unn125972sf8uw8",
    buyerInfo: {
      buyerId: "people81994332xhkbtirv",
      buyerName: "Robert Nelson",
      phone: "+639917672100",
      email: "robert.nelson@gmail.com",
      image: "images/user-male-robert-robinson-nelson.jpg",
      shippingInfo: {
        method: "express",
        estimatedDays: 2,
        carrier: "FedEx",
        trackingNumber: "091127530998011",
        address: {
          addressLine1: "19032 Anderson Course",
          addressLine2: "Suite 352",
          city: "West Brady",
          stateOrProvince: "HI",
          barangay: "",
          zipCode: "69119",
          country: "United States",
        },
      },
    },
    items: [
      {
        _id: "orderitemad51a5r7m28txv37i6",
        productId: "product66e92f290051dc2c4fa652b0",
        productName: "Gildan Heavy Cotton T-Shirt",
        description:
          "Heavyweight cotton t-shirt, known for its durability and comfort, available in a wide range of colors.",
        variant: {
          _id: "variant6p6k0ij5t5na6u5jr721",
          sku: "gildan-heavy-cotton-t-shirt-m-maroon",
          attributeOptions: [
            { attribute: "Shirt Size", value: "M" },
            { attribute: "Color", value: "Maroon" },
          ],
          price: 21.75,
          quantity: 1,
          subTotal: 21.75,
          images: ["images/gildan-heavy-cotton-t-shirt-maroon.jpg"],
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage: "images/store-velvet-hanger-profile.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 21.75,
      shippingFee: 12.0,
      discount: 0,
      orderTotalPrice: 33.75,
      currency: "USD",
    },
    paymentInfo: {
      method: "credit_card",
      status: "paid",
      paidAt: "2024-10-22T11:35:00.000Z",
      transactionId: "TXN-A3IFE8F506X3T520LI",
    },
    currentStatus: "delivered",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-22T11:30:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-22T11:35:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "processing",
        label: "Processing",
        timestamp: "2024-10-22T12:45:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        status: "shipped",
        label: "Shipped",
        timestamp: "2024-10-23T09:00:00.000Z",
        description: "Your order is on the way! Track it with FedEx.",
      },
      {
        status: "delivered",
        label: "Delivered",
        timestamp: "2024-10-26T16:30:00.000Z",
        description: "Package delivered successfully.",
      },
    ],
    createdAt: "2024-10-22T11:30:00.000Z",
    updatedAt: "2024-10-26T16:30:00.000Z",
  },
  {
    _id: "orderrxp52cf9c70803xw9q",
    buyerInfo: {
      buyerId: "people72664990zvravqrr",
      buyerName: "Peter Herrera",
      phone: "+639058690100",
      email: "peter.herrera@gmail.com",
      image: "images/user-male-peter-clark-herrera.jpg",
      shippingInfo: {
        method: "standard",
        estimatedDays: 4,
        carrier: "USPS",
        trackingNumber: "175090922136625",
        address: {
          addressLine1: "75257 Jennifer Street",
          addressLine2: "Suite 216",
          city: "Millerchester",
          stateOrProvince: "VA",
          barangay: "",
          zipCode: "25661",
          country: "United States",
        },
      },
    },
    items: [
      {
        _id: "orderitem90851uuhoi7yy4m7t3",
        productId: "product66e930580051dc2c4fa652ca",
        productName: "Ray-Ban Aviator Classic",
        description:
          "Iconic aviator sunglasses with a metal frame and polarized lenses, offering timeless style and UV protection.",
        variant: {
          _id: "variant271pll3j379bsva65j7v",
          sku: "ray-ban-aviator-classic",
          attributeOptions: [],
          price: 15.75,
          quantity: 1,
          subTotal: 15.75,
          images: ["images/ray-ban-aviator-classic.jpg"],
          storeInfo: {
            storeId: "store9d8f7g6h5j4k3l2m1n0b",
            storeName: "EverChic Apparel",
            storeImage: "images/store-everchic-apparel-profile.jpg",
            ownerId: "people99001122hijklmno",
            ownerName: "Jessica Garcia",
            phone: "+639201112233",
            email: "jessica.garcia@email.com",
          },
        },
      },
      {
        _id: "orderitem72uvs7l8it0p30d91x",
        productId: "product66e9309f0051dc2c4fa652d3",
        productName: "Warby Parker Percey Eyeglasses",
        description:
          "Classic round eyeglasses with an acetate frame. Perfect for a modern, sophisticated look with prescription lens options.",
        variant: {
          _id: "variantdt511i6kh29to5d221we0t",
          sku: "warby-parker-percey-eyeglasses",
          attributeOptions: [],
          price: 20.25,
          quantity: 2,
          subTotal: 40.5,
          images: ["images/warby-parker-percey-eyeglasses.jpg"],
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage: "images/store-thread-and-co-profile.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
      {
        _id: "orderitemml09f53br73tma62p1",
        productId: "product66e930d00051dc2c4fa652d9",
        productName: "Maui Jim Kawika Polarized Sunglasses",
        description:
          "Vintage-inspired sunglasses with polarized lenses and a lightweight, durable frame. Offers excellent UV protection.",
        variant: {
          _id: "variant4l070b53td6xfp1dfh72i3",
          sku: "maui-jim-kawika-polarized-sunglasses",
          attributeOptions: [],
          price: 22.5,
          quantity: 1,
          subTotal: 22.5,
          images: ["images/maui-jim-kawika-polarized-sunglasses.jpg"],
          storeInfo: {
            storeId: "store7840556196lkonidlvdn",
            storeName: "Kenstore",
            storeImage: "images/store-kenstore-profile.jpg",
            ownerId: "people43210987nopqrstu",
            ownerName: "Kenny Estrella",
            phone: "+6392223334455",
            email: "kennyestrellaworks@email.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 78.75,
      shippingFee: 10.0,
      discount: 0,
      orderTotalPrice: 88.75,
      currency: "USD",
    },
    paymentInfo: {
      method: "credit_card",
      status: "paid",
      paidAt: "2024-10-22T11:35:00.000Z",
      transactionId: "TXN-Q449C5I1GDNNNQ9031",
    },
    currentStatus: "delivered",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-22T11:30:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-22T11:35:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "processing",
        label: "Processing",
        timestamp: "2024-10-22T12:45:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        status: "shipped",
        label: "Shipped",
        timestamp: "2024-10-23T09:00:00.000Z",
        description: "Your order is on the way! Track it with FedEx.",
      },
      {
        status: "delivered",
        label: "Delivered",
        timestamp: "2024-10-26T16:30:00.000Z",
        description: "Package delivered successfully.",
      },
    ],
    createdAt: "2024-10-22T11:30:00.000Z",
    updatedAt: "2024-10-26T16:30:00.000Z",
  },
  {
    _id: "orderww1w0bs126w33mq0o9",
    buyerInfo: {
      buyerId: "people92858781kjjfrnsl",
      buyerName: "Heather Duarte",
      phone: "+639044838700",
      email: "heather.duarte@yahoo.com",
      image: "images/user-female-heather-cortez-duarte.jpg",
      shippingInfo: {
        method: "standard",
        estimatedDays: 3,
        carrier: "FedEx",
        trackingNumber: "185424565697553",
        address: {
          addressLine1: "258 Hernandez Key",
          addressLine2: "",
          city: "North Michelle",
          stateOrProvince: "OR",
          barangay: "",
          zipCode: "23345",
          country: "United States",
        },
      },
    },
    items: [
      {
        _id: "orderitemm016qmh2l4f20lo4v6",
        productId: "product66e92f290051dc2c4fa652b0",
        productName: "Carhartt K87 Workwear Pocket T-Shirt",
        description:
          "Heavyweight cotton t-shirt with a front pocket, designed for durability and everyday workwear.",
        variant: {
          _id: "variantom93p1pf07z53qcla896",
          sku: "carhartt-k87-workwear-pocket-t-shirt-m-navy-blue",
          attributeOptions: [
            { attribute: "Shirt size", value: "M" },
            { attribute: "Color", value: "Navy Blue" },
          ],
          price: 27.25,
          quantity: 1,
          subTotal: 27.25,
          images: ["images/carhartt-k87-workwear-pocket-t-shirt-navy-blue.jpg"],
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage: "images/store-velvet-hanger-profile.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
      {
        _id: "orderiteme2j6126yf5b0yc58cr",
        productId: "product66e92f290051dc2c4fa652b0",
        productName: "Carhartt K87 Workwear Pocket T-Shirt",
        description:
          "Heavyweight cotton t-shirt with a front pocket, designed for durability and everyday workwear.",
        variant: {
          _id: "variant7ow585whglgx1289xi47",
          sku: "carhartt-k87-workwear-pocket-t-shirt-m-blue",
          attributeOptions: [
            { attribute: "Shirt size", value: "M" },
            { attribute: "Color", value: "Blue" },
          ],
          price: 27.25,
          quantity: 1,
          subTotal: 27.25,
          images: ["images/carhartt-k87-workwear-pocket-t-shirt-blue.jpg"],
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage: "images/store-velvet-hanger-profile.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
      {
        _id: "orderitemzg25vo1l2c0x14m5a8",
        productId: "product66e9292b0051dc2c4fa65258",
        productName: "Brooks Ghost 14",
        description:
          "Smooth, balanced running shoe with soft cushioning and a breathable upper. Ideal for runners seeking a comfortable daily trainer.",
        variant: {
          _id: "varianttfy170n2bqb5p463g6",
          sku: "brooks-ghost-14-us-8",
          attributeOptions: [{ attribute: "Shoe size", value: "US 8" }],
          price: 26.25,
          quantity: 1,
          subTotal: 26.25,
          images: ["images/brooks-ghost-14.jpg"],
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage: "images/store-velvet-hanger-profile.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 80.75,
      shippingFee: 6.0,
      discount: 0,
      orderTotalPrice: 86.75,
      currency: "USD",
    },
    paymentInfo: {
      method: "credit_card",
      status: "paid",
      paidAt: "2024-10-15T10:35:00.000Z",
      transactionId: "TXN-NT20D1P6OZ36CK474Z",
    },
    currentStatus: "delivered",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-15T10:30:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-15T10:35:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "processing",
        label: "Processing",
        timestamp: "2024-10-15T11:45:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        status: "shipped",
        label: "Shipped",
        timestamp: "2024-10-16T14:20:00.000Z",
        description: "Your order is on the way! Track it with FedEx.",
      },
      {
        status: "out_for_delivery",
        label: "Out for Delivery",
        timestamp: "2024-10-19T08:00:00.000Z",
        description: "Your order is out for delivery today.",
      },
      {
        status: "delivered",
        label: "Delivered",
        timestamp: "2024-10-19T09:15:00.000Z",
        description: "Package delivered successfully.",
      },
    ],
    createdAt: "2024-10-22T11:30:00.000Z",
    updatedAt: "2024-10-26T16:30:00.000Z",
  },
  {
    _id: "orderfe65d5w1lnz04rt029",
    buyerInfo: {
      buyerId: "people54828839eqnjehsy",
      buyerName: "Jillian Brooks",
      phone: "+639530203500",
      email: "jillianbrooks@gmail.com",
      image: "images/user-male-peter-clark-herrera.jpg",
      shippingInfo: {
        method: "express",
        estimatedDays: 2,
        carrier: "UPS",
        trackingNumber: "595078168173814",
        address: {
          addressLine1: "PSC 1065",
          addressLine2: "Box 0517",
          city: "APO",
          stateOrProvince: "AP",
          barangay: "",
          zipCode: "32680",
          country: "United States",
        },
      },
    },
    items: [
      {
        _id: "orderitemid6tlt8259k6d6x07t",
        productId: "product66e929720051dc2c4fa65261",
        productName: "Hoka One One Clifton 8",
        description:
          "Ultra-cushioned running shoe known for its lightweight design and soft, responsive midsole. Perfect for long-distance running.",
        variant: {
          _id: "variant6d8rey067j8of50xz2",
          sku: "hoka-one-one-clifton-8-us-8",
          attributeOptions: [{ attribute: "Shoe size", value: "US 8" }],
          price: 25.0,
          quantity: 1,
          subTotal: 25.0,
          images: ["images/hoka-one-one-clifton-8.jpg"],
          storeInfo: {
            storeId: "store9d8f7g6h5j4k3l2m1n0b",
            storeName: "EverChic Apparel",
            storeImage: "images/store-everchic-apparel-profile.jpg",
            ownerId: "people99001122hijklmno",
            ownerName: "Jessica Garcia",
            phone: "+639201112233",
            email: "jessica.garcia@email.com",
          },
        },
      },
      {
        _id: "orderitemy87795l61t5rsyr9ve",
        productId: "product66e929720051dc2c4fa65261",
        productName: "Hoka One One Clifton 8",
        description:
          "Ultra-cushioned running shoe known for its lightweight design and soft, responsive midsole. Perfect for long-distance running.",
        variant: {
          _id: "variantthy0c9dp7d72170xx9",
          sku: "hoka-one-one-clifton-8-us-8-5",
          attributeOptions: [{ attribute: "Shoe size", value: "US 8.5" }],
          price: 25.0,
          quantity: 1,
          subTotal: 25.0,
          images: ["images/hoka-one-one-clifton-8.jpg"],
          storeInfo: {
            storeId: "store9d8f7g6h5j4k3l2m1n0b",
            storeName: "EverChic Apparel",
            storeImage: "images/store-everchic-apparel-profile.jpg",
            ownerId: "people99001122hijklmno",
            ownerName: "Jessica Garcia",
            phone: "+639201112233",
            email: "jessica.garcia@email.com",
          },
        },
      },
      {
        _id: "orderitem3x0wsyz9325yc61n2b",
        productId: "product66e92f4e0051dc2c4fa652b6",
        productName: "Polo Ralph Lauren Classic Fit T-Shirt",
        description:
          "Classic fit t-shirt featuring the iconic embroidered Polo Pony logo on the chest, offering a preppy casual look.",
        variant: {
          _id: "variantefr2lokbv0mv74953668",
          sku: "polo-ralph-lauren-classic-fit-t-shirt-m-white",
          attributeOptions: [],
          price: 35.75,
          quantity: 1,
          subTotal: 35.75,
          images: ["images/polo-ralph-lauren-classic-fit-t-shirt-white.jpg"],
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage: "images/store-thread-and-co-profile.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
      {
        _id: "orderitemv25zl1m2v9524b7urg",
        productId: "product66e92f3c0051dc2c4fa652b3",
        productName: "Uniqlo U Crew Neck Short-Sleeve T-Shirt",
        description:
          "Minimalist design, high-quality cotton tee with a crew neck, providing a clean and modern look.",
        variant: {
          _id: "variant0f91m2kelhln1430e2",
          sku: "uniqlo-u-crew-neck-short-sleeve-t-shirt-m-gray",
          attributeOptions: [
            { attribute: "Shirt size", value: "M" },
            { attribute: "Color", value: "Gray" },
          ],
          price: 25.1,
          quantity: 1,
          subTotal: 25.1,
          images: ["images/uniqlo-u-crew-neck-short-sleeve-t-shirt-gray.jpg"],
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage: "images/store-thread-and-co-profile.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
      {
        _id: "orderitemdwl7p1439p1ug2pw31",
        productId: "product66e92f3c0051dc2c4fa652b3",
        productName: "Uniqlo U Crew Neck Short-Sleeve T-Shirt",
        description:
          "Minimalist design, high-quality cotton tee with a crew neck, providing a clean and modern look.",
        variant: {
          _id: "variant4n6q6sky1my4f381c2",
          sku: "uniqlo-u-crew-neck-short-sleeve-t-shirt-m-green",
          attributeOptions: [
            { attribute: "Shirt size", value: "M" },
            { attribute: "Color", value: "Green" },
          ],
          price: 25.1,
          quantity: 1,
          subTotal: 25.1,
          images: ["images/uniqlo-u-crew-neck-short-sleeve-t-shirt-green.jpg"],
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage: "images/store-thread-and-co-profile.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
      {
        _id: "orderitemh4il11iql8c2yn2937",
        productId: "product66e929a20051dc2c4fa65267",
        productName: "Vans Old Skool",
        description:
          "Iconic skate shoe featuring Vans' signature side stripe, durable canvas and suede upper, and a classic vulcanized rubber sole.",
        variant: {
          _id: "variant1o3yn66w48w859dptj",
          sku: "vans-old-skool-us-7-5",
          attributeOptions: [{ attribute: "Shoe size", value: "US 7.5" }],
          price: 24.5,
          quantity: 1,
          subTotal: 24.5,
          images: ["images/vans-old-skool.jpg"],
          storeInfo: {
            storeId: "store9d8f7g6h5j4k3l2m1n0b",
            storeName: "EverChic Apparel",
            storeImage: "images/store-everchic-apparel-profile.jpg",
            ownerId: "people99001122hijklmno",
            ownerName: "Jessica Garcia",
            phone: "+639201112233",
            email: "jessica.garcia@email.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 160.45,
      shippingFee: 8.0,
      discount: 0,
      orderTotalPrice: 168.45,
      currency: "USD",
    },
    paymentInfo: {
      method: "credit_card",
      status: "paid",
      paidAt: "2024-10-22T11:35:00.000Z",
      transactionId: "TXN-LY0LG5R8F2D139VA44",
    },
    currentStatus: "shipped",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-28T12:00:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-28T12:05:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "processing",
        label: "Processing",
        timestamp: "2024-10-28T13:20:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        status: "shipped",
        label: "Shipped",
        timestamp: "2024-10-29T11:30:00.000Z",
        description: "Your order is on the way! Track it with FedEx.",
      },
    ],
    createdAt: "2024-10-28T12:00:00.000Z",
    updatedAt: "2024-10-29T11:30:00.000Z",
  },
  {
    _id: "orderprm9n367443rjk8bk4",
    buyerInfo: {
      buyerId: "people97621333ukkghtvr",
      buyerName: "George Young",
      phone: "+639197438200",
      email: "george.young@gmail.com",
      image: "images/user-male-george-booker-young.jpg",
      shippingInfo: {
        method: "standard",
        estimatedDays: 3,
        carrier: "FedEx",
        trackingNumber: "",
        address: {
          addressLine1: "3938 Morales Ford",
          addressLine2: "",
          city: "South Jeffreyside",
          stateOrProvince: "MT",
          barangay: "",
          zipCode: "55603",
          country: "United States",
        },
      },
    },
    items: [
      {
        _id: "orderitemo0b2f3g2duj46i7p19",
        productId: "product66e930b70051dc2c4fa652d6",
        productName: "Gucci GG0061S Sunglasses",
        description:
          "Luxury oversized square sunglasses with gradient lenses and the iconic Gucci logo on the temples.",
        variant: {
          _id: "variantt24jbunp70mu7920lrz279",
          sku: "gucci-gg0061s-sunglasses",
          attributeOptions: [],
          price: 21.25,
          quantity: 1,
          subTotal: 21.25,
          images: ["images/gucci-gg0061s-sunglasses.jpg"],
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage: "images/store-velvet-hanger-profile.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
      {
        _id: "orderitemtip9c2hgj8m4516e53",
        productId: "product66e930880051dc2c4fa652d0",
        productName: "Persol PO3019S Sunglasses",
        description:
          "Handcrafted Italian sunglasses with a unique Meflecto hinge system for comfort and flexibility. Features polarized lenses.",
        variant: {
          _id: "variant8m4i6icb32mw9p4o894c3l",
          sku: "persol-po3019s-sunglasses",
          attributeOptions: [],
          price: 18.5,
          quantity: 1,
          subTotal: 18.5,
          images: ["images/persol-po3019s-sunglasses.jpg"],
          storeInfo: {
            storeId: "store9d8f7g6h5j4k3l2m1n0b",
            storeName: "EverChic Apparel",
            storeImage: "images/store-everchic-apparel-profile.jpg",
            ownerId: "people99001122hijklmno",
            ownerName: "Jessica Garcia",
            phone: "+639201112233",
            email: "jessica.garcia@email.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 39.75,
      shippingFee: 5.25,
      discount: 0,
      orderTotalPrice: 45.0,
      currency: "USD",
    },
    paymentInfo: {
      method: "bank_transfer",
      status: "pending",
      paidAt: "",
      transactionId: "TXN-2UAD92A15S7LCLD527",
    },
    currentStatus: "awaiting_payment",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-11-05T13:45:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "awaiting_payment",
        label: "Awaiting Payment",
        timestamp: "2024-11-05T13:50:00.000Z",
        description: "Waiting for bank transfer confirmation.",
      },
    ],
    createdAt: "2024-11-05T13:45:00.000Z",
    updatedAt: "2024-11-05T13:50:00.000Z",
  },
  {
    _id: "orderz327csw86nl0h95jm4",
    buyerInfo: {
      buyerId: "people12075700tedluunj",
      buyerName: "Pamela Perez",
      phone: "+639325219200",
      email: "pamela.perez@gmail.com",
      image: "images/user-female-pamela-santos-perez.jpg",
      shippingInfo: {
        method: "express",
        estimatedDays: 2,
        carrier: "UPS",
        trackingNumber: "850889950020323",
        address: {
          addressLine1: "3180 Fletcher Expressway",
          addressLine2: "",
          city: "Grayland",
          stateOrProvince: "WA",
          barangay: "",
          zipCode: "81356",
          country: "United States",
        },
      },
    },
    items: [
      {
        _id: "orderitemmfyqd0m29454ms7y68",
        productId: "product66e929890051dc2c4fa65264",
        productName: "Reebok Nano X1",
        description:
          "Cross-training shoe built for versatility, with durable construction and a flexible outsole for enhanced performance during workouts.",
        variant: {
          _id: "varianttfy170n2bqb5p463g6",
          sku: "brooks-ghost-14-us-8",
          attributeOptions: [{ attribute: "Shoe size", value: "US 8" }],
          price: 26.25,
          quantity: 1,
          subTotal: 26.25,
          images: ["images/reebok-nano-x1.jpg"],
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage: "images/store-thread-and-co-profile.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 26.25,
      shippingFee: 10.0,
      discount: 0,
      orderTotalPrice: 36.25,
      currency: "USD",
    },
    paymentInfo: {
      method: "paypal",
      status: "refunded",
      paidAt: "2024-11-06T09:35:00.000Z",
      transactionId: "TXN-N5857TQFP6F4K208BY",
    },
    currentStatus: "cancelled",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-11-06T09:30:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-11-06T09:35:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "cancelled",
        label: "Order Cancelled",
        timestamp: "2024-11-07T08:00:00.000Z",
        description: "Order cancelled by buyer. Refund initiated.",
      },
      {
        status: "refunded",
        label: "Refunded",
        timestamp: "2024-11-07T14:30:00.000Z",
        description: "Full refund of $120.00 processed to PayPal account.",
      },
    ],
    createdAt: "2024-11-06T09:30:00.000Z",
    updatedAt: "2024-11-07T14:30:00.000Z",
  },
  {
    _id: "order1s13p3vg986wi1a6qx",
    buyerInfo: {
      buyerId: "people72664990zvravqrr",
      buyerName: "Peter Clark",
      phone: "+639058690100",
      email: "peter.herrera@gmail.com",
      image: "images/user-male-peter-clark-herrera.jpg",
      shippingInfo: {
        method: "standard",
        estimatedDays: 3,
        carrier: "FedEx",
        trackingNumber: "602182183280880",
        address: {
          addressLine1: "75257 Jennifer Street",
          addressLine2: "Suite 216",
          city: "Millerchester",
          stateOrProvince: "VA",
          barangay: "",
          zipCode: "25661",
          country: "United States",
        },
      },
    },
    items: [
      {
        _id: "orderitemypt59fm0kraz021724",
        productId: "product66e931d00051dc2c4fa652e9",
        productName: "Columbia Fleece Jacket",
        description:
          "Classic full-zip fleece jacket, ideal for layering or wearing on its own. Features a soft, comfortable fabric for everyday wear.",
        variant: {
          _id: "variant5in2l2k7jl480tmu50s9",
          sku: "columbia-fleece-jacket-l-black",
          attributeOptions: [
            { attribute: "Shirt Size", value: "L" },
            { attribute: "Color", value: "bLACK" },
          ],
          price: 36.75,
          quantity: 1,
          subTotal: 36.75,
          images: ["images/columbia-fleece-jacket-black.jpg"],
          storeInfo: {
            storeId: "store9d8f7g6h5j4k3l2m1n0b",
            storeName: "EverChic Apparel",
            storeImage: "images/store-everchic-apparel-profile.jpg",
            ownerId: "people99001122hijklmno",
            ownerName: "Jessica Garcia",
            phone: "+639201112233",
            email: "jessica.garcia@email.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 36.75,
      shippingFee: 6.0,
      discount: 0,
      orderTotalPrice: 42.75,
      currency: "USD",
    },
    paymentInfo: {
      method: "credit_card",
      status: "paid",
      paidAt: "2024-10-15T10:35:00.000Z",
      transactionId: "TXN-JE8749I0CJ0C1WV7D0",
    },
    currentStatus: "delivered",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-15T10:30:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-15T10:35:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "processing",
        label: "Processing",
        timestamp: "2024-10-15T11:45:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        status: "shipped",
        label: "Shipped",
        timestamp: "2024-10-16T14:20:00.000Z",
        description: "Your order is on the way! Track it with FedEx.",
      },
      {
        status: "out_for_delivery",
        label: "Out for Delivery",
        timestamp: "2024-10-19T08:00:00.000Z",
        description: "Your order is out for delivery today.",
      },
      {
        status: "delivered",
        label: "Delivered",
        timestamp: "2024-10-19T09:15:00.000Z",
        description: "Package delivered successfully.",
      },
    ],
    createdAt: "2024-10-15T10:30:00.000Z",
    updatedAt: "2024-10-19T09:15:00.000Z",
  },
  {
    _id: "orderu0rsfn4264t7ye0m38",
    buyerInfo: {
      buyerId: "people21806200wgvhisto",
      buyerName: "James Johnson",
      phone: "+639980290500",
      email: "james.johnson@hotmail.com",
      image: "images/user-male-james-hernandez-johnson.jpg",
      shippingInfo: {
        method: "express",
        estimatedDays: 2,
        carrier: "UPS",
        trackingNumber: "729843238044658",
        address: {
          addressLine1: "9147 Nancy Ridge",
          addressLine2: "",
          city: "West Christina",
          stateOrProvince: "ID",
          barangay: "",
          zipCode: "85641",
          country: "United States",
        },
      },
    },
    items: [
      {
        _id: "orderitemlbd4239g7301s5wphc",
        productId: "product66e932310051dc2c4fa652f5",
        productName: "Nike Windrunner Jacket",
        description:
          "Lightweight, windproof jacket with a water-repellent finish, designed for running and outdoor activities.",
        variant: {
          _id: "variantpxk92xvo49i5u144c5f5",
          sku: "nike-windrunner-jacket-m",
          attributeOptions: [{ attribute: "Shirt size", value: "M" }],
          price: 36.75,
          quantity: 1,
          subTotal: 36.75,
          images: ["images/nike-windrunner-jacket.jpg"],
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage: "images/store-thread-and-co-profile.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
      {
        _id: "orderitem243v9ye000dp5jmz1y",
        productId: "product66e9324c0051dc2c4fa652f8",
        productName: "Adidas Originals Track Jacket",
        description:
          "Retro-style track jacket with signature 3-stripes, offering a casual look for everyday wear or light workouts.",
        variant: {
          _id: "varianttttjx5poz8m5157a7108",
          sku: "adidas-originals-track-jacket-m",
          attributeOptions: [{ attribute: "Shirt size", value: "M" }],
          price: 34.75,
          quantity: 1,
          subTotal: 34.75,
          images: ["images/adidas-originals-track-jacket.jpg"],
          storeInfo: {
            storeId: "store7840556196lkonidlvdn",
            storeName: "Kenstore",
            storeImage: "images/store-kenstore-profile.jpg",
            ownerId: "people43210987nopqrstu",
            ownerName: "Kenny Estrella",
            phone: "+6392223334455",
            email: "kennyestrellaworks@email.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 36.75,
      shippingFee: 4.25,
      discount: 0,
      orderTotalPrice: 75.75,
      currency: "USD",
    },
    paymentInfo: {
      method: "paypal",
      status: "paid",
      paidAt: "2024-10-18T14:25:00.000Z",
      transactionId: "TXN-AL7IWLJ36J9P9D0842",
    },
    currentStatus: "delivered",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-18T14:20:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-18T14:25:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "processing",
        label: "Processing",
        timestamp: "2024-10-18T15:30:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        status: "shipped",
        label: "Shipped",
        timestamp: "2024-10-19T16:00:00.000Z",
        description: "Your order is on the way! Track it with UPS.",
      },
      {
        status: "delivered",
        label: "Delivered",
        timestamp: "2024-10-22T10:45:00.000Z",
        description: "Package delivered successfully.",
      },
    ],
    createdAt: "2024-10-18T14:20:00.000Z",
    updatedAt: "2024-10-22T10:45:00.000Z",
  },
  {
    _id: "orderitemtyfi2o0pl42142e77s",
    buyerInfo: {
      buyerId: "people43210987nopqrstu",
      buyerName: "Kenny Estrella",
      phone: "+6392223334455",
      email: "kennyestrellaworks@email.com",
      image: "images/user-male-kenny-apas-estrella.jpg",
      shippingInfo: {
        method: "express",
        estimatedDays: 2,
        carrier: "UPS",
        trackingNumber: "487089276344176",
        address: {
          addressLine1: "123 Maple Street",
          addressLine2: "",
          city: "Anytown",
          stateOrProvince: "CA",
          barangay: "",
          zipCode: "90210",
          country: "United States",
        },
      },
    },
    items: [
      {
        _id: "orderitem7ucdtv28805r8g2eb8",
        productId: "product66e9292b0051dc2c4fa65258",
        productName: "Brooks Ghost 14",
        description:
          "Smooth, balanced running shoe with soft cushioning and a breathable upper. Ideal for runners seeking a comfortable daily trainer.",
        variant: {
          _id: "variant8to7t8j4z5qb0zu000",
          sku: "brooks-ghost-14-us-7-5",
          attributeOptions: [{ attribute: "Shoe size", value: "us 7.5" }],
          price: 26.25,
          quantity: 1,
          subTotal: 26.25,
          images: ["images/brooks-ghost-14.jpg"],
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage: "images/store-velvet-hanger-profile.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
      {
        _id: "orderitems4piu567clp76t491d",
        productId: "product66e9321a0051dc2c4fa652f2",
        productName: "Barbour Bedale Wax Jacket",
        description:
          "Classic waxed cotton jacket with a corduroy collar, designed for durability and protection against the elements.",
        variant: {
          _id: "varianttkkm5b444gucr87w0807",
          sku: "barbour-bedale-wax-jacket-l",
          attributeOptions: [{ attribute: "Shirt size", value: "L" }],
          price: 37.25,
          quantity: 1,
          subTotal: 37.25,
          images: ["images/barbour-bedale-wax-jacket.jpg"],
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage: "images/store-thread-and-co-profile.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 63.5,
      shippingFee: 8.75,
      discount: 0,
      orderTotalPrice: 72.25,
      currency: "USD",
    },
    paymentInfo: {
      method: "credit_card",
      status: "paid",
      paidAt: "2024-10-26T08:20:00.000Z",
      transactionId: "TXN-N3PMN69W1B18DQU791",
    },
    currentStatus: "shipped",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-26T08:15:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-26T08:20:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "processing",
        label: "Processing",
        timestamp: "2024-10-26T09:30:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        status: "shipped",
        label: "Shipped",
        timestamp: "2024-10-27T13:00:00.000Z",
        description: "Your order is on the way! Track it with UPS.",
      },
    ],
    createdAt: "2024-10-26T08:15:00.000Z",
    updatedAt: "2024-10-27T13:00:00.000Z",
  },
  {
    _id: "order3ax5me12od29y92l1s",
    buyerInfo: {
      buyerId: "people33445566pqrstuvw",
      buyerName: "Carlson McConnel",
      phone: "+639987776655",
      email: "carlson.mcconnel@email.com",
      image: "images/user-male-carlson-red-mcconnel.jpg",
      shippingInfo: {
        method: "express",
        estimatedDays: 2,
        carrier: "UPS",
        trackingNumber: "",
        address: {
          addressLine1: "Camella Homes",
          addressLine2: "",
          city: "Bacong",
          stateOrProvince: "Negros Oriental",
          barangay: "",
          zipCode: "6201",
          country: "Philippines",
        },
      },
    },
    items: [
      {
        _id: "orderitem2fzpcg5a078te9v276",
        productId: "product66e92f670051dc2c4fa652b9",
        productName: "Hanes Men's Tagless T-Shirt",
        description:
          "Basic tagless t-shirt made with comfort and affordability in mind, perfect for daily wear.",
        variant: {
          _id: "variant900hk5w6pb9sr18yq6",
          sku: "hanes-mens-tagless-t-shirt-l-white",
          attributeOptions: [
            { attribute: "Shirt size", value: "L" },
            { attribute: "Color", value: "White" },
          ],
          price: 25.75,
          quantity: 1,
          subTotal: 25.75,
          images: ["images/hanes-mens-tagless-t-shirt-white.jpg"],
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage: "images/store-thread-and-co-profile.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 25.75,
      shippingFee: 6.25,
      discount: 0,
      orderTotalPrice: 32,
      currency: "USD",
    },
    paymentInfo: {
      method: "paypal",
      status: "refunded",
      paidAt: "2024-11-06T09:35:00.000Z",
      transactionId: "TXN-4HM8O20N75RT89MNE7",
    },
    currentStatus: "cancelled",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-11-06T09:30:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-11-06T09:35:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "cancelled",
        label: "Order Cancelled",
        timestamp: "2024-11-07T08:00:00.000Z",
        description: "Order cancelled by buyer. Refund initiated.",
      },
      {
        status: "refunded",
        label: "Refunded",
        timestamp: "2024-11-07T14:30:00.000Z",
        description: "Full refund of $120.00 processed to PayPal account.",
      },
    ],
    createdAt: "2024-11-06T09:30:00.000Z",
    updatedAt: "2024-11-07T14:30:00.000Z",
  },
  {
    _id: "ordereap7c4m99w6370smh5",
    buyerInfo: {
      buyerId: "people11223344qrstuvwx",
      buyerName: "Maria Santos",
      phone: "+639171234567",
      email: "maria.santos@email.com",
      image: "images/user-female-maria-pedro-santos.jpg",
      shippingInfo: {
        method: "standard",
        estimatedDays: 3,
        carrier: "FedEx",
        trackingNumber: "781797661834162",
        address: {
          addressLine1: "Purok 5",
          addressLine2: "",
          city: "Dumaguete City",
          stateOrProvince: "Negros Oriental",
          barangay: "Candau-ay",
          zipCode: "6200",
          country: "Philippines",
        },
      },
    },
    items: [
      {
        _id: "orderitem12y9ch3h8l3613ucqe",
        productId: "product66e92ee00051dc2c4fa652a7",
        productName: "Nike Sportswear Club Tee",
        description:
          "Classic cotton tee featuring the Nike logo, perfect for casual wear and sports activities.",
        variant: {
          _id: "variant56r6r9n2eliu8rx7071c",
          sku: "nike-sportswear-club-tee-s-black",
          attributeOptions: [
            { attribute: "Shirt size", value: "S" },
            { attribute: "Color", value: "Black" },
          ],
          price: 32.25,
          quantity: 1,
          subTotal: 32.25,
          images: ["images/nike-sportswear-club-tee-black.jpg"],
          storeInfo: {
            storeId: "store7840556196lkonidlvdn",
            storeName: "Kenstore",
            storeImage: "images/store-kenstore-profile.jpg",
            ownerId: "people43210987nopqrstu",
            ownerName: "Kenny Estrella",
            phone: "+6392223334455",
            email: "kennyestrellaworks@email.com",
          },
        },
      },
      {
        _id: "orderitem12y9ch3h8l3613ucqe",
        productId: "product66e92ee00051dc2c4fa652a7",
        productName: "Nike Sportswear Club Tee",
        description:
          "Classic cotton tee featuring the Nike logo, perfect for casual wear and sports activities.",
        variant: {
          _id: "variantmrv0sz9251e3np3j236o",
          sku: "nike-sportswear-club-tee-s-blue",
          attributeOptions: [
            { attribute: "Shirt size", value: "S" },
            { attribute: "Color", value: "Blue" },
          ],
          price: 31.5,
          quantity: 1,
          subTotal: 31.5,
          images: ["images/nike-sportswear-club-tee-blue.jpg"],
          storeInfo: {
            storeId: "store7840556196lkonidlvdn",
            storeName: "Kenstore",
            storeImage: "images/store-kenstore-profile.jpg",
            ownerId: "people43210987nopqrstu",
            ownerName: "Kenny Estrella",
            phone: "+6392223334455",
            email: "kennyestrellaworks@email.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 63.75,
      shippingFee: 6.25,
      discount: 0,
      orderTotalPrice: 70,
      currency: "USD",
    },
    paymentInfo: {
      method: "credit_card",
      status: "paid",
      paidAt: "2024-10-26T08:20:00.000Z",
      transactionId: "TXN-39I6F9541VOK22QSJI",
    },
    currentStatus: "shipped",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-26T08:15:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-26T08:20:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "processing",
        label: "Processing",
        timestamp: "2024-10-26T09:30:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        status: "shipped",
        label: "Shipped",
        timestamp: "2024-10-27T13:00:00.000Z",
        description: "Your order is on the way! Track it with UPS.",
      },
    ],
    createdAt: "2024-10-26T08:15:00.000Z",
    updatedAt: "2024-10-27T13:00:00.000Z",
  },
  {
    _id: "orderv9lj31t9w6cz5l6u75",
    buyerInfo: {
      buyerId: "people98765432ijklmnop",
      buyerName: "John Cruz",
      phone: "+639123456789",
      email: "john.cruz@email.com",
      image: "images/user-male-john-thompson-cruz.jpg",
      shippingInfo: {
        method: "standard",
        estimatedDays: 3,
        carrier: "FedEx",
        trackingNumber: "975450372604417",
        address: {
          addressLine1: "Brgy. Mabini",
          addressLine2: "",
          city: "Dumaguete City",
          stateOrProvince: "Negros Oriental",
          barangay: "Mabini",
          zipCode: "6200",
          country: "Philippines",
        },
      },
    },
    items: [
      {
        _id: "orderitem95xju1lqk7y7l656p9",
        productId: "product66e928d40051dc2c4fa6524f",
        productName: "Air Zoom Pegasus 38",
        description:
          "Nike's versatile running shoe designed for daily training. Features a responsive foam midsole and a breathable mesh upper.",
        variant: {
          _id: "variant66t57u20fyevk66gv2",
          sku: "air-zoom-pegasus-38-us-8",
          attributeOptions: [{ attribute: "Shoe size", value: "US 8" }],
          price: 25.75,
          quantity: 1,
          subTotal: 25.75,
          images: ["images/air-zoom-pegasus-38.jpg"],
          storeInfo: {
            storeId: "store7840556196lkonidlvdn",
            storeName: "Kenstore",
            storeImage: "images/store-kenstore-profile.jpg",
            ownerId: "people43210987nopqrstu",
            ownerName: "Kenny Estrella",
            phone: "+6392223334455",
            email: "kennyestrellaworks@email.com",
          },
        },
      },
      {
        _id: "orderitem0i4m6k16jh0u34ez9g",
        productId: "product66e9290e0051dc2c4fa65255",
        productName: "New Balance 990v5",
        description:
          "Classic New Balance design offering stability and comfort with premium materials and a cushioned midsole.",
        variant: {
          _id: "variantkho4571gup7bi52m82",
          sku: "adidas-ultraboost-21-us-8",
          attributeOptions: [{ attribute: "Shoe size", value: "US 8" }],
          price: 24.25,
          quantity: 1,
          subTotal: 24.25,
          images: ["images/new-balance-990v5.jpg"],
          storeInfo: {
            storeId: "store9d8f7g6h5j4k3l2m1n0b",
            storeName: "EverChic Apparel",
            storeImage: "images/store-everchic-apparel-profile.jpg",
            ownerId: "people99001122hijklmno",
            ownerName: "Jessica Garcia",
            phone: "+639201112233",
            email: "jessica.garcia@email.com",
          },
        },
      },
      {
        _id: "orderitem3cp22no6bt1ho4672z",
        productId: "product66e932020051dc2c4fa652ef",
        productName: "Canada Goose Expedition Parka",
        description:
          "Heavy-duty parka designed for extreme cold, with premium down insulation and a durable water-resistant outer shell.",
        variant: {
          _id: "variant1an04d3g36fb79bz0x7j",
          sku: "canada-goose-expedition-parka-m",
          attributeOptions: [{ attribute: "Shirt size", value: "M" }],
          price: 36.25,
          quantity: 1,
          subTotal: 36.25,
          images: ["images/canada-goose-expedition-parka.jpg"],
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage: "images/store-thread-and-co-profile.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 86.25,
      shippingFee: 6.5,
      discount: 0,
      orderTotalPrice: 162.75,
      currency: "USD",
    },
    paymentInfo: {
      method: "credit_card",
      status: "paid",
      paidAt: "2024-10-15T10:35:00.000Z",
      transactionId: "TXN-682X1B7W1BDF595FEM",
    },
    currentStatus: "delivered",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-15T10:30:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-15T10:35:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "processing",
        label: "Processing",
        timestamp: "2024-10-15T11:45:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        status: "shipped",
        label: "Shipped",
        timestamp: "2024-10-16T14:20:00.000Z",
        description: "Your order is on the way! Track it with FedEx.",
      },
      {
        status: "out_for_delivery",
        label: "Out for Delivery",
        timestamp: "2024-10-19T08:00:00.000Z",
        description: "Your order is out for delivery today.",
      },
      {
        status: "delivered",
        label: "Delivered",
        timestamp: "2024-10-19T09:15:00.000Z",
        description: "Package delivered successfully.",
      },
    ],
    createdAt: "2024-10-15T10:30:00.000Z",
    updatedAt: "2024-10-19T09:15:00.000Z",
  },
  {
    _id: "orderg5492v69n3ypmhd3c9",
    buyerInfo: {
      buyerId: "people01295932qwlsfqeq",
      buyerName: "David Torres",
      phone: "+639707325500",
      email: "david.torres@gmail.com",
      image: "images/user-male-david-nuñez-torres.jpg",
      shippingInfo: {
        method: "standard",
        estimatedDays: 3,
        carrier: "FedEx",
        trackingNumber: "233493105807289",
        address: {
          addressLine1: "122 Leonard Cove",
          addressLine2: "",
          city: "Williamsstad",
          stateOrProvince: "IL",
          barangay: "",
          zipCode: "61304",
          country: "United States",
        },
      },
    },
    items: [
      {
        _id: "orderitemz21sefjnq1no659566",
        productId: "product66e931bd0051dc2c4fa652e6",
        productName: "Patagonia Nano Puff Jacket",
        description:
          "Lightweight, weather-resistant jacket with synthetic insulation for warmth and comfort during outdoor activities.",
        variant: {
          _id: "variant8p3w915m0lni0js4av88",
          sku: "patagonia-nano-puff-jacket-l-gray",
          attributeOptions: [
            { attribute: "Shirt size", value: "L" },
            { attribute: "Color", value: "Gray" },
          ],
          price: 38.5,
          quantity: 1,
          subTotal: 38.5,
          images: ["images/patagonia-nano-puff-jacket-gray.jpg"],
          storeInfo: {
            storeId: "store7840556196lkonidlvdn",
            storeName: "Kenstore",
            storeImage: "images/store-kenstore-profile.jpg",
            ownerId: "people43210987nopqrstu",
            ownerName: "Kenny Estrella",
            phone: "+6392223334455",
            email: "kennyestrellaworks@email.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 38.5,
      shippingFee: 3.25,
      discount: 0,
      orderTotalPrice: 41.75,
      currency: "USD",
    },
    paymentInfo: {
      method: "credit_card",
      status: "paid",
      paidAt: "2024-10-26T08:20:00.000Z",
      transactionId: "TXN-1V05RIG183KLQV93P4",
    },
    currentStatus: "shipped",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-26T08:15:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-26T08:20:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "processing",
        label: "Processing",
        timestamp: "2024-10-26T09:30:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        status: "shipped",
        label: "Shipped",
        timestamp: "2024-10-27T13:00:00.000Z",
        description: "Your order is on the way! Track it with UPS.",
      },
    ],
    createdAt: "2024-10-26T08:15:00.000Z",
    updatedAt: "2024-10-27T13:00:00.000Z",
  },
  {
    _id: "orderm433o4z409e2asv2bh",
    buyerInfo: {
      buyerId: "people54828839eqnjehsy",
      buyerName: "Jillian Brooks",
      phone: "+639530203500",
      email: "jillianbrooks@gmail.com",
      image: "images/user-female-jillian-thomas-brooks.jpg",
      shippingInfo: {
        method: "standard",
        estimatedDays: 3,
        carrier: "FedEx",
        trackingNumber: "441010987572608",
        address: {
          addressLine1: "PSC 1065",
          addressLine2: "Box 0517",
          city: "APO",
          stateOrProvince: "AP",
          barangay: "",
          zipCode: "32680",
          country: "United States",
        },
      },
    },
    items: [
      {
        _id: "orderitem7zt5tz338f52l1sll0",
        productId: "product66e930720051dc2c4fa652cd",
        productName: "Oakley Holbrook Sunglasses",
        description:
          "Classic square sunglasses with a lightweight frame and Prizm lenses for enhanced color and clarity.",
        variant: {
          _id: "variantmrl017u1ynpni87667f3k1",
          sku: "oakley-holbrook-sunglasses",
          attributeOptions: [],
          price: 14.5,
          quantity: 1,
          subTotal: 14.5,
          images: ["images/oakley-holbrook-sunglasses.jpg"],
          storeInfo: {
            storeId: "store7840556196lkonidlvdn",
            storeName: "Kenstore",
            storeImage: "images/store-kenstore-profile.jpg",
            ownerId: "people43210987nopqrstu",
            ownerName: "Kenny Estrella",
            phone: "+6392223334455",
            email: "kennyestrellaworks@email.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 14.5,
      shippingFee: 3.45,
      discount: 0,
      orderTotalPrice: 17.95,
      currency: "USD",
    },
    paymentInfo: {
      method: "credit_card",
      status: "paid",
      paidAt: "2024-10-15T10:35:00.000Z",
      transactionId: "TXN-20241015-0001",
    },
    currentStatus: "delivered",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-15T10:30:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-15T10:35:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "processing",
        label: "Processing",
        timestamp: "2024-10-15T11:45:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        status: "shipped",
        label: "Shipped",
        timestamp: "2024-10-16T14:20:00.000Z",
        description: "Your order is on the way! Track it with FedEx.",
      },
      {
        status: "out_for_delivery",
        label: "Out for Delivery",
        timestamp: "2024-10-19T08:00:00.000Z",
        description: "Your order is out for delivery today.",
      },
      {
        status: "delivered",
        label: "Delivered",
        timestamp: "2024-10-19T09:15:00.000Z",
        description: "Package delivered successfully.",
      },
    ],
    createdAt: "2024-10-15T10:30:00.000Z",
    updatedAt: "2024-10-19T09:15:00.000Z",
  },
  {
    _id: "orderx9l7a1ngq3k93272dn",
    buyerInfo: {
      buyerId: "people55667788yzabcdfg",
      buyerName: "Robert Lim",
      phone: "+639087654321",
      email: "robert.lim@email.com",
      image: "images/user-male-robert-choi-lim.jpg",
      shippingInfo: {
        method: "standard",
        estimatedDays: 3,
        carrier: "FedEx",
        trackingNumber: "179188861438869",
        address: {
          addressLine1: "Block 12, Lot 3",
          addressLine2: "",
          city: "Valencia",
          stateOrProvince: "Negros Oriental",
          barangay: "",
          zipCode: "6315",
          country: "Philippines",
        },
      },
    },
    items: [
      {
        _id: "orderitem0kaj9t678kh1k1n5i1",
        productId: "product66e929bd0051dc2c4fa6526a",
        productName: "Converse Chuck Taylor All Star",
        description:
          "Classic high-top sneaker with a canvas upper, rubber sole, and timeless design that has been popular for generations.",
        variant: {
          _id: "variantt43pu37du110g1ol95nv",
          sku: "converse-chuck-taylor-all-star-us-8",
          attributeOptions: [{ attribute: "Shoe size", value: "US 8" }],
          price: 26.75,
          quantity: 1,
          subTotal: 26.75,
          images: ["images/converse-chuck-taylor-all-star.jpg"],
          storeInfo: {
            storeId: "store9d8f7g6h5j4k3l2m1n0b",
            storeName: "EverChic Apparel",
            storeImage: "images/store-everchic-apparel-profile.jpg",
            ownerId: "people99001122hijklmno",
            ownerName: "Jessica Garcia",
            phone: "+639201112233",
            email: "jessica.garcia@email.com",
          },
        },
      },
      {
        _id: "orderitem6pp8yg22j4q5uz315o",
        productId: "product66e929590051dc2c4fa6525e",
        productName: "Puma RS-X3",
        description:
          "Bold, retro-inspired sneaker with a chunky silhouette and vibrant colorways. Features Puma's RS cushioning for everyday comfort.",
        variant: {
          _id: "variant1r1qr078qddy11gb40",
          sku: "new-balance-990v5-us-8",
          attributeOptions: [{ attribute: "Shoe size", value: "US 8" }],
          price: 24.5,
          quantity: 1,
          subTotal: 24.5,
          images: ["images/new-balance-990v5.jpg"],
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage: "images/store-velvet-hanger-profile.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 51.25,
      shippingFee: 3.5,
      discount: 0,
      orderTotalPrice: 54.75,
      currency: "USD",
    },
    paymentInfo: {
      method: "credit_card",
      status: "paid",
      paidAt: "2024-10-15T10:35:00.000Z",
      transactionId: "TXN-YMXK071PW9FI382D57",
    },
    currentStatus: "delivered",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-15T10:30:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-15T10:35:00.000Z",
        description: "Payment received successfully.",
      },
      {
        status: "processing",
        label: "Processing",
        timestamp: "2024-10-15T11:45:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        status: "shipped",
        label: "Shipped",
        timestamp: "2024-10-16T14:20:00.000Z",
        description: "Your order is on the way! Track it with FedEx.",
      },
      {
        status: "out_for_delivery",
        label: "Out for Delivery",
        timestamp: "2024-10-19T08:00:00.000Z",
        description: "Your order is out for delivery today.",
      },
      {
        status: "delivered",
        label: "Delivered",
        timestamp: "2024-10-19T09:15:00.000Z",
        description: "Package delivered successfully.",
      },
    ],
    createdAt: "2024-10-15T10:30:00.000Z",
    updatedAt: "2024-10-19T09:15:00.000Z",
  },
  {
    _id: "orderb85fa75c9sdni4v444",
    buyerInfo: {
      buyerId: "people21785651ccucxbnh",
      buyerName: "Max Rollins",
      phone: "+639750623200",
      email: "max.rollins@gmail.com",
      image: "images/user-male-max-smith-rollins.jpg",
      shippingInfo: {
        method: "standard",
        estimatedDays: 3,
        carrier: "FedEx",
        trackingNumber: "",
        address: {
          addressLine1: "350 Williams Plains",
          addressLine2: "Suite 971",
          city: "South Jamesborough",
          stateOrProvince: "UT",
          barangay: "",
          zipCode: "51902",
          country: "United States",
        },
      },
    },
    items: [
      {
        _id: "orderitemzu4876boda4j84i18o",
        productId: "product66e931a20051dc2c4fa652e3",
        productName: "The North Face Puffer Jacket",
        description:
          "Insulated puffer jacket providing warmth in cold weather, featuring a water-resistant shell and a stylish design.",
        variant: {
          _id: "variant5zs8o4oc11r5090jydq3",
          sku: "the-north-face-puffer-jacket-l-black",
          attributeOptions: [
            { attribute: "Shirt Size", value: "L" },
            { attribute: "Color", value: "Black" },
          ],
          price: 40.75,
          quantity: 1,
          subTotal: 40.75,
          images: ["images/the-north-face-puffer-jacket-black.jpg"],
          storeInfo: {
            storeId: "store7840556196lkonidlvdn",
            storeName: "Kenstore",
            storeImage: "images/store-kenstore-profile.jpg",
            ownerId: "people43210987nopqrstu",
            ownerName: "Kenny Estrella",
            phone: "+6392223334455",
            email: "kennyestrellaworks@email.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 40.75,
      shippingFee: 4.5,
      discount: 0,
      orderTotalPrice: 45.25,
      currency: "USD",
    },
    paymentInfo: {
      method: "bank_transfer",
      status: "pending",
      paidAt: "",
      transactionId: "TXN-IS8KMSP993U7C91I03",
    },
    currentStatus: "awaiting_payment",
    timeline: [
      {
        status: "order_placed",
        label: "Order Placed",
        timestamp: "2024-11-05T13:45:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        status: "awaiting_payment",
        label: "Awaiting Payment",
        timestamp: "2024-11-05T13:50:00.000Z",
        description: "Waiting for bank transfer confirmation.",
      },
    ],
    createdAt: "2024-11-05T13:45:00.000Z",
    updatedAt: "2024-11-05T13:50:00.000Z",
  },
];
