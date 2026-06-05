export const orders = [
  {
    _id: "orderXpMODjStdI8584631434",
    buyerInfo: {
      buyerId: "people43210987nopqrstu",
      buyerFirstName: "Kenny",
      buyerMiddleName: "Apas",
      buyerLastName: "Estrella",
      email: "kennyestrellaworks@email.com",
      phone: "+6392223334455",
      image: "/images/users/user-male-kenny-apas-estrella.jpg",
      shippingInfo: {
        method: "door_to_door",
        estimatedDays: 5,
        carrier: "LBC Express",
        trackingNumber: "751983077662298342",
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
    orderedItems: [
      {
        _id: "orderitemtZUUxGCfVz5611454185",
        productId: "product66e929400051dc2c4fa6525b",
        productName: "Asics Gel-Kayano 28",
        description:
          "Stability running shoe with responsive GEL technology, designed for overpronators. It offers superior support and cushioning.",
        variant: {
          _id: "variant7nny3o11uc4iy01x2tz0q706",
          sku: "asics-gel-kayano-28-6-5",
          attributeOptions: [
            {
              attribute: "Shoe Size",
              value: "7",
            },
          ],
          price: 22.5,
          quantity: 2,
          subTotal: 45,
          primaryImage: "/images/products/asics-gel-kayano-28-1.jpg",
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage: "/images/stores/store-thread-and-co-profile.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
      {
        _id: "orderitemSvnJEMGAPd9650913115",
        productId: "product66e92f3c0051dc2c4fa652b3",
        productName: "Uniqlo U Crew Neck Short-Sleeve T-Shirt",
        description:
          "A minimalist, high-quality cotton tee with a clean silhouette and modern fit.",
        variant: {
          _id: "variant06u10pp4n01564ltivhohg15",
          sku: "uniqlo-u-crew-neck-short-sleeve-tshirt-gray-s",
          attributeOptions: [
            {
              attribute: "Color",
              value: "Gray",
            },
            {
              attribute: "Shirt Size",
              value: "S",
            },
          ],
          price: 25.5,
          quantity: 5,
          subTotal: 127.5,
          primaryImage:
            "/images/products/uniqlo-u-crew-neck-short-sleeve-t-shirt-gray.jpg",
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage: "/images/system/store-velvet-hanger-profile.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
      {
        _id: "orderitemmfcOkXuIQP1754808555",
        productId: "product66e9359d0051dc2c4fa65313",
        productName: "Ralph Lauren Purple Label Suit",
        description:
          "Premium suit crafted from luxurious wool and cashmere, featuring a classic fit and refined styling details.",
        variant: {
          _id: "variantx1gi55cavox9h49k3rx98443",
          sku: "ralph-lauren-purple-label-suit-black-xs",
          attributeOptions: [
            {
              attribute: "Color",
              value: "Gray",
            },
            {
              attribute: "Suit Size",
              value: "XS",
            },
          ],
          price: 41.25,
          quantity: 3,
          subTotal: 123.75,
          primaryImage:
            "/images/products/ralph-lauren-purple-label-suit-gray.jpg",
          storeInfo: {
            storeId: "store9d8f7g6h5j4k3l2m1n0b",
            storeName: "EverChic Apparel",
            storeImage: "/images/system/store-everchic-apparel-profile.jpg",
            ownerId: "people99001122hijklmno",
            ownerName: "Jessica Garcia",
            phone: "+639201112233",
            email: "jessica.garcia@email.com",
          },
        },
      },
      {
        _id: "orderitemmQxgsbsONy7218648624",
        productId: "product66e92f0c0051dc2c4fa652ad",
        productName: "Champion Men's Classic Jersey Tee",
        description:
          "Iconic Adidas Trefoil logo on a soft cotton t-shirt, offering timeless style and comfort.",
        variant: {
          _id: "variant7cvnr7612d121kg1gyr7w2",
          sku: "champion-mens-classic-jersey-tee-white-xs",
          attributeOptions: [
            {
              attribute: "Color",
              value: "White",
            },
            {
              attribute: "Shirt Size",
              value: "XS",
            },
          ],
          price: 26.5,
          quantity: 3,
          subTotal: 79.5,
          primaryImage:
            "/images/products/champion-mens-classic-jersey-tee-white-4.jpg",
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage: "/images/system/store-velvet-hanger-profile.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 375.75,
      shippingFee: 12,
      discount: 0,
      orderTotalPrice: 387.75,
    },
    timeline: [
      {
        slug: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-21T01:14:34.176Z",
        description: "Customer successfully placed the order.",
      },
      {
        slug: "cancelled_by_seller",
        label: "Cancelled by Seller",
        timestamp: "2024-10-26T01:14:34.176Z",
        description: "Order cancelled by the seller.",
      },
    ],
    paymentInfo: {
      method: "Metrobank",
      status: "Refundable",
      slug: "refundable",
      paidAt: "2024-10-21T01:14:34.176Z",
      transactionId: "TGB775VI60W3KUE3O920",
    },
    currentStatus: {
      slug: "cancelled_by_seller",
      label: "Cancelled by Seller",
      timestamp: "2024-10-26T01:14:34.176Z",
      description: "Order cancelled by the seller.",
    },
    createdAt: "2024-10-21T01:14:34.176Z",
    updatedAt: "2024-10-26T01:14:34.176Z",
  },
];
