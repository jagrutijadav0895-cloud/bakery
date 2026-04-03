import { MenuItem } from '@/types'

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Red Velvet Cake",
    description: "Classic red velvet with cream cheese frosting",
    price: 45.99,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1586788680434-39d3d1d21c3a?auto=format&fit=crop&w=400&h=300&q=80",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Chocolate Fudge Cake",
    description: "Rich chocolate layers with fudge ganache",
    price: 42.99,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&h=300&q=80",
    badge: null
  },
  {
    id: 3,
    name: "Vanilla Bean Cupcake",
    description: "Fluffy vanilla cupcake with vanilla buttercream",
    price: 4.99,
    category: "cupcakes",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=400&h=300&q=80",
    badge: "New"
  },
  {
    id: 4,
    name: "Strawberry Cupcake",
    description: "Vanilla cupcake with fresh strawberry frosting",
    price: 5.49,
    category: "cupcakes",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=400&h=300&q=80",
    badge: null
  },
  {
    id: 5,
    name: "Croissant",
    description: "Buttery, flaky French pastry",
    price: 3.99,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&h=300&q=80",
    badge: "Fresh Daily"
  },
  {
    id: 6,
    name: "Danish Pastry",
    description: "Sweet pastry with fruit or cream cheese filling",
    price: 4.49,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=400&h=300&q=80",
    badge: null
  },
  {
    id: 7,
    name: "Chocolate Chip Cookie",
    description: "Chewy, loaded with chocolate chips",
    price: 2.99,
    category: "cookies",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&h=300&q=80",
    badge: "Bestseller"
  },
  {
    id: 8,
    name: "Oatmeal Raisin Cookie",
    description: "Soft, chewy with oats and plump raisins",
    price: 2.99,
    category: "cookies",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&h=300&q=80",
    badge: null
  },
  {
    id: 9,
    name: "Carrot Cake",
    description: "Moist carrot cake with cream cheese frosting",
    price: 39.99,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=400&h=300&q=80",
    badge: null
  },
  {
    id: 10,
    name: "Lemon Drizzle Cake",
    description: "Zesty lemon cake with sweet glaze",
    price: 38.99,
    category: "cakes",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=400&h=300&q=80",
    badge: "New"
  }
]

export const categories = ['all', 'cakes', 'cupcakes', 'pastries', 'cookies']
