export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  inStock: boolean;
  featured: boolean;
  variants: {
    size?: string[];
    color?: string[];
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: "Air Jordan 1 Retro High OG",
    description:
      "The Air Jordan 1 Retro High OG features full-grain leather with a Nike Air unit in the heel for unparalleled comfort and a piece of history.",
    price: 170,
    originalPrice: 190,
    image:
      "https://cdn-images.farfetch-contents.com/14/23/81/28/14238128_20215419_600.jpg",
    category: "Basketball",
    inStock: true,
    featured: true,
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Red/Black", "University Blue", "Chicago"],
    },
  },
  {
    id: "2",
    name: "Nike Air Max 90",
    description:
      "The Nike Air Max 90 stays true to its roots with the iconic waffle outsole, stitched overlays and classic TPU accents.",
    price: 120,
    image:
      "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwe09075d0/nk/eb5/3/a/a/3/7/eb53aa37_e94c_408c_8005_62de84267f88.jpg?sw=2000&sh=2000&sm=fit",
    category: "Lifestyle",
    inStock: true,
    featured: false,
    variants: {
      size: ["7", "8", "9", "10", "11"],
      color: ["White/Grey", "Black", "Infrared"],
    },
  },
  {
    id: "3",
    name: "Adidas Ultraboost 22",
    description:
      "Experience incredible energy return with adidas Ultraboost 22. These running shoes feature a responsive Boost midsole and adidas Primeknit+ upper.",
    price: 190,
    originalPrice: 220,
    image:
      "https://www.cosmossport.cy/2760838-product_medium/adidas-ultraboost-22.jpg",
    category: "Running",
    inStock: true,
    featured: true,
    variants: {
      size: ["7.5", "8", "9", "10", "11", "12"],
      color: ["Core Black", "White", "Grey Three"],
    },
  },
  {
    id: "4",
    name: "PUMA Club II Era Sneakers Unisex",
    description:
      "The PUMA Club II Era sneakers blend football heritage with modern design in smooth suede and leather. Superior cushioning and a heavy-texture midsole deliver maximum comfort for conquering city streets and terrace culture. Move fast – these kicks were made to turn heads.",
    price: 70,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/397447/06/sv01/fnd/IDN/fmt/png/PUMA-Club-II-Era-Sneakers-Unisex",
    category: "Lifestyle",
    inStock: true,
    featured: false,
    variants: {
      size: ["7", "8", "9", "10", "11"],
      color: ["Black/White", "Red/White", "Navy/White"],
    },
  },
  {
    id: "5",
    name: "Yeezy Boost 350 V2",
    description:
      "The adidas Yeezy Boost 350 V2 features an upper composed of re-engineered Primeknit, a Boost midsole, and a rubber outsole.",
    price: 230,
    image:
      "https://cdn-images.farfetch-contents.com/17/41/48/11/17414811_36396248_600.jpg",
    category: "Designer",
    inStock: false,
    featured: true,
    variants: {
      size: ["7", "8", "9", "10", "11", "12", "13"],
      color: ["Beluga", "Zebra", "Static"],
    },
  },
  {
    id: "6",
    name: "New Balance 574",
    description:
      "The New Balance 574 combines a unique aesthetic with superior comfort for a truly versatile shoe that can be worn everyday.",
    price: 80,
    image:
      "https://nb.scene7.com/is/image/NB/u574rca_nb_02_i?$pdpflexf2$&wid=440&hei=440",
    category: "Lifestyle",
    inStock: true,
    featured: false,
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Grey", "Navy", "Black"],
    },
  },
  {
    id: "7",
    name: "Adidas NMD_R1",
    description:
      "The NMD_R1 combines a modern silhouette with Boost cushioning technology for all-day comfort and responsive energy return.",
    price: 140,
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/0be8eec0f2cc4ca491e59aa59013427d_9366/NMD_R1_Shoes_White_IF3501_01_standard.jpg",
    category: "Lifestyle",
    inStock: true,
    featured: false,
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Core Black", "Cloud White", "Solar Red"],
    },
  },
  {
    id: "8",
    name: "Adidas Stan Smith",
    description:
      "The iconic Stan Smith features a clean, minimalist design with a premium leather upper and perforated 3-Stripes.",
    price: 95,
    image:
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/FX5502_01_standard.jpg",
    category: "Lifestyle",
    inStock: true,
    featured: false,
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["White/Green", "White/Navy", "All White"],
    },
  },
  {
    id: "9",
    name: "Adidas Forum Low",
    description:
      "The Forum Low brings back '80s basketball style with modern comfort updates and the signature ankle strap design.",
    price: 110,
    image:
      "https://www.sneaker10.cy/2959901-product_medium/adidas-originals-forum-low-cl.jpg",
    category: "Basketball",
    inStock: true,
    featured: false,
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Cloud White", "Blue/White", "Black/White"],
    },
  },
  {
    id: "10",
    name: "Adidas Gazelle",
    description:
      "The timeless Gazelle features a suede upper, contrast 3-Stripes, and a reinforced toe cap for a classic look and durable wear.",
    price: 90,
    image:
      "https://www.sneaker10.cy/2929508-product_large/adidas-originals-gazelle.jpg",
    category: "Lifestyle",
    inStock: true,
    featured: false,
    variants: {
      size: ["7", "8", "9", "10", "11"],
      color: ["Blue/White", "Black/White", "Burgundy/White"],
    },
  },
  {
    id: "11",
    name: "Adidas Samba",
    description:
      "The legendary Samba has dominated indoor soccer and street style for decades with its sleek profile and gum rubber outsole.",
    price: 85,
    originalPrice: 95,
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/a16aacd2a80b4897bda6ad67f987b8dd_9366/Samba_XLG_Shoes_White_IE1377_01_standard.jpg",
    category: "Soccer",
    inStock: true,
    featured: true,
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Black/White", "White/Black", "Navy/White"],
    },
  },
  {
    id: "12",
    name: "Adidas ZX 2K Boost",
    description:
      "The ZX 2K Boost combines future-ready design with plush Boost cushioning for maximum comfort and energy return.",
    price: 150,
    image: "https://static.ftshp.digital/img/p/4/4/4/3/2/2/444322.jpg",
    category: "Running",
    inStock: true,
    featured: false,
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Core Black", "Grey Three", "Solar Yellow"],
    },
  },
  {
    id: "13",
    name: "Adidas Terrex Free Hiker",
    description:
      "The Terrex Free Hiker provides responsive cushioning and waterproof protection for all your outdoor adventures.",
    price: 200,
    originalPrice: 230,
    image:
      "https://www.bfgcdn.com/1500_1500_90/021-0432/adidas-terrex-terrex-free-hiker-2-walking-boots.jpg",
    category: "Outdoor",
    inStock: true,
    featured: true,
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Grey/Black", "Brown/Green", "Black"],
    },
  },
  {
    id: "14",
    name: "Adidas Solar Glide",
    description:
      "The Solar Glide delivers a smooth ride with responsive cushioning and a supportive fit for daily running.",
    price: 130,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bz6LrE0sYGqDf_o6ylpljrOLigly4JICrw&s",
    category: "Running",
    inStock: true,
    featured: false,
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Blue/Black", "Black/White", "Grey/Yellow"],
    },
  },
  {
    id: "15",
    name: "Puma RS-X",
    description:
      "The RS-X reimagines Puma's Running System technology with exaggerated design and bold color combinations.",
    price: 110,
    image:
      "https://www.sneaker10.cy/2956028-product_large/puma-rs-x-40th-anniversary.jpg",
    category: "Lifestyle",
    inStock: true,
    featured: false,
    variants: {
      size: ["7", "8", "9", "10", "11"],
      color: ["White/Blue/Red", "Black/Neon", "Grey/Orange"],
    },
  },
  {
    id: "16",
    name: "Puma Suede Classic",
    description:
      "The Puma Suede Classic features the iconic suede upper with the signature formstrip and a rubber outsole for grip and durability.",
    price: 80,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr0BqpImDmq46r-hlYvsSUqZy02TSA7TcyxA&s",
    category: "Lifestyle",
    inStock: true,
    featured: false,
    variants: {
      size: ["7", "8", "9", "10", "11"],
      color: ["Black/White", "Red/White", "Blue/White"],
    },
  },
  {
    id: "17",
    name: "Puma Future Rider",
    description:
      "The Future Rider brings back '80s running style with a lightweight design, padded collar, and shock-absorbing outsole.",
    price: 90,
    image:
      "https://img2.ans-media.com/i/840x1260/AW23-OBM112-95X_F1.webp?v=1729836746",
    category: "Lifestyle",
    inStock: true,
    featured: false,
    variants: {
      size: ["7", "8", "9", "10", "11"],
      color: ["Blue/White", "Yellow/Black", "Grey/Neon"],
    },
  },
  {
    id: "18",
    name: "Puma Cali",
    description:
      "The Puma Cali offers a platform sole with clean, tennis-inspired design for a sporty yet fashion-forward look.",
    price: 85,
    image: "https://images.puma.net/images/393802/01/sv01/fnd/KSA/",
    category: "Lifestyle",
    inStock: true,
    featured: true,
    variants: {
      size: ["5", "6", "7", "8", "9", "10"],
      color: ["White", "Black/White", "Pink/White"],
    },
  },
  {
    id: "19",
    name: "Puma Roma",
    description:
      "The Puma Roma combines retro style with modern comfort featuring a leather upper and cushioned midsole.",
    price: 75,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/396868/02/sv01/fnd/PNA/fmt/png/Roma-24-Sneakers",
    category: "Lifestyle",
    inStock: true,
    featured: false,
    variants: {
      size: ["7", "8", "9", "10", "11"],
      color: ["White/Navy/Red", "Black/White", "Grey/White"],
    },
  },
  {
    id: "20",
    name: "Puma Cell Endura",
    description:
      "The Cell Endura returns from the '90s with its chunky silhouette and CELL cushioning technology in the heel.",
    price: 120,
    originalPrice: 140,
    image:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F12%2Fblends-puma-cell-collab-sneaker-teaser-tw.jpg?w=960&cbr=1&q=90&fit=max",
    category: "Running",
    inStock: false,
    featured: true,
    variants: {
      size: ["8", "9", "10", "11", "12"],
      color: ["White/Silver", "Black/Lime", "Grey/Blue"],
    },
  },
  {
    id: "21",
    name: "Puma Basket Classic",
    description:
      "The Puma Basket Classic is a timeless street style icon with a smooth leather upper and simple design.",
    price: 80,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/374923/01/sv01/fnd/EEA/fmt/png/Basket-Classic-XXI-Trainers",
    category: "Lifestyle",
    inStock: true,
    featured: false,
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["White", "Black", "Navy"],
    },
  },
  {
    id: "22",
    name: "Puma Mirage Tech",
    description:
      "The Mirage Tech remixes a '70s running shoe with bold colorways and modern design elements.",
    price: 110,
    image:
      "https://images.stockx.com/images/Puma-Mirage-Tech-Black-High-Risk-Red.jpg?fit=fill&bg=FFFFFF&w=480&h=320&q=60&dpr=1&trim=color&updated_at=1624986610",
    category: "Lifestyle",
    inStock: true,
    featured: true,
    variants: {
      size: ["7", "8", "9", "10", "11"],
      color: ["Blue/Orange", "Grey/Green", "Black/Purple"],
    },
  },
  {
    id: "23",
    name: "Puma Wild Rider",
    description:
      "The Wild Rider blends retro running style with modern design for an eye-catching look and all-day comfort.",
    price: 100,
    image:
      "https://static.ftshp.digital/img/p/6/4/8/8/0/2/648802-full_product.jpg",
    category: "Lifestyle",
    inStock: true,
    featured: true,
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Multi-color", "Grey/Blue", "Black/Orange"],
    },
  },
  {
    id: "24",
    name: "Puma Slipstream",
    description:
      "The Slipstream returns from the archives with its basketball-inspired design and premium materials.",
    price: 95,
    image:
      "https://www.sneaker10.cy/2923412-product_large/puma-slipstream-lo-service-line.jpg",
    category: "Basketball",
    inStock: true,
    featured: false,
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["White/Green", "White/Red", "Black/White"],
    },
  },
];
