export interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
  badge: string | null
}

export interface CartItem extends MenuItem {
  quantity: number
}
