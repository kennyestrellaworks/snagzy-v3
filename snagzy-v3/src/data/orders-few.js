export const orders = [
  {
    _id: "ordernaiDJWYcuN5447867422",
    buyerInfo: {
      buyerId: "people02727687ytzmiuwk",
      buyerFirstName: "Raymund",
      buyerMiddleName: "Moore",
      buyerLastName: "Blackburn",
      email: "raymund.blackburn@mgmail.com",
      phone: "+639121620600",
      image:
        "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516777/user-male-raymund-moore-blackburn_yk5s2e.jpg",
      shippingInfo: {
        method: "ground",
        estimatedDays: 12,
        carrier: "FedEx",
        trackingNumber: "264010559137992368",
        address: {
          addressLine1: "9979 Daniel Inlet",
          addressLine2: "",
          city: "Davidmouth",
          stateOrProvince: "CA",
          barangay: "",
          zipCode: "64716",
          country: "United States",
        },
      },
    },
    orderedItems: [
      {
        _id: "orderitemUyACqPGfUH9629793707",
        productId: "product66e935870051dc2c4fa65310",
        productName: "Armani Collezioni Navy Suit",
        description:
          "Elegant navy suit made from fine Italian wool, featuring a slim cut and a modern look, suitable for both work and formal events.",
        variant: {
          _id: "variantwir0r0sd72yfv050te9u6417",
          sku: "armani-collezioni-navy-suit-midnight-navy-l",
          attributeOptions: [
            {
              attribute: "Color",
              value: "Midnight Navy",
            },
            {
              attribute: "Suit Size",
              value: "L",
            },
          ],
          price: 42.25,
          quantity: 5,
          subTotal: 211.25,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514290/armani-collezioni-navy-suit-midnight-navy-3_itgd2d.jpg",
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-thread-and-co-profile_ole1un.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
      {
        _id: "orderitemDNUTMBIHqE5943128325",
        productId: "product66e9292b0051dc2c4fa65258",
        productName: "Brooks Ghost 14",
        description:
          "Smooth, balanced running shoe with soft cushioning and a breathable upper. Ideal for runners seeking a comfortable daily trainer.",
        variant: {
          _id: "variant5xzj0wd59992ptn18ygz73",
          sku: "brooks-ghost-14-7-5",
          attributeOptions: [
            {
              attribute: "Shoe Size",
              value: "7.5",
            },
          ],
          price: 26.25,
          quantity: 3,
          subTotal: 78.75,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514298/brooks-ghost-14-1_tezcpm.jpg",
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-velvet-hanger-profile_kphygx.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 290,
      shippingFee: 13,
      discount: 0,
      orderTotalPrice: 303,
    },
    timeline: [
      {
        slug: "order_placed",
        label: "Order Placed",
        timestamp: "2026-05-27T05:05:50.452Z",
        description: "Customer successfully placed the order.",
      },
      {
        slug: "payment_pending",
        label: "Payment Pending",
        timestamp: "2026-05-31T05:05:50.452Z",
        description: "Waiting for customer payment confirmation.",
      },
      {
        slug: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2026-06-04T05:05:50.452Z",
        description: "Payment has been verified and confirmed.",
      },
      {
        slug: "processing",
        label: "Processing",
        timestamp: "2026-06-07T05:05:50.452Z",
        description: "Seller is preparing the items.",
      },
      {
        slug: "packed",
        label: "Packed",
        timestamp: "2026-06-11T05:05:50.452Z",
        description: "Items have been packed and ready for shipment.",
      },
      {
        slug: "shipped",
        label: "Shipped",
        timestamp: "2026-06-14T05:05:50.452Z",
        description: "Order has been handed over to the courier.",
      },
      {
        slug: "out_for_delivery",
        label: "Out for Delivery",
        timestamp: "2026-06-18T05:05:50.452Z",
        description: "Courier is delivering the order.",
      },
      {
        slug: "delivered",
        label: "Delivered",
        timestamp: "2026-06-21T05:05:50.452Z",
        description: "Order successfully delivered to the customer.",
      },
      {
        slug: "completed",
        label: "Completed",
        timestamp: "2026-06-25T05:05:50.452Z",
        description: "Order completed with no issues.",
      },
    ],
    paymentInfo: {
      method: "Paypal",
      status: "Paid",
      slug: "paid",
      paidAt: "2026-06-04T05:05:50.452Z",
      transactionId: "56LBMZ6VK2NZD602479I",
    },
    currentStatus: {
      slug: "completed",
      label: "Completed",
      timestamp: "2026-06-25T05:05:50.452Z",
      description: "Order completed with no issues.",
    },
    createdAt: "2026-05-27T05:05:50.452Z",
    updatedAt: "2026-06-25T05:05:50.452Z",
  },
  {
    _id: "orderJmbmnubooB6920167019",
    buyerInfo: {
      buyerId: "people97621333ukkghtvr",
      buyerFirstName: "George",
      buyerMiddleName: "Booker",
      buyerLastName: "Young",
      email: "george.young@gmail.com",
      phone: "+639197438200",
      image:
        "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516776/user-male-george-booker-young_pr45uh.jpg",
      shippingInfo: {
        method: "ecommerce",
        estimatedDays: 6,
        carrier: "J&T Express",
        trackingNumber: "884364908285361430",
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
    orderedItems: [
      {
        _id: "orderitemQHpWKkjHcw5196532138",
        productId: "product66e92f3c0051dc2c4fa652b3",
        productName: "Uniqlo U Crew Neck Short-Sleeve T-Shirt",
        description:
          "A minimalist, high-quality cotton tee with a clean silhouette and modern fit.",
        variant: {
          _id: "variant0rvf4x28629a01xlvnxsc578",
          sku: "uniqlo-u-crew-neck-short-sleeve-tshirt-gray-m",
          attributeOptions: [
            {
              attribute: "Color",
              value: "Gray",
            },
            {
              attribute: "Shirt Size",
              value: "M",
            },
          ],
          price: 25.5,
          quantity: 5,
          subTotal: 127.5,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516626/uniqlo-u-crew-neck-short-sleeve-t-shirt-gray-2_wsj48p.jpg",
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-velvet-hanger-profile_kphygx.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 127.5,
      shippingFee: 9,
      discount: 0,
      orderTotalPrice: 136.5,
    },
    timeline: [
      {
        slug: "order_placed",
        label: "Order Placed",
        timestamp: "2026-05-07T23:47:48.143Z",
        description: "Customer successfully placed the order.",
      },
      {
        slug: "payment_pending",
        label: "Payment Pending",
        timestamp: "2026-05-10T23:47:48.143Z",
        description: "Waiting for customer payment confirmation.",
      },
      {
        slug: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2026-05-13T23:47:48.143Z",
        description: "Payment has been verified and confirmed.",
      },
      {
        slug: "processing",
        label: "Processing",
        timestamp: "2026-05-17T23:47:48.143Z",
        description: "Seller is preparing the items.",
      },
      {
        slug: "packed",
        label: "Packed",
        timestamp: "2026-05-20T23:47:48.143Z",
        description: "Items have been packed and ready for shipment.",
      },
      {
        slug: "shipped",
        label: "Shipped",
        timestamp: "2026-05-24T23:47:48.143Z",
        description: "Order has been handed over to the courier.",
      },
      {
        slug: "out_for_delivery",
        label: "Out for Delivery",
        timestamp: "2026-05-27T23:47:48.143Z",
        description: "Courier is delivering the order.",
      },
      {
        slug: "delivered",
        label: "Delivered",
        timestamp: "2026-05-31T23:47:48.143Z",
        description: "Order successfully delivered to the customer.",
      },
      {
        slug: "completed",
        label: "Completed",
        timestamp: "2026-06-03T23:47:48.143Z",
        description: "Order completed with no issues.",
      },
    ],
    paymentInfo: {
      method: "Stripe",
      status: "Paid",
      slug: "paid",
      paidAt: "2026-05-13T23:47:48.143Z",
      transactionId: "O03720740NIDRW6ZP3LO",
    },
    currentStatus: {
      slug: "completed",
      label: "Completed",
      timestamp: "2026-06-03T23:47:48.143Z",
      description: "Order completed with no issues.",
    },
    createdAt: "2026-05-07T23:47:48.143Z",
    updatedAt: "2026-06-03T23:47:48.143Z",
  },
  {
    _id: "orderCqItVUFRZr7320291565",
    buyerInfo: {
      buyerId: "people55667788yzabcdfg",
      buyerFirstName: "Robert",
      buyerMiddleName: "Choi",
      buyerLastName: "Lim",
      email: "robert.lim@email.com",
      phone: "+639087654321",
      image:
        "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516778/user-male-robert-choi-lim_taii4d.jpg",
      shippingInfo: {
        method: "standard",
        estimatedDays: 9,
        carrier: "J&T Express",
        trackingNumber: "377203517045870363",
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
    orderedItems: [
      {
        _id: "orderitemlWnxeRbsgy3491497202",
        productId: "product66e935330051dc2c4fa65307",
        productName: "Tom Ford O'Connor Base Suit",
        description:
          "Luxurious suit tailored from premium wool, featuring a slim fit and peak lapels for a sharp, sophisticated look.",
        variant: {
          _id: "variantmz81j3o3e7v9q2gu1y8890oi",
          sku: "tom-ford-oconnor-base-suit-navy-blue-m",
          attributeOptions: [
            {
              attribute: "Color",
              value: "Navy Blue",
            },
            {
              attribute: "Suit Size",
              value: "M",
            },
          ],
          price: 39.5,
          quantity: 4,
          subTotal: 158,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516624/tom-ford-oconnor-base-suit-navy-blue-4_aoo4k7.jpg",
          storeInfo: {
            storeId: "store7840556196lkonidlvdn",
            storeName: "Kenstore",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516629/store-kenstore-profile_snxd17.jpg",
            ownerId: "people43210987nopqrstu",
            ownerName: "Kenny Estrella",
            phone: "+6392223334455",
            email: "kennyestrellaworks@email.com",
          },
        },
      },
      {
        _id: "orderitemPnUwQIrfPI2477379467",
        productId: "product66e9359d0051dc2c4fa65313",
        productName: "Ralph Lauren Purple Label Suit",
        description:
          "Premium suit crafted from luxurious wool and cashmere, featuring a classic fit and refined styling details.",
        variant: {
          _id: "variantjwh33wxw48ugmecsla4bb81267",
          sku: "ralph-lauren-purple-label-suit-black-xl",
          attributeOptions: [
            {
              attribute: "Color",
              value: "Black",
            },
            {
              attribute: "Suit Size",
              value: "XL",
            },
          ],
          price: 41.75,
          quantity: 1,
          subTotal: 41.75,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516615/ralph-lauren-purple-label-suit-black-3_hkgmox.jpg",
          storeInfo: {
            storeId: "store9d8f7g6h5j4k3l2m1n0b",
            storeName: "EverChic Apparel",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-everchic-apparel-profile_lxczuy.jpg",
            ownerId: "people99001122hijklmno",
            ownerName: "Jessica Garcia",
            phone: "+639201112233",
            email: "jessica.garcia@email.com",
          },
        },
      },
      {
        _id: "orderitemRRmtYjJcUm4699514336",
        productId: "product66e92d670051dc2c4fa6528e",
        productName: "G-Star Raw 3301 Slim Jeans",
        description:
          "Classic 5-pocket jeans with a slim fit and clean design. Made from stretch denim for added comfort and flexibility.",
        variant: {
          _id: "variantzyyyy6wk7z2dh359yn150308",
          sku: "g-star-raw-3301-slim-jeans-xxs",
          attributeOptions: [
            {
              attribute: "Pants Size",
              value: "XXS",
            },
          ],
          price: 33.5,
          quantity: 1,
          subTotal: 33.5,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515253/g-star-raw-3301-slim-jeans-4_t0jc5i.jpg",
          storeInfo: {
            storeId: "store7840556196lkonidlvdn",
            storeName: "Kenstore",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516629/store-kenstore-profile_snxd17.jpg",
            ownerId: "people43210987nopqrstu",
            ownerName: "Kenny Estrella",
            phone: "+6392223334455",
            email: "kennyestrellaworks@email.com",
          },
        },
      },
      {
        _id: "orderitemKIPehsGbfa6756888503",
        productId: "product66e932020051dc2c4fa652ef",
        productName: "Canada Goose Expedition Parka",
        description:
          "Heavy-duty parka designed for extreme cold, with premium down insulation and a durable water-resistant outer shell.",
        variant: {
          _id: "variantlw95cek6w5855buvh30b15",
          sku: "canada-goose-expedition-parka-dark-navy-blue-m",
          attributeOptions: [
            {
              attribute: "Color",
              value: "Dark Navy Blue",
            },
            {
              attribute: "Jacket Size",
              value: "M",
            },
          ],
          price: 36.75,
          quantity: 4,
          subTotal: 147,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514299/canada-goose-expedition-parka-dark-navy-blue-2_puziox.jpg",
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-velvet-hanger-profile_kphygx.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
      {
        _id: "orderitemzjGOuFjUhA5467006777",
        productId: "product66e928d40051dc2c4fa6524f",
        productName: "Air Zoom Pegasus 38",
        description:
          "Nike's versatile running shoe designed for daily training. Features a responsive foam midsole and a breathable mesh upper.",
        variant: {
          _id: "variantyb3ijt896n207e7u01pmpo01",
          sku: "air-zoom-pegasus-38-6",
          attributeOptions: [
            {
              attribute: "Shoe Size",
              value: "6",
            },
          ],
          price: 25.5,
          quantity: 2,
          subTotal: 51,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514290/air-zoom-pegasus-38_mgizmq.jpg",
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-thread-and-co-profile_ole1un.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 431.25,
      shippingFee: 9,
      discount: 0,
      orderTotalPrice: 440.25,
    },
    timeline: [
      {
        slug: "order_placed",
        label: "Order Placed",
        timestamp: "2026-05-14T04:02:11.596Z",
        description: "Customer successfully placed the order.",
      },
      {
        slug: "payment_pending",
        label: "Payment Pending",
        timestamp: "2026-05-17T04:02:11.596Z",
        description: "Waiting for customer payment confirmation.",
      },
      {
        slug: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2026-05-20T04:02:11.596Z",
        description: "Payment has been verified and confirmed.",
      },
      {
        slug: "processing",
        label: "Processing",
        timestamp: "2026-05-23T04:02:11.596Z",
        description: "Seller is preparing the items.",
      },
      {
        slug: "packed",
        label: "Packed",
        timestamp: "2026-05-26T04:02:11.596Z",
        description: "Items have been packed and ready for shipment.",
      },
      {
        slug: "shipped",
        label: "Shipped",
        timestamp: "2026-05-29T04:02:11.596Z",
        description: "Order has been handed over to the courier.",
      },
      {
        slug: "out_for_delivery",
        label: "Out for Delivery",
        timestamp: "2026-06-01T04:02:11.596Z",
        description: "Courier is delivering the order.",
      },
      {
        slug: "delivered",
        label: "Delivered",
        timestamp: "2026-06-04T04:02:11.596Z",
        description: "Order successfully delivered to the customer.",
      },
      {
        slug: "completed",
        label: "Completed",
        timestamp: "2026-06-07T04:02:11.596Z",
        description: "Order completed with no issues.",
      },
    ],
    paymentInfo: {
      method: "G-Cash",
      status: "Paid",
      slug: "paid",
      paidAt: "2026-05-20T04:02:11.596Z",
      transactionId: "77WYT568CD9KL13YP0Z4",
    },
    currentStatus: {
      slug: "completed",
      label: "Completed",
      timestamp: "2026-06-07T04:02:11.596Z",
      description: "Order completed with no issues.",
    },
    createdAt: "2026-05-14T04:02:11.596Z",
    updatedAt: "2026-06-07T04:02:11.596Z",
  },
  {
    _id: "orderOwGDWgdSWA0588233146",
    buyerInfo: {
      buyerId: "people60033094ntgiknjb",
      buyerFirstName: "Carrie",
      buyerMiddleName: "Leavy",
      buyerLastName: "Hurley",
      email: "carrie.hurley@gmail.com",
      phone: "+639983461700",
      image:
        "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516635/user-female-carrie-leavy-hurley_kgmgmc.jpg",
      shippingInfo: {
        method: "door_to_door",
        estimatedDays: 4,
        carrier: "LBC Express",
        trackingNumber: "932498453068162760",
        address: {
          addressLine1: "206 Monica Lights",
          addressLine2: "",
          city: "New Ryanton",
          stateOrProvince: "ND",
          barangay: "",
          zipCode: "43419",
          country: "United States",
        },
      },
    },
    orderedItems: [
      {
        _id: "orderitemdJdlbWWGNK7670015336",
        productId: "product66e931d00051dc2c4fa652e9",
        productName: "Columbia Fleece Jacket",
        description:
          "Classic full-zip fleece jacket, ideal for layering or wearing on its own. Features a soft, comfortable fabric for everyday wear.",
        variant: {
          _id: "variantljv77m7f0a86x0i9au1c40",
          sku: "columbia-fleece-jacket-red-l",
          attributeOptions: [
            {
              attribute: "Color",
              value: "Red",
            },
            {
              attribute: "Jacket Size",
              value: "L",
            },
          ],
          price: 33.5,
          quantity: 4,
          subTotal: 134,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515247/columbia-fleece-jacket-red-3_cpweys.jpg",
          storeInfo: {
            storeId: "store9d8f7g6h5j4k3l2m1n0b",
            storeName: "EverChic Apparel",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-everchic-apparel-profile_lxczuy.jpg",
            ownerId: "people99001122hijklmno",
            ownerName: "Jessica Garcia",
            phone: "+639201112233",
            email: "jessica.garcia@email.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 134,
      shippingFee: 14,
      discount: 0,
      orderTotalPrice: 148,
    },
    timeline: [
      {
        slug: "order_placed",
        label: "Order Placed",
        timestamp: "2026-05-25T23:57:23.356Z",
        description: "Customer successfully placed the order.",
      },
      {
        slug: "payment_pending",
        label: "Payment Pending",
        timestamp: "2026-05-28T23:57:23.356Z",
        description: "Waiting for customer payment confirmation.",
      },
      {
        slug: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2026-06-01T23:57:23.356Z",
        description: "Payment has been verified and confirmed.",
      },
      {
        slug: "processing",
        label: "Processing",
        timestamp: "2026-06-05T23:57:23.356Z",
        description: "Seller is preparing the items.",
      },
      {
        slug: "packed",
        label: "Packed",
        timestamp: "2026-06-09T23:57:23.356Z",
        description: "Items have been packed and ready for shipment.",
      },
      {
        slug: "shipped",
        label: "Shipped",
        timestamp: "2026-06-13T23:57:23.356Z",
        description: "Order has been handed over to the courier.",
      },
      {
        slug: "out_for_delivery",
        label: "Out for Delivery",
        timestamp: "2026-06-16T23:57:23.356Z",
        description: "Courier is delivering the order.",
      },
      {
        slug: "delivered",
        label: "Delivered",
        timestamp: "2026-06-20T23:57:23.356Z",
        description: "Order successfully delivered to the customer.",
      },
      {
        slug: "completed",
        label: "Completed",
        timestamp: "2026-06-24T23:57:23.356Z",
        description: "Order completed with no issues.",
      },
    ],
    paymentInfo: {
      method: "Stripe",
      status: "Paid",
      slug: "paid",
      paidAt: "2026-06-01T23:57:23.356Z",
      transactionId: "1CMT28V4MR16148Z2JGG",
    },
    currentStatus: {
      slug: "completed",
      label: "Completed",
      timestamp: "2026-06-24T23:57:23.356Z",
      description: "Order completed with no issues.",
    },
    createdAt: "2026-05-25T23:57:23.356Z",
    updatedAt: "2026-06-24T23:57:23.356Z",
  },
  {
    _id: "orderJCWTgWbhJO9336714428",
    buyerInfo: {
      buyerId: "people72664990zvravqrr",
      buyerFirstName: "Peter",
      buyerMiddleName: "Clark",
      buyerLastName: "Herrera",
      email: "peter.herrera@gmail.com",
      phone: "+639058690100",
      image:
        "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516777/user-male-peter-clark-herrera_iruafy.jpg",
      shippingInfo: {
        method: "ground",
        estimatedDays: 9,
        carrier: "FedEx",
        trackingNumber: "710271660707832687",
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
    orderedItems: [
      {
        _id: "orderitemgIgQNsivRV5504353799",
        productId: "product66e9392c0051dc2c4fa65331",
        productName: "Balenciaga Hourglass Bag",
        description:
          "Sculptural handbag with a distinctive curved silhouette, crafted from smooth leather and featuring a bold B logo clasp.",
        variant: {
          _id: "variant2z60rw407r36x83cdpgp",
          sku: "balenciaga-hourglass-bag",
          attributeOptions: [],
          price: 24.75,
          quantity: 3,
          subTotal: 74.25,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514292/balenciaga-hourglass-bag_hfcwhx.jpg",
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-thread-and-co-profile_ole1un.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
      {
        _id: "orderitemOGExteIpiG5101176311",
        productId: "product66e92d4c0051dc2c4fa6528b",
        productName: "Diesel D-Strukt Slim Fit Jeans",
        description:
          "Premium slim-fit jeans with a modern design and slightly distressed detailing. Crafted from high-quality denim for an elevated look.",
        variant: {
          _id: "variantjp8ddu14m7vf40l6d697db82",
          sku: "diesel-d-strukt-slim-fit-jeans-brown-xs",
          attributeOptions: [
            {
              attribute: "Color",
              value: "Brown",
            },
            {
              attribute: "Pants Size",
              value: "XS",
            },
          ],
          price: 30.25,
          quantity: 4,
          subTotal: 121,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515249/diesel-d-strukt-slim-fit-jeans-brown-3_av7dko.jpg",
          storeInfo: {
            storeId: "store9d8f7g6h5j4k3l2m1n0b",
            storeName: "EverChic Apparel",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-everchic-apparel-profile_lxczuy.jpg",
            ownerId: "people99001122hijklmno",
            ownerName: "Jessica Garcia",
            phone: "+639201112233",
            email: "jessica.garcia@email.com",
          },
        },
      },
      {
        _id: "orderitemOmYzpTtLcH0844389286",
        productId: "product66e9392c0051dc2c4fa65331",
        productName: "Balenciaga Hourglass Bag",
        description:
          "Sculptural handbag with a distinctive curved silhouette, crafted from smooth leather and featuring a bold B logo clasp.",
        variant: {
          _id: "variant2z60rw407r36x83cdpgp",
          sku: "balenciaga-hourglass-bag",
          attributeOptions: [],
          price: 24.75,
          quantity: 4,
          subTotal: 99,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514292/balenciaga-hourglass-bag_hfcwhx.jpg",
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-thread-and-co-profile_ole1un.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 294.25,
      shippingFee: 6,
      discount: 0,
      orderTotalPrice: 300.25,
    },
    timeline: [
      {
        slug: "order_placed",
        label: "Order Placed",
        timestamp: "2026-05-16T10:05:13.942Z",
        description: "Customer successfully placed the order.",
      },
      {
        slug: "payment_pending",
        label: "Payment Pending",
        timestamp: "2026-05-20T10:05:13.942Z",
        description: "Waiting for customer payment confirmation.",
      },
      {
        slug: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2026-05-24T10:05:13.942Z",
        description: "Payment has been verified and confirmed.",
      },
      {
        slug: "processing",
        label: "Processing",
        timestamp: "2026-05-27T10:05:13.942Z",
        description: "Seller is preparing the items.",
      },
      {
        slug: "packed",
        label: "Packed",
        timestamp: "2026-05-30T10:05:13.942Z",
        description: "Items have been packed and ready for shipment.",
      },
      {
        slug: "shipped",
        label: "Shipped",
        timestamp: "2026-06-03T10:05:13.942Z",
        description: "Order has been handed over to the courier.",
      },
      {
        slug: "out_for_delivery",
        label: "Out for Delivery",
        timestamp: "2026-06-07T10:05:13.942Z",
        description: "Courier is delivering the order.",
      },
      {
        slug: "delivered",
        label: "Delivered",
        timestamp: "2026-06-10T10:05:13.942Z",
        description: "Order successfully delivered to the customer.",
      },
      {
        slug: "completed",
        label: "Completed",
        timestamp: "2026-06-14T10:05:13.942Z",
        description: "Order completed with no issues.",
      },
    ],
    paymentInfo: {
      method: "Metrobank",
      status: "Paid",
      slug: "paid",
      paidAt: "2026-05-24T10:05:13.942Z",
      transactionId: "1EY6T739UR0KHY84U6T8",
    },
    currentStatus: {
      slug: "completed",
      label: "Completed",
      timestamp: "2026-06-14T10:05:13.942Z",
      description: "Order completed with no issues.",
    },
    createdAt: "2026-05-16T10:05:13.942Z",
    updatedAt: "2026-06-14T10:05:13.942Z",
  },
  {
    _id: "ordermdYbTcQkuj8738829123",
    buyerInfo: {
      buyerId: "people02727687ytzmiuwk",
      buyerFirstName: "Raymund",
      buyerMiddleName: "Moore",
      buyerLastName: "Blackburn",
      email: "raymund.blackburn@mgmail.com",
      phone: "+639121620600",
      image:
        "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516777/user-male-raymund-moore-blackburn_yk5s2e.jpg",
      shippingInfo: {
        method: "standard",
        estimatedDays: 7,
        carrier: "J&T Express",
        trackingNumber: "632223062089528573",
        address: {
          addressLine1: "9979 Daniel Inlet",
          addressLine2: "",
          city: "Davidmouth",
          stateOrProvince: "CA",
          barangay: "",
          zipCode: "64716",
          country: "United States",
        },
      },
    },
    orderedItems: [
      {
        _id: "orderitemqQuViFvYeA2090355255",
        productId: "product66e935700051dc2c4fa6530d",
        productName: "Brooks Brothers Madison Fit Suit",
        description:
          "Classic two-button suit made from high-quality Italian wool, offering a traditional fit for timeless style.",
        variant: {
          _id: "variant090tmiuge5yh14v603y2f9",
          sku: "brooks-brothers-madison-fit-suit-gunmetal-gray-xl",
          attributeOptions: [
            {
              attribute: "Color",
              value: "Gunmetal Gray",
            },
            {
              attribute: "Suit Size",
              value: "XL",
            },
          ],
          price: 44.75,
          quantity: 1,
          subTotal: 44.75,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514296/brooks-brothers-madison-fit-suit-gunmetal-gray-3_cj5yrz.jpg",
          storeInfo: {
            storeId: "storem0n1b2v3c4x5z6a7s8d9f",
            storeName: "Thread and Co.",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-thread-and-co-profile_ole1un.jpg",
            ownerId: "people52449916hujoeuns",
            ownerName: "Belinda Mitchell",
            phone: "+639245687251",
            email: "belinda.mitchell@gmail.com",
          },
        },
      },
      {
        _id: "orderitemHmuTrxozya9411402962",
        productId: "product66e9351a0051dc2c4fa65304",
        productName: "Hugo Boss Slim Fit Wool Suit",
        description:
          "Elegant slim-fit wool suit with a two-button jacket and matching trousers, ideal for formal occasions.",
        variant: {
          _id: "variant4y40it0y8b3lw354q5t17kdt",
          sku: "hugo-boss-slim-fit-wool-suit-navy-navy-xxl",
          attributeOptions: [
            {
              attribute: "Color",
              value: "Navy",
            },
            {
              attribute: "Suit Size",
              value: "XXL",
            },
          ],
          price: 25.25,
          quantity: 2,
          subTotal: 50.5,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515962/hugo-boss-slim-fit-wool-suit-navy-1_elepgo.jpg",
          storeInfo: {
            storeId: "store7840556196lkonidlvdn",
            storeName: "Kenstore",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516629/store-kenstore-profile_snxd17.jpg",
            ownerId: "people43210987nopqrstu",
            ownerName: "Kenny Estrella",
            phone: "+6392223334455",
            email: "kennyestrellaworks@email.com",
          },
        },
      },
      {
        _id: "orderitemEKmkydQkiY4755183992",
        productId: "product66e92f290051dc2c4fa652b0",
        productName: "Carhartt K87 Workwear Pocket T-Shirt",
        description:
          "Heavyweight cotton t-shirt with a front pocket, designed for durability and everyday workwear.",
        variant: {
          _id: "variant9xr7z4km8qhde276lo82s932",
          sku: "carhartt-k87-workwear-pocket-t-shirt-red-l",
          attributeOptions: [
            {
              attribute: "Color",
              value: "Red",
            },
            {
              attribute: "Shirt Size",
              value: "L",
            },
          ],
          price: 24.25,
          quantity: 1,
          subTotal: 24.25,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515243/carhartt-k87-workwear-pocket-t-shirt-red-2_luodff.jpg",
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-velvet-hanger-profile_kphygx.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
      {
        _id: "orderitemHvDQUWvDUd2365124585",
        productId: "product66e92f3c0051dc2c4fa652b3",
        productName: "Uniqlo U Crew Neck Short-Sleeve T-Shirt",
        description:
          "A minimalist, high-quality cotton tee with a clean silhouette and modern fit.",
        variant: {
          _id: "variantbepz41o9174ek9aon67d0w98",
          sku: "uniqlo-u-crew-neck-short-sleeve-tshirt-gray-l",
          attributeOptions: [
            {
              attribute: "Color",
              value: "Gray",
            },
            {
              attribute: "Shirt Size",
              value: "L",
            },
          ],
          price: 25.5,
          quantity: 5,
          subTotal: 127.5,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516625/uniqlo-u-crew-neck-short-sleeve-t-shirt-gray-1_xy4ujr.jpg",
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-velvet-hanger-profile_kphygx.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 247,
      shippingFee: 8,
      discount: 0,
      orderTotalPrice: 255,
    },
    timeline: [
      {
        slug: "order_placed",
        label: "Order Placed",
        timestamp: "2026-05-18T16:18:04.178Z",
        description: "Customer successfully placed the order.",
      },
      {
        slug: "payment_pending",
        label: "Payment Pending",
        timestamp: "2026-05-22T16:18:04.178Z",
        description: "Waiting for customer payment confirmation.",
      },
      {
        slug: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2026-05-26T16:18:04.178Z",
        description: "Payment has been verified and confirmed.",
      },
      {
        slug: "processing",
        label: "Processing",
        timestamp: "2026-05-30T16:18:04.178Z",
        description: "Seller is preparing the items.",
      },
      {
        slug: "packed",
        label: "Packed",
        timestamp: "2026-06-03T16:18:04.178Z",
        description: "Items have been packed and ready for shipment.",
      },
      {
        slug: "shipped",
        label: "Shipped",
        timestamp: "2026-06-07T16:18:04.178Z",
        description: "Order has been handed over to the courier.",
      },
      {
        slug: "out_for_delivery",
        label: "Out for Delivery",
        timestamp: "2026-06-11T16:18:04.178Z",
        description: "Courier is delivering the order.",
      },
      {
        slug: "delivered",
        label: "Delivered",
        timestamp: "2026-06-15T16:18:04.178Z",
        description: "Order successfully delivered to the customer.",
      },
      {
        slug: "completed",
        label: "Completed",
        timestamp: "2026-06-18T16:18:04.178Z",
        description: "Order completed with no issues.",
      },
    ],
    paymentInfo: {
      method: "Paypal",
      status: "Paid",
      slug: "paid",
      paidAt: "2026-05-26T16:18:04.178Z",
      transactionId: "51GT94K9J5YD2T24QR4Z",
    },
    currentStatus: {
      slug: "completed",
      label: "Completed",
      timestamp: "2026-06-18T16:18:04.178Z",
      description: "Order completed with no issues.",
    },
    createdAt: "2026-05-18T16:18:04.178Z",
    updatedAt: "2026-06-18T16:18:04.178Z",
  },
  {
    _id: "ordervoJQDgdXvq3785138713",
    buyerInfo: {
      buyerId: "people81667609rqzekwlj",
      buyerFirstName: "Deanna",
      buyerMiddleName: "Curry",
      buyerLastName: "Valentine",
      email: "deanna.valentine@gmail.com",
      phone: "+639220161400",
      image:
        "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516636/user-female-deanna-curry-valentine_sksgeq.jpg",
      shippingInfo: {
        method: "door_to_door",
        estimatedDays: 10,
        carrier: "LBC Express",
        trackingNumber: "540252059074090645",
        address: {
          addressLine1: "791 Michael Ports",
          addressLine2: "Apt. 098",
          city: "East Theresaton",
          stateOrProvince: "TN",
          barangay: "",
          zipCode: "28520",
          country: "United States",
        },
      },
    },
    orderedItems: [
      {
        _id: "orderitemNeYRhATvnK2577984064",
        productId: "product66e931d00051dc2c4fa652e9",
        productName: "Columbia Fleece Jacket",
        description:
          "Classic full-zip fleece jacket, ideal for layering or wearing on its own. Features a soft, comfortable fabric for everyday wear.",
        variant: {
          _id: "variant599l7m18c58mcg1rob7ho7",
          sku: "columbia-fleece-jacket-black-xxs",
          attributeOptions: [
            {
              attribute: "Color",
              value: "Black",
            },
            {
              attribute: "Jacket Size",
              value: "XXS",
            },
          ],
          price: 32.5,
          quantity: 5,
          subTotal: 162.5,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515246/columbia-fleece-jacket-black-1_tduzwr.jpg",
          storeInfo: {
            storeId: "store9d8f7g6h5j4k3l2m1n0b",
            storeName: "EverChic Apparel",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-everchic-apparel-profile_lxczuy.jpg",
            ownerId: "people99001122hijklmno",
            ownerName: "Jessica Garcia",
            phone: "+639201112233",
            email: "jessica.garcia@email.com",
          },
        },
      },
      {
        _id: "orderitembFPIqAKKiQ6849605078",
        productId: "product66e92f3c0051dc2c4fa652b3",
        productName: "Uniqlo U Crew Neck Short-Sleeve T-Shirt",
        description:
          "A minimalist, high-quality cotton tee with a clean silhouette and modern fit.",
        variant: {
          _id: "varianth2zizt0ncm33o836l11q08q2",
          sku: "uniqlo-u-crew-neck-short-sleeve-tshirt-green-s",
          attributeOptions: [
            {
              attribute: "Color",
              value: "Green",
            },
            {
              attribute: "Shirt Size",
              value: "S",
            },
          ],
          price: 23.25,
          quantity: 5,
          subTotal: 116.25,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516627/uniqlo-u-crew-neck-short-sleeve-t-shirt-green-2_fupeqn.jpg",
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-velvet-hanger-profile_kphygx.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
      {
        _id: "orderitemJvLcxImMdw2533720377",
        productId: "product66e92f0c0051dc2c4fa652ad",
        productName: "Champion Men's Classic Jersey Tee",
        description:
          "Iconic Adidas Trefoil logo on a soft cotton t-shirt, offering timeless style and comfort.",
        variant: {
          _id: "varianta7p5xr434l77k2kfm809os",
          sku: "champion-mens-classic-jersey-tee-white-s",
          attributeOptions: [
            {
              attribute: "Color",
              value: "White",
            },
            {
              attribute: "Shirt Size",
              value: "S",
            },
          ],
          price: 26.75,
          quantity: 2,
          subTotal: 53.5,
          primaryImage:
            "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515245/champion-mens-classic-jersey-tee-white-3_mqjtbe.jpg",
          storeInfo: {
            storeId: "storei9o0p1a2s3d4f5g6h7j8k",
            storeName: "Velvet Hanger",
            storeImage:
              "https://res.cloudinary.com/dqj5goglp/image/upload/v1779543942/store-velvet-hanger-profile_kphygx.jpg",
            ownerId: "people56294730ppudhnxj",
            ownerName: "Kristen Smith",
            phone: "+639360823200",
            email: "kristen.smith@yahoo.com",
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 332.25,
      shippingFee: 13,
      discount: 0,
      orderTotalPrice: 345.25,
    },
    timeline: [
      {
        slug: "order_placed",
        label: "Order Placed",
        timestamp: "2026-05-23T00:26:37.272Z",
        description: "Customer successfully placed the order.",
      },
      {
        slug: "payment_pending",
        label: "Payment Pending",
        timestamp: "2026-05-27T00:26:37.272Z",
        description: "Waiting for customer payment confirmation.",
      },
      {
        slug: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2026-05-31T00:26:37.272Z",
        description: "Payment has been verified and confirmed.",
      },
      {
        slug: "processing",
        label: "Processing",
        timestamp: "2026-06-03T00:26:37.272Z",
        description: "Seller is preparing the items.",
      },
      {
        slug: "packed",
        label: "Packed",
        timestamp: "2026-06-07T00:26:37.272Z",
        description: "Items have been packed and ready for shipment.",
      },
      {
        slug: "shipped",
        label: "Shipped",
        timestamp: "2026-06-11T00:26:37.272Z",
        description: "Order has been handed over to the courier.",
      },
      {
        slug: "out_for_delivery",
        label: "Out for Delivery",
        timestamp: "2026-06-15T00:26:37.272Z",
        description: "Courier is delivering the order.",
      },
      {
        slug: "delivered",
        label: "Delivered",
        timestamp: "2026-06-19T00:26:37.272Z",
        description: "Order successfully delivered to the customer.",
      },
      {
        slug: "completed",
        label: "Completed",
        timestamp: "2026-06-23T00:26:37.272Z",
        description: "Order completed with no issues.",
      },
    ],
    paymentInfo: {
      method: "Stripe",
      status: "Paid",
      slug: "paid",
      paidAt: "2026-05-31T00:26:37.272Z",
      transactionId: "CN0FP75J2ZB04DQ748W8",
    },
    currentStatus: {
      slug: "completed",
      label: "Completed",
      timestamp: "2026-06-23T00:26:37.272Z",
      description: "Order completed with no issues.",
    },
    createdAt: "2026-05-23T00:26:37.272Z",
    updatedAt: "2026-06-23T00:26:37.272Z",
  },
];
