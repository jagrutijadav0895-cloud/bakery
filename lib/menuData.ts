import { MenuItem } from '@/types'

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Red Velvet Cake",
    description: "Classic red velvet with cream cheese frosting",
    price: 45.99,
    category: "cakes",
    image: "/red velvet.jpg",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Chocolate Fudge Cake",
    description: "Rich chocolate layers with fudge ganache",
    price: 42.99,
    category: "cakes",
    image: "/chocolate fudge cake.jpg",
    badge: null
  },
  {
    id: 3,
    name: "Vanilla Bean Cupcake",
    description: "Fluffy vanilla cupcake with vanilla buttercream",
    price: 4.99,
    category: "cupcakes",
    image: "/venila bean.jpg",
    badge: "New"
  },
  {
    id: 4,
    name: "Strawberry Cupcake",
    description: "Vanilla cupcake with fresh strawberry frosting",
    price: 5.49,
    category: "cupcakes",
    image: "/strawberry cupcake.jpg",
    badge: null
  },
  {
    id: 5,
    name: "Croissant",
    description: "Buttery, flaky French pastry",
    price: 3.99,
    category: "pastries",
    image: "/croissant.jpg",
    badge: "Fresh Daily"
  },
  {
    id: 6,
    name: "Danish Pastry",
    description: "Sweet pastry with fruit or cream cheese filling",
    price: 4.49,
    category: "pastries",
    image: "/danish pastry.jpg",
    badge: null
  },
  {
    id: 7,
    name: "Chocolate Chip Cookie",
    description: "Chewy, loaded with chocolate chips",
    price: 2.99,
    category: "cookies",
    image: "/cookies collection.jpg",
    badge: "Bestseller"
  },
  {
    id: 8,
    name: "Oatmeal Raisin Cookie",
    description: "Soft, chewy with oats and plump raisins",
    price: 2.99,
    category: "cookies",
    image: "/oatmeal-raisin-cookies-recipe-08.webp",
    badge: null
  },
  {
    id: 9,
    name: "Carrot Cake",
    description: "Moist carrot cake with cream cheese frosting",
    price: 39.99,
    category: "cakes",
    image: "/carrat cake.jpg",
    badge: null
  },
  {
    id: 10,
    name: "Lemon Drizzle Cake",
    description: "Zesty lemon cake with sweet glaze",
    price: 38.99,
    category: "cakes",
    image: "/lemon drizzle cake2.jpg",
    badge: "New"
  }
]

export const categories = ['all', 'cakes', 'cupcakes', 'pastries', 'cookies']
