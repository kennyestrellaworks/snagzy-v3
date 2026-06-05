export const deliveryCarriers = [
  {
    id: "dhl",
    name: "DHL Express",
    type: "international",
    logo: "/logos/dhl.svg",
    trackingUrl: "https://www.dhl.com/en/express/tracking.html",
    supportsCOD: false,
    supportsInternational: true,
    estimatedDeliveryDays: {
      local: null,
      international: "3-7",
    },
    priceRange: {
      min: 5,
      max: 30,
      currency: "USD",
    },
    services: ["express", "standard", "freight"],
    status: "active",
  },

  {
    id: "fedex",
    name: "FedEx",
    type: "international",
    logo: "/logos/fedex.svg",
    trackingUrl: "https://www.fedex.com/fedextrack/",
    supportsCOD: false,
    supportsInternational: true,
    estimatedDeliveryDays: {
      local: "1-3",
      international: "3-10",
    },
    priceRange: {
      min: 5,
      max: 40,
      currency: "USD",
    },
    services: ["express", "ground", "freight"],
    status: "active",
  },

  {
    id: "lbc",
    name: "LBC Express",
    type: "local",
    logo: "/logos/lbc.svg",
    trackingUrl: "https://www.lbcexpress.com/track/",
    supportsCOD: true,
    supportsInternational: false,
    estimatedDeliveryDays: {
      local: "2-5",
      international: null,
    },
    priceRange: {
      min: 5,
      max: 50,
      currency: "PHP",
    },
    services: ["door_to_door", "branch_pickup"],
    status: "active",
  },

  {
    id: "jnt",
    name: "J&T Express",
    type: "local",
    logo: "/logos/jnt.svg",
    trackingUrl: "https://www.jtexpress.ph/index/query/gzquery.html",
    supportsCOD: true,
    supportsInternational: false,
    estimatedDeliveryDays: {
      local: "2-4",
      international: null,
    },
    priceRange: {
      min: 5,
      max: 40,
      currency: "PHP",
    },
    services: ["standard", "ecommerce"],
    status: "active",
  },

  {
    id: "ninjavan",
    name: "Ninja Van",
    type: "local",
    logo: "/logos/ninjavan.svg",
    trackingUrl: "https://www.ninjavan.co/en-ph/tracking",
    supportsCOD: true,
    supportsInternational: false,
    estimatedDeliveryDays: {
      local: "2-6",
      international: null,
    },
    priceRange: {
      min: 5,
      max: 30,
      currency: "PHP",
    },
    services: ["standard", "same_day"],
    status: "active",
  },
];
