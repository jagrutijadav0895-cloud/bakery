'use client'

import { MenuItem, CartItem } from '@/types'

const CART_STORAGE_KEY = 'sweet-crumbs-cart'

// Get cart from localStorage
export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  const stored = localStorage.getItem(CART_STORAGE_KEY)
  return stored ? JSON.parse(stored) : []
}

// Save cart to localStorage
function saveCart(cart: CartItem[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }
}

// Add item to cart or increment quantity
export function addToCart(cart: CartItem[], item: MenuItem): CartItem[] {
  const existingItem = cart.find(cartItem => cartItem.id === item.id)

  if (existingItem) {
    return cart.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cart, { ...item, quantity: 1 }]
}

// Remove item from cart
export function removeFromCart(cart: CartItem[], id: number): CartItem[] {
  return cart.filter(item => item.id !== id)
}

// Update quantity
export function updateQuantity(cart: CartItem[], id: number, delta: number): CartItem[] {
  return cart
    .map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item
      }
      return item
    })
    .filter(item => item.quantity > 0)
}

// Clear cart
export function clearCart(): CartItem[] {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(CART_STORAGE_KEY)
  }
  return []
}

// Get total items count
export function getCartCount(cart: CartItem[]): number {
  return cart.reduce((total, item) => total + item.quantity, 0)
}

// Get cart total price
export function getCartTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0)
}
