export const orders = [
  {
    _id: "order5xn56v15vt4sok4c504oi69r", // Generate random 12 letters and 12 numbers then shuffle it and have a prefix of 'order'.
    buyerInfo: {
      // You will create buyerInfo.
      buyerId: "people15428116hinbtegp", // Look into users.js and get the length of users. Then randomize to fetch an item.
      buyerName: "Christian Rogers", // Use the _id from the randomized item.
      email: "christian.rodgers@gmail.com", // Use the contact.email of the randomized item.
      phone: "+639991059200", // Use the contact.phone of the randomized item.
      image: "images/users/user-male-christian-harris-rogers.jpg", // Use the image of the randomized item.
      shippingInfo: {
        // Look into deliveryCarriers.js and randomized a number based from its length then use it as index of the item that you will use.
        method: "express", // Use the services array and randomized on the length, the index will be the value here.
        estimatedDays: 2, // Just randomized a number starting at 2 upto 10.
        carrier: "UPS", // Use the name of the item.
        trackingNumber: "99761080434815017404", // Generate a random number until the characters length.
        address: {
          // At the selected buyerInfo from users.js, use the item within the address [] where isDefault is true.
          addressLine1: "53211 Joyce Wall", // Fetch this in the address [].
          addressLine2: "", // Fetch this in the address [].
          city: "New Vanessa", // Fetch this in the address [].
          stateOrProvince: "CT", // Fetch this in the address [].
          barangay: "", // Fetch this in the address [].
          zipCode: "00950", // Fetch this in the address [].
          country: "United States", // Fetch this in the address [].
        },
      },
    },
    orderItems: [
      // Randomized a number from 1 to 5, this will be the number of items that you will create within this orderItems [] array.
      {
        _id: "orderitemjjf8320t717rzaep21", // Generate random 12 letters and 12 numbers then shuffle it and have a prefix of 'orderitems'.
        productId: "product66e92ee00051dc2c4fa652a7", // Look through products.js and randomized a number based on its length, that's the item that will be used as a product.
        productName: "Nike Sportswear Club Tee", // Use the name of the item selected in products.js.
        description:
          "Classic cotton tee featuring the Nike logo, perfect for casual wear and sports activities.", // Use the description of the item selected in products.js.
        variant: {
          // In the current product item selected, look through the variants [] array and randomized a number based on its length, the random number is the selected variant.
          _id: "variantbh39yu06t1t8mx347m5p", // Generate random 12 letters and 12 numbers then shuffle it and have a prefix of 'variant'.
          sku: "nike-sportswear-club-tee-xs-red", // The sku of the selected variant.
          attributeOptions: [
            // Use the selected variant [] item attributes {} and use the key and value pairs to search for the attribute and value, if matched, ex. { attribute: "Shirt Size", value: "XS" }.
            { attribute: "Shirt Size", value: "XS" },
            { attribute: "Color", value: "black" },
          ],
          price: 31.5, // The price of the selected variant.
          quantity: 2, // Generate a random number based from the stock fo the selected variant.
          subTotal: 63.0, // Multiply the quantity to the price.
          primaryImage: "images/products/nike-sportswear-club-tee-red.jpg", // The primaryImage of the selected variant.
          storeInfo: {
            // The selected product item from earlier, use the storeOwnerInfo {}
            storeId: "store7840556196lkonidlvdn", // The storeId from the selected product item.
            storeName: "Kenstore", // Using the storeId, look through stores.js and if there's a match, get the storeName as value here.
            storeImage: "images/stores/store-kenstore-profile.jpg", // Using the storeId, look through stores.js and if there's a match, get the logoUrl as value here.
            ownerId: "people43210987nopqrstu", // Using the storeId, look through stores.js and if there's a match, get the ownerId as value here.
            ownerName: "Kenny Estrella", // Using the ownerId, look through users.js and if there's a match, get the firstName and lastName, join them
            phone: "+6392223334455", // Using the ownerId, look through users.js and if there's a match, get the contact.phone
            email: "kennyestrellaworks@email.com", // Using the ownerId, look through users.js and if there's a match, get the contact.email
          },
        },
      },
    ],
    summary: {
      itemsTotalPrice: 86.75, // Sum of all subTotal
      shippingFee: 10.0, // From the selected item earlier at deliveryCarriers.js and use the priceRange.min and priceRange.max to generate a number not less than priceRange.min but not greater than priceRange.max
      discount: 0, // This is 0 always
      orderTotalPrice: 96.75, // Sum of itemsTotalPrice and shippingFee
      currency: "USD", // From the selected item earlier at deliveryCarriers.js use the currency.
    },
    currentStatus: "delivered",
    timeline: [
      // Look through orderLifeCycle.js and construct items here using the sequence. For the timestamp, at least 2 or 3 days interval to the next item.
      {
        code: "order_placed",
        label: "Order Placed",
        timestamp: "2024-10-15T10:30:00.000Z",
        description: "Your order has been confirmed.",
      },
      {
        code: "payment_confirmed",
        label: "Payment Confirmed",
        timestamp: "2024-10-15T10:35:00.000Z",
        description: "Payment received successfully.",
      },
      {
        code: "processing",
        label: "Processing",
        timestamp: "2024-10-15T11:45:00.000Z",
        description: "Store is preparing your order for shipment.",
      },
      {
        code: "shipped",
        label: "Shipped",
        timestamp: "2024-10-16T14:20:00.000Z",
        description: "Your order is on the way! Track it with FedEx.",
      },
      {
        code: "out_for_delivery",
        label: "Out for Delivery",
        timestamp: "2024-10-19T08:00:00.000Z",
        description: "Your order is out for delivery today.",
      },
      {
        code: "delivered",
        label: "Delivered",
        timestamp: "2024-10-19T09:15:00.000Z",
        description: "Package delivered successfully.",
      },
    ],
    paymentInfo: {
      method: "credit_card", // Always this value
      status: "paid", // If timeline[] has an item with status 'payment_confirmed', then the value is is 'paid', if not 'pending'
      paidAt: "2024-10-15T10:35:00.000Z", // Use the value of the timeline[] timestamp
      transactionId: "TXN-NT20D1P6OZ36CK474Z",
    },
    createdAt: "2024-10-15T10:30:00.000Z", // When the order is placed
    updatedAt: "2024-10-19T09:15:00.000Z", // The last timestamp in timeline[]
  },
];
