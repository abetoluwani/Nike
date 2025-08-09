export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  variants: {
    size?: string[];
    color?: string[];
  };
  inStock: boolean;
  featured?: boolean;
  category: string;
  description: string;
}

export const nikeProducts: Product[] = [
  {
    id: "1",
    name: "Nike Air Force 1 '07",
    price: 110,
    originalPrice: 130,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop&crop=center&auto=format",
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["White", "Black", "Red"],
    },
    inStock: true,
    featured: true,
    category: "Lifestyle",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
  },
  {
    id: "2",
    name: "Nike Air Max 270",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop&crop=center&auto=format",
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Black", "White", "Blue", "Red"],
    },
    inStock: true,
    featured: true,
    category: "Running",
    description:
      "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270.",
  },
  {
    id: "3",
    name: "Nike Dunk Low",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop&crop=center&auto=format",
    variants: {
      size: ["7", "8", "9", "10", "11"],
      color: ["White/Black", "Black/White", "Grey"],
    },
    inStock: false,
    category: "Lifestyle",
    description:
      "Created for the hardwood but taken to the streets, this '80s b-ball icon returns with classic details.",
  },
  {
    id: "4",
    name: "Nike React Infinity Run",
    price: 160,
    originalPrice: 180,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=800&fit=crop&crop=center&auto=format",
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["Black", "White", "Blue", "Pink"],
    },
    inStock: true,
    category: "Running",
    description:
      "A soft, smooth ride that's designed to help keep you running. Day after day. Run after run.",
  },
  {
    id: "5",
    name: "Nike Blazer Mid '77",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=800&fit=crop&crop=center&auto=format",
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["White", "Black", "Navy", "Red"],
    },
    inStock: true,
    category: "Lifestyle",
    description:
      "Praised by female basketball players in the '70s, the Nike Blazer Mid delivers the same comfortable feel.",
  },
  {
    id: "6",
    name: "Nike Air Jordan 1 Low",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&h=800&fit=crop&crop=center&auto=format",
    variants: {
      size: ["7", "8", "9", "10", "11", "12"],
      color: ["White/Black", "Black/Red", "Grey/White"],
    },
    inStock: true,
    featured: true,
    category: "Basketball",
    description:
      "Inspired by the original AJ1, this low-top edition maintains the iconic look you love while delivering comfort.",
  },
];
