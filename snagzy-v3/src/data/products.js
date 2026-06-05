export const products = [
  {
    _id: "product66e935330051dc2c4fa65307",
    name: "Tom Ford O'Connor Base Suit",
    slug: "tom-ford-oconnor-base-suit",
    categories: [
      "categoryitem41mz8qp5sd93jf7t1xy0ac",
      "categoryitem93qw4lt7ag10hsz6vd2pk8",
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitemh7628ke6av47jp4j24yxr8p8",
      "categoryitemh7628ke6av47jp4j24yxr8p8",
    ],
    description:
      "Luxurious suit tailored from premium wool, featuring a slim fit and peak lapels for a sharp, sophisticated look.",
    status: "itemstatus73t74z442lo78mm3d10jlacg",
    storeOwnerInfo: {
      storeId: "store7840556196lkonidlvdn",
      ownerId: "people43210987nopqrstu",
    },
    createdAt: "2022-04-22T16:21:12Z",
    updatedAt: "2022-04-22T16:36:12Z",
    gallery: [
      {
        _id: "galleryqg9knm8ihgq4d599224w5m87",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516623/tom-ford-oconnor-base-suit-black_xftz9d.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516622/tom-ford-oconnor-base-suit-black-1_txdkqo.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516622/tom-ford-oconnor-base-suit-black-2_lrpmw2.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516622/tom-ford-oconnor-base-suit-black-3_omph2j.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516623/tom-ford-oconnor-base-suit-black-4_la1lgh.jpg",
        ],
      },
      {
        _id: "galleryr65t32ym3hu9vl00j56kw43i",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516624/tom-ford-oconnor-base-suit-gray_jqxhkk.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516623/tom-ford-oconnor-base-suit-gray-1_wbqmgk.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516623/tom-ford-oconnor-base-suit-gray-2_tfqohf.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516623/tom-ford-oconnor-base-suit-gray-3_l48xin.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516623/tom-ford-oconnor-base-suit-gray-4_fp2kxc.jpg",
        ],
      },
      {
        _id: "gallerysw77o6k74l361v5cz3gv9ka1",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516625/tom-ford-oconnor-base-suit-navy-blue_djhfop.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516624/tom-ford-oconnor-base-suit-navy-blue-1_zmvmel.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516624/tom-ford-oconnor-base-suit-navy-blue-2_fvzfd0.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516624/tom-ford-oconnor-base-suit-navy-blue-3_avjimy.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516624/tom-ford-oconnor-base-suit-navy-blue-4_aoo4k7.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516624/tom-ford-oconnor-base-suit-navy-blue-5_bv77ub.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516624/tom-ford-oconnor-base-suit-navy-blue-6_z13vqo.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82", // Color
        options: [
          "color8641205793qwertasdfg", // Gray
          "color6139475208bnmasdfghj", // Black
          "color670doyqs79397wt9qzx12o", // Navy Blue
        ],
      },
      {
        _id: "attributesuitsize173xq2460tec231sod6z4hwb", // Suit size
        options: [
          "suitsize03zix640n0r2c2c1bc6n5av2", // XS
          "suitsize3w9h7cbcw8a4zsn851lo3079", // S
          "suitsizet58vez9771lw6r51f0zca8x3", // M
          "suitsizequee1mzo9dd260013b3e70x5", // L
        ],
      },
    ],
    defaultVariant: "variantmz81j3o3e7v9q2gu1y8890oi",
    variants: [
      {
        _id: "variant0taa5a2rf0f609ul47iwy648",
        status: "itemstatus73t74z442lo78mm3d10jlacg",
        sku: "tom-ford-oconnor-base-suit-black-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize03zix640n0r2c2c1bc6n5av2",
        },
        createdAt: "2022-04-22T17:46:12Z",
        updatedAt: "2022-04-22T18:10:12Z",
        price: 39.0,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516622/tom-ford-oconnor-base-suit-black-1_txdkqo.jpg",
        gallery: "galleryqg9knm8ihgq4d599224w5m87",
      },
      {
        _id: "variantxkx1nx52n1r0v838k6in370w",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "tom-ford-oconnor-base-suit-black-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize3w9h7cbcw8a4zsn851lo3079",
        },
        createdAt: "2022-04-23T13:02:12Z",
        updatedAt: "2022-04-23T13:10:12Z",
        price: 39.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516623/tom-ford-oconnor-base-suit-black_xftz9d.jpg",
        gallery: "galleryqg9knm8ihgq4d599224w5m87",
      },
      {
        _id: "variant2e6dul5ia889j5rcx4ka3383",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "tom-ford-oconnor-base-suit-black-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2022-04-23T15:16:12Z",
        updatedAt: "2022-04-23T15:26:12Z",
        price: 39.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516622/tom-ford-oconnor-base-suit-black-2_lrpmw2.jpg",
        gallery: "galleryqg9knm8ihgq4d599224w5m87",
      },
      {
        _id: "variantn46q0p7t52eoh29ap42b19tx",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "tom-ford-oconnor-base-suit-gray-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize03zix640n0r2c2c1bc6n5av2",
        },
        createdAt: "2022-04-24T15:16:12Z",
        updatedAt: "2022-04-24T15:26:12Z",
        price: 39.0,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516623/tom-ford-oconnor-base-suit-gray-2_tfqohf.jpg",
        gallery: "galleryr65t32ym3hu9vl00j56kw43i",
      },
      {
        _id: "variantla84681vq3oo72nis7v192if",
        status: "itemstatus73t74z442lo78mm3d10jlacg",
        sku: "tom-ford-oconnor-base-suit-gray-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2022-04-24T16:04:12Z",
        updatedAt: "2022-04-24T16:12:12Z",
        price: 39.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516623/tom-ford-oconnor-base-suit-gray-3_l48xin.jpg",
        gallery: "galleryr65t32ym3hu9vl00j56kw43i",
      },
      {
        _id: "variant3r4aug4w6pn81r3490dp8qt9",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "tom-ford-oconnor-base-suit-gray-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsizequee1mzo9dd260013b3e70x5",
        },
        createdAt: "2022-04-24T16:21:12Z",
        updatedAt: "2022-04-24T16:36:12Z",
        price: 39.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516623/tom-ford-oconnor-base-suit-gray-4_fp2kxc.jpg",
        gallery: "galleryr65t32ym3hu9vl00j56kw43i",
      },
      {
        _id: "variantwr5r69qxx39vka317p8w19w7",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "tom-ford-oconnor-base-suit-navy-blue-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color670doyqs79397wt9qzx12o",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize03zix640n0r2c2c1bc6n5av2",
        },
        createdAt: "2022-04-24T17:46:12Z",
        updatedAt: "2022-04-24T18:10:12Z",
        price: 39.0,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 6,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516625/tom-ford-oconnor-base-suit-navy-blue_djhfop.jpg",
        gallery: "gallerysw77o6k74l361v5cz3gv9ka1",
      },
      {
        _id: "variantl526gu74m64y12ceu74ko9vy",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "tom-ford-oconnor-base-suit-navy-blue-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color670doyqs79397wt9qzx12o",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize3w9h7cbcw8a4zsn851lo3079",
        },
        createdAt: "2022-04-13T13:02:12Z",
        updatedAt: "2022-04-13T13:10:12Z",
        price: 39.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 10,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516624/tom-ford-oconnor-base-suit-navy-blue-5_bv77ub.jpg",
      },
      {
        _id: "variantmz81j3o3e7v9q2gu1y8890oi",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "tom-ford-oconnor-base-suit-navy-blue-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color670doyqs79397wt9qzx12o",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2022-04-13T15:16:12Z",
        updatedAt: "2022-04-13T15:26:12Z",
        price: 39.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516624/tom-ford-oconnor-base-suit-navy-blue-4_aoo4k7.jpg",
      },
      {
        _id: "variantwg5bwxa0y14695z49sa6xz34",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "tom-ford-oconnor-base-suit-navy-blue-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color670doyqs79397wt9qzx12o",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsizequee1mzo9dd260013b3e70x5",
        },
        createdAt: "2022-04-13T16:04:12Z",
        updatedAt: "2022-04-13T16:12:12Z",
        price: 39.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516624/tom-ford-oconnor-base-suit-navy-blue-3_avjimy.jpg",
      },
    ],
  },
  {
    _id: "product66e931a20051dc2c4fa652e3",
    name: "The North Face Puffer Jacket",
    slug: "the-north-face-puffer-jacket",
    categories: [
      "categoryitem41mz8qp5sd93jf7t1xy0ac",
      "categoryitem84pl0qw7ks26azm5re1tg4",
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitemh7628ke6av47jp4j24yxr8p8",
      "categoryitemh7628ke6av47jp4j24yxr8p8",
    ],
    description:
      "Insulated puffer jacket providing warmth in cold weather, featuring a water-resistant shell and a stylish design.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store7840556196lkonidlvdn",
      ownerId: "people43210987nopqrstu",
    },
    createdAt: "2022-04-19T15:16:12Z",
    updatedAt: "2022-04-19T15:26:12Z",
    gallery: [
      {
        _id: "gallery4aqy64i7q7ot05u6b6w5dn56",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516624/tom-ford-oconnor-base-suit-navy-blue-3_avjimy.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516619/the-north-face-puffer-jacket-black-1_e4vmjd.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516620/the-north-face-puffer-jacket-black-2_rxhhdz.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516620/the-north-face-puffer-jacket-black-3_azlblq.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516620/the-north-face-puffer-jacket-black-4_qml5l2.jpg",
        ],
      },
      {
        _id: "galleryjlyjb70f9382m48k0gi2x1a5",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516621/the-north-face-puffer-jacket-blue_bwfwxo.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516620/the-north-face-puffer-jacket-blue-1_fktkhk.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516620/the-north-face-puffer-jacket-blue-2_cq00ua.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516620/the-north-face-puffer-jacket-blue-3_iuv7er.jpg",
        ],
      },
      {
        _id: "galleryx5k04637w7s17rr6xqii8w0c",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516622/the-north-face-puffer-jacket-brown_wryzrh.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516621/the-north-face-puffer-jacket-brown-1_pvdhj5.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516621/the-north-face-puffer-jacket-brown-2_usj9ps.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516621/the-north-face-puffer-jacket-brown-3_o29dhd.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516621/the-north-face-puffer-jacket-brown-4_qeo0zs.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516621/the-north-face-puffer-jacket-brown-5_rfy7rb.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516622/the-north-face-puffer-jacket-brown-6_aw3zfa.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82", // Color
        options: [
          "color1s9acdljp780sik8k805544y", // Brown
          "color6139475208bnmasdfghj", // Black
          "colorlx8bj3f8490i2io0m6d2ed68", // Blue
        ],
      },
      {
        _id: "attributejacketsize173xq2460tec231sod6z4hwb", // Jacket size
        options: [
          "jacketsize03zix640n0r2c2c1bc6n5av2", // XS
          "jacketsize3w9h7cbcw8a4zsn851lo3079", // S
          "jacketsizet58vez9771lw6r51f0zca8x3", // M
          "jacketsize65cl9pioqvem2g9gm0881031", // L
          "jacketsizequee1mzo9dd260013b3e70x5", // XL
        ],
      },
    ],
    defaultVariant: "variant939p1u5pl66e5qk1m9lg2n5w",
    variants: [
      {
        _id: "variant4kon6vtlun30r1266894hu9b",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "the-north-face-puffer-jacket-black-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize03zix640n0r2c2c1bc6n5av2",
        },
        createdAt: "2022-04-19T16:04:12Z",
        updatedAt: "2022-04-19T16:12:12Z",
        price: 40.0,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 7,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516624/tom-ford-oconnor-base-suit-navy-blue-3_avjimy.jpg",
        gallery: "gallery4aqy64i7q7ot05u6b6w5dn56",
      },
      {
        _id: "variant1qix05t9h7s0n1f29q88hh0x",
        status: "itemstatus73t74z442lo78mm3d10jlacg",
        sku: "the-north-face-puffer-jacket-black-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize3w9h7cbcw8a4zsn851lo3079",
        },
        createdAt: "2022-04-19T16:21:12Z",
        updatedAt: "2022-04-19T16:36:12Z",
        price: 40.0,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 10,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516619/the-north-face-puffer-jacket-black-1_e4vmjd.jpg",
        gallery: "gallery4aqy64i7q7ot05u6b6w5dn56",
      },
      {
        _id: "variant939p1u5pl66e5qk1m9lg2n5w",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "the-north-face-puffer-jacket-black-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2022-04-19T17:46:12Z",
        updatedAt: "2022-04-19T18:10:12Z",
        price: 40.1,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516620/the-north-face-puffer-jacket-black-2_rxhhdz.jpg",
        gallery: "gallery4aqy64i7q7ot05u6b6w5dn56",
      },
      {
        _id: "variant3sqf0v88a7j49qeq8d4r4s87",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "the-north-face-puffer-jacket-black-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsizequee1mzo9dd260013b3e70x5",
        },
        createdAt: "2022-04-20T13:02:12Z",
        updatedAt: "2022-04-20T13:10:12Z",
        price: 40.2,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 16,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516620/the-north-face-puffer-jacket-black-3_azlblq.jpg",
        gallery: "gallery4aqy64i7q7ot05u6b6w5dn56",
      },
      {
        _id: "variantv59b107exvz04a78it924vdx",
        status: "itemstatus73t74z442lo78mm3d10jlacg",
        sku: "the-north-face-puffer-jacket-brown-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize03zix640n0r2c2c1bc6n5av2",
        },
        createdAt: "2022-04-20T15:16:12Z",
        updatedAt: "2022-04-20T15:26:12Z",
        price: 40.0,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516621/the-north-face-puffer-jacket-brown-1_pvdhj5.jpg",
        gallery: "galleryx5k04637w7s17rr6xqii8w0c",
      },
      {
        _id: "variants0ove7u290v8f15eg8a229wc",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "the-north-face-puffer-jacket-brown-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2022-04-20T16:04:12Z",
        updatedAt: "2022-04-20T16:12:12Z",
        price: 40.2,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 6,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516622/the-north-face-puffer-jacket-brown_wryzrh.jpg",
        gallery: "galleryx5k04637w7s17rr6xqii8w0c",
      },
      {
        _id: "variantgy644b956db0tvsm174y20jl",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "the-north-face-puffer-jacket-brown-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize65cl9pioqvem2g9gm0881031",
        },
        createdAt: "2022-04-20T16:21:12Z",
        updatedAt: "2022-04-20T16:36:12Z",
        price: 40.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 10,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516621/the-north-face-puffer-jacket-brown-2_usj9ps.jpg",
        gallery: "galleryx5k04637w7s17rr6xqii8w0c",
      },
      {
        _id: "variantw63te3w5b38nde8577uwi90i",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "the-north-face-puffer-jacket-brown-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsizequee1mzo9dd260013b3e70x5",
        },
        createdAt: "2022-04-20T17:46:12Z",
        updatedAt: "2022-04-20T18:10:12Z",
        price: 40.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516622/the-north-face-puffer-jacket-brown-6_aw3zfa.jpg",
        gallery: "galleryx5k04637w7s17rr6xqii8w0c",
      },
      {
        _id: "variant8qhe9c397s9c7i4dbpi49z39",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "the-north-face-puffer-jacket-blue-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorlx8bj3f8490i2io0m6d2ed68",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize3w9h7cbcw8a4zsn851lo3079",
        },
        createdAt: "2022-04-21T13:02:12Z",
        updatedAt: "2022-04-21T13:10:12Z",
        price: 40.0,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516621/the-north-face-puffer-jacket-blue_bwfwxo.jpg",
        gallery: "galleryjlyjb70f9382m48k0gi2x1a5",
      },
      {
        _id: "variant3s9cu31pnx1zj2265y1r3av5",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "the-north-face-puffer-jacket-blue-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorlx8bj3f8490i2io0m6d2ed68",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2022-04-22T15:16:12Z",
        updatedAt: "2022-04-22T15:26:12Z",
        price: 40.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516620/the-north-face-puffer-jacket-blue-2_cq00ua.jpg",
        gallery: "galleryjlyjb70f9382m48k0gi2x1a5",
      },
      {
        _id: "varianto2mr5mk85dnu914aq84y119j",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "the-north-face-puffer-jacket-blue-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorlx8bj3f8490i2io0m6d2ed68",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsizequee1mzo9dd260013b3e70x5",
        },
        createdAt: "2022-04-22T16:04:12Z",
        updatedAt: "2022-04-22T16:12:12Z",
        price: 40.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516620/the-north-face-puffer-jacket-blue-3_iuv7er.jpg",
        gallery: "galleryjlyjb70f9382m48k0gi2x1a5",
      },
    ],
  },
  {
    _id: "product66e929890051dc2c4fa65264",
    name: "Reebok Nano X1",
    slug: "reebok-nano-x1",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitemh7628ke6av47jp4j24yxr8p8",
      "categoryitem16cx7vb3pl82mna5qr9ty4",
      "categoryitem63qa8we4rt50vbn2jm7kl9",
    ],
    description:
      "Cross-training shoe built for versatility, with durable construction and a flexible outsole for enhanced performance during workouts.",
    status: "itemstatus73t74z442lo78mm3d10jlacg",
    storeOwnerInfo: {
      storeId: "store7840556196lkonidlvdn",
      ownerId: "people43210987nopqrstu",
    },
    createdAt: "2022-04-17T13:02:12Z",
    updatedAt: "2022-04-17T13:10:12Z",
    gallery: [
      {
        _id: "gallery3cpzdydop6r3b448243f01v6",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516619/reebok-nano-x1-4_hqrfuo.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516619/reebok-nano-x1-1_xysjbd.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516619/reebok-nano-x1-2_jizfko.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516619/reebok-nano-x1-3_jfvaxa.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516619/reebok-nano-x1-4_hqrfuo.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributeshoesizeus3948201756lkjhgfdsaq",
        options: [
          "shoesizead407s0adu66c08i7u",
          "shoesize7802643915mnbvcxzpoi",
          "shoesize1594730286asdfqwerty",
          "shoesize9415723086qazwsxedcr",
          "shoesize8372059146rfvtgbynuh",
        ],
      },
    ],
    defaultVariant: "variant68ay4kb82qq038ow0x6jft65",
    variants: [
      {
        _id: "variantd7o1l2q3mdo032x5880xsv9y",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "reebok-nano-x1-6-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq: "shoesizead407s0adu66c08i7u",
        },
        createdAt: "2022-04-17T15:16:12Z",
        updatedAt: "2022-04-17T15:26:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516619/reebok-nano-x1-4_hqrfuo.jpg",
        gallery: "gallery3cpzdydop6r3b448243f01v6",
      },
      {
        _id: "variantc8cl64903u12lkn698scti2i",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "reebok-nano-x1-7",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize7802643915mnbvcxzpoi",
        },
        createdAt: "2022-04-17T16:04:12Z",
        updatedAt: "2022-04-17T16:12:12Z",
        price: 26.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516619/reebok-nano-x1-2_jizfko.jpg",
        gallery: "gallery3cpzdydop6r3b448243f01v6",
      },
      {
        _id: "variant68ay4kb82qq038ow0x6jft65",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "reebok-nano-x1-7-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize1594730286asdfqwerty",
        },
        createdAt: "2022-04-17T16:21:12Z",
        updatedAt: "2022-04-17T16:36:12Z",
        price: 26.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516619/reebok-nano-x1-3_jfvaxa.jpg",
        gallery: "gallery3cpzdydop6r3b448243f01v6",
      },
      {
        _id: "variantycn9skpgw54g079c83v9x389",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "reebok-nano-x1-9",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize9415723086qazwsxedcr",
        },
        createdAt: "2022-04-17T17:46:12Z",
        updatedAt: "2022-04-17T18:10:12Z",
        price: 27.0,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516619/reebok-nano-x1-4_hqrfuo.jpg",
        gallery: "gallery3cpzdydop6r3b448243f01v6",
      },
      {
        _id: "variantzs13xvuj980p992xh8c0ej06",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "reebok-nano-x1-9-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize8372059146rfvtgbynuh",
        },
        createdAt: "2022-04-18T13:02:12Z",
        updatedAt: "2022-04-18T13:10:12Z",
        price: 27.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516619/reebok-nano-x1-4_hqrfuo.jpg",
        gallery: "gallery3cpzdydop6r3b448243f01v6",
      },
    ],
  },
  {
    _id: "product66e930580051dc2c4fa652ca",
    name: "Ray-Ban Aviator Classic",
    slug: "ray-ban-aviator-classic",
    categories: [
      "categoryitem20qp9as4jf63vbn7lk1re3",
      "categoryitem48mn6zx2sa75qwe9pl0rt8",
    ],
    description:
      "Iconic aviator sunglasses with a metal frame and polarized lenses, offering timeless style and UV protection.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store7840556196lkonidlvdn",
      ownerId: "people43210987nopqrstu",
    },
    createdAt: "2022-04-16T16:21:12Z",
    updatedAt: "2022-04-16T16:36:12Z",
    gallery: [
      {
        _id: "galleryfu2l7278bf099kdm05ov91fl",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516619/ray-ban-aviator-classic_nvknzi.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516618/ray-ban-aviator-classic-1_ynac5l.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516618/ray-ban-aviator-classic-2_ukldaj.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516618/ray-ban-aviator-classic-3_dgdhkv.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516618/ray-ban-aviator-classic-4_cc29el.jpg",
        ],
      },
    ],
    attributes: [],
    defaultVariant: "variantqa7v8bbo90367190osdms8z6",
    variants: [
      {
        _id: "variantqa7v8bbo90367190osdms8z6",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "ray-ban-aviator-classic",
        attributes: {},
        createdAt: "2022-04-16T17:46:12Z",
        updatedAt: "2022-04-16T18:10:12Z",
        price: 15.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 7,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516618/ray-ban-aviator-classic-4_cc29el.jpg",
        gallery: "galleryfu2l7278bf099kdm05ov91fl",
      },
    ],
  },
  {
    _id: "product66e9359d0051dc2c4fa65313",
    name: "Ralph Lauren Purple Label Suit",
    slug: "ralph-lauren-purple-label-suit",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem62bn5cx9tu81lop3qa7fd1",
      "categoryitem93qw4lt7ag10hsz6vd2pk8",
      "categoryitemh7628ke6av47jp4j24yxr8p8",
    ],
    description:
      "Premium suit crafted from luxurious wool and cashmere, featuring a classic fit and refined styling details.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store9d8f7g6h5j4k3l2m1n0b",
      ownerId: "people99001122hijklmno",
    },
    createdAt: "2023-08-20T16:04:12Z",
    updatedAt: "2023-08-20T16:12:12Z",
    gallery: [
      {
        _id: "gallery38z7nxbvx5044e599y0fs3sm",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516616/ralph-lauren-purple-label-suit-black_dpgwyu.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516615/ralph-lauren-purple-label-suit-black-1_p1pb7h.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516615/ralph-lauren-purple-label-suit-black-2_vjwbur.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516615/ralph-lauren-purple-label-suit-black-3_hkgmox.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516615/ralph-lauren-purple-label-suit-black-4_pzprv2.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516615/ralph-lauren-purple-label-suit-black-5_llo6hx.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516615/ralph-lauren-purple-label-suit-black-6_ivvgjo.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516616/ralph-lauren-purple-label-suit-black-7_u4mtgy.jpg",
        ],
      },
      {
        _id: "gallery3uz4xv780fc70lx35y2dxm09",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516617/ralph-lauren-purple-label-suit-deep-navy_djbyqi.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516616/ralph-lauren-purple-label-suit-deep-navy-1_zl6xr2.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516616/ralph-lauren-purple-label-suit-deep-navy-2_msvpsv.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516617/ralph-lauren-purple-label-suit-deep-navy-3_dfgybl.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516617/ralph-lauren-purple-label-suit-deep-navy-4_xwx30m.jpg",
        ],
      },
      {
        _id: "galleryyp4sb548p08hetka024014an",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516618/ralph-lauren-purple-label-suit-gray_ohfnif.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516617/ralph-lauren-purple-label-suit-gray-1_p3scjb.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516617/ralph-lauren-purple-label-suit-gray-2_fznhxk.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516617/ralph-lauren-purple-label-suit-gray-3_dliaye.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516618/ralph-lauren-purple-label-suit-gray-4_rov34i.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: [
          "color6139475208bnmasdfghj",
          "colordg0003k8ssdewg3m000435",
          "color8641205793qwertasdfg",
        ],
      },
      {
        _id: "attributesuitsize173xq2460tec231sod6z4hwb",
        options: [
          "suitsizenyu4u6b54f6afhz8873n4h90",
          "suitsize03zix640n0r2c2c1bc6n5av2",
          "suitsize3w9h7cbcw8a4zsn851lo3079",
          "suitsizet58vez9771lw6r51f0zca8x3",
          "suitsizequee1mzo9dd260013b3e70x5",
        ],
      },
    ],
    defaultVariant: "variant6u52uii151k4df77p7pt9vd7",
    variants: [
      {
        _id: "variantqqj2jv17g088b1ci9264vdx9",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "ralph-lauren-purple-label-suit-black-xxs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsizenyu4u6b54f6afhz8873n4h90",
        },
        createdAt: "2023-08-20T16:21:12Z",
        updatedAt: "2023-08-20T16:36:12Z",
        price: 41.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516616/ralph-lauren-purple-label-suit-black_dpgwyu.jpg",
        gallery: "gallery38z7nxbvx5044e599y0fs3sm",
      },
      {
        _id: "variantlxn3sik128774ajtn289w2m6",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "ralph-lauren-purple-label-suit-black-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize03zix640n0r2c2c1bc6n5av2",
        },
        createdAt: "2023-08-20T17:46:12Z",
        updatedAt: "2023-08-20T18:10:12Z",
        price: 41.35,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516615/ralph-lauren-purple-label-suit-black-2_vjwbur.jpg",
        gallery: "gallery38z7nxbvx5044e599y0fs3sm",
      },
      {
        _id: "variantzb907mgse3u03p1g46if8m53",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "ralph-lauren-purple-label-suit-black-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize3w9h7cbcw8a4zsn851lo3079",
        },
        createdAt: "2023-08-21T13:02:12Z",
        updatedAt: "2023-08-21T13:10:12Z",
        price: 41.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516615/ralph-lauren-purple-label-suit-black-6_ivvgjo.jpg",
        gallery: "gallery38z7nxbvx5044e599y0fs3sm",
      },
      {
        _id: "variantjwh33wxw48ula46r2bb81899",
        status: "itemstatus73t74z442lo78mm3d10jlacg",
        sku: "ralph-lauren-purple-label-suit-black-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2023-08-22T15:16:12Z",
        updatedAt: "2023-08-22T15:26:12Z",
        price: 41.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516615/ralph-lauren-purple-label-suit-black-4_pzprv2.jpg",
        gallery: "gallery38z7nxbvx5044e599y0fs3sm",
      },
      {
        _id: "variantjwh33wxw48ugmecsla4bb81267",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "ralph-lauren-purple-label-suit-black-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsizequee1mzo9dd260013b3e70x5",
        },
        createdAt: "2023-08-22T16:04:12Z",
        updatedAt: "2023-08-22T16:12:12Z",
        price: 41.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516615/ralph-lauren-purple-label-suit-black-3_hkgmox.jpg",
        gallery: "gallery38z7nxbvx5044e599y0fs3sm",
      },
      {
        _id: "variantj363mhg1sa58luyja55z6174",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "ralph-lauren-purple-label-suit-deep-navy-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colordg0003k8ssdewg3m000435",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize03zix640n0r2c2c1bc6n5av2",
        },
        createdAt: "2023-08-22T16:21:12Z",
        updatedAt: "2023-08-22T16:36:12Z",
        price: 41.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 16,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516616/ralph-lauren-purple-label-suit-deep-navy-2_msvpsv.jpg",
        gallery: "gallery3uz4xv780fc70lx35y2dxm09",
      },
      {
        _id: "variantdp783e13h0f9jyrb3t2m570z",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "ralph-lauren-purple-label-suit-black-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colordg0003k8ssdewg3m000435",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize3w9h7cbcw8a4zsn851lo3079",
        },
        createdAt: "2023-08-22T17:46:12Z",
        updatedAt: "2023-08-22T18:10:12Z",
        price: 41.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 6,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516616/ralph-lauren-purple-label-suit-deep-navy-1_zl6xr2.jpg",
        gallery: "gallery3uz4xv780fc70lx35y2dxm09",
      },
      {
        _id: "variant6u52uii151k4df77p7pt9vd7",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "ralph-lauren-purple-label-suit-black-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colordg0003k8ssdewg3m000435",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsizequee1mzo9dd260013b3e70x5",
        },
        createdAt: "2023-08-23T13:02:12Z",
        updatedAt: "2023-08-23T13:10:12Z",
        price: 41.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516617/ralph-lauren-purple-label-suit-deep-navy_djbyqi.jpg",
        gallery: "gallery3uz4xv780fc70lx35y2dxm09",
      },
      {
        _id: "variantx1gi55cavox9h49k3rx98443",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "ralph-lauren-purple-label-suit-black-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize03zix640n0r2c2c1bc6n5av2",
        },
        createdAt: "2023-08-23T15:16:12Z",
        updatedAt: "2023-08-23T15:26:12Z",
        price: 41.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 14,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516618/ralph-lauren-purple-label-suit-gray_ohfnif.jpg",
        gallery: "galleryyp4sb548p08hetka024014an",
      },
      {
        _id: "variantxxc5ms5oxhgf9h4673rx98421",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "ralph-lauren-purple-label-suit-black-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize3w9h7cbcw8a4zsn851lo3079",
        },
        createdAt: "2023-08-11T15:16:12Z",
        updatedAt: "2023-08-11T15:26:12Z",
        price: 41.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516617/ralph-lauren-purple-label-suit-gray-2_fznhxk.jpg",
        gallery: "galleryyp4sb548p08hetka024014an",
      },
      {
        _id: "variant0las8ni09yag7qno9w212857",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "ralph-lauren-purple-label-suit-black-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2023-08-11T16:04:12Z",
        updatedAt: "2023-08-11T16:12:12Z",
        price: 41.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516618/ralph-lauren-purple-label-suit-gray-4_rov34i.jpg",
        gallery: "galleryyp4sb548p08hetka024014an",
      },
      {
        _id: "variant6kihjl6d4op17j22m8gm4233",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "ralph-lauren-purple-label-suit-black-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsizequee1mzo9dd260013b3e70x5",
        },
        createdAt: "2023-08-11T16:21:12Z",
        updatedAt: "2023-08-11T16:36:12Z",
        price: 41.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516617/ralph-lauren-purple-label-suit-gray-3_dliaye.jpg",
        gallery: "galleryyp4sb548p08hetka024014an",
      },
    ],
  },
  {
    _id: "product66e929590051dc2c4fa6525e",
    name: "Puma RS-X3",
    slug: "puma-rs-x3",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem16cx7vb3pl82mna5qr9ty4",
      "categoryitem63qa8we4rt50vbn2jm7kl9",
    ],
    description:
      "Bold, retro-inspired sneaker with a chunky silhouette and vibrant colorways. Features Puma's RS cushioning for everyday comfort.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store7840556196lkonidlvdn",
      ownerId: "people43210987nopqrstu",
    },
    createdAt: "2022-04-15T14:56:12Z",
    updatedAt: "2022-04-15T15:14:12Z",
    gallery: [
      {
        _id: "gallery8wc7j4zp3wc7dn739kb7u940",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516614/puma-rs-x3_h6xqik.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516613/puma-rs-x3-1_kr2pn3.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516613/puma-rs-x3-2_a57zoj.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516614/puma-rs-x3-3_igucvu.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516614/puma-rs-x3-4_umb3qj.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516614/puma-rs-x3-5_yrgzwg.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516614/puma-rs-x3-6_kgccfj.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516614/puma-rs-x3-7_h7y19c.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributeshoesizeus3948201756lkjhgfdsaq",
        options: [
          "shoesizead407s0adu66c08i7u",
          "shoesize1594730286asdfqwerty",
          "shoesize9415723086qazwsxedcr",
          "shoesize8372059146rfvtgbynuh",
          "shoesize2169370548okmijnuhbv",
        ],
      },
    ],
    defaultVariant: "variant90lo1amr6cp1xjc6b149906s",
    variants: [
      {
        _id: "variant8kpc1x7539yt9nn4zx5e077g",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "puma-rs-x3-6-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq: "shoesizead407s0adu66c08i7u",
        },
        createdAt: "2022-04-15T15:14:12Z",
        updatedAt: "2022-04-15T15:21:12Z",
        price: 24.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516614/puma-rs-x3-4_umb3qj.jpg",
        gallery: "gallery8wc7j4zp3wc7dn739kb7u940",
      },
      {
        _id: "variant90lo1amr6cp1xjc6b149906s",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "puma-rs-x3-7-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize1594730286asdfqwerty",
        },
        createdAt: "2022-04-15T15:28:12Z",
        updatedAt: "2022-04-15T15:39:12Z",
        price: 25.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 7,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516614/puma-rs-x3-3_igucvu.jpg",
        gallery: "gallery8wc7j4zp3wc7dn739kb7u940",
      },
      {
        _id: "variant0nj99t79r587zir6ohfav150",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "puma-rs-x3-9",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize9415723086qazwsxedcr",
        },
        createdAt: "2022-04-15T15:57:12Z",
        updatedAt: "2022-04-15T16:14:12Z",
        price: 25.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516614/puma-rs-x3-6_kgccfj.jpg",
        gallery: "gallery8wc7j4zp3wc7dn739kb7u940",
      },
      {
        _id: "variantxb8tg0rs245ia29217ody57r",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "puma-rs-x3-9-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize8372059146rfvtgbynuh",
        },
        createdAt: "2022-04-16T15:16:12Z",
        updatedAt: "2022-04-16T15:26:12Z",
        price: 25.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516614/puma-rs-x3-7_h7y19c.jpg",
        gallery: "gallery8wc7j4zp3wc7dn739kb7u940",
      },
      {
        _id: "variantpsn092qr22fhd8mhh697y935",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "puma-rs-x3-10",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize2169370548okmijnuhbv",
        },
        createdAt: "2022-04-16T16:04:12Z",
        updatedAt: "2022-04-16T16:12:12Z",

        price: 25.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516614/puma-rs-x3_h6xqik.jpg",
        gallery: "gallery8wc7j4zp3wc7dn739kb7u940",
      },
    ],
  },
  {
    _id: "product66e938cf0051dc2c4fa65325",
    name: "Prada Re-Edition Nylon Mini Bag",
    slug: "prada-re-edition-nylon-mini-bag",
    categories: [
      "categoryitem92bdk38sla17qpz4u9mn2c",
      "categoryitem64po2re7mv31qas8lk5cd9",
      "categoryitem10sd7uk9pl42amq1fy4he0",
    ],
    description:
      "Compact and versatile mini bag made from Prada’s iconic nylon fabric, featuring a detachable chain strap and leather trim.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store7840556196lkonidlvdn",
      ownerId: "people43210987nopqrstu",
    },
    createdAt: "2022-04-15T14:21:12Z",
    updatedAt: "2022-04-15T14:29:12Z",
    gallery: [
      {
        _id: "galleryvvw5527v7m0cj2nij58sp393",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516613/prada-re-edition-nylon-mini-bag_jmj7an.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516612/prada-re-edition-nylon-mini-bag-1_va8c9f.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516612/prada-re-edition-nylon-mini-bag-2_xze2r5.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516613/prada-re-edition-nylon-mini-bag-3_aatcyf.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516613/prada-re-edition-nylon-mini-bag-4_nn69n5.jpg",
        ],
      },
    ],
    attributes: [],
    defaultVariant: "variantvvw5527v7m0cj2nij58sp393",
    variants: [
      {
        _id: "variantvvw5527v7m0cj2nij58sp393",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "prada-re-edition-nylon-mini-bag",
        attributes: {},
        createdAt: "2022-04-15T14:37:12Z",
        updatedAt: "2022-04-15T14:44:12Z",

        price: 41.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 26,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516613/prada-re-edition-nylon-mini-bag-4_nn69n5.jpg",
        gallery: "galleryvvw5527v7m0cj2nij58sp393",
      },
    ],
  },
  {
    _id: "product66e9351a0051dc2c4fa65304",
    name: "Hugo Boss Slim Fit Wool Suit",
    slug: "hugo-boss-slim-fit-wool-suit",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem62bn5cx9tu81lop3qa7fd1",
      "categoryitem93qw4lt7ag10hsz6vd2pk8",
    ],
    description:
      "Elegant slim-fit wool suit with a two-button jacket and matching trousers, ideal for formal occasions.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store7840556196lkonidlvdn",
      ownerId: "people43210987nopqrstu",
    },
    createdAt: "2024-10-04T16:04:12Z",
    updatedAt: "2024-10-04T16:12:12Z",
    gallery: [
      {
        _id: "gallerymy3z32lvs5yxc403v54e411c",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515962/hugo-boss-slim-fit-wool-suit-navy_tdybzi.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515962/hugo-boss-slim-fit-wool-suit-navy-1_elepgo.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515962/hugo-boss-slim-fit-wool-suit-navy-2_ywmyqx.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515962/hugo-boss-slim-fit-wool-suit-navy-3_k4bnho.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: ["colorap7fqda207030f61c15wli"],
      },
      {
        _id: "attributesuitsize173xq2460tec231sod6z4hwb",
        options: [
          "suitsize03zix640n0r2c2c1bc6n5av2",
          "suitsizet58vez9771lw6r51f0zca8x3",
          "suitsize65cl9pioqvem2g9gm0881031",
          "suitsize85ny0bz2k54ugmr82696ry9a",
        ],
      },
    ],
    defaultVariant: "variantyc70s3ol7h57321l78go7kju",
    variants: [
      {
        _id: "variant1s826jt0rt33g1e26lcw5wu8",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hugo-boss-slim-fit-wool-suit-navy-navy-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colorap7fqda207030f61c15wli",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize03zix640n0r2c2c1bc6n5av2",
        },
        createdAt: "2024-10-04T16:21:12Z",
        updatedAt: "2024-10-04T16:36:12Z",
        price: 24.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 19,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515962/hugo-boss-slim-fit-wool-suit-navy-3_k4bnho.jpg",
        gallery: "gallerymy3z32lvs5yxc403v54e411c",
      },
      {
        _id: "variantyc70s3ol7h57321l78go7kju",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hugo-boss-slim-fit-wool-suit-navy-navy-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colorap7fqda207030f61c15wli",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2024-10-04T17:46:12Z",
        updatedAt: "2024-10-04T18:10:12Z",
        price: 24.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 17,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515962/hugo-boss-slim-fit-wool-suit-navy-2_ywmyqx.jpg",
        gallery: "gallerymy3z32lvs5yxc403v54e411c",
      },
      {
        _id: "variant4sbs7491du7gs4f7p2yq54n5",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hugo-boss-slim-fit-wool-suit-navy-navy-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colorap7fqda207030f61c15wli",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize65cl9pioqvem2g9gm0881031",
        },
        createdAt: "2024-10-05T13:02:12Z",
        updatedAt: "2024-10-05T13:10:12Z",
        price: 24.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515962/hugo-boss-slim-fit-wool-suit-navy-1_elepgo.jpg",
        gallery: "gallerymy3z32lvs5yxc403v54e411c",
      },
      {
        _id: "variant4y40it0y8b3lw354q5t17kdt",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hugo-boss-slim-fit-wool-suit-navy-navy-xxl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colorap7fqda207030f61c15wli",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize85ny0bz2k54ugmr82696ry9a",
        },
        createdAt: "2024-10-05T15:16:12Z",
        updatedAt: "2024-10-05T15:26:12Z",
        price: 25.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 16,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515962/hugo-boss-slim-fit-wool-suit-navy-1_elepgo.jpg",
        gallery: "gallerymy3z32lvs5yxc403v54e411c",
      },
    ],
  },
  {
    _id: "product66e929720051dc2c4fa65261",
    name: "Hoka One One Clifton 8",
    slug: "hoka-one-one-clifton-8",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem16cx7vb3pl82mna5qr9ty4",
      "categoryitem63qa8we4rt50vbn2jm7kl9",
    ],
    description:
      "Ultra-cushioned running shoe known for its lightweight design and soft, responsive midsole. Perfect for long-distance running.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store7840556196lkonidlvdn",
      ownerId: "people43210987nopqrstu",
    },
    createdAt: "2022-04-13T15:16:12Z",
    updatedAt: "2022-04-13T15:26:12Z",
    gallery: [
      {
        _id: "gallerynch4hes1k68eq7t1ci762346",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515962/hoka-one-one-clifton-8_iwr2f1.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515961/hoka-one-one-clifton-8-1_ovreat.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515961/hoka-one-one-clifton-8-2_vs6rtx.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515961/hoka-one-one-clifton-8-3_o7orom.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515961/hoka-one-one-clifton-8-4_i3naah.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributeshoesizeus3948201756lkjhgfdsaq",
        options: [
          "shoesize4yy853ynjily356o39",
          "shoesize7802643915mnbvcxzpoi",
          "shoesize1594730286asdfqwerty",
          "shoesize9415723086qazwsxedcr",
          "shoesize2169370548okmijnuhbv",
        ],
      },
    ],
    defaultVariant: "variantc8k67va6mr558k8oqzt9x965",
    variants: [
      {
        _id: "variantl9ol9hq4tf85u46yf000wf52",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hoka-one-one-clifton-8-4-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq: "shoesize4yy853ynjily356o39",
        },
        createdAt: "2022-04-13T16:04:12Z",
        updatedAt: "2022-04-13T16:12:12Z",
        price: 25.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515961/hoka-one-one-clifton-8-4_i3naah.jpg",
        gallery: "gallerynch4hes1k68eq7t1ci762346",
      },
      {
        _id: "variantc8k67va6mr558k8oqzt9x965",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hoka-one-one-clifton-8-4-7",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize7802643915mnbvcxzpoi",
        },
        createdAt: "2022-04-13T16:21:12Z",
        updatedAt: "2022-04-13T16:36:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515961/hoka-one-one-clifton-8-2_vs6rtx.jpg",
        gallery: "gallerynch4hes1k68eq7t1ci762346",
      },
      {
        _id: "variantsb57wjb92l825qi692n5aj2t",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hoka-one-one-clifton-8-4-7-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize1594730286asdfqwerty",
        },
        createdAt: "2022-04-13T17:46:12Z",
        updatedAt: "2022-04-13T18:10:12Z",
        price: 26.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515961/hoka-one-one-clifton-8-3_o7orom.jpg",
        gallery: "gallerynch4hes1k68eq7t1ci762346",
      },
      {
        _id: "variantsb57bl5qi524gm78jfd6aj2t",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hoka-one-one-clifton-8-4-9",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize9415723086qazwsxedcr",
        },
        createdAt: "2022-04-14T13:02:12Z",
        updatedAt: "2022-04-14T13:10:12Z",
        price: 26.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515961/hoka-one-one-clifton-8-2_vs6rtx.jpg",
        gallery: "gallerynch4hes1k68eq7t1ci762346",
      },
      {
        _id: "variantnd906r67wg2w1t1wfi7z96n0",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hoka-one-one-clifton-8-4-10",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize2169370548okmijnuhbv",
        },
        createdAt: "2022-04-14T15:16:12Z",
        updatedAt: "2022-04-14T15:26:12Z",
        price: 27.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515961/hoka-one-one-clifton-8-1_ovreat.jpg",
        gallery: "gallerynch4hes1k68eq7t1ci762346",
      },
    ],
  },
  {
    _id: "product66e92d670051dc2c4fa6528e",
    name: "G-Star Raw 3301 Slim Jeans",
    slug: "g-star-raw-3301-slim-jeans",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem29mn4pl7as93qwe6ty1vb5",
      "categoryitem58ty3qw9pl62mnx4sa7dc1",
    ],
    description:
      "Classic 5-pocket jeans with a slim fit and clean design. Made from stretch denim for added comfort and flexibility.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store7840556196lkonidlvdn",
      ownerId: "people43210987nopqrstu",
    },
    createdAt: "2022-04-12T15:16:12Z",
    updatedAt: "2022-04-12T15:26:12Z",
    gallery: [
      {
        _id: "gallery5245tis7wb0mchc9qz189n58",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515257/g-star-raw-3301-slim-jeans_bksneg.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515253/g-star-raw-3301-slim-jeans-1_smhen3.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515253/g-star-raw-3301-slim-jeans-2_b4fd1q.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515253/g-star-raw-3301-slim-jeans-3_jxrado.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515253/g-star-raw-3301-slim-jeans-4_t0jc5i.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributepantsizeoe571e62dh75pf80xts88my6",
        options: [
          "pantsize93zj4750ku865a8r8dmkyt",
          "pantsizechotm1p1m410yr5gz43436",
          "pantsizekd8oq55562o700uux0kx9i",
          "pantsize3pfp1pyd0e0943hr5402pp",
        ],
      },
    ],
    defaultVariant: "varianti0meaaq57um219h7de3s9761",
    variants: [
      {
        _id: "variantzyyyy6wk7z2dh359yn150308",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "g-star-raw-3301-slim-jeans-xxs",
        attributes: {
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsize93zj4750ku865a8r8dmkyt",
        },
        createdAt: "2022-04-12T16:04:12Z",
        updatedAt: "2022-04-12T16:12:12Z",
        price: 33.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515253/g-star-raw-3301-slim-jeans-4_t0jc5i.jpg",
        gallery: "gallery5245tis7wb0mchc9qz189n58",
      },
      {
        _id: "variantvw3l42mk99b48w18w8xj0e5g",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "g-star-raw-3301-slim-jeans-xs",
        attributes: {
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsizechotm1p1m410yr5gz43436",
        },
        createdAt: "2022-04-12T16:21:12Z",
        updatedAt: "2022-04-12T16:36:12Z",

        price: 33.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515253/g-star-raw-3301-slim-jeans-3_jxrado.jpg",
        gallery: "gallery5245tis7wb0mchc9qz189n58",
      },
      {
        _id: "varianti0meaaq57um219h7de3s9761",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "g-star-raw-3301-slim-jeans-m",
        attributes: {
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsizekd8oq55562o700uux0kx9i",
        },
        createdAt: "2022-04-12T17:46:12Z",
        updatedAt: "2022-04-12T18:10:12Z",
        price: 33.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 5,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515253/g-star-raw-3301-slim-jeans-1_smhen3.jpg",
        gallery: "gallery5245tis7wb0mchc9qz189n58",
      },
      {
        _id: "variant2nhl6364u6b1cs0gme59b1p5",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "g-star-raw-3301-slim-jeans-l",
        attributes: {
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsize3pfp1pyd0e0943hr5402pp",
        },
        createdAt: "2022-04-13T13:02:12Z",
        updatedAt: "2022-04-13T13:10:12Z",
        price: 33.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515253/g-star-raw-3301-slim-jeans-2_b4fd1q.jpg",
        gallery: "gallery5245tis7wb0mchc9qz189n58",
      },
    ],
  },
  {
    _id: "product66e938b70051dc2c4fa65323",
    name: "Fendi Baguette Bag",
    slug: "fendi-baguette-bag",
    categories: [
      "categoryitem92bdk38sla17qpz4u9mn2c",
      "categoryitem57hg3df2wl91kmc4ty8op6",
    ],
    description:
      "Iconic Fendi Baguette Bag crafted in luxurious leather with the signature FF buckle, offering a chic and timeless silhouette.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store9d8f7g6h5j4k3l2m1n0b",
      ownerId: "people99001122hijklmno",
    },
    createdAt: "2023-08-20T13:02:12Z",
    updatedAt: "2023-08-20T13:10:12Z",
    gallery: [
      {
        _id: "galleryzo3ijpy64na75z6519jp003i",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515253/fendi-baguette-bag_gbp4zg.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515252/fendi-baguette-bag-1_kl59kb.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515252/fendi-baguette-bag-2_iuvdfa.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515252/fendi-baguette-bag-3_hyg4fw.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515252/fendi-baguette-bag-4_ao6pda.jpg",
        ],
      },
    ],
    attributes: [],
    defaultVariant: "variantelh7o1mc9c9whi254j93431e",
    variants: [
      {
        _id: "variantelh7o1mc9c9whi254j93431e",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "fendi-baguette-bag-4",
        attributes: {},
        createdAt: "2023-08-20T15:16:12Z",
        updatedAt: "2023-08-20T15:26:12Z",
        price: 41.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 16,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515252/fendi-baguette-bag-3_hyg4fw.jpg",
        gallery: "galleryzo3ijpy64na75z6519jp003i",
      },
    ],
  },
  {
    _id: "product66e92d830051dc2c4fa65291",
    name: "Everlane The Slim Fit Jean",
    slug: "everlane-the-slim-fit-jean",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem29mn4pl7as93qwe6ty1vb5",
      "categoryitem58ty3qw9pl62mnx4sa7dc1",
    ],
    description:
      "Ethically made slim-fit jeans that offer a minimalist look with high-quality denim, perfect for everyday wear.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store9d8f7g6h5j4k3l2m1n0b",
      ownerId: "people99001122hijklmno",
    },
    createdAt: "2023-08-18T13:02:12Z",
    updatedAt: "2023-08-18T13:10:12Z",
    gallery: [
      {
        _id: "gallery13tudss5095xd0z76ru9x81v",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515252/everlane-the-slim-fit-jean_sc8krg.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515251/everlane-the-slim-fit-jean-1_irduuh.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515251/everlane-the-slim-fit-jean-2_vlykzx.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515251/everlane-the-slim-fit-jean-3_wzffcs.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515252/everlane-the-slim-fit-jean-4_uoo2aq.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributepantsizeoe571e62dh75pf80xts88my6",
        options: [
          "pantsizechotm1p1m410yr5gz43436",
          "pantsize4dg6230k9356jzq56xlpyf",
          "pantsizekd8oq55562o700uux0kx9i",
          "pantsize3pfp1pyd0e0943hr5402pp",
        ],
      },
    ],
    defaultVariant: "variantac0pszias7s8lq016154l532",
    variants: [
      {
        _id: "variant5866ad8v9x838vwynknd2z39",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "everlane-the-slim-fit-jean-xs",
        attributes: {
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsizechotm1p1m410yr5gz43436",
        },
        createdAt: "2023-08-19T15:16:12Z",
        updatedAt: "2023-08-19T15:26:12Z",
        price: 28.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515251/everlane-the-slim-fit-jean-1_irduuh.jpg",
        gallery: "gallery13tudss5095xd0z76ru9x81v",
      },
      {
        _id: "variantac0pszias7s8lq016154l532",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "everlane-the-slim-fit-jean-s",
        attributes: {
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsize4dg6230k9356jzq56xlpyf",
        },
        createdAt: "2023-08-19T16:04:12Z",
        updatedAt: "2023-08-19T16:12:12Z",
        price: 28.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515251/everlane-the-slim-fit-jean-2_vlykzx.jpg",
        gallery: "gallery13tudss5095xd0z76ru9x81v",
      },
      {
        _id: "variant2aw06e3x8736n9nz96gndza0",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "everlane-the-slim-fit-jean-m",
        attributes: {
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsizekd8oq55562o700uux0kx9i",
        },
        createdAt: "2023-08-19T16:21:12Z",
        updatedAt: "2023-08-19T16:36:12Z",
        price: 29.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515251/everlane-the-slim-fit-jean-3_wzffcs.jpg",
        gallery: "gallery13tudss5095xd0z76ru9x81v",
      },
      {
        _id: "variantc5xpw0ke77gtn59rv94y6794",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "everlane-the-slim-fit-jean-l",
        attributes: {
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsize3pfp1pyd0e0943hr5402pp",
        },
        createdAt: "2023-08-19T17:46:12Z",
        updatedAt: "2023-08-19T18:10:12Z",
        price: 29.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515252/everlane-the-slim-fit-jean-4_uoo2aq.jpg",
        gallery: "gallery13tudss5095xd0z76ru9x81v",
      },
    ],
  },
  {
    _id: "product66e939190051dc2c4fa6532e",
    name: "Dior Book Tote",
    slug: "dior-book-tote",
    categories: [
      "categoryitem92bdk38sla17qpz4u9mn2c",
      "categoryitem33az4cv6qp28nmx7re6st5",
      "categoryitem17hx4ks9pm32qwa6de8tr5",
    ],
    description:
      "Oversized canvas tote bag featuring the Dior logo embroidery, ideal for carrying essentials in style.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store9d8f7g6h5j4k3l2m1n0b",
      ownerId: "people99001122hijklmno",
    },
    createdAt: "2023-08-17T16:21:12Z",
    updatedAt: "2023-08-17T16:36:12Z",
    gallery: [
      {
        _id: "galleryg2y5ir6923w7yzlf1680rik2",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515251/dior-book-tote-4_ysnonz.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515250/dior-book-tote-1_yaza6p.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515250/dior-book-tote-2_kxbbj1.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515251/dior-book-tote-3_utdia5.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515251/dior-book-tote-4_ysnonz.jpg",
        ],
      },
    ],
    attributes: [],
    defaultVariant: "variant849obemn93c2f8wzj97g61u4",
    variants: [
      {
        _id: "variant849obemn93c2f8wzj97g61u4",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "dior-book-tote",
        attributes: {},
        createdAt: "2023-08-17T17:46:12Z",
        updatedAt: "2023-08-17T18:10:12Z",
        price: 29.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515251/dior-book-tote-3_utdia5.jpg",
        gallery: "galleryg2y5ir6923w7yzlf1680rik2",
      },
    ],
  },
  {
    _id: "product66e92d4c0051dc2c4fa6528b",
    name: "Diesel D-Strukt Slim Fit Jeans",
    slug: "diesel-d-strukt-slim-fit-jeans",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem29mn4pl7as93qwe6ty1vb5",
      "categoryitem58ty3qw9pl62mnx4sa7dc1",
    ],
    description:
      "Premium slim-fit jeans with a modern design and slightly distressed detailing. Crafted from high-quality denim for an elevated look.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store9d8f7g6h5j4k3l2m1n0b",
      ownerId: "people99001122hijklmno",
    },
    createdAt: "2023-08-15T15:14:12Z",
    updatedAt: "2023-08-15T15:21:12Z",
    gallery: [
      {
        _id: "gallerykb899634jx5bdp3w1ba33f",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515249/diesel-d-strukt-slim-fit-jeans-brown_ha18qe.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515249/diesel-d-strukt-slim-fit-jeans-brown-1_kgmfzf.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515249/diesel-d-strukt-slim-fit-jeans-brown-2_qzz6vp.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515249/diesel-d-strukt-slim-fit-jeans-brown-3_av7dko.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515249/diesel-d-strukt-slim-fit-jeans-brown-4_lkvibk.jpg",
        ],
      },
      {
        _id: "gallerykb899hcetio634jx5bdp3f",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515250/diesel-d-strukt-slim-fit-jeans-graphite-gray_hk87yw.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515249/diesel-d-strukt-slim-fit-jeans-graphite-gray-1_ucaf91.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515250/diesel-d-strukt-slim-fit-jeans-graphite-gray-2_u5x8a9.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515250/diesel-d-strukt-slim-fit-jeans-graphite-gray-3_yux5sm.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515250/diesel-d-strukt-slim-fit-jeans-graphite-gray-4_xspcdd.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: [
          "color1s9acdljp780sik8k805544y", // Brown
          "colorlblsl59042va1ff9269t0v", // Graphite gray
        ],
      },
      {
        _id: "attributepantsizeoe571e62dh75pf80xts88my6",
        options: [
          "pantsize93zj4750ku865a8r8dmkyt", // XXS
          "pantsizechotm1p1m410yr5gz43436", // XS
          "pantsize4dg6230k9356jzq56xlpyf", // S
          "pantsizekd8oq55562o700uux0kx9i", // M
          "pantsize3pfp1pyd0e0943hr5402pp", // L
          "pantsizeb7musql04h7u14046m2g5n", // XL
        ],
      },
    ],
    defaultVariant: "variant6opf6xfev59497u99x7bbu55",
    variants: [
      {
        _id: "variant196vy4t75yge49a8v1oj0q2i",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "diesel-d-strukt-slim-fit-jeans-brown-xxs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsize93zj4750ku865a8r8dmkyt",
        },
        createdAt: "2023-08-15T15:57:12Z",
        updatedAt: "2023-08-15T16:14:12Z",
        price: 30.0,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515249/diesel-d-strukt-slim-fit-jeans-brown-1_kgmfzf.jpg",
        gallery: "gallerykb899634jx5bdp3w1ba33f",
      },
      {
        _id: "variantjp8ddu14m7vf40l6d697db82",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "diesel-d-strukt-slim-fit-jeans-brown-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsizechotm1p1m410yr5gz43436",
        },
        createdAt: "2023-08-16T15:16:12Z",
        updatedAt: "2023-08-16T15:26:12Z",
        price: 30.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515249/diesel-d-strukt-slim-fit-jeans-brown-3_av7dko.jpg",
        gallery: "gallerykb899634jx5bdp3w1ba33f",
      },
      {
        _id: "variant73128l3f88cy99enk2qrly4h",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "diesel-d-strukt-slim-fit-jeans-brown-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsizekd8oq55562o700uux0kx9i",
        },
        createdAt: "2023-08-16T16:04:12Z",
        updatedAt: "2023-08-16T16:12:12Z",
        price: 30.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515249/diesel-d-strukt-slim-fit-jeans-brown-2_qzz6vp.jpg",
        gallery: "gallerykb899634jx5bdp3w1ba33f",
      },
      {
        _id: "variantmlk6y1k467hvb5981d6bk55q",
        status: "itemstatus73t74z442lo78mm3d10jlacg",
        sku: "diesel-d-strukt-slim-fit-jeans-graphite-gray-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colorlblsl59042va1ff9269t0v",
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsizechotm1p1m410yr5gz43436",
        },
        createdAt: "2023-08-16T16:21:12Z",
        updatedAt: "2023-08-16T16:36:12Z",
        price: 30.0,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 7,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515249/diesel-d-strukt-slim-fit-jeans-graphite-gray-1_ucaf91.jpg",
        gallery: "gallerykb899hcetio634jx5bdp3f",
      },
      {
        _id: "variantwr48k2d5w96a26qdk1uhn651",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "diesel-d-strukt-slim-fit-jeans-graphite-gray-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colorlblsl59042va1ff9269t0v",
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsize4dg6230k9356jzq56xlpyf",
        },
        createdAt: "2023-08-16T17:46:12Z",
        updatedAt: "2023-08-16T18:10:12Z",
        price: 30.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515250/diesel-d-strukt-slim-fit-jeans-graphite-gray-2_u5x8a9.jpg",
        gallery: "gallerykb899hcetio634jx5bdp3f",
      },
      {
        _id: "variant6opf6xfev59497u99x7bbu55",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "diesel-d-strukt-slim-fit-jeans-graphite-gray-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colorlblsl59042va1ff9269t0v",
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsizekd8oq55562o700uux0kx9i",
        },
        createdAt: "2023-08-17T13:02:12Z",
        updatedAt: "2023-08-17T13:10:12Z",
        price: 30.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515250/diesel-d-strukt-slim-fit-jeans-graphite-gray-2_u5x8a9.jpg",
        gallery: "gallerykb899hcetio634jx5bdp3f",
      },
      {
        _id: "variantwl11xa7c221stt6748sd2ht5",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "diesel-d-strukt-slim-fit-jeans-graphite-gray-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colorlblsl59042va1ff9269t0v",
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsize3pfp1pyd0e0943hr5402pp",
        },
        createdAt: "2023-08-17T15:16:12Z",
        updatedAt: "2023-08-17T15:26:12Z",
        price: 30.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515250/diesel-d-strukt-slim-fit-jeans-graphite-gray-4_xspcdd.jpg",
        gallery: "gallerykb899hcetio634jx5bdp3f",
      },
      {
        _id: "variantvxlhk65693044zn8hhiy996o",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "diesel-d-strukt-slim-fit-jeans-graphite-gray-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colorlblsl59042va1ff9269t0v",
          attributepantsizeoe571e62dh75pf80xts88my6:
            "pantsizeb7musql04h7u14046m2g5n",
        },
        createdAt: "2023-08-17T16:04:12Z",
        updatedAt: "2023-08-17T16:12:12Z",
        price: 30.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515250/diesel-d-strukt-slim-fit-jeans-graphite-gray-3_yux5sm.jpg",
        gallery: "gallerykb899hcetio634jx5bdp3f",
      },
    ],
  },
  {
    _id: "product66e929bd0051dc2c4fa6526a",
    name: "Converse Chuck Taylor All Star",
    slug: "converse-chuck-taylor-all-star",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem16cx7vb3pl82mna5qr9ty4",
      "categoryitem63qa8we4rt50vbn2jm7kl9",
    ],
    description:
      "Classic high-top sneaker with a canvas upper, rubber sole, and timeless design that has been popular for generations.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store9d8f7g6h5j4k3l2m1n0b",
      ownerId: "people99001122hijklmno",
    },
    createdAt: "2023-08-14T17:46:12Z",
    updatedAt: "2023-08-14T18:10:12Z",
    gallery: [
      {
        _id: "gallery518uw099ud6ya3o7zx9s6v",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515248/converse-chuck-taylor-all-star_ryjdtv.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515248/converse-chuck-taylor-all-star-1_xmoryh.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515248/converse-chuck-taylor-all-star-2_gzftxi.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515248/converse-chuck-taylor-all-star-3_gennc8.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515248/converse-chuck-taylor-all-star-4_rbjgcl.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributeshoesizeus3948201756lkjhgfdsaq",
        options: [
          "shoesize6d9l3oc58969gtzq1d", // 6
          "shoesizead407s0adu66c08i7u", // 6.5
          "shoesize7802643915mnbvcxzpoi", // 7
          "shoesize1594730286asdfqwerty", // 7.5
          "shoesize6081529473plokijuhyg", // 8
        ],
      },
    ],
    defaultVariant: "variantv8oet54h6in06y971jja33",
    variants: [
      {
        _id: "variantpc98n568h2a2pye4q7iv16",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "converse-chuck-taylor-all-star-6",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq: "shoesize6d9l3oc58969gtzq1d",
        },
        createdAt: "2023-08-15T13:02:12Z",
        updatedAt: "2023-08-15T13:10:12Z",
        price: 25.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 5,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515248/converse-chuck-taylor-all-star_ryjdtv.jpg",
        gallery: "gallery518uw099ud6ya3o7zx9s6v",
      },
      {
        _id: "variantv8oet54h6in06y971jja33",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "converse-chuck-taylor-all-star-6-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq: "shoesizead407s0adu66c08i7u",
        },
        createdAt: "2023-08-15T14:02:12Z",
        updatedAt: "2023-08-15T14:10:12Z",
        price: 25.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 7,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515248/converse-chuck-taylor-all-star-4_rbjgcl.jpg",
        gallery: "gallery518uw099ud6ya3o7zx9s6v",
      },
      {
        _id: "variant47758f8wl5rvgpze5n0f40",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "converse-chuck-taylor-all-star-7",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize7802643915mnbvcxzpoi",
        },
        createdAt: "2023-08-15T14:21:12Z",
        updatedAt: "2023-08-15T14:29:12Z",
        price: 25.85,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515248/converse-chuck-taylor-all-star-3_gennc8.jpg",
        gallery: "gallery518uw099ud6ya3o7zx9s6v",
      },
      {
        _id: "variant4re67fnaf16022cw9u90ot",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "converse-chuck-taylor-all-star-7-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize1594730286asdfqwerty",
        },
        createdAt: "2023-08-15T14:37:12Z",
        updatedAt: "2023-08-15T14:44:12Z",
        price: 26.0,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515248/converse-chuck-taylor-all-star-4_rbjgcl.jpg",
        gallery: "gallery518uw099ud6ya3o7zx9s6v",
      },
      {
        _id: "variant71iuyw27hin612uwbx6187",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "converse-chuck-taylor-all-star-8",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize6081529473plokijuhyg",
        },
        createdAt: "2023-08-15T14:56:12Z",
        updatedAt: "2023-08-15T15:14:12Z",
        price: 26.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 18,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515248/converse-chuck-taylor-all-star-2_gzftxi.jpg",
        gallery: "gallery518uw099ud6ya3o7zx9s6v",
      },
    ],
  },
  {
    _id: "product66e931d00051dc2c4fa652e9",
    name: "Columbia Fleece Jacket",
    slug: "columbia-fleece-jacket",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem41mz8qp5sd93jf7t1xy0ac",
      "categoryitem84pl0qw7ks26azm5re1tg4",
    ],
    description:
      "Classic full-zip fleece jacket, ideal for layering or wearing on its own. Features a soft, comfortable fabric for everyday wear.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store9d8f7g6h5j4k3l2m1n0b",
      ownerId: "people99001122hijklmno",
    },
    createdAt: "2023-08-13T13:02:12Z",
    updatedAt: "2023-08-13T13:10:12Z",
    gallery: [
      {
        _id: "galleryg67oarg62091xq1fgh5i44",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515247/columbia-fleece-jacket-black_d4lnsg.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515246/columbia-fleece-jacket-black-1_tduzwr.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515246/columbia-fleece-jacket-black-2_p5x7ca.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515247/columbia-fleece-jacket-black-3_dzfjzy.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515247/columbia-fleece-jacket-black-4_bg1mmu.jpg",
        ],
      },
      {
        _id: "galleryg67oadwefgrg62091xq1fg",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515248/columbia-fleece-jacket-red_kxs1zp.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515247/columbia-fleece-jacket-red-1_q6v3re.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515247/columbia-fleece-jacket-red-2_kenz5t.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515247/columbia-fleece-jacket-red-3_cpweys.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: ["color6139475208bnmasdfghj", "color4728169530qazwsxedcr"],
      },
      {
        _id: "attributejacketsize173xq2460tec231sod6z4hwb",
        options: [
          "jacketsizenyu4u6b54f6afhz8873n4h90",
          "jacketsize03zix640n0r2c2c1bc6n5av2",
          "jacketsize3w9h7cbcw8a4zsn851lo3079",
          "jacketsizet58vez9771lw6r51f0zca8x3",
          "jacketsize65cl9pioqvem2g9gm0881031",
        ],
      },
    ],
    defaultVariant: "variantnjn78swm0b29i0e174t19m",
    variants: [
      {
        _id: "variant599l7m18c58mcg1rob7ho7",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "columbia-fleece-jacket-black-xxs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsizenyu4u6b54f6afhz8873n4h90",
        },
        createdAt: "2023-08-13T15:16:12Z",
        updatedAt: "2023-08-13T15:26:12Z",
        price: 32.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 18,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515246/columbia-fleece-jacket-black-1_tduzwr.jpg",
        gallery: "galleryg67oarg62091xq1fgh5i44",
      },
      {
        _id: "variantg0e406mzs5k470y33ll3sr",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "columbia-fleece-jacket-black-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize03zix640n0r2c2c1bc6n5av2",
        },
        createdAt: "2023-08-13T16:04:12Z",
        updatedAt: "2023-08-13T16:12:12Z",
        price: 32.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515246/columbia-fleece-jacket-black-2_p5x7ca.jpg",
        gallery: "galleryg67oarg62091xq1fgh5i44",
      },
      {
        _id: "variante0t3a1bkrtq49g947y50x5",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "columbia-fleece-jacket-black-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize3w9h7cbcw8a4zsn851lo3079",
        },
        createdAt: "2023-08-13T16:21:12Z",
        updatedAt: "2023-08-13T16:36:12Z",
        price: 32.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515247/columbia-fleece-jacket-black-3_dzfjzy.jpg",
        gallery: "galleryg67oarg62091xq1fgh5i44",
      },
      {
        _id: "variantnjn78swm0b29i0e174t19m",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "columbia-fleece-jacket-black-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2023-08-13T17:46:12Z",
        updatedAt: "2023-08-13T18:10:12Z",
        price: 33.0,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515247/columbia-fleece-jacket-black-4_bg1mmu.jpg",
        gallery: "galleryg67oarg62091xq1fgh5i44",
      },
      {
        _id: "variant4d01u5mcjq73688hmtux03",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "columbia-fleece-jacket-black-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize65cl9pioqvem2g9gm0881031",
        },
        createdAt: "2023-08-14T13:02:12Z",
        updatedAt: "2023-08-14T13:10:12Z",
        price: 33.0,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515247/columbia-fleece-jacket-black_d4lnsg.jpg",
        gallery: "galleryg67oarg62091xq1fgh5i44",
      },
      {
        _id: "variant280fmd13j77w2olpxak188",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "columbia-fleece-jacket-red-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize03zix640n0r2c2c1bc6n5av2",
        },
        createdAt: "2023-08-14T15:16:12Z",
        updatedAt: "2023-08-14T15:26:12Z",
        price: 32.0,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 17,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515248/columbia-fleece-jacket-red_kxs1zp.jpg",
        gallery: "galleryg67oadwefgrg62091xq1fg",
      },
      {
        _id: "variantd99l1osfup3p2n0y414a83",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "columbia-fleece-jacket-red-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2023-08-14T16:04:12Z",
        updatedAt: "2023-08-14T16:12:12Z",
        price: 33.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515247/columbia-fleece-jacket-red-2_kenz5t.jpg",
        gallery: "galleryg67oadwefgrg62091xq1fg",
      },
      {
        _id: "variantljv77m7f0a86x0i9au1c40",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "columbia-fleece-jacket-red-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize65cl9pioqvem2g9gm0881031",
        },
        createdAt: "2023-08-14T16:21:12Z",
        updatedAt: "2023-08-14T16:36:12Z",
        price: 33.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515247/columbia-fleece-jacket-red-3_cpweys.jpg",
        gallery: "galleryg67oadwefgrg62091xq1fg",
      },
    ],
  },
  {
    _id: "product66e939020051dc2c4fa6532b",
    name: "Chanel Classic Flap Bag",
    slug: "chanel-classic-flap-bag",
    categories: [
      "categoryitem92bdk38sla17qpz4u9mn2c",
      "categoryitem64po2re7mv31qas8lk5cd9",
      "categoryitem10sd7uk9pl42amq1fy4he0",
    ],
    description:
      "Iconic quilted leather bag with a chain-link strap and the signature CC turn-lock closure, offering timeless elegance.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store9d8f7g6h5j4k3l2m1n0b",
      ownerId: "people99001122hijklmno",
    },
    createdAt: "2023-08-12T16:21:12Z",
    updatedAt: "2023-08-12T16:36:12Z",
    gallery: [
      {
        _id: "gallerynju6h6t60e2bh628he2f61",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515246/chanel-classic-flap-bag_hsapnb.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515246/chanel-classic-flap-bag-1_i9x07d.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515246/chanel-classic-flap-bag-2_zy2eba.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515246/chanel-classic-flap-bag-3_wgjdoo.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515246/chanel-classic-flap-bag-4_spheq9.jpg",
        ],
      },
    ],
    attributes: [],
    defaultVariant: "variant393116uhm4pw93jhtx43zs",
    variants: [
      {
        _id: "variant393116uhm4pw93jhtx43zs",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "celine-triomphe-crossbody-bag",
        attributes: {},
        createdAt: "2023-08-12T17:46:12Z",
        updatedAt: "2023-08-12T18:10:12Z",
        price: 32.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 18,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515246/chanel-classic-flap-bag_hsapnb.jpg",
        gallery: "gallerynju6h6t60e2bh628he2f61",
      },
    ],
  },
  {
    _id: "product66e9395d0051dc2c4fa65337",
    name: "Celine Triomphe Crossbody Bag",
    slug: "celine-triomphe-crossbody-bag",
    categories: [
      "categoryitem92bdk38sla17qpz4u9mn2c",
      "categoryitem64po2re7mv31qas8lk5cd9",
      "categoryitem10sd7uk9pl42amq1fy4he0",
    ],
    description:
      "Elegant crossbody bag featuring the Celine Triomphe logo, crafted from smooth calfskin for a minimalist and sophisticated look.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "store9d8f7g6h5j4k3l2m1n0b",
      ownerId: "people99001122hijklmno",
    },
    createdAt: "2023-08-12T15:16:12Z",
    updatedAt: "2023-08-12T15:26:12Z",
    gallery: [
      {
        _id: "galleryk0ii350755m0vxg6sy8z7f",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515244/celine-triomphe-crossbody-bag_bfeman.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515243/celine-triomphe-crossbody-bag-1_rolpna.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515244/celine-triomphe-crossbody-bag-2_gjfouz.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515244/celine-triomphe-crossbody-bag-3_gfz3zw.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515244/celine-triomphe-crossbody-bag-4_frslil.jpg",
        ],
      },
    ],
    attributes: [],
    defaultVariant: "variant4v80z29d0ihsp64094nlkz",
    variants: [
      {
        _id: "variant4v80z29d0ihsp64094nlkz",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "celine-triomphe-crossbody-bag",
        attributes: {},
        createdAt: "2023-08-12T16:04:12Z",
        updatedAt: "2023-08-12T16:12:12Z",
        price: 25.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515244/celine-triomphe-crossbody-bag_bfeman.jpg",
        gallery: "",
      },
    ],
  },
  {
    _id: "product66e92f0c0051dc2c4fa652ad",
    name: "Champion Men's Classic Jersey Tee",
    slug: "champion-mens-classic-jersey-tee",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem41mz8qp5sd93jf7t1xy0ac",
      "categoryitem59as7dw3nb84ckl2yx9qa2",
    ],
    description:
      "Iconic Adidas Trefoil logo on a soft cotton t-shirt, offering timeless style and comfort.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storei9o0p1a2s3d4f5g6h7j8k",
      ownerId: "people56294730ppudhnxj",
    },
    createdAt: "2024-11-26T15:16:12Z",
    updatedAt: "2024-11-26T15:26:12Z",
    gallery: [
      {
        _id: "galleryd58501adroymw9416s1p9l",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515245/champion-mens-classic-jersey-tee-gray_hqysfb.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515244/champion-mens-classic-jersey-tee-gray-1_cbkwgp.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515244/champion-mens-classic-jersey-tee-gray-2_lf22sj.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515245/champion-mens-classic-jersey-tee-gray-3_fg9xny.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515245/champion-mens-classic-jersey-tee-gray-4_p9wq4g.jpg",
        ],
      },
      {
        _id: "gallery583r53fedva93lkdfe1icq64u",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515245/champion-mens-classic-jersey-tee-white_fmvjg4.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515245/champion-mens-classic-jersey-tee-white-1_eizy6x.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515245/champion-mens-classic-jersey-tee-white-2_prwciy.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515245/champion-mens-classic-jersey-tee-white-3_mqjtbe.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515245/champion-mens-classic-jersey-tee-white-4_xmfo04.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: ["color8641205793qwertasdfg", "color3057921648rfvtgbynum"],
      },
      {
        _id: "attributesizev24wm186g8tv99165npw4gfn",
        options: [
          "size5487264852mvnsdighfur",
          "size9374628105qwertyhjkl",
          "size5820391746zxcvbnmasd",
          "size7604152983plokmijnuh",
          "size1948572306asdfghqwer",
        ],
      },
    ],
    defaultVariant: "varianth51wigvn7xe2w78ef44547",
    variants: [
      {
        _id: "variant7cvnr7612d121kg1gyr7w2",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "champion-mens-classic-jersey-tee-white-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color3057921648rfvtgbynum",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2024-11-26T16:04:12Z",
        updatedAt: "2024-11-26T16:12:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515245/champion-mens-classic-jersey-tee-white-4_xmfo04.jpg",
        gallery: "gallery583r53fedva93lkdfe1icq64u",
      },
      {
        _id: "varianta7p5xr434l77k2kfm809os",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "champion-mens-classic-jersey-tee-white-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color3057921648rfvtgbynum",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2024-11-26T16:21:12Z",
        updatedAt: "2024-11-26T16:36:12Z",
        price: 26.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515245/champion-mens-classic-jersey-tee-white-3_mqjtbe.jpg",
        gallery: "gallery583r53fedva93lkdfe1icq64u",
      },
      {
        _id: "varianth51wigvn7xe2w78ef44547",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "champion-mens-classic-jersey-tee-white-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color3057921648rfvtgbynum",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-11-26T17:46:12Z",
        updatedAt: "2024-11-26T18:10:12Z",
        price: 27.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515245/champion-mens-classic-jersey-tee-white-2_prwciy.jpg",
        gallery: "gallery583r53fedva93lkdfe1icq64u",
      },
      {
        _id: "variantnbowg17502564okvc942qy",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "champion-mens-classic-jersey-tee-white-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color3057921648rfvtgbynum",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-11-27T13:02:12Z",
        updatedAt: "2024-11-27T13:10:12Z",
        price: 27.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 5,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515245/champion-mens-classic-jersey-tee-white-1_eizy6x.jpg",
        gallery: "gallery583r53fedva93lkdfe1icq64u",
      },
      {
        _id: "varianti835039r20sp8yclrza1k7",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "champion-mens-classic-jersey-tee-gray-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color3057921648rfvtgbynum",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2024-11-27T15:16:12Z",
        updatedAt: "2024-11-27T15:26:12Z",
        price: 25.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 7,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515244/champion-mens-classic-jersey-tee-gray-1_cbkwgp.jpg",
        gallery: "galleryd58501adroymw9416s1p9l",
      },
      {
        _id: "variantprj89va8032w6uwaic4887",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "champion-mens-classic-jersey-tee-gray-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2022-11-08T15:16:12Z",
        updatedAt: "2022-11-08T15:26:12Z",
        price: 25.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515244/champion-mens-classic-jersey-tee-gray-2_lf22sj.jpg",
        gallery: "galleryd58501adroymw9416s1p9l",
      },
      {
        _id: "variantk9yz23zzy0pe2b1dm60721",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "champion-mens-classic-jersey-tee-gray-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2022-11-08T16:04:12Z",
        updatedAt: "2022-11-08T16:12:12Z",
        price: 26.0,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515245/champion-mens-classic-jersey-tee-gray-3_fg9xny.jpg",
        gallery: "galleryd58501adroymw9416s1p9l",
      },
      {
        _id: "variantpv85r9e0u08fq92li92wb1",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "champion-mens-classic-jersey-tee-gray-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2022-11-08T16:21:12Z",
        updatedAt: "2022-11-08T16:36:12Z",
        price: 26.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515244/champion-mens-classic-jersey-tee-gray-1_cbkwgp.jpg",
        gallery: "galleryd58501adroymw9416s1p9l",
      },
    ],
  },
  {
    _id: "product66e932020051dc2c4fa652ef",
    name: "Canada Goose Expedition Parka",
    slug: "canada-goose-expedition-parka",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem41mz8qp5sd93jf7t1xy0ac",
      "categoryitem84pl0qw7ks26azm5re1tg4",
    ],
    description:
      "Heavy-duty parka designed for extreme cold, with premium down insulation and a durable water-resistant outer shell.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storei9o0p1a2s3d4f5g6h7j8k",
      ownerId: "people56294730ppudhnxj",
    },
    createdAt: "2024-11-19T16:04:12Z",
    updatedAt: "2024-11-19T16:12:12Z",
    gallery: [
      {
        _id: "gallerydrwlm03c63x85n81111dgz",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514350/canada-goose-expedition-parka-dark-navy-blue_smpesn.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514298/canada-goose-expedition-parka-dark-navy-blue-1_ybzdu5.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514299/canada-goose-expedition-parka-dark-navy-blue-2_puziox.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514299/canada-goose-expedition-parka-dark-navy-blue-3_pfqxgv.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514322/canada-goose-expedition-parka-dark-navy-blue-4_yd0vua.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: ["color053hv80oq8x7gme849k9dc"],
      },
      {
        _id: "attributejacketsize173xq2460tec231sod6z4hwb",
        options: [
          "jacketsize3w9h7cbcw8a4zsn851lo3079", // S
          "jacketsizet58vez9771lw6r51f0zca8x3", // M
          "jacketsize65cl9pioqvem2g9gm0881031", // L
        ],
      },
    ],
    defaultVariant: "variante10kjhn27afh12zrs51671",
    variants: [
      {
        _id: "variantqvv7m83700gwh64byhz816",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "canada-goose-expedition-parka-dark-navy-blue-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color053hv80oq8x7gme849k9dc",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize3w9h7cbcw8a4zsn851lo3079",
        },
        createdAt: "2024-11-19T16:21:12Z",
        updatedAt: "2024-11-19T16:36:12Z",
        price: 36.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514350/canada-goose-expedition-parka-dark-navy-blue_smpesn.jpg",
        gallery: "gallerydrwlm03c63x85n81111dgz",
      },
      {
        _id: "variantlw95cek6w5855buvh30b15",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "canada-goose-expedition-parka-dark-navy-blue-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color053hv80oq8x7gme849k9dc",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2024-11-19T17:46:12Z",
        updatedAt: "2024-11-19T18:10:12Z",
        price: 36.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514299/canada-goose-expedition-parka-dark-navy-blue-2_puziox.jpg",
        gallery: "gallerydrwlm03c63x85n81111dgz",
      },
      {
        _id: "variante10kjhn27afh12zrs51671",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "canada-goose-expedition-parka-dark-navy-blue-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color053hv80oq8x7gme849k9dc",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize65cl9pioqvem2g9gm0881031",
        },
        createdAt: "2024-11-20T13:02:12Z",
        updatedAt: "2024-11-20T13:10:12Z",
        price: 37.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 16,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514299/canada-goose-expedition-parka-dark-navy-blue-2_puziox.jpg",
        gallery: "gallerydrwlm03c63x85n81111dgz",
      },
    ],
  },
  {
    _id: "product66e9292b0051dc2c4fa65258",
    name: "Brooks Ghost 14",
    slug: "brooks-ghost-14",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem16cx7vb3pl82mna5qr9ty4",
      "categoryitem63qa8we4rt50vbn2jm7kl9",
    ],
    description:
      "Smooth, balanced running shoe with soft cushioning and a breathable upper. Ideal for runners seeking a comfortable daily trainer.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storei9o0p1a2s3d4f5g6h7j8k",
      ownerId: "people56294730ppudhnxj",
    },
    createdAt: "2024-11-17T15:16:12Z",
    updatedAt: "2024-11-17T15:26:12Z",
    gallery: [
      {
        _id: "galleryzxlwo3p9075108z378sgpy",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514298/brooks-ghost-14_fovkqu.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514298/brooks-ghost-14-1_tezcpm.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514298/brooks-ghost-14-2_upjr6v.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514298/brooks-ghost-14-3_l7woi7.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514298/brooks-ghost-14-4_oy2rtf.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributeshoesizeus3948201756lkjhgfdsaq",
        options: [
          "shoesize1594730286asdfqwerty", // 7.5
          "shoesize6081529473plokijuhyg", // 8
          "shoesize5729486310zxcvbnmwer", // 8.5
          "shoesize9415723086qazwsxedcr", // 9
          "shoesize8372059146rfvtgbynuh", // 9.5
        ],
      },
    ],
    defaultVariant: "variant1vhyj13s761wa3rkf54h75",
    variants: [
      {
        _id: "variant5xzj0wd59992ptn18ygz73",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "brooks-ghost-14-7-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize1594730286asdfqwerty",
        },
        createdAt: "2024-11-17T16:04:12Z",
        updatedAt: "2024-11-17T16:12:12Z",
        price: 26.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 14,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514298/brooks-ghost-14-1_tezcpm.jpg",
        gallery: "galleryzxlwo3p9075108z378sgpy",
      },
      {
        _id: "variant1vhyj13s761wa3rkf54h75",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "brooks-ghost-14-8",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize6081529473plokijuhyg",
        },
        createdAt: "2024-11-17T16:21:12Z",
        updatedAt: "2024-11-17T16:36:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 14,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514298/brooks-ghost-14_fovkqu.jpg",
        gallery: "galleryzxlwo3p9075108z378sgpy",
      },
      {
        _id: "variantanyu7ghe937s74g8t783f0",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "brooks-ghost-14-8-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize5729486310zxcvbnmwer",
        },
        createdAt: "2024-11-17T17:46:12Z",
        updatedAt: "2024-11-17T18:10:12Z",
        price: 26.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514298/brooks-ghost-14-4_oy2rtf.jpg",
        gallery: "galleryzxlwo3p9075108z378sgpy",
      },
      {
        _id: "variant011e6pf9n012e9cxb1olu5",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "brooks-ghost-14-9",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize9415723086qazwsxedcr",
        },
        createdAt: "2024-11-18T13:02:12Z",
        updatedAt: "2024-11-18T13:10:12Z",
        price: 27.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 5,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514298/brooks-ghost-14-3_l7woi7.jpg",
        gallery: "galleryzxlwo3p9075108z378sgpy",
      },
      {
        _id: "variantr80718d21ju7yh5nw95ttd",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "brooks-ghost-14-9",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize8372059146rfvtgbynuh",
        },
        createdAt: "2024-11-19T15:16:12Z",
        updatedAt: "2024-11-19T15:26:12Z",

        price: 27.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514298/brooks-ghost-14-2_upjr6v.jpg",
        gallery: "galleryzxlwo3p9075108z378sgpy",
      },
    ],
  },
  {
    _id: "product66e9321a0051dc2c4fa652f2",
    name: "Barbour Bedale Wax Jacket",
    slug: "barbour-bedale-wax-jacket",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem41mz8qp5sd93jf7t1xy0ac",
      "categoryitem84pl0qw7ks26azm5re1tg4",
    ],
    description:
      "Classic waxed cotton jacket with a corduroy collar, designed for durability and protection against the elements.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storei9o0p1a2s3d4f5g6h7j8k",
      ownerId: "people56294730ppudhnxj",
    },
    createdAt: "2024-11-14T17:46:12Z",
    updatedAt: "2024-11-14T18:10:12Z",
    gallery: [
      {
        _id: "gallerygud34et80814wjsh8tn138",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514293/barbour-bedale-wax-jacket-black_lsgknh.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514293/barbour-bedale-wax-jacket-black-1_wkifal.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514293/barbour-bedale-wax-jacket-black-2_xwfwkk.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514293/barbour-bedale-wax-jacket-black-3_uevzqv.jpg",
        ],
      },
      {
        _id: "galleryc8f4rk49cd4tmv50j2486z",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514294/barbour-bedale-wax-jacket-dark-red_en568f.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514293/barbour-bedale-wax-jacket-dark-red-1_wj7kgm.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514293/barbour-bedale-wax-jacket-dark-red-2_iexad0.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514293/barbour-bedale-wax-jacket-dark-red-3_cl6dc6.jpg",
        ],
      },
      {
        _id: "gallery93nza3g4hfp48r8g0pl605",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514294/barbour-bedale-wax-jacket-navy-blue_ob9zdj.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514294/barbour-bedale-wax-jacket-navy-blue-1_reohig.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514294/barbour-bedale-wax-jacket-navy-blue-2_pzl8ja.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514294/barbour-bedale-wax-jacket-navy-blue-3_lbrioc.jpg",
        ],
      },
      {
        _id: "galleryrn3y51h4t8amv2m068t5z2",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514295/barbour-bedale-wax-jacket-olive-haze_fgcxih.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514295/barbour-bedale-wax-jacket-olive-haze-1_x1oavn.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514295/barbour-bedale-wax-jacket-olive-haze-2_rp8mi8.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514295/barbour-bedale-wax-jacket-olive-haze-3_xe3fhk.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514295/barbour-bedale-wax-jacket-olive-haze-4_ehkoo5.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: [
          "color6139475208bnmasdfghj",
          "colory38wx95zy38cjzw85127sr",
          "color670doyqs79397wt9qzx12o",
          "colorh4i8zmm5iei14j2638pm96",
        ],
      },
      {
        _id: "attributejacketsize173xq2460tec231sod6z4hwb",
        options: [
          "jacketsize03zix640n0r2c2c1bc6n5av2",
          "jacketsize3w9h7cbcw8a4zsn851lo3079",
          "jacketsizet58vez9771lw6r51f0zca8x3",
          "jacketsize65cl9pioqvem2g9gm0881031",
          "jacketsizequee1mzo9dd260013b3e70x5",
        ],
      },
    ],
    defaultVariant: "variantlryl4v5fh4vg430066zx35",
    variants: [
      {
        _id: "variantv4y36ic21mjn3659d9blm0",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "barbour-bedale-wax-jacket-black-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize3w9h7cbcw8a4zsn851lo3079",
        },
        createdAt: "2024-11-15T13:02:12Z",
        updatedAt: "2024-11-15T13:10:12Z",
        price: 39.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 16,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514293/barbour-bedale-wax-jacket-black-1_wkifal.jpg",
        gallery: "gallerygud34et80814wjsh8tn138",
      },
      {
        _id: "variantyh884us6gj8uz9ji49448f",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "barbour-bedale-wax-jacket-black-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2024-11-15T14:02:12Z",
        updatedAt: "2024-11-15T14:10:12Z",
        price: 39.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514293/barbour-bedale-wax-jacket-black-3_uevzqv.jpg",
        gallery: "gallerygud34et80814wjsh8tn138",
      },
      {
        _id: "variantkw9821416u1j73uwqar3rm",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "barbour-bedale-wax-jacket-black-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize65cl9pioqvem2g9gm0881031",
        },
        createdAt: "2024-11-15T14:21:12Z",
        updatedAt: "2024-11-15T14:29:12Z",
        price: 40.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514293/barbour-bedale-wax-jacket-black-3_uevzqv.jpg",
        gallery: "gallerygud34et80814wjsh8tn138",
      },
      {
        _id: "varianth406qjix35c861f9r4fd6h",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "barbour-bedale-wax-jacket-dark-red-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colory38wx95zy38cjzw85127sr",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize03zix640n0r2c2c1bc6n5av2",
        },
        createdAt: "2024-11-15T14:37:12Z",
        updatedAt: "2024-11-15T14:44:12Z",
        price: 39.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514293/barbour-bedale-wax-jacket-dark-red-3_cl6dc6.jpg",
        gallery: "galleryc8f4rk49cd4tmv50j2486z",
      },
      {
        _id: "variantru11pd60r4m74ur7w0mr33",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "barbour-bedale-wax-jacket-dark-red-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colory38wx95zy38cjzw85127sr",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize3w9h7cbcw8a4zsn851lo3079",
        },
        createdAt: "2024-11-15T14:56:12Z",
        updatedAt: "2024-11-15T15:14:12Z",
        price: 39.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514293/barbour-bedale-wax-jacket-dark-red-2_iexad0.jpg",
        gallery: "galleryc8f4rk49cd4tmv50j2486z",
      },
      {
        _id: "variantlryl4v5fh4vg430066zx35",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "barbour-bedale-wax-jacket-dark-red-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colory38wx95zy38cjzw85127sr",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2024-11-15T15:14:12Z",
        updatedAt: "2024-11-15T15:21:12Z",
        price: 39.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514293/barbour-bedale-wax-jacket-dark-red-1_wj7kgm.jpg",
        gallery: "galleryc8f4rk49cd4tmv50j2486z",
      },
      {
        _id: "variant570j5p2pph15an0cehy340",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "barbour-bedale-wax-jacket-dark-red-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colory38wx95zy38cjzw85127sr",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize65cl9pioqvem2g9gm0881031",
        },
        createdAt: "2024-11-15T15:28:12Z",
        updatedAt: "2024-11-15T15:39:12Z",
        price: 40.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514293/barbour-bedale-wax-jacket-dark-red-3_cl6dc6.jpg",
        gallery: "galleryc8f4rk49cd4tmv50j2486z",
      },
      {
        _id: "variant9h4t1g24cb3we0z07ib5h9",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "barbour-bedale-wax-jacket-dark-red-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colory38wx95zy38cjzw85127sr",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsizequee1mzo9dd260013b3e70x5",
        },
        createdAt: "2024-11-15T15:57:12Z",
        updatedAt: "2024-11-15T16:14:12Z",
        price: 40.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514293/barbour-bedale-wax-jacket-dark-red-1_wj7kgm.jpg",
        gallery: "galleryc8f4rk49cd4tmv50j2486z",
      },
      {
        _id: "variant10t01a2fz0lwdo97x94dv1",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "barbour-bedale-wax-jacket-navy-blue-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color670doyqs79397wt9qzx12o",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2024-11-16T15:16:12Z",
        updatedAt: "2024-11-16T15:26:12Z",
        price: 39.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514294/barbour-bedale-wax-jacket-navy-blue-1_reohig.jpg",
        gallery: "gallery93nza3g4hfp48r8g0pl605",
      },
      {
        _id: "variant1qmw62j58jn212e0i8d2ut",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "barbour-bedale-wax-jacket-navy-blue-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color670doyqs79397wt9qzx12o",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize65cl9pioqvem2g9gm0881031",
        },
        createdAt: "2024-11-16T16:04:12Z",
        updatedAt: "2024-11-16T16:12:12Z",
        price: 40.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514294/barbour-bedale-wax-jacket-navy-blue-2_pzl8ja.jpg",
        gallery: "gallery93nza3g4hfp48r8g0pl605",
      },
      {
        _id: "variant7qgk4344g68moty6092rsw",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "barbour-bedale-wax-jacket-olive-haze-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colorh4i8zmm5iei14j2638pm96",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize3w9h7cbcw8a4zsn851lo3079",
        },
        createdAt: "2024-11-16T16:21:12Z",
        updatedAt: "2024-11-16T16:36:12Z",
        price: 39.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 7,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514295/barbour-bedale-wax-jacket-olive-haze-3_xe3fhk.jpg",
        gallery: "galleryrn3y51h4t8amv2m068t5z2",
      },
      {
        _id: "varianta39d70cev1udm48m8i4z43",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "barbour-bedale-wax-jacket-olive-haze-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colorh4i8zmm5iei14j2638pm96",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2024-11-16T17:46:12Z",
        updatedAt: "2024-11-16T18:10:12Z",
        price: 39.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 10,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514295/barbour-bedale-wax-jacket-olive-haze-4_ehkoo5.jpg",
        gallery: "galleryrn3y51h4t8amv2m068t5z2",
      },
      {
        _id: "variantk301t2183u9aqwcz4s1e6v",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "barbour-bedale-wax-jacket-olive-haze-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colorh4i8zmm5iei14j2638pm96",
          attributejacketsize173xq2460tec231sod6z4hwb:
            "jacketsize65cl9pioqvem2g9gm0881031",
        },
        createdAt: "2024-11-17T13:02:12Z",
        updatedAt: "2024-11-17T13:10:12Z",
        price: 40.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514295/barbour-bedale-wax-jacket-olive-haze-1_x1oavn.jpg",
        gallery: "galleryrn3y51h4t8amv2m068t5z2",
      },
    ],
  },
  {
    _id: "product66e92f3c0051dc2c4fa652b3",
    name: "Uniqlo U Crew Neck Short-Sleeve T-Shirt",
    slug: "uniqlo-u-crew-neck-short-sleeve-tshirt",
    categories: [
      "categoryitem92bdk38sla17qpz4u9mn2c",
      "categoryitem41mz8qp5sd93jf7t1xy0ac",
      "categoryitem59as7dw3nb84ckl2yx9qa2",
    ],
    description:
      "A minimalist, high-quality cotton tee with a clean silhouette and modern fit.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storei9o0p1a2s3d4f5g6h7j8k",
      ownerId: "people56294730ppudhnxj",
    },
    createdAt: "2024-10-11T16:21:12Z",
    updatedAt: "2024-10-11T16:36:12Z",
    gallery: [
      {
        _id: "gallery9qu18344821kycylrvgzi733",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516626/uniqlo-u-crew-neck-short-sleeve-t-shirt-gray_jnqyfe.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516625/uniqlo-u-crew-neck-short-sleeve-t-shirt-gray-1_xy4ujr.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516626/uniqlo-u-crew-neck-short-sleeve-t-shirt-gray-2_wsj48p.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516626/uniqlo-u-crew-neck-short-sleeve-t-shirt-gray-3_ye4vdy.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516626/uniqlo-u-crew-neck-short-sleeve-t-shirt-gray-4_vkdt8y.jpg",
        ],
      },
      {
        _id: "galleryvs24sa124z0un95jg65ns41s",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516628/uniqlo-u-crew-neck-short-sleeve-t-shirt-green_tlrxkg.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516626/uniqlo-u-crew-neck-short-sleeve-t-shirt-green-1_ny99fr.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516627/uniqlo-u-crew-neck-short-sleeve-t-shirt-green-2_fupeqn.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516627/uniqlo-u-crew-neck-short-sleeve-t-shirt-green-3_bkopu5.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516627/uniqlo-u-crew-neck-short-sleeve-t-shirt-green-4_axrv2g.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516627/uniqlo-u-crew-neck-short-sleeve-t-shirt-green-5_odbkkx.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516627/uniqlo-u-crew-neck-short-sleeve-t-shirt-green-6_penlo8.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516627/uniqlo-u-crew-neck-short-sleeve-t-shirt-green-7_annqif.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516627/uniqlo-u-crew-neck-short-sleeve-t-shirt-green-8_sgdj7u.jpg",
        ],
      },
      {
        _id: "galleryp5ijs4xj2tj654wj3v00k946",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516628/uniqlo-u-crew-neck-short-sleeve-t-shirt-red_sxsryt.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516627/uniqlo-u-crew-neck-short-sleeve-t-shirt-red-1_lrxilo.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516628/uniqlo-u-crew-neck-short-sleeve-t-shirt-red-2_lyobgx.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516628/uniqlo-u-crew-neck-short-sleeve-t-shirt-red-3_ynwpgi.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516628/uniqlo-u-crew-neck-short-sleeve-t-shirt-red-4_hpjjjp.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: [
          "color8641205793qwertasdfg",
          "color5712064893plmkonjibv",
          "color4728169530qazwsxedcr",
        ],
      },
      {
        _id: "attributesizev24wm186g8tv99165npw4gfn",
        options: [
          "size5487264852mvnsdighfur",
          "size9374628105qwertyhjkl",
          "size5820391746zxcvbnmasd",
          "size7604152983plokmijnuh",
          "size1948572306asdfghqwer",
        ],
      },
    ],
    defaultVariant: "variant0rvf4x28629a01xlvnxsc578",
    variants: [
      {
        _id: "variant06u10pp4n01564ltivhohg15",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "uniqlo-u-crew-neck-short-sleeve-tshirt-gray-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2024-10-11T17:46:12Z",
        updatedAt: "2024-10-11T18:10:12Z",
        price: 25.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516626/uniqlo-u-crew-neck-short-sleeve-t-shirt-gray_jnqyfe.jpg",
        gallery: "gallery9qu18344821kycylrvgzi733",
      },
      {
        _id: "variant0rvf4x28629a01xlvnxsc578",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "uniqlo-u-crew-neck-short-sleeve-tshirt-gray-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-09-04T17:46:12Z",
        updatedAt: "2024-09-04T18:10:12Z",
        price: 25.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516626/uniqlo-u-crew-neck-short-sleeve-t-shirt-gray-2_wsj48p.jpg",
        gallery: "gallery9qu18344821kycylrvgzi733",
      },
      {
        _id: "variantbepz41o9174ek9aon67d0w98",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "uniqlo-u-crew-neck-short-sleeve-tshirt-gray-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-09-05T13:02:12Z",
        updatedAt: "2024-09-05T13:10:12Z",
        price: 25.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516625/uniqlo-u-crew-neck-short-sleeve-t-shirt-gray-1_xy4ujr.jpg",
        gallery: "gallery9qu18344821kycylrvgzi733",
      },
      {
        _id: "variant5ciwb64lo1336z2j7e27ka3u",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "uniqlo-u-crew-neck-short-sleeve-tshirt-gray-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2024-09-05T15:16:12Z",
        updatedAt: "2024-09-05T15:26:12Z",
        price: 25.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516626/uniqlo-u-crew-neck-short-sleeve-t-shirt-gray-4_vkdt8y.jpg",
        gallery: "gallery9qu18344821kycylrvgzi733",
      },
      {
        _id: "variant1xiw1886529u7e0sddt6etl8",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "uniqlo-u-crew-neck-short-sleeve-tshirt-green-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color5712064893plmkonjibv",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2024-09-05T16:04:12Z",
        updatedAt: "2024-09-05T16:12:12Z",
        price: 23.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516628/uniqlo-u-crew-neck-short-sleeve-t-shirt-green_tlrxkg.jpg",
        gallery: "galleryvs24sa124z0un95jg65ns41s",
      },
      {
        _id: "varianth2zizt0ncm33o836l11q08q2",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "uniqlo-u-crew-neck-short-sleeve-tshirt-green-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color5712064893plmkonjibv",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2024-09-05T16:21:12Z",
        updatedAt: "2024-09-05T16:36:12Z",
        price: 23.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 7,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516627/uniqlo-u-crew-neck-short-sleeve-t-shirt-green-2_fupeqn.jpg",
        gallery: "galleryvs24sa124z0un95jg65ns41s",
      },
      {
        _id: "variantsv2gji8n044li8xj27228jv4",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "uniqlo-u-crew-neck-short-sleeve-tshirt-green-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color5712064893plmkonjibv",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-09-05T17:46:12Z",
        updatedAt: "2024-09-05T18:10:12Z",
        price: 23.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 10,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516627/uniqlo-u-crew-neck-short-sleeve-t-shirt-green-3_bkopu5.jpg",
        gallery: "galleryvs24sa124z0un95jg65ns41s",
      },
      {
        _id: "variant8c60znr524c4j4dj5u7y4p4p",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "uniqlo-u-crew-neck-short-sleeve-tshirt-green-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color5712064893plmkonjibv",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-09-06T15:16:12Z",
        updatedAt: "2024-09-06T15:26:12Z",
        price: 23.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516627/uniqlo-u-crew-neck-short-sleeve-t-shirt-green-4_axrv2g.jpg",
        gallery: "galleryvs24sa124z0un95jg65ns41s",
      },
      {
        _id: "variantki1908hiky18o318b9gd44qn",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "uniqlo-u-crew-neck-short-sleeve-tshirt-red-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-09-06T16:04:12Z",
        updatedAt: "2024-09-06T16:12:12Z",
        price: 23.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 18,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516628/uniqlo-u-crew-neck-short-sleeve-t-shirt-red_sxsryt.jpg",
        gallery: "galleryp5ijs4xj2tj654wj3v00k946",
      },
      {
        _id: "variantpp97po7yxpg8v6f9m131y668",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "uniqlo-u-crew-neck-short-sleeve-tshirt-red-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-09-06T16:21:12Z",
        updatedAt: "2024-09-06T16:36:12Z",
        price: 23.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516628/uniqlo-u-crew-neck-short-sleeve-t-shirt-red-2_lyobgx.jpg",
        gallery: "galleryp5ijs4xj2tj654wj3v00k946",
      },
      {
        _id: "varianttmg8t0is2a56x1303ej9m31t",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "uniqlo-u-crew-neck-short-sleeve-tshirt-red-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2024-09-06T17:46:12Z",
        updatedAt: "2024-09-06T18:10:12Z",
        price: 23.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 21,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516628/uniqlo-u-crew-neck-short-sleeve-t-shirt-red-3_ynwpgi.jpg",
        gallery: "galleryp5ijs4xj2tj654wj3v00k946",
      },
    ],
  },
  {
    _id: "product66e92ef60051dc2c4fa652aa",
    name: "Adidas Originals Trefoil Tee",
    slug: "adidas-originals-trefoil-tee",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem41mz8qp5sd93jf7t1xy0ac",
      "categoryitem59as7dw3nb84ckl2yx9qa2",
    ],
    description:
      "Iconic Adidas Trefoil logo on a soft cotton t-shirt, offering timeless style and comfort.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storei9o0p1a2s3d4f5g6h7j8k",
      ownerId: "people56294730ppudhnxj",
    },
    createdAt: "2024-11-11T15:16:12Z",
    updatedAt: "2024-11-11T15:26:12Z",
    gallery: [
      {
        _id: "gallerylc1527z9dx32ip5m1lgn039y",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514286/adidas-originals-trefoil-tee-black_wkaagr.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514285/adidas-originals-trefoil-tee-black-1_tt8d4y.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514285/adidas-originals-trefoil-tee-black-2_ilpryw.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514285/adidas-originals-trefoil-tee-black-3_lvjid2.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514285/adidas-originals-trefoil-tee-black-4_klbixf.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514286/adidas-originals-trefoil-tee-black-5_xxynv6.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514285/adidas-originals-trefoil-tee-black-6_d6mvlv.jpg",
        ],
      },
      {
        _id: "gallery4ae5kby30h1539vy7z2y6ck0",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514288/adidas-originals-trefoil-tee-green_q0kgik.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514287/adidas-originals-trefoil-tee-green-1_jwdz3w.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514287/adidas-originals-trefoil-tee-green-2_y1wxhu.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514288/adidas-originals-trefoil-tee-green-3_mrzk7p.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514288/adidas-originals-trefoil-tee-green-4_texsxo.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514288/adidas-originals-trefoil-tee-green-5_hrmsbc.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514288/adidas-originals-trefoil-tee-green-6_tzlktk.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514288/adidas-originals-trefoil-tee-green-7_rxpmo5.jpg",
        ],
      },
      {
        _id: "gallery460688xyekh9561v5uljpm8a",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514286/adidas-originals-trefoil-tee-blue_ogewca.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514285/adidas-originals-trefoil-tee-blue-1_dg8g01.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514285/adidas-originals-trefoil-tee-blue-2_brdnad.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514285/adidas-originals-trefoil-tee-blue-3_qrqnmu.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514286/adidas-originals-trefoil-tee-blue-4_sayysd.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514286/adidas-originals-trefoil-tee-blue-5_j9nght.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514286/adidas-originals-trefoil-tee-blue-6_bdokaq.jpg",
        ],
      },
      {
        _id: "gallery9t899z6aq5g9gdomy7v60c84",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514287/adidas-originals-trefoil-tee-brown_wdjht0.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514287/adidas-originals-trefoil-tee-brown-1_xqefzw.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514287/adidas-originals-trefoil-tee-brown-2_pv5nsd.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514287/adidas-originals-trefoil-tee-brown-3_l5n6xi.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514287/adidas-originals-trefoil-tee-brown-4_rozdce.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514287/adidas-originals-trefoil-tee-brown-5_fjd458.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: [
          "color6139475208bnmasdfghj",
          "colorlx8bj3f8490i2io0m6d2ed68",
          "color5712064893plmkonjibv",
          "color1s9acdljp780sik8k805544y",
        ],
      },
      {
        _id: "attributesizev24wm186g8tv99165npw4gfn",
        options: [
          "size5487264852mvnsdighfur",
          "size9374628105qwertyhjkl",
          "size5820391746zxcvbnmasd",
          "size7604152983plokmijnuh",
          "size1948572306asdfghqwer",
        ],
      },
    ],
    defaultVariant: "variantsn7853hzptw295g6nl1g18x6",
    variants: [
      {
        _id: "varianttce89zl8o95s97s0c31t",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-black-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2024-11-11T16:04:12Z",
        updatedAt: "2024-11-11T16:12:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 16,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514286/adidas-originals-trefoil-tee-black_wkaagr.jpg",
        gallery: "gallerylc1527z9dx32ip5m1lgn039y",
      },
      {
        _id: "variantsn7853hzptw295g6nl1g18x6",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-black-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-11-11T16:21:12Z",
        updatedAt: "2024-11-11T16:36:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514285/adidas-originals-trefoil-tee-black-1_tt8d4y.jpg",
        gallery: "gallerylc1527z9dx32ip5m1lgn039y",
      },
      {
        _id: "variant30o91vklx511qr444emo",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-black-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-11-11T17:46:12Z",
        updatedAt: "2024-11-11T18:10:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514285/adidas-originals-trefoil-tee-black-3_lvjid2.jpg",
        gallery: "gallerylc1527z9dx32ip5m1lgn039y",
      },
      {
        _id: "variantz038rn0710y3gy8e1ytg",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-black-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2024-11-12T15:16:12Z",
        updatedAt: "2024-11-12T15:26:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 16,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514285/adidas-originals-trefoil-tee-black-4_klbixf.jpg",
        gallery: "gallerylc1527z9dx32ip5m1lgn039y",
      },
      {
        _id: "varianti6jm0xpr481789tm57th",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-blue-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorlx8bj3f8490i2io0m6d2ed68",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2024-11-12T16:04:12Z",
        updatedAt: "2024-11-12T16:12:12Z",
        price: 25.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514286/adidas-originals-trefoil-tee-blue_ogewca.jpg",
        gallery: "gallery460688xyekh9561v5uljpm8a",
      },
      {
        _id: "variant2ak971055h7bot83wbqk",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-blue-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorlx8bj3f8490i2io0m6d2ed68",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-11-12T16:21:12Z",
        updatedAt: "2024-11-12T16:36:12Z",
        price: 25.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514285/adidas-originals-trefoil-tee-blue-1_dg8g01.jpg",
        gallery: "gallery460688xyekh9561v5uljpm8a",
      },
      {
        _id: "variant89s5r8q61jm2sau7uf43",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-blue-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorlx8bj3f8490i2io0m6d2ed68",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-11-12T17:46:12Z",
        updatedAt: "2024-11-12T18:10:12Z",
        price: 25.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514286/adidas-originals-trefoil-tee-blue-6_bdokaq.jpg",
        gallery: "gallery460688xyekh9561v5uljpm8a",
      },
      {
        _id: "variant8v35nrj21e97d69pgpd8",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-blue-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorlx8bj3f8490i2io0m6d2ed68",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2024-11-13T13:02:12Z",
        updatedAt: "2024-11-13T13:10:12Z",
        price: 25.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514285/adidas-originals-trefoil-tee-blue-3_qrqnmu.jpg",
        gallery: "gallery460688xyekh9561v5uljpm8a",
      },
      {
        _id: "variant83lae665v3zik97m40x66kev",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-green-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color5712064893plmkonjibv",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2024-11-13T15:16:12Z",
        updatedAt: "2024-11-13T15:26:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514288/adidas-originals-trefoil-tee-green_q0kgik.jpg",
        gallery: "gallery4ae5kby30h1539vy7z2y6ck0",
      },
      {
        _id: "varianthz7cp0787883pa9f6s0jnu8a",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-green-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color5712064893plmkonjibv",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2024-11-13T16:04:12Z",
        updatedAt: "2024-11-13T16:12:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 6,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514287/adidas-originals-trefoil-tee-green-2_y1wxhu.jpg",
        gallery: "gallery4ae5kby30h1539vy7z2y6ck0",
      },
      {
        _id: "varianti795g22pluc79062opfhu35d",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-green-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color5712064893plmkonjibv",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-11-13T16:21:12Z",
        updatedAt: "2024-11-13T16:36:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 10,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514288/adidas-originals-trefoil-tee-green-3_mrzk7p.jpg",
        gallery: "gallery4ae5kby30h1539vy7z2y6ck0",
      },
      {
        _id: "variant2l18475higx6wxspd31o74b1",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-green-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color5712064893plmkonjibv",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-11-13T17:46:12Z",
        updatedAt: "2024-11-13T18:10:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514288/adidas-originals-trefoil-tee-green-4_texsxo.jpg",
        gallery: "gallery4ae5kby30h1539vy7z2y6ck0",
      },
      {
        _id: "variantk911ax01d89k9f6z9xh25qlb",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-brown-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2024-11-14T13:02:12Z",
        updatedAt: "2024-11-14T13:10:12Z",
        price: 25.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514287/adidas-originals-trefoil-tee-brown_wdjht0.jpg",
        gallery: "gallery9t899z6aq5g9gdomy7v60c84",
      },
      {
        _id: "variant288gdok59x4nanu7534x9wb9",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-brown-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2024-11-14T15:16:12Z",
        updatedAt: "2024-11-14T15:26:12Z",
        price: 25.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 6,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514287/adidas-originals-trefoil-tee-brown-2_pv5nsd.jpg",
        gallery: "gallery9t899z6aq5g9gdomy7v60c84",
      },
      {
        _id: "variantdv051ni3bts54t1j622zd6h1",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-brown-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-11-14T16:04:12Z",
        updatedAt: "2024-11-14T16:12:12Z",
        price: 25.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 10,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514287/adidas-originals-trefoil-tee-brown-3_l5n6xi.jpg",
        gallery: "gallery9t899z6aq5g9gdomy7v60c84",
      },
      {
        _id: "variant2e4t5qqtl06fre49le6702g1",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-trefoil-tee-brown-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-11-14T16:21:12Z",
        updatedAt: "2024-11-14T16:36:12Z",
        price: 25.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514287/adidas-originals-trefoil-tee-brown-4_rozdce.jpg",
        gallery: "gallery9t899z6aq5g9gdomy7v60c84",
      },
    ],
  },
  {
    _id: "product66e92f290051dc2c4fa652b0",
    name: "Carhartt K87 Workwear Pocket T-Shirt",
    slug: "carhartt-k87-workwear-pocket-t-shirt",
    categories: [
      "categoryitem92bdk38sla17qpz4u9mn2c",
      "categoryitem41mz8qp5sd93jf7t1xy0ac",
      "categoryitem46np3qw8lz21mdb5ts9vk4",
    ],
    description:
      "Heavyweight cotton t-shirt with a front pocket, designed for durability and everyday workwear.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storei9o0p1a2s3d4f5g6h7j8k",
      ownerId: "people56294730ppudhnxj",
    },
    createdAt: "2024-11-20T15:16:12Z",
    updatedAt: "2024-11-20T15:26:12Z",
    gallery: [
      {
        _id: "gallery870icwq704qc6nswr2mb4843",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515028/carhartt-k87-workwear-pocket-t-shirt-blue_hqo0fi.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515027/carhartt-k87-workwear-pocket-t-shirt-blue-1_xd11ao.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515027/carhartt-k87-workwear-pocket-t-shirt-blue-2_kyxxss.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515028/carhartt-k87-workwear-pocket-t-shirt-blue-3_raiepa.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515028/carhartt-k87-workwear-pocket-t-shirt-blue-4_dbezmo.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515028/carhartt-k87-workwear-pocket-t-shirt-blue-5_ksdiq2.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515028/carhartt-k87-workwear-pocket-t-shirt-blue-6_nsazgm.jpg",
        ],
      },
      {
        _id: "gallerygw24s8wm73z157xf0ljs60e0",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779534611/carhartt-k87-workwear-pocket-t-shirt-navy-blue_viozu4.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779534611/carhartt-k87-workwear-pocket-t-shirt-navy-blue-1_iej9d8.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779534611/carhartt-k87-workwear-pocket-t-shirt-navy-blue-2_nuvnen.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779534611/carhartt-k87-workwear-pocket-t-shirt-navy-blue-3_ipijpv.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779534611/carhartt-k87-workwear-pocket-t-shirt-navy-blue-4_bbgmt3.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779534611/carhartt-k87-workwear-pocket-t-shirt-navy-blue-5_e7vr2x.jpg",
        ],
      },
      {
        _id: "gallerylk690ugp5f12a0o34958xuoc",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515243/carhartt-k87-workwear-pocket-t-shirt-red_rnn7xr.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515242/carhartt-k87-workwear-pocket-t-shirt-red-1_pelwc0.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515243/carhartt-k87-workwear-pocket-t-shirt-red-2_luodff.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515243/carhartt-k87-workwear-pocket-t-shirt-red-3_kl3prc.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515243/carhartt-k87-workwear-pocket-t-shirt-red-4_bfvfwx.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515243/carhartt-k87-workwear-pocket-t-shirt-red-5_p6mnkf.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515243/carhartt-k87-workwear-pocket-t-shirt-red-6_tnm1cv.jpg",
        ],
      },
      {
        _id: "gallerym46z088x4foeeko03u6g4m82",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515031/carhartt-k87-workwear-pocket-t-shirt-orange-2_vd5a0w.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515031/carhartt-k87-workwear-pocket-t-shirt-orange-1_wvhbts.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515031/carhartt-k87-workwear-pocket-t-shirt-orange-2_vd5a0w.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515049/carhartt-k87-workwear-pocket-t-shirt-orange-3_huu5fb.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515077/carhartt-k87-workwear-pocket-t-shirt-orange-4_pu1dqv.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515241/carhartt-k87-workwear-pocket-t-shirt-orange-5_bte5ge.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515242/carhartt-k87-workwear-pocket-t-shirt-orange-6_x1ykin.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: [
          "color7fsb642eu91kw53a172dos0n",
          "colornf5l06769c5ih648xmr7zb8b",
          "colorlx8bj3f8490i2io0m6d2ed68",
          "color4728169530qazwsxedcr",
        ],
      },
      {
        _id: "attributesizev24wm186g8tv99165npw4gfn",
        options: [
          "size5487264852mvnsdighfur",
          "size9374628105qwertyhjkl",
          "size5820391746zxcvbnmasd",
          "size7604152983plokmijnuh",
          "size1948572306asdfghqwer",
        ],
      },
    ],
    defaultVariant: "variant5t4ykx8033mj0t03xo04vku9",
    variants: [
      {
        _id: "variant7nowr313t42mbk5586cmla43",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-blue-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorlx8bj3f8490i2io0m6d2ed68",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2024-11-20T16:04:12Z",
        updatedAt: "2024-11-20T16:12:12Z",
        price: 24.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 16,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515028/carhartt-k87-workwear-pocket-t-shirt-blue_hqo0fi.jpg",
        gallery: "gallery870icwq704qc6nswr2mb4843",
      },
      {
        _id: "variantuv433qkm4193d04pq7vqi0x4",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-blue-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorlx8bj3f8490i2io0m6d2ed68",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-11-20T16:21:12Z",
        updatedAt: "2024-11-20T16:36:12Z",

        price: 24.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515027/carhartt-k87-workwear-pocket-t-shirt-blue-2_kyxxss.jpg",
        gallery: "gallery870icwq704qc6nswr2mb4843",
      },
      {
        _id: "variant146q04rwl1bk4pjx96pcw798",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-blue-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorlx8bj3f8490i2io0m6d2ed68",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-11-20T17:46:12Z",
        updatedAt: "2024-11-20T18:10:12Z",
        price: 24.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 10,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515027/carhartt-k87-workwear-pocket-t-shirt-blue-1_xd11ao.jpg",
        gallery: "gallery870icwq704qc6nswr2mb4843",
      },
      {
        _id: "varianty59v20x75nsb41h3pv4g9x1n",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-blue-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorlx8bj3f8490i2io0m6d2ed68",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2024-11-21T13:02:12Z",
        updatedAt: "2024-11-21T13:10:12Z",
        price: 24.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515028/carhartt-k87-workwear-pocket-t-shirt-blue-3_raiepa.jpg",
        gallery: "gallery870icwq704qc6nswr2mb4843",
      },
      {
        _id: "variantyo5odcs3e63ge7h28e898i57",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-navy-blue-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color7fsb642eu91kw53a172dos0n",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2024-11-22T15:16:12Z",
        updatedAt: "2024-11-22T15:26:12Z",
        price: 25.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779534611/carhartt-k87-workwear-pocket-t-shirt-navy-blue-1_iej9d8.jpg",
        gallery: "gallerygw24s8wm73z157xf0ljs60e0",
      },
      {
        _id: "variantm6hiv4ku3b336nk14997d6on",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-navy-blue-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color7fsb642eu91kw53a172dos0n",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2024-11-22T16:04:12Z",
        updatedAt: "2024-11-22T16:12:12Z",
        price: 25.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 16,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779534611/carhartt-k87-workwear-pocket-t-shirt-navy-blue-2_nuvnen.jpg",
        gallery: "gallerygw24s8wm73z157xf0ljs60e0",
      },
      {
        _id: "variant5t4ykx8033mj0t03xo04vku9",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-navy-blue-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color7fsb642eu91kw53a172dos0n",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-11-22T16:21:12Z",
        updatedAt: "2024-11-22T16:36:12Z",
        price: 25.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 18,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779534611/carhartt-k87-workwear-pocket-t-shirt-navy-blue-1_iej9d8.jpg",
        gallery: "gallerygw24s8wm73z157xf0ljs60e0",
      },
      {
        _id: "variant72x8jo8qu2qbq55cjn90374w",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-navy-blue-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color7fsb642eu91kw53a172dos0n",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-11-22T17:46:12Z",
        updatedAt: "2024-11-22T18:10:12Z",
        price: 25.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 18,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779534611/carhartt-k87-workwear-pocket-t-shirt-navy-blue-4_bbgmt3.jpg",
        gallery: "gallerygw24s8wm73z157xf0ljs60e0",
      },
      {
        _id: "variant2o3e81z5kfa21pti0mvz0477",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-red-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2024-11-23T13:02:12Z",
        updatedAt: "2024-11-23T13:10:12Z",
        price: 24.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 21,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515243/carhartt-k87-workwear-pocket-t-shirt-red_rnn7xr.jpg",
        gallery: "gallerylk690ugp5f12a0o34958xuoc",
      },
      {
        _id: "variantfb4548v5n3y8953t8qqfxo5v",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-red-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-11-23T15:16:12Z",
        updatedAt: "2024-11-23T15:26:12Z",
        price: 24.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 26,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515242/carhartt-k87-workwear-pocket-t-shirt-red-1_pelwc0.jpg",
        gallery: "gallerylk690ugp5f12a0o34958xuoc",
      },
      {
        _id: "variant9xr7z4km8qhde276lo82s932",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-red-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-11-24T13:02:12Z",
        updatedAt: "2024-11-24T13:10:12Z",
        price: 24.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 21,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515243/carhartt-k87-workwear-pocket-t-shirt-red-2_luodff.jpg",
        gallery: "gallerylk690ugp5f12a0o34958xuoc",
      },
      {
        _id: "variantuj8ho6c96xy661ao93mll620",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-red-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2024-11-24T15:16:12Z",
        updatedAt: "2024-11-24T15:26:12Z",
        price: 24.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 17,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515243/carhartt-k87-workwear-pocket-t-shirt-red-4_bfvfwx.jpg",
        gallery: "gallerylk690ugp5f12a0o34958xuoc",
      },
      {
        _id: "variantuuqb4epj0dw34it673a79173",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-orange-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colornf5l06769c5ih648xmr7zb8b",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2024-11-24T16:04:12Z",
        updatedAt: "2024-11-24T16:12:12Z",
        price: 23.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515031/carhartt-k87-workwear-pocket-t-shirt-orange-2_vd5a0w.jpg",
        gallery: "gallerym46z088x4foeeko03u6g4m82",
      },
      {
        _id: "variant9z7h45h6fkxaj930w5xv05x5",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-orange-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colornf5l06769c5ih648xmr7zb8b",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-11-24T16:21:12Z",
        updatedAt: "2024-11-24T16:36:12Z",
        price: 23.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 23,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515031/carhartt-k87-workwear-pocket-t-shirt-orange-2_vd5a0w.jpg",
        gallery: "gallerym46z088x4foeeko03u6g4m82",
      },
      {
        _id: "variant02g9x99y6sanb3et55l1e5u6",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-orange-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colornf5l06769c5ih648xmr7zb8b",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-11-24T17:46:12Z",
        updatedAt: "2024-11-24T18:10:12Z",
        price: 23.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 19,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515031/carhartt-k87-workwear-pocket-t-shirt-orange-1_wvhbts.jpg",
        gallery: "gallerym46z088x4foeeko03u6g4m82",
      },
      {
        _id: "variant33f3220kt3uwl7bk2avwl055",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "carhartt-k87-workwear-pocket-t-shirt-orange-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colornf5l06769c5ih648xmr7zb8b",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2024-11-25T13:02:12Z",
        updatedAt: "2024-11-25T13:10:12Z",
        price: 23.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515049/carhartt-k87-workwear-pocket-t-shirt-orange-3_huu5fb.jpg",
        gallery: "gallerym46z088x4foeeko03u6g4m82",
      },
    ],
  },
  {
    _id: "product66e92f800051dc2c4fa652bc",
    name: "Gildan Heavy Cotton T-Shirt",
    slug: "gildan-heavy-cotton-t-shirt",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem41mz8qp5sd93jf7t1xy0ac",
      "categoryitem59as7dw3nb84ckl2yx9qa2",
    ],
    description:
      "Heavyweight cotton t-shirt, known for its durability and comfort, available in a wide range of colors.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storei9o0p1a2s3d4f5g6h7j8k",
      ownerId: "people56294730ppudhnxj",
    },
    createdAt: "2024-10-04T16:04:12Z",
    updatedAt: "2024-10-04T16:12:12Z",
    gallery: [
      {
        _id: "galleryaybuat4002079o695t3lx1yf",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515394/gildan-heavy-cotton-t-shirt-black_vod89v.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515285/gildan-heavy-cotton-t-shirt-black-1_tyizof.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515313/gildan-heavy-cotton-t-shirt-black-2_yuqmyg.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515394/gildan-heavy-cotton-t-shirt-black-3_eqr8nk.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515394/gildan-heavy-cotton-t-shirt-black-4_letwvd.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515394/gildan-heavy-cotton-t-shirt-black-5_eqqgme.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515394/gildan-heavy-cotton-t-shirt-black-6_kqqp7r.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515394/gildan-heavy-cotton-t-shirt-black-7_umwycz.jpg",
        ],
      },
      {
        _id: "gallery73jwfrr4z09hn722ch744y1k",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515396/gildan-heavy-cotton-t-shirt-brown_vpbxsb.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515394/gildan-heavy-cotton-t-shirt-brown-1_tengmn.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515395/gildan-heavy-cotton-t-shirt-brown-2_l1ipxw.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515395/gildan-heavy-cotton-t-shirt-brown-3_t6idnq.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515395/gildan-heavy-cotton-t-shirt-brown-4_yxgg0s.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515395/gildan-heavy-cotton-t-shirt-brown-5_bw2c9d.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515395/gildan-heavy-cotton-t-shirt-brown-6_d1u94p.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515396/gildan-heavy-cotton-t-shirt-brown-7_bxvkqy.jpg",
        ],
      },
      {
        _id: "gallery1li8j70e0wimr6n625za013p",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515396/gildan-heavy-cotton-t-shirt-maroon-1_r2zggh.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515396/gildan-heavy-cotton-t-shirt-maroon-2_amkikz.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515396/gildan-heavy-cotton-t-shirt-maroon-3_b800rn.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515396/gildan-heavy-cotton-t-shirt-maroon-4_iljtis.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515396/gildan-heavy-cotton-t-shirt-maroon-5_c1o7sa.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515397/gildan-heavy-cotton-t-shirt-maroon-6_b4grac.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515397/gildan-heavy-cotton-t-shirt-maroon-7_ri1gkb.jpg",
        ],
      },
      {
        _id: "gallery341e82r571f9ui8x3ogy6jul",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515398/gildan-heavy-cotton-t-shirt-navy-blue_c3y74o.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515397/gildan-heavy-cotton-t-shirt-navy-blue-1_xkehkk.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515397/gildan-heavy-cotton-t-shirt-navy-blue-2_wyaeo1.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515397/gildan-heavy-cotton-t-shirt-navy-blue-3_jkz3d5.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515398/gildan-heavy-cotton-t-shirt-navy-blue-4_maxmgi.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515398/gildan-heavy-cotton-t-shirt-navy-blue-5_kg7zkt.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515398/gildan-heavy-cotton-t-shirt-navy-blue-6_srqpzs.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515398/gildan-heavy-cotton-t-shirt-navy-blue-7_pxlqrx.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: [
          "color6139475208bnmasdfghj",
          "color670doyqs79397wt9qzx12o",
          "color7fsb642eu91kw53a172dos0n",
          "color1s9acdljp780sik8k805544y",
        ],
      },
      {
        _id: "attributesizev24wm186g8tv99165npw4gfn",
        options: [
          "size5487264852mvnsdighfur",
          "size9374628105qwertyhjkl",
          "size5820391746zxcvbnmasd",
          "size7604152983plokmijnuh",
          "size1948572306asdfghqwer",
        ],
      },
    ],
    defaultVariant: "variant86g6p57bmr6zd819oey9e24t",
    variants: [
      {
        _id: "variant049mju16q75htadq66gg450b",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "gildan-heavy-cotton-t-shirt-black-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2024-10-04T16:21:12Z",
        updatedAt: "2024-10-04T16:36:12Z",
        price: 27.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515394/gildan-heavy-cotton-t-shirt-black-5_eqqgme.jpg",
        gallery: "galleryaybuat4002079o695t3lx1yf",
      },
      {
        _id: "variantii4h7en9l6kmcj33e61996v7",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "gildan-heavy-cotton-t-shirt-black-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2024-10-04T17:46:12Z",
        updatedAt: "2024-10-04T18:10:12Z",
        price: 27.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515394/gildan-heavy-cotton-t-shirt-black-4_letwvd.jpg",
        gallery: "galleryaybuat4002079o695t3lx1yf",
      },
      {
        _id: "variantzd5q6vpfjd3m0lsc78526466",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "gildan-heavy-cotton-t-shirt-black-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-10-05T13:02:12Z",
        updatedAt: "2024-10-05T13:10:12Z",
        price: 27.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515394/gildan-heavy-cotton-t-shirt-black-3_eqr8nk.jpg",
        gallery: "galleryaybuat4002079o695t3lx1yf",
      },
      {
        _id: "variantlabc0v6x563v331u400jvcy9",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "gildan-heavy-cotton-t-shirt-brown-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2024-10-05T15:16:12Z",
        updatedAt: "2024-10-05T15:26:12Z",
        price: 28.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515394/gildan-heavy-cotton-t-shirt-brown-1_tengmn.jpg",
        gallery: "gallery73jwfrr4z09hn722ch744y1k",
      },
      {
        _id: "variantik61kfpc42besc53271h598v",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "gildan-heavy-cotton-t-shirt-brown-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-10-05T16:04:12Z",
        updatedAt: "2024-10-05T16:12:12Z",
        price: 28.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 6,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515395/gildan-heavy-cotton-t-shirt-brown-2_l1ipxw.jpg",
        gallery: "gallery73jwfrr4z09hn722ch744y1k",
      },
      {
        _id: "variant5p7f8k7y9k8l1f7u3yx50f4b",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "gildan-heavy-cotton-t-shirt-brown-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-10-05T16:21:12Z",
        updatedAt: "2024-10-05T16:36:12Z",
        price: 28.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515396/gildan-heavy-cotton-t-shirt-brown_vpbxsb.jpg",
        gallery: "gallery73jwfrr4z09hn722ch744y1k",
      },
      {
        _id: "variant31h4ptab9114p21kre12al5w",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "gildan-heavy-cotton-t-shirt-brown-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2024-10-05T17:46:12Z",
        updatedAt: "2024-10-05T18:10:12Z",
        price: 28.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515395/gildan-heavy-cotton-t-shirt-brown-5_bw2c9d.jpg",
        gallery: "gallery73jwfrr4z09hn722ch744y1k",
      },
      {
        _id: "variantno413dws1941o6wyk8b174rw",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "gildan-heavy-cotton-t-shirt-maroon-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color670doyqs79397wt9qzx12o",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2024-10-06T15:16:12Z",
        updatedAt: "2024-10-06T15:26:12Z",
        price: 30.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515396/gildan-heavy-cotton-t-shirt-maroon-4_iljtis.jpg",
        gallery: "gallery1li8j70e0wimr6n625za013p",
      },
      {
        _id: "variantjbwb2096m13ho46f019aeb5y",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "gildan-heavy-cotton-t-shirt-maroon-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color7fsb642eu91kw53a172dos0n",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2024-10-06T16:04:12Z",
        updatedAt: "2024-10-06T16:12:12Z",
        price: 30.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515396/gildan-heavy-cotton-t-shirt-maroon-3_b800rn.jpg",
        gallery: "gallery1li8j70e0wimr6n625za013p",
      },
      {
        _id: "variant86g6p57bmr6zd819oey9e24t",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "gildan-heavy-cotton-t-shirt-maroon-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color7fsb642eu91kw53a172dos0n",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-10-06T16:21:12Z",
        updatedAt: "2024-10-06T16:36:12Z",
        price: 30.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515396/gildan-heavy-cotton-t-shirt-maroon-2_amkikz.jpg",
        gallery: "gallery1li8j70e0wimr6n625za013p",
      },
      {
        _id: "variantlkv01i4qd7kku2897c954kl9",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "gildan-heavy-cotton-t-shirt-maroon-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color7fsb642eu91kw53a172dos0n",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-10-06T17:46:12Z",
        updatedAt: "2024-10-06T18:10:12Z",
        price: 30.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage: "/images/products/gildan-heavy-cotton-t-shirt-maroon.jpg",
        gallery: "gallery1li8j70e0wimr6n625za013p",
      },
      {
        _id: "variant1eu783dyu8m6g547vg27ca6t",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "gildan-heavy-cotton-t-shirt-maroon-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color7fsb642eu91kw53a172dos0n",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2024-10-07T13:02:12Z",
        updatedAt: "2024-10-07T13:10:12Z",
        price: 30.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 7,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515396/gildan-heavy-cotton-t-shirt-maroon-3_b800rn.jpg",
        gallery: "gallery1li8j70e0wimr6n625za013p",
      },
      {
        _id: "variantcg5nuu2qe5m830k00m5239dz",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "gildan-heavy-cotton-t-shirt-navy-blue-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color7fsb642eu91kw53a172dos0n",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2024-10-07T15:16:12Z",
        updatedAt: "2024-10-07T15:26:12Z",
        price: 29.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515398/gildan-heavy-cotton-t-shirt-navy-blue_c3y74o.jpg",
        gallery: "gallery341e82r571f9ui8x3ogy6jul",
      },
      {
        _id: "variantcg5nuu2qe5fwe0k00m5239dz",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "gildan-heavy-cotton-t-shirt-navy-blue-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color7fsb642eu91kw53a172dos0n",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-10-07T16:04:12Z",
        updatedAt: "2024-10-07T16:12:12Z",
        price: 29.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515397/gildan-heavy-cotton-t-shirt-navy-blue-1_xkehkk.jpg",
        gallery: "gallery341e82r571f9ui8x3ogy6jul",
      },
      {
        _id: "variantcg5nuu2qe5m830k02do239dz",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "gildan-heavy-cotton-t-shirt-navy-blue-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color7fsb642eu91kw53a172dos0n",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-10-07T16:21:12Z",
        updatedAt: "2024-10-07T16:36:12Z",
        price: 29.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515397/gildan-heavy-cotton-t-shirt-navy-blue-3_jkz3d5.jpg",
        gallery: "gallery341e82r571f9ui8x3ogy6jul",
      },
    ],
  },
  {
    _id: "product66e92ee00051dc2c4fa652a7",
    name: "Nike Sportswear Club Tee",
    slug: "nike-sportswear-club-tee",
    categories: [
      "categoryitem92bdk38sla17qpz4u9mn2c",
      "categoryitem41mz8qp5sd93jf7t1xy0ac",
      "categoryitem59as7dw3nb84ckl2yx9qa2",
    ],
    description:
      "Classic cotton tee featuring the Nike logo, perfect for casual wear and sports activities.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storei9o0p1a2s3d4f5g6h7j8k",
      ownerId: "people56294730ppudhnxj",
    },
    createdAt: "2024-10-08T15:16:12Z",
    updatedAt: "2024-10-08T15:26:12Z",
    gallery: [
      {
        _id: "galleryw6h678j54p8d4j6yl50xglm9",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515969/nike-sportswear-club-tee-green_b2tq11.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515968/nike-sportswear-club-tee-green-1_tsw1w3.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515968/nike-sportswear-club-tee-green-2_r8xaue.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515968/nike-sportswear-club-tee-green-3_scrbve.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515968/nike-sportswear-club-tee-green-4_qlrpki.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515968/nike-sportswear-club-tee-green-5_cagy00.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515968/nike-sportswear-club-tee-green-6_art4aa.jpg",
        ],
      },
      {
        _id: "galleryzu434ovuvn51q0915azq141j",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515967/nike-sportswear-club-tee-blue_nu5y81.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515966/nike-sportswear-club-tee-blue-1_ye7wvg.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515967/nike-sportswear-club-tee-blue-2_lbjs9e.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515967/nike-sportswear-club-tee-blue-3_jgn20l.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515967/nike-sportswear-club-tee-blue-4_ygpu52.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515967/nike-sportswear-club-tee-blue-5_l5gb2z.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515967/nike-sportswear-club-tee-blue-6_chdfrc.jpg",
        ],
      },
      {
        _id: "gallery2l8f6lib683sq98uh2vse859",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515970/nike-sportswear-club-tee-red_j8cbkt.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515969/nike-sportswear-club-tee-red-1_vwup4x.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515969/nike-sportswear-club-tee-red-2_pvluhl.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515969/nike-sportswear-club-tee-red-3_ktygz3.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515969/nike-sportswear-club-tee-red-4_lsziuq.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515969/nike-sportswear-club-tee-red-5_otzxqu.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515970/nike-sportswear-club-tee-red-6_wnlrpw.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515970/nike-sportswear-club-tee-red-7_zrzrfo.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515970/nike-sportswear-club-tee-red-8_f0dxbu.jpg",
        ],
      },
      {
        _id: "galleryzbj299ow992lfa3l935nc5s7",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515966/nike-sportswear-club-tee-black_obrfdj.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515966/nike-sportswear-club-tee-black-1_rmdnlc.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515966/nike-sportswear-club-tee-black-2_ir50lt.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515966/nike-sportswear-club-tee-black-3_grcghv.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515966/nike-sportswear-club-tee-black-4_vexdx4.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515966/nike-sportswear-club-tee-black-5_a79eyd.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: [
          "colorlx8bj3f8490i2io0m6d2ed68",
          "color4728169530qazwsxedcr",
          "color6139475208bnmasdfghj",
          "color5712064893plmkonjibv",
        ],
      },
      {
        _id: "attributesizev24wm186g8tv99165npw4gfn",
        options: [
          "size5487264852mvnsdighfur",
          "size9374628105qwertyhjkl",
          "size5820391746zxcvbnmasd",
          "size7604152983plokmijnuh",
          "size1948572306asdfghqwer",
        ],
      },
    ],
    defaultVariant: "variantqn70fj87cyqr89l00069ml7u",
    variants: [
      {
        _id: "variantxro6sdpqm049f415673s2ej3",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "nike-sportswear-club-tee-blue-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorlx8bj3f8490i2io0m6d2ed68",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2024-10-08T16:04:12Z",
        updatedAt: "2024-10-08T16:12:12Z",
        price: 27.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515966/nike-sportswear-club-tee-blue-1_ye7wvg.jpg",
        gallery: "galleryzu434ovuvn51q0915azq141j",
      },
      {
        _id: "variante7l45oy897u30jhnyiu18q27",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "nike-sportswear-club-tee-blue-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorlx8bj3f8490i2io0m6d2ed68",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-10-08T16:21:12Z",
        updatedAt: "2024-10-08T16:36:12Z",
        price: 27.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515967/nike-sportswear-club-tee-blue-2_lbjs9e.jpg",
        gallery: "galleryzu434ovuvn51q0915azq141j",
      },
      {
        _id: "variante4dskyh93ol9b625022wfb42",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "nike-sportswear-club-tee-blue-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorlx8bj3f8490i2io0m6d2ed68",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2024-10-08T17:46:12Z",
        updatedAt: "2024-10-08T18:10:12Z",
        price: 27.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515966/nike-sportswear-club-tee-blue-1_ye7wvg.jpg",
        gallery: "galleryzu434ovuvn51q0915azq141j",
      },
      {
        _id: "variantx64lyn5t5j2j9z4s9v2n58y9",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "nike-sportswear-club-tee-red-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2024-10-09T13:02:12Z",
        updatedAt: "2024-10-09T13:10:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515969/nike-sportswear-club-tee-red-1_vwup4x.jpg",
        gallery: "gallery2l8f6lib683sq98uh2vse859",
      },
      {
        _id: "variantqn70fj87cyqr89l00069ml7u",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "nike-sportswear-club-tee-red-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-10-09T15:16:12Z",
        updatedAt: "2024-10-09T15:26:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515970/nike-sportswear-club-tee-red-7_zrzrfo.jpg",
        gallery: "gallery2l8f6lib683sq98uh2vse859",
      },
      {
        _id: "variantd7k5954gf4r91js1z38hx0po",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "nike-sportswear-club-tee-red-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-10-09T16:04:12Z",
        updatedAt: "2024-10-09T16:12:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 7,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515970/nike-sportswear-club-tee-red_j8cbkt.jpg",
        gallery: "gallery2l8f6lib683sq98uh2vse859",
      },
      {
        _id: "variantnqgd16116k90j1va6ik30r9d",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "nike-sportswear-club-tee-red-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-10-09T16:21:12Z",
        updatedAt: "2024-10-09T16:36:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515970/nike-sportswear-club-tee-red-6_wnlrpw.jpg",
        gallery: "gallery2l8f6lib683sq98uh2vse859",
      },
      {
        _id: "variantjz6752vl12k600b6iu0ghn9l",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "nike-sportswear-club-tee-black-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2024-10-09T17:46:12Z",
        updatedAt: "2024-10-09T18:10:12Z",
        price: 28.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 19,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515966/nike-sportswear-club-tee-black_obrfdj.jpg",
        gallery: "galleryzbj299ow992lfa3l935nc5s7",
      },
      {
        _id: "variant5a3a598ayd21bfqjmh1128m7",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "nike-sportswear-club-tee-black-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2024-10-10T15:16:12Z",
        updatedAt: "2024-10-10T15:26:12Z",
        price: 28.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515966/nike-sportswear-club-tee-black-1_rmdnlc.jpg",
        gallery: "galleryzbj299ow992lfa3l935nc5s7",
      },
      {
        _id: "variantd3ind706584mjh5oooc20c22",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "nike-sportswear-club-tee-black-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2024-10-10T16:04:12Z",
        updatedAt: "2024-10-10T16:12:12Z",
        price: 28.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515966/nike-sportswear-club-tee-black-2_ir50lt.jpg",
        gallery: "galleryzbj299ow992lfa3l935nc5s7",
      },
      {
        _id: "variantkl3000866j481uihnq3y9aho",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "nike-sportswear-club-tee-black-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-10-10T16:21:12Z",
        updatedAt: "2024-10-10T16:36:12Z",
        price: 28.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 6,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515966/nike-sportswear-club-tee-black-3_grcghv.jpg",
        gallery: "galleryzbj299ow992lfa3l935nc5s7",
      },
      {
        _id: "variantk66e929400051dc2c4fa6525b",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "nike-sportswear-club-tee-black-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2024-10-10T17:46:12Z",
        updatedAt: "2024-10-10T18:10:12Z",
        price: 28.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515966/nike-sportswear-club-tee-black-4_vexdx4.jpg",
        gallery: "galleryzbj299ow992lfa3l935nc5s7",
      },
      {
        _id: "variant7c1zzau5hf8t7h42v32c3m77",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "nike-sportswear-club-tee-green-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color5712064893plmkonjibv",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2024-10-11T13:02:12Z",
        updatedAt: "2024-10-11T13:10:12Z",
        price: 26.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515968/nike-sportswear-club-tee-green-2_r8xaue.jpg",
        gallery: "galleryw6h678j54p8d4j6yl50xglm9",
      },
      {
        _id: "variantj30y8m918qhka9g6cx40p99l",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "nike-sportswear-club-tee-green-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color5712064893plmkonjibv",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2024-10-11T15:16:12Z",
        updatedAt: "2024-10-11T15:26:12Z",
        price: 26.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515968/nike-sportswear-club-tee-green-1_tsw1w3.jpg",
        gallery: "galleryw6h678j54p8d4j6yl50xglm9",
      },
      {
        _id: "variantv1tyyhg625s9662z5w51zk7r",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "nike-sportswear-club-tee-green-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color5712064893plmkonjibv",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2024-10-11T16:04:12Z",
        updatedAt: "2024-10-11T16:12:12Z",
        price: 26.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515968/nike-sportswear-club-tee-green-3_scrbve.jpg",
        gallery: "galleryw6h678j54p8d4j6yl50xglm9",
      },
    ],
  },
  {
    _id: "product66e92f670051dc2c4fa652b9",
    name: "Hanes Men's Tagless T-Shirt",
    slug: "hanes-mens-tagless-t-shirt",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem41mz8qp5sd93jf7t1xy0ac",
      "categoryitem59as7dw3nb84ckl2yx9qa2",
    ],
    description:
      "Basic tagless t-shirt made with comfort and affordability in mind, perfect for daily wear.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storem0n1b2v3c4x5z6a7s8d9f",
      ownerId: "people52449916hujoeuns",
    },
    createdAt: "2021-06-23T15:16:12Z",
    updatedAt: "2021-06-23T15:26:12Z",

    gallery: [
      {
        _id: "gallerygl7d54lq0i88d4b4579u3jqm",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515961/hanes-mens-tagless-t-shirt-white_ewpoue.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515960/hanes-mens-tagless-t-shirt-white-1_ecjfi6.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515960/hanes-mens-tagless-t-shirt-white-2_cwmutp.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515960/hanes-mens-tagless-t-shirt-white-3_vl7o0i.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515960/hanes-mens-tagless-t-shirt-white-4_ak975p.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515960/hanes-mens-tagless-t-shirt-white-5_n3qsjs.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515960/hanes-mens-tagless-t-shirt-white-6_pv9qo8.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515961/hanes-mens-tagless-t-shirt-white-7_fxjbua.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515961/hanes-mens-tagless-t-shirt-white-8_dvsl5j.jpg",
        ],
      },
      {
        _id: "galleryv76567ch7g038lvm3k7rj8ie",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515957/hanes-mens-tagless-t-shirt-gray_ddgszi.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515399/hanes-mens-tagless-t-shirt-gray-1_tjnw54.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515399/hanes-mens-tagless-t-shirt-gray-2_rujtfk.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515399/hanes-mens-tagless-t-shirt-gray-3_viz4ie.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515399/hanes-mens-tagless-t-shirt-gray-4_t4uhsl.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515399/hanes-mens-tagless-t-shirt-gray-5_euveza.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515424/hanes-mens-tagless-t-shirt-gray-6_ylowwf.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515452/hanes-mens-tagless-t-shirt-gray-7_ajtggm.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515957/hanes-mens-tagless-t-shirt-gray-8_rnzj3a.jpg",
        ],
      },
      {
        _id: "galleryw6wh7n3zj5u410h2n13x4m7r",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515959/hanes-mens-tagless-t-shirt-orange_nunkju.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515958/hanes-mens-tagless-t-shirt-orange-1_fvxnky.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515958/hanes-mens-tagless-t-shirt-orange-2_tfblug.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515958/hanes-mens-tagless-t-shirt-orange-3_vnwd51.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515958/hanes-mens-tagless-t-shirt-orange-4_ryxsaq.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515958/hanes-mens-tagless-t-shirt-orange-5_xm3kri.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515959/hanes-mens-tagless-t-shirt-orange-6_mwmogy.jpg",
        ],
      },
      {
        _id: "gallery1hmp1343x0sdwlu82429gnu8",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515960/hanes-mens-tagless-t-shirt-red_wk6xbj.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515959/hanes-mens-tagless-t-shirt-red-1_zikigw.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515959/hanes-mens-tagless-t-shirt-red-2_j7ueka.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515959/hanes-mens-tagless-t-shirt-red-3_z7ijak.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515959/hanes-mens-tagless-t-shirt-red-4_nclgpw.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515959/hanes-mens-tagless-t-shirt-red-5_c9wjth.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515960/hanes-mens-tagless-t-shirt-red-6_kbwxdt.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515960/hanes-mens-tagless-t-shirt-red-7_g5659b.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: [
          "color3057921648rfvtgbynum",
          "color8641205793qwertasdfg",
          "colornf5l06769c5ih648xmr7zb8b",
          "color4728169530qazwsxedcr",
        ],
      },
      {
        _id: "attributesizev24wm186g8tv99165npw4gfn",
        options: [
          "size5487264852mvnsdighfur",
          "size9374628105qwertyhjkl",
          "size5820391746zxcvbnmasd",
          "size7604152983plokmijnuh",
          "size1948572306asdfghqwer",
        ],
      },
    ],
    defaultVariant: "variant919ratw34g4l85tmevq40g45",
    variants: [
      {
        _id: "variant8if65steo6i4s71xj4e372y7",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hanes-mens-tagless-t-shirt-white-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color3057921648rfvtgbynum",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2021-06-23T16:04:12Z",
        updatedAt: "2021-06-23T16:12:12Z",
        price: 23.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515960/hanes-mens-tagless-t-shirt-white-3_vl7o0i.jpg",
        gallery: "gallerygl7d54lq0i88d4b4579u3jqm",
      },
      {
        _id: "variantj3zwc85731dytuza3o8x1295",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hanes-mens-tagless-t-shirt-white-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color3057921648rfvtgbynum",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2021-06-24T16:21:12Z",
        updatedAt: "2021-06-24T16:36:12Z",
        price: 23.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515960/hanes-mens-tagless-t-shirt-white-2_cwmutp.jpg",
        gallery: "gallerygl7d54lq0i88d4b4579u3jqm",
      },
      {
        _id: "variant919ratw34g4l85tmevq40g45",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hanes-mens-tagless-t-shirt-white-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color3057921648rfvtgbynum",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2021-06-25T17:46:12Z",
        updatedAt: "2021-06-25T18:10:12Z",
        price: 23.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515961/hanes-mens-tagless-t-shirt-white_ewpoue.jpg",
        gallery: "gallerygl7d54lq0i88d4b4579u3jqm",
      },
      {
        _id: "variantn773b0lozmn38819fxzk9v68",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hanes-mens-tagless-t-shirt-white-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color3057921648rfvtgbynum",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2021-06-25T13:02:12Z",
        updatedAt: "2021-06-25T13:10:12Z",
        price: 23.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 16,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515960/hanes-mens-tagless-t-shirt-white-4_ak975p.jpg",
        gallery: "gallerygl7d54lq0i88d4b4579u3jqm",
      },
      {
        _id: "variantc599r3nyg731yd1n99sj6vt0",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hanes-mens-tagless-t-shirt-gray-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2021-06-26T15:16:12Z",
        updatedAt: "2021-06-26T15:26:12Z",
        price: 22.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515399/hanes-mens-tagless-t-shirt-gray-1_tjnw54.jpg",
        gallery: "galleryv76567ch7g038lvm3k7rj8ie",
      },
      {
        _id: "variantg421caf454s71rcirc1lv881",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hanes-mens-tagless-t-shirt-gray-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2021-06-26T16:04:12Z",
        updatedAt: "2021-06-26T16:12:12Z",
        price: 22.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 5,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515399/hanes-mens-tagless-t-shirt-gray-2_rujtfk.jpg",
        gallery: "galleryv76567ch7g038lvm3k7rj8ie",
      },
      {
        _id: "variant30wr28f37651oy17rg9rfzgt",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hanes-mens-tagless-t-shirt-gray-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color8641205793qwertasdfg",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2021-06-26T16:21:12Z",
        updatedAt: "2021-06-26T16:36:12Z",
        price: 22.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515957/hanes-mens-tagless-t-shirt-gray_ddgszi.jpg",
        gallery: "galleryv76567ch7g038lvm3k7rj8ie",
      },
      {
        _id: "variant35y2sal14g2y68bwk6f206om",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hanes-mens-tagless-t-shirt-orange-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colornf5l06769c5ih648xmr7zb8b",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2021-06-26T17:46:12Z",
        updatedAt: "2021-06-26T18:10:12Z",
        price: 21.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515959/hanes-mens-tagless-t-shirt-orange_nunkju.jpg",
        gallery: "galleryw6wh7n3zj5u410h2n13x4m7r",
      },
      {
        _id: "variant43q1aipn4u0w27q87be3h4c9",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hanes-mens-tagless-t-shirt-orange-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colornf5l06769c5ih648xmr7zb8b",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2021-06-27T13:02:12Z",
        updatedAt: "2021-06-27T13:10:12Z",
        price: 21.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 16,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515958/hanes-mens-tagless-t-shirt-orange-2_tfblug.jpg",
        gallery: "galleryw6wh7n3zj5u410h2n13x4m7r",
      },
      {
        _id: "variantoe6j9yjv02g65k3ve3jq0379",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hanes-mens-tagless-t-shirt-orange-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colornf5l06769c5ih648xmr7zb8b",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2021-06-28T15:16:12Z",
        updatedAt: "2021-06-28T15:26:12Z",
        price: 21.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 18,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515958/hanes-mens-tagless-t-shirt-orange-3_vnwd51.jpg",
        gallery: "galleryw6wh7n3zj5u410h2n13x4m7r",
      },
      {
        _id: "variantgb1yn97sv00q8m037a3i9te5",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hanes-mens-tagless-t-shirt-orange-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colornf5l06769c5ih648xmr7zb8b",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2021-06-28T16:04:12Z",
        updatedAt: "2021-06-28T16:12:12Z",
        price: 21.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515958/hanes-mens-tagless-t-shirt-orange-4_ryxsaq.jpg",
        gallery: "galleryw6wh7n3zj5u410h2n13x4m7r",
      },
      {
        _id: "variantgx48f8t8kdqv7d1637eq6l57",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hanes-mens-tagless-t-shirt-red-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2021-06-28T16:21:12Z",
        updatedAt: "2021-06-28T16:36:12Z",
        price: 22.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515959/hanes-mens-tagless-t-shirt-red-1_zikigw.jpg",
        gallery: "gallery1hmp1343x0sdwlu82429gnu8",
      },
      {
        _id: "variant5e50980q3ewq2zk66awm3sx1",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hanes-mens-tagless-t-shirt-red-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2021-06-28T17:46:12Z",
        updatedAt: "2021-06-28T18:10:12Z",

        price: 22.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515960/hanes-mens-tagless-t-shirt-red_wk6xbj.jpg",
        gallery: "gallery1hmp1343x0sdwlu82429gnu8",
      },
      {
        _id: "variant9x9ej90jtyq0b43a2om6n827",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hanes-mens-tagless-t-shirt-red-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2021-06-29T13:02:12Z",
        updatedAt: "2021-06-29T13:10:12Z",
        price: 22.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 16,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515959/hanes-mens-tagless-t-shirt-red-2_j7ueka.jpg",
        gallery: "gallery1hmp1343x0sdwlu82429gnu8",
      },
      {
        _id: "variant137p5tk316d1sw94hx56cbjw",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "hanes-mens-tagless-t-shirt-red-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2021-07-11T13:02:12Z",
        updatedAt: "2021-07-11T13:10:12Z",
        price: 22.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 10,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779515959/hanes-mens-tagless-t-shirt-red-3_z7ijak.jpg",
        gallery: "gallery1hmp1343x0sdwlu82429gnu8",
      },
    ],
  },

  {
    _id: "product66e92f4e0051dc2c4fa652b6",
    name: "Polo Ralph Lauren Classic Fit T-Shirt",
    slug: "hanes-mens-tagless-t-shirt",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem41mz8qp5sd93jf7t1xy0ac",
      "categoryitem59as7dw3nb84ckl2yx9qa2",
    ],
    description:
      "Classic fit t-shirt featuring the iconic embroidered Polo Pony logo on the chest, offering a preppy casual look.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storem0n1b2v3c4x5z6a7s8d9f",
      ownerId: "people52449916hujoeuns",
    },
    createdAt: "2021-07-12T15:16:12Z",
    updatedAt: "2021-07-12T15:26:12Z",
    gallery: [
      {
        _id: "galleryv64k25zi8et26eva28e71ql2",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516609/polo-ralph-lauren-classic-fit-t-shirt-brown_aqjil5.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516608/polo-ralph-lauren-classic-fit-t-shirt-brown-1_uespw9.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516608/polo-ralph-lauren-classic-fit-t-shirt-brown-2_n7chm5.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516609/polo-ralph-lauren-classic-fit-t-shirt-brown-3_wuyonc.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516608/polo-ralph-lauren-classic-fit-t-shirt-brown-4_qshr5u.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516609/polo-ralph-lauren-classic-fit-t-shirt-brown-5_gsp15w.jpg",
        ],
      },
      {
        _id: "galleryeb8y82m6xhf9f51z18yn0w34",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516610/polo-ralph-lauren-classic-fit-t-shirt-navy-blue_slo9dh.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516609/polo-ralph-lauren-classic-fit-t-shirt-navy-blue-1_nd85ge.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516609/polo-ralph-lauren-classic-fit-t-shirt-navy-blue-2_yjlg00.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516609/polo-ralph-lauren-classic-fit-t-shirt-navy-blue-3_wsedsb.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516609/polo-ralph-lauren-classic-fit-t-shirt-navy-blue-4_vvmnw2.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516609/polo-ralph-lauren-classic-fit-t-shirt-navy-blue-5_vculny.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516610/polo-ralph-lauren-classic-fit-t-shirt-navy-blue-6_i72n1a.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516610/polo-ralph-lauren-classic-fit-t-shirt-navy-blue-7_hegkej.jpg",
        ],
      },
      {
        _id: "galleryfv73yb7s20f4kt6r55f7s28l",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516611/polo-ralph-lauren-classic-fit-t-shirt-red_taftks.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516610/polo-ralph-lauren-classic-fit-t-shirt-red-1_m19sls.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516610/polo-ralph-lauren-classic-fit-t-shirt-red-2_orputd.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516610/polo-ralph-lauren-classic-fit-t-shirt-red-3_ebzpc1.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516611/polo-ralph-lauren-classic-fit-t-shirt-red-4_kriwwd.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516611/polo-ralph-lauren-classic-fit-t-shirt-red-5_notmvu.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516611/polo-ralph-lauren-classic-fit-t-shirt-red-6_yuyeo1.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516611/polo-ralph-lauren-classic-fit-t-shirt-red-7_c5rlny.jpg",
        ],
      },
      {
        _id: "gallery6dk3pc2abl41d6ysqz238770",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516612/polo-ralph-lauren-classic-fit-t-shirt-white_edmad4.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516611/polo-ralph-lauren-classic-fit-t-shirt-white-1_u88mtk.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516611/polo-ralph-lauren-classic-fit-t-shirt-white-2_rl1dip.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516612/polo-ralph-lauren-classic-fit-t-shirt-white-3_votv0a.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516612/polo-ralph-lauren-classic-fit-t-shirt-white-4_enszkk.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516612/polo-ralph-lauren-classic-fit-t-shirt-white-4_enszkk.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516612/polo-ralph-lauren-classic-fit-t-shirt-white-6_lmpluo.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: [
          "color1s9acdljp780sik8k805544y",
          "color7fsb642eu91kw53a172dos0n",
          "color4728169530qazwsxedcr",
          "color3057921648rfvtgbynum",
        ],
      },
      {
        _id: "attributesizev24wm186g8tv99165npw4gfn",
        options: [
          "size1122334455xxsabcdef",
          "size5487264852mvnsdighfur",
          "size9374628105qwertyhjkl",
          "size5820391746zxcvbnmasd",
          "size7604152983plokmijnuh",
          "size1948572306asdfghqwer",
        ],
      },
    ],
    defaultVariant: "variantn8sa74i36574h3z3mqb8dn7p",
    variants: [
      {
        _id: "variant6kjmybn56789y0964jews29d",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-brown-xxs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributesizev24wm186g8tv99165npw4gfn: "size1122334455xxsabcdef",
        },
        createdAt: "2021-07-12T16:04:12Z",
        updatedAt: "2021-07-12T16:12:12Z",
        price: 24.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516608/polo-ralph-lauren-classic-fit-t-shirt-brown-1_uespw9.jpg",
        gallery: "galleryv64k25zi8et26eva28e71ql2",
      },
      {
        _id: "variantwvm2g52h408xf4v19d3qfv04",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-brown-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2021-07-12T16:21:12Z",
        updatedAt: "2021-07-12T16:36:12Z",
        price: 24.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 6,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516608/polo-ralph-lauren-classic-fit-t-shirt-brown-2_n7chm5.jpg",
        gallery: "galleryv64k25zi8et26eva28e71ql2",
      },
      {
        _id: "variant9n6rez13si54zje64jc770e8",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-brown-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2021-07-12T17:46:12Z",
        updatedAt: "2021-07-12T18:10:12Z",
        price: 24.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516609/polo-ralph-lauren-classic-fit-t-shirt-brown_aqjil5.jpg",
        gallery: "galleryv64k25zi8et26eva28e71ql2",
      },
      {
        _id: "variantbwt2v675lwl0fv11j36zg623",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-brown-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2021-07-13T13:02:12Z",
        updatedAt: "2021-07-13T13:10:12Z",
        price: 24.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 14,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516608/polo-ralph-lauren-classic-fit-t-shirt-brown-4_qshr5u.jpg",
        gallery: "galleryv64k25zi8et26eva28e71ql2",
      },
      {
        _id: "variant467b1obc94x31pzt02qqx2q6",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-brown-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color1s9acdljp780sik8k805544y",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2021-07-13T15:16:12Z",
        updatedAt: "2021-07-13T15:26:12Z",
        price: 24.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 19,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516608/polo-ralph-lauren-classic-fit-t-shirt-brown-4_qshr5u.jpg",
        gallery: "galleryv64k25zi8et26eva28e71ql2",
      },
      {
        _id: "variant2vmfaw7l027g0c5noi89a043",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-navy-blue-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color7fsb642eu91kw53a172dos0n",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2021-07-13T16:04:12Z",
        updatedAt: "2021-07-13T16:12:12Z",
        price: 25.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516609/polo-ralph-lauren-classic-fit-t-shirt-brown-5_gsp15w.jpg",
        gallery: "galleryeb8y82m6xhf9f51z18yn0w34",
      },
      {
        _id: "variant24u883313twkdu8wu60fw5yk",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-navy-blue-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color7fsb642eu91kw53a172dos0n",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2021-07-13T16:21:12Z",
        updatedAt: "2021-07-13T16:36:12Z",
        price: 25.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 5,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516609/polo-ralph-lauren-classic-fit-t-shirt-navy-blue-3_wsedsb.jpg",
        gallery: "galleryeb8y82m6xhf9f51z18yn0w34",
      },
      {
        _id: "variant5njnc7s03w023tndx3au1004",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-navy-blue-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color7fsb642eu91kw53a172dos0n",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2021-07-13T17:46:12Z",
        updatedAt: "2021-07-13T18:10:12Z",
        price: 25.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516609/polo-ralph-lauren-classic-fit-t-shirt-navy-blue-2_yjlg00.jpg",
        gallery: "galleryeb8y82m6xhf9f51z18yn0w34",
      },
      {
        _id: "variant8k88t4xf8d5s2wm56ow3o44t",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-red-xxs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size1122334455xxsabcdef",
        },
        createdAt: "2021-07-14T13:02:12Z",
        updatedAt: "2021-07-14T13:10:12Z",
        price: 28.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516611/polo-ralph-lauren-classic-fit-t-shirt-red_taftks.jpg",
        gallery: "galleryfv73yb7s20f4kt6r55f7s28l",
      },
      {
        _id: "varianti2v7wsp22v541p1nog3y5k05",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-red-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2021-07-14T15:16:12Z",
        updatedAt: "2021-07-14T15:26:12Z",
        price: 28.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516610/polo-ralph-lauren-classic-fit-t-shirt-red-1_m19sls.jpg",
        gallery: "galleryfv73yb7s20f4kt6r55f7s28l",
      },
      {
        _id: "varianty35uefavq57r2rh764md0661",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-red-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2021-07-14T16:04:12Z",
        updatedAt: "2021-07-14T16:12:12Z",
        price: 28.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516610/polo-ralph-lauren-classic-fit-t-shirt-red-3_ebzpc1.jpg",
        gallery: "galleryfv73yb7s20f4kt6r55f7s28l",
      },
      {
        _id: "variantn8sa74i36574h3z3mqb8dn7p",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-red-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2021-07-14T16:21:12Z",
        updatedAt: "2021-07-14T16:36:12Z",
        price: 28.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516611/polo-ralph-lauren-classic-fit-t-shirt-red-5_notmvu.jpg",
        gallery: "galleryfv73yb7s20f4kt6r55f7s28l",
      },
      {
        _id: "variantp697vt1af6ztr38n9d4b472x",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-red-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color4728169530qazwsxedcr",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2021-07-14T17:46:12Z",
        updatedAt: "2021-07-14T18:10:12Z",
        price: 28.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516611/polo-ralph-lauren-classic-fit-t-shirt-red-6_yuyeo1.jpg",
        gallery: "galleryfv73yb7s20f4kt6r55f7s28l",
      },
      {
        _id: "variantfu33b7xr20pf626996frtld7",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-white-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color3057921648rfvtgbynum",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2021-07-15T13:02:12Z",
        updatedAt: "2021-07-15T13:10:12Z",
        price: 26.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 21,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516612/polo-ralph-lauren-classic-fit-t-shirt-white_edmad4.jpg",
        gallery: "gallery6dk3pc2abl41d6ysqz238770",
      },
      {
        _id: "variantc4f44bgxya6y8ga7d55b8480",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-white-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color3057921648rfvtgbynum",
          attributesizev24wm186g8tv99165npw4gfn: "size5487264852mvnsdighfur",
        },
        createdAt: "2021-07-15T14:02:12Z",
        updatedAt: "2021-07-15T14:10:12Z",
        price: 26.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 21,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516611/polo-ralph-lauren-classic-fit-t-shirt-white-1_u88mtk.jpg",
        gallery: "gallery6dk3pc2abl41d6ysqz238770",
      },
      {
        _id: "variantoi0qt3zjd7f85b23w0ff1009",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-white-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color3057921648rfvtgbynum",
          attributesizev24wm186g8tv99165npw4gfn: "size9374628105qwertyhjkl",
        },
        createdAt: "2021-07-16T14:02:12Z",
        updatedAt: "2021-07-16T14:10:12Z",
        price: 26.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 19,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516611/polo-ralph-lauren-classic-fit-t-shirt-white-2_rl1dip.jpg",
        gallery: "gallery6dk3pc2abl41d6ysqz238770",
      },
      {
        _id: "variant7q4n1yi627jln828x8n7zxm0",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-white-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color3057921648rfvtgbynum",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2021-07-16T14:16:12Z",
        updatedAt: "2021-07-16T14:20:12Z",
        price: 26.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 18,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516612/polo-ralph-lauren-classic-fit-t-shirt-white-3_votv0a.jpg",
        gallery: "gallery6dk3pc2abl41d6ysqz238770",
      },
      {
        _id: "variantc352208j1di24q7bs3zspo5x",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "polo-ralph-lauren-classic-fit-t-shirt-white-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color3057921648rfvtgbynum",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2021-07-16T14:27:12Z",
        updatedAt: "2021-07-16T14:38:12Z",
        price: 26.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 22,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516612/polo-ralph-lauren-classic-fit-t-shirt-white-4_enszkk.jpg",
        gallery: "gallery6dk3pc2abl41d6ysqz238770",
      },
    ],
  },
  {
    _id: "product66e930880051dc2c4fa652d0",
    name: "Persol PO3019S Sunglasses",
    slug: "persol-po3019s-sunglasses",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem20qp9as4jf63vbn7lk1re3",
      "categoryitem48mn6zx2sa75qwe9pl0rt8",
    ],
    description:
      "Handcrafted Italian sunglasses with a unique Meflecto hinge system for comfort and flexibility. Features polarized lenses.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storem0n1b2v3c4x5z6a7s8d9f",
      ownerId: "people52449916hujoeuns",
    },
    createdAt: "2021-06-12T13:02:12Z",
    updatedAt: "2021-06-12T13:10:12Z",
    gallery: [
      {
        _id: "galleryn0ynz0j1wgw33me07u4n5561",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516608/persol-po3019s-sunglasses_pfgkfj.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516607/persol-po3019s-sunglasses-1_balfjq.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516608/persol-po3019s-sunglasses-2_xppese.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516608/persol-po3019s-sunglasses-3_i6cak0.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516608/persol-po3019s-sunglasses-4_zn1e3r.jpg",
        ],
      },
    ],
    attributes: [],
    defaultVariant: "variantn8sa74i39dr4h3z3mqb8dn7p",
    variants: [
      {
        _id: "variantn8sa74i39dr4h3z3mqb8dn7p",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "persol-po3019s-sunglasses",
        attributes: {},
        createdAt: "2021-07-12T14:02:12Z",
        updatedAt: "2021-07-12T14:10:12Z",
        price: 18.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 16,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779516607/persol-po3019s-sunglasses-1_balfjq.jpg",
        gallery: "galleryn0ynz0j1wgw33me07u4n5561",
      },
    ],
  },
  {
    _id: "product66e9324c0051dc2c4fa652f8",
    name: "Adidas Originals Track Jacket",
    slug: "adidas-originals-track-jacket",
    categories: [
      "categoryitem92bdk38sla17qpz4u9mn2c",
      "categoryitem41mz8qp5sd93jf7t1xy0ac",
      "categoryitem84pl0qw7ks26azm5re1tg4",
    ],
    description:
      "Retro-style track jacket with signature 3-stripes, offering a casual look for everyday wear or light workouts.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storem0n1b2v3c4x5z6a7s8d9f",
      ownerId: "people52449916hujoeuns",
    },
    createdAt: "2021-06-03T13:05:12Z",
    updatedAt: "2021-06-04T14:30:12Z",
    gallery: [
      {
        _id: "gallerygc334k9xyeff4v6yv6148k03",
        images: ["/images/products/adidas-originals-track-jacket-black.jpg"],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: ["color6139475208bnmasdfghj"],
      },
      {
        _id: "attributesizev24wm186g8tv99165npw4gfn",
        options: [
          "size5820391746zxcvbnmasd",
          "size7604152983plokmijnuh",
          "size1948572306asdfghqwer",
        ],
      },
    ],
    defaultVariant: "variantc7vf4853733bh8h3e83qkjyy",
    variants: [
      {
        _id: "variantc7vf4853733bh8h3e83qkjyy",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-track-jacket-black-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesizev24wm186g8tv99165npw4gfn: "size5820391746zxcvbnmasd",
        },
        createdAt: "2021-06-04T14:34:12Z",
        updatedAt: "2021-06-04T15:10:12Z",
        price: 34.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 15,
        primaryImage:
          "/images/products/adidas-originals-track-jacket-black.jpg",
        gallery: "gallerygc334k9xyeff4v6yv6148k03",
      },
      {
        _id: "variantx90i69u508jx9o0tq7t7qh0v",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-track-jacket-black-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesizev24wm186g8tv99165npw4gfn: "size7604152983plokmijnuh",
        },
        createdAt: "2021-06-05T15:24:12Z",
        updatedAt: "2021-06-05T16:06:12Z",
        price: 35.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 17,
        primaryImage:
          "/images/products/adidas-originals-track-jacket-black.jpg",
        gallery: "gallerygc334k9xyeff4v6yv6148k03",
      },
      {
        _id: "variant99060usgwt06mw3l3pk95t7z",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-originals-track-jacket-black-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "color6139475208bnmasdfghj",
          attributesizev24wm186g8tv99165npw4gfn: "size1948572306asdfghqwer",
        },
        createdAt: "2021-06-06T14:10:12Z",
        updatedAt: "2021-06-07T14:22:12Z",
        price: 36.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "/images/products/adidas-originals-track-jacket-black.jpg",
        gallery: "gallerygc334k9xyeff4v6yv6148k03",
      },
    ],
  },
  {
    _id: "product66e928f70051dc2c4fa65252",
    name: "Adidas Ultraboost 21",
    slug: "adidas-ultraboost-21",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem16cx7vb3pl82mna5qr9ty4",
      "categoryitem63qa8we4rt50vbn2jm7kl9",
    ],
    description:
      "A high-performance running shoe that offers ultimate comfort with responsive Boost cushioning and a sleek, sock-like fit",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storem0n1b2v3c4x5z6a7s8d9f",
      ownerId: "people52449916hujoeuns",
    },
    createdAt: "2021-06-08T13:05:12Z",
    updatedAt: "2021-06-08T14:30:12Z",
    gallery: [
      {
        _id: "gallery886jq8zgc826m7z14uhe49rn",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514289/adidas-ultraboost-21_li4qnr.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514288/adidas-ultraboost-21-1_urvv1v.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514288/adidas-ultraboost-21-2_ydl1sz.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514289/adidas-ultraboost-21-3_dvllfb.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514289/adidas-ultraboost-21-4_d0pmk1.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: ["colorw6n58ij4i91429qdxafj25v5"],
      },
      {
        _id: "attributeshoesizeus3948201756lkjhgfdsaq",
        options: [
          "shoesize6d9l3oc58969gtzq1d",
          "shoesizead407s0adu66c08i7u",
          "shoesize7802643915mnbvcxzpoi",
          "shoesize1594730286asdfqwerty",
        ],
      },
    ],
    defaultVariant: "variant1r5vv0t9oy69df99xls09p54",
    variants: [
      {
        _id: "variant1r5vv0t9oy69df99xls09p54",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-ultraboost-21-6",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorw6n58ij4i91429qdxafj25v5",
          attributeshoesizeus3948201756lkjhgfdsaq: "shoesize6d9l3oc58969gtzq1d",
        },
        createdAt: "2021-06-09T14:34:12Z",
        updatedAt: "2021-06-10T15:10:12Z",
        price: 25.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 5,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514288/adidas-ultraboost-21-1_urvv1v.jpg",
        gallery: "gallery886jq8zgc826m7z14uhe49rn",
      },
      {
        _id: "variant8afv2z495994xqoyl0075mfx",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-ultraboost-21-6-5",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorw6n58ij4i91429qdxafj25v5",
          attributeshoesizeus3948201756lkjhgfdsaq: "shoesizead407s0adu66c08i7u",
        },
        createdAt: "2021-06-10T15:24:12Z",
        updatedAt: "2021-06-10T16:06:12Z",
        price: 25.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514289/adidas-ultraboost-21_li4qnr.jpg",
        gallery: "gallery886jq8zgc826m7z14uhe49rn",
      },
      {
        _id: "variantrw3yu1snxhp4d816z4w05543",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-ultraboost-21-7",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorw6n58ij4i91429qdxafj25v5",
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize7802643915mnbvcxzpoi",
        },
        createdAt: "2021-06-12T14:10:12Z",
        updatedAt: "2021-06-13T14:22:12Z",
        price: 25.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 5,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514288/adidas-ultraboost-21-2_ydl1sz.jpg",
        gallery: "gallery886jq8zgc826m7z14uhe49rn",
      },
      {
        _id: "variant9r5l46x47v4skt2y6o6z2p8t",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "adidas-ultraboost-21-7-5",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "colorw6n58ij4i91429qdxafj25v5",
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize1594730286asdfqwerty",
        },
        createdAt: "2021-06-15T14:10:12Z",
        updatedAt: "2021-06-16T14:22:12Z",
        price: 25.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514289/adidas-ultraboost-21-3_dvllfb.jpg",
        gallery: "gallery886jq8zgc826m7z14uhe49rn",
      },
    ],
  },
  {
    _id: "product66e935870051dc2c4fa65310",
    name: "Armani Collezioni Navy Suit",
    slug: "armani-collezioni-navy-suit",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem62bn5cx9tu81lop3qa7fd1",
      "categoryitem93qw4lt7ag10hsz6vd2pk8",
    ],
    description:
      "Elegant navy suit made from fine Italian wool, featuring a slim cut and a modern look, suitable for both work and formal events.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storem0n1b2v3c4x5z6a7s8d9f",
      ownerId: "people52449916hujoeuns",
    },
    createdAt: "2021-06-17T15:16:12Z",
    updatedAt: "2021-06-17T15:26:12Z",
    gallery: [
      {
        _id: "gallery80ae43j1op7xok98nl77a3n6",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514291/armani-collezioni-navy-suit-midnight-navy_d9qyjc.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514290/armani-collezioni-navy-suit-midnight-navy-1_zphvx5.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514290/armani-collezioni-navy-suit-midnight-navy-2_iywsyj.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514290/armani-collezioni-navy-suit-midnight-navy-3_itgd2d.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: ["color8gc7t83h8ifre332fdwx1884"],
      },
      {
        _id: "attributesuitsize173xq2460tec231sod6z4hwb",
        options: [
          "suitsize03zix640n0r2c2c1bc6n5av2",
          "suitsize3w9h7cbcw8a4zsn851lo3079",
          "suitsizet58vez9771lw6r51f0zca8x3",
          "suitsize65cl9pioqvem2g9gm0881031",
        ],
      },
    ],
    defaultVariant: "variant1c724noyq3533311edtzhdj6",
    variants: [
      {
        _id: "variant8k8nh026dsn1v88zo9b71h0e",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "armani-collezioni-navy-suit-midnight-navy-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color8gc7t83h8ifre332fdwx1884",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize03zix640n0r2c2c1bc6n5av2",
        },
        createdAt: "2021-06-17T16:04:12Z",
        updatedAt: "2021-06-17T16:12:12Z",
        price: 40.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 11,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514291/armani-collezioni-navy-suit-midnight-navy_d9qyjc.jpg",
        gallery: "gallery80ae43j1op7xok98nl77a3n6",
      },
      {
        _id: "variantgszad1931v12k76h3v2jh3b6",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "armani-collezioni-navy-suit-midnight-navy-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color8gc7t83h8ifre332fdwx1884",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize3w9h7cbcw8a4zsn851lo3079",
        },
        createdAt: "2021-06-17T16:21:12Z",
        updatedAt: "2021-06-17T16:36:12Z",
        price: 41.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514290/armani-collezioni-navy-suit-midnight-navy-2_iywsyj.jpg",
        gallery: "gallery80ae43j1op7xok98nl77a3n6",
      },
      {
        _id: "variant1c724noyq3533311edtzhdj6",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "armani-collezioni-navy-suit-midnight-navy-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color8gc7t83h8ifre332fdwx1884",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2021-06-17T17:46:12Z",
        updatedAt: "2021-06-17T18:10:12Z",
        price: 41.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514290/armani-collezioni-navy-suit-midnight-navy-1_zphvx5.jpg",
        gallery: "gallery80ae43j1op7xok98nl77a3n6",
      },
      {
        _id: "variantwir0r0sd72yfv050te9u6417",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "armani-collezioni-navy-suit-midnight-navy-l",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82:
            "color8gc7t83h8ifre332fdwx1884",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize65cl9pioqvem2g9gm0881031",
        },
        createdAt: "2021-06-18T13:02:12Z",
        updatedAt: "2021-06-18T13:10:12Z",
        price: 42.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514290/armani-collezioni-navy-suit-midnight-navy-3_itgd2d.jpg",
        gallery: "gallery80ae43j1op7xok98nl77a3n6",
      },
    ],
  },
  {
    _id: "product66e928d40051dc2c4fa6524f",
    name: "Air Zoom Pegasus 38",
    slug: "air-zoom-pegasus-38",
    categories: [
      "categoryitem92bdk38sla17qpz4u9mn2c",
      "categoryitem16cx7vb3pl82mna5qr9ty4",
      "categoryitem63qa8we4rt50vbn2jm7kl9",
    ],
    description:
      "Nike's versatile running shoe designed for daily training. Features a responsive foam midsole and a breathable mesh upper.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storem0n1b2v3c4x5z6a7s8d9f",
      ownerId: "people52449916hujoeuns",
    },
    createdAt: "2021-06-15T15:10:12Z",
    updatedAt: "2021-06-16T15:22:12Z",
    gallery: [
      {
        _id: "gallerygw188m759r2dk03jj7ah35cg",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514290/air-zoom-pegasus-38_mgizmq.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514289/air-zoom-pegasus-38-1_ccaklk.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514289/air-zoom-pegasus-38-2_ui5b3k.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514290/air-zoom-pegasus-38-3_iwgyae.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514290/air-zoom-pegasus-38-4_p6lrrb.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributeshoesizeus3948201756lkjhgfdsaq",
        options: [
          "shoesize6d9l3oc58969gtzq1d",
          "shoesizead407s0adu66c08i7u",
          "shoesize1594730286asdfqwerty",
          "shoesize6081529473plokijuhyg",
          "shoesize5729486310zxcvbnmwer",
        ],
      },
    ],
    defaultVariant: "variant4w77dp7v82f2lqt198bal5f2",
    variants: [
      {
        _id: "variantyb3ijt896n207e7u01pmpo01",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "air-zoom-pegasus-38-6",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq: "shoesize6d9l3oc58969gtzq1d",
        },
        createdAt: "2021-06-16T15:30:12Z",
        updatedAt: "2021-06-16T15:36:12Z",
        price: 25.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 16,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514290/air-zoom-pegasus-38_mgizmq.jpg",
        gallery: "gallerygw188m759r2dk03jj7ah35cg",
      },
      {
        _id: "variant0hgqcr9o5p7m9m4p4to35575",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "air-zoom-pegasus-38-6-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq: "shoesizead407s0adu66c08i7u",
        },
        createdAt: "2021-06-16T16:10:12Z",
        updatedAt: "2021-06-16T16:22:12Z",
        price: 25.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 13,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514289/air-zoom-pegasus-38-1_ccaklk.jpg",
        gallery: "gallerygw188m759r2dk03jj7ah35cg",
      },
      {
        _id: "variantix02h9x9oh4izk047zn1e636",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "air-zoom-pegasus-38-7-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize1594730286asdfqwerty",
        },
        createdAt: "2021-06-16T16:28:12Z",
        updatedAt: "2021-06-16T16:34:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 9,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514290/air-zoom-pegasus-38-3_iwgyae.jpg",
        gallery: "gallerygw188m759r2dk03jj7ah35cg",
      },
      {
        _id: "variant4w77dp7v82f2lqt198bal5f2",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "air-zoom-pegasus-38-8",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize6081529473plokijuhyg",
        },
        createdAt: "2021-06-17T14:10:12Z",
        updatedAt: "2021-06-17T14:22:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 5,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514289/air-zoom-pegasus-38-2_ui5b3k.jpg",
        gallery: "gallerygw188m759r2dk03jj7ah35cg",
      },
      {
        _id: "variantdnbbv6754skwrr2a525x6615",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "air-zoom-pegasus-38-8-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize5729486310zxcvbnmwer",
        },
        createdAt: "2021-06-17T15:04:12Z",
        updatedAt: "2021-06-17T15:12:12Z",
        price: 27.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 6,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514290/air-zoom-pegasus-38-4_p6lrrb.jpg",
        gallery: "gallerygw188m759r2dk03jj7ah35cg",
      },
    ],
  },
  {
    _id: "product66e929400051dc2c4fa6525b",
    name: "Asics Gel-Kayano 28",
    slug: "asics-gel-kayano-28",
    categories: [
      "categoryitem92bdk38sla17qpz4u9mn2c",
      "categoryitem16cx7vb3pl82mna5qr9ty4",
      "categoryitem63qa8we4rt50vbn2jm7kl9",
    ],
    description:
      "Stability running shoe with responsive GEL technology, designed for overpronators. It offers superior support and cushioning.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storem0n1b2v3c4x5z6a7s8d9f",
      ownerId: "people52449916hujoeuns",
    },
    createdAt: "2021-06-18T15:16:12Z",
    updatedAt: "2021-06-18T15:26:12Z",
    gallery: [
      {
        _id: "gallerybj6b0155dk65mb021aw3ne5p",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514291/asics-gel-kayano-28_ebj4ve.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514291/asics-gel-kayano-28-1_mascik.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514291/asics-gel-kayano-28-2_kzym9u.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514291/asics-gel-kayano-28-3_elufif.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514291/asics-gel-kayano-28-4_m0w5vr.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributeshoesizeus3948201756lkjhgfdsaq",
        options: [
          "shoesize4yy853ynjily356o39",
          "shoesizedfbjdn584xz12471r8",
          "shoesizead407s0adu66c08i7u",
          "shoesize7802643915mnbvcxzpoi",
        ],
      },
    ],
    defaultVariant: "variants5t10ny866r6fua7146sus8t",
    variants: [
      {
        _id: "variant87s8w10v7ep4w52q7mj5yag6",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "asics-gel-kayano-28-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq: "shoesize4yy853ynjily356o39",
        },
        createdAt: "2021-06-18T16:04:12Z",
        updatedAt: "2021-06-18T16:12:12Z",
        price: 26.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 14,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514291/asics-gel-kayano-28_ebj4ve.jpg",
        gallery: "gallerybj6b0155dk65mb021aw3ne5p",
      },
      {
        _id: "variantu9q44x1l9n9ghf0menb40869",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "asics-gel-kayano-28-5-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq: "shoesizedfbjdn584xz12471r8",
        },
        createdAt: "2021-06-18T16:21:12Z",
        updatedAt: "2021-06-18T16:36:12Z",
        price: 21.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 18,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514291/asics-gel-kayano-28-3_elufif.jpg",
        gallery: "gallerybj6b0155dk65mb021aw3ne5p",
      },
      {
        _id: "variants5t10ny866r6fua7146sus8t",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "asics-gel-kayano-28-6-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq: "shoesizead407s0adu66c08i7u",
        },
        createdAt: "2021-06-18T17:46:12Z",
        updatedAt: "2021-06-18T18:10:12Z",
        price: 22.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 6,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514291/asics-gel-kayano-28-4_m0w5vr.jpg",
        gallery: "gallerybj6b0155dk65mb021aw3ne5p",
      },
      {
        _id: "variant7nny3o11uc4iy01x2tz0q706",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "asics-gel-kayano-28-6-5",
        attributes: {
          attributeshoesizeus3948201756lkjhgfdsaq:
            "shoesize7802643915mnbvcxzpoi",
        },
        createdAt: "2021-06-19T13:02:12Z",
        updatedAt: "2021-06-19T13:10:12Z",
        price: 22.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 8,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514291/asics-gel-kayano-28-1_mascik.jpg",
        gallery: "gallerybj6b0155dk65mb021aw3ne5p",
      },
    ],
  },
  {
    _id: "product66e9392c0051dc2c4fa65331",
    name: "Balenciaga Hourglass Bag",
    slug: "balenciaga-hourglass-bag",
    categories: [
      "categoryitem92bdk38sla17qpz4u9mn2c",
      "categoryitem64po2re7mv31qas8lk5cd9",
      "categoryitem10sd7uk9pl42amq1fy4he0",
    ],
    description:
      "Sculptural handbag with a distinctive curved silhouette, crafted from smooth leather and featuring a bold B logo clasp.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storem0n1b2v3c4x5z6a7s8d9f",
      ownerId: "people52449916hujoeuns",
    },
    createdAt: "2021-06-20T15:16:12Z",
    updatedAt: "2021-06-20T15:26:12Z",
    gallery: [
      {
        _id: "gallery6s9i1886dph98a02wcx5uy",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514292/balenciaga-hourglass-bag_hfcwhx.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514292/balenciaga-hourglass-bag-1_yla6jz.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514292/balenciaga-hourglass-bag-2_jfafez.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514292/balenciaga-hourglass-bag-3_cjpylj.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514292/balenciaga-hourglass-bag-4_oaasev.jpg",
        ],
      },
    ],
    attributes: [],
    defaultVariant: "variant2z60rw407r36x83cdpgp",
    variants: [
      {
        _id: "variant2z60rw407r36x83cdpgp",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "balenciaga-hourglass-bag",
        attributes: {},
        createdAt: "2021-06-21T16:04:12Z",
        updatedAt: "2021-06-21T16:12:12Z",
        price: 24.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 14,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514292/balenciaga-hourglass-bag_hfcwhx.jpg",
        gallery: "gallery6s9i1886dph98a02wcx5uy",
      },
    ],
  },
  {
    _id: "product66e935700051dc2c4fa6530d",
    name: "Brooks Brothers Madison Fit Suit",
    slug: "brooks-brothers-madison-fit-suit-gunmetal-gray",
    categories: [
      "categoryitem01a1mfe9xk27pqb2t6yh1a",
      "categoryitem62bn5cx9tu81lop3qa7fd1",
      "categoryitem93qw4lt7ag10hsz6vd2pk8",
    ],
    description:
      "Classic two-button suit made from high-quality Italian wool, offering a traditional fit for timeless style.",
    status: "itemstatusea5n700an186861v4qyrjus8",
    storeOwnerInfo: {
      storeId: "storem0n1b2v3c4x5z6a7s8d9f",
      ownerId: "people52449916hujoeuns",
    },
    createdAt: "2021-06-21T15:16:12Z",
    updatedAt: "2021-06-21T15:26:12Z",
    gallery: [
      {
        _id: "gallery7qnyyy8k155b1e088lq3y8",
        images: [
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514297/brooks-brothers-madison-fit-suit-gunmetal-gray_f2pzvb.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514295/brooks-brothers-madison-fit-suit-gunmetal-gray-1_wszqrh.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514296/brooks-brothers-madison-fit-suit-gunmetal-gray-2_bilm0t.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514296/brooks-brothers-madison-fit-suit-gunmetal-gray-3_cj5yrz.jpg",
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514297/brooks-brothers-madison-fit-suit-gunmetal-gray-4_qvnjuz.jpg",
        ],
      },
    ],
    attributes: [
      {
        _id: "attributecolorjp8ddu14m7vf40l6d697db82",
        options: ["colordg0003k8s3m49k5i8"],
      },
      {
        _id: "attributesuitsize173xq2460tec231sod6z4hwb",
        options: [
          "suitsize03zix640n0r2c2c1bc6n5av2",
          "suitsize3w9h7cbcw8a4zsn851lo3079",
          "suitsizet58vez9771lw6r51f0zca8x3",
          "suitsizequee1mzo9dd260013b3e70x5",
        ],
      },
    ],
    defaultVariant: "variant47oy0514pfzio824t85due",
    variants: [
      {
        _id: "variant2yeesto2rg4b8a9399b420",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "brooks-brothers-madison-fit-suit-gunmetal-gray-xs",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colordg0003k8s3m49k5i8",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize03zix640n0r2c2c1bc6n5av2",
        },
        createdAt: "2021-06-21T16:04:12Z",
        updatedAt: "2021-06-21T16:12:12Z",
        price: 43.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 12,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514297/brooks-brothers-madison-fit-suit-gunmetal-gray_f2pzvb.jpg",
        gallery: "gallery7qnyyy8k155b1e088lq3y8",
      },
      {
        _id: "variant47oy0514pfzio824t85due",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "brooks-brothers-madison-fit-suit-gunmetal-gray-s",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colordg0003k8s3m49k5i8",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsize3w9h7cbcw8a4zsn851lo3079",
        },
        createdAt: "2021-06-21T16:21:12Z",
        updatedAt: "2021-06-21T16:36:12Z",
        price: 44.5,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 6,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514296/brooks-brothers-madison-fit-suit-gunmetal-gray-2_bilm0t.jpg",
        gallery: "gallery7qnyyy8k155b1e088lq3y8",
      },
      {
        _id: "variant60unot3046u37wc56pfmj6",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "brooks-brothers-madison-fit-suit-gunmetal-gray-m",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colordg0003k8s3m49k5i8",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsizet58vez9771lw6r51f0zca8x3",
        },
        createdAt: "2021-06-21T17:46:12Z",
        updatedAt: "2021-06-21T18:10:12Z",
        price: 44.25,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 14,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514295/brooks-brothers-madison-fit-suit-gunmetal-gray-1_wszqrh.jpg",
        gallery: "gallery7qnyyy8k155b1e088lq3y8",
      },
      {
        _id: "variant090tmiuge5yh14v603y2f9",
        status: "itemstatusea5n700an186861v4qyrjus8",
        sku: "brooks-brothers-madison-fit-suit-gunmetal-gray-xl",
        attributes: {
          attributecolorjp8ddu14m7vf40l6d697db82: "colordg0003k8s3m49k5i8",
          attributesuitsize173xq2460tec231sod6z4hwb:
            "suitsizequee1mzo9dd260013b3e70x5",
        },
        createdAt: "2021-06-22T13:02:12Z",
        updatedAt: "2021-06-22T13:10:12Z",
        price: 44.75,
        discount: 0.1,
        get displayedPrice() {
          return Number((this.price * (1 - this.discount)).toFixed(2));
        },
        stock: 18,
        primaryImage:
          "https://res.cloudinary.com/dqj5goglp/image/upload/v1779514296/brooks-brothers-madison-fit-suit-gunmetal-gray-3_cj5yrz.jpg",
        gallery: "gallery7qnyyy8k155b1e088lq3y8",
      },
    ],
  },
];
