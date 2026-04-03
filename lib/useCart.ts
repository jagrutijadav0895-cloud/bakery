'use client'

import { useState, useEffect, useCallback } from 'react'
import { CartItem, MenuItem } from '@/types'
import { addToCart, removeFromCart, updateQuantity, getCart } from './cart'

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = getCart()
    setCart(storedCart)
    setIsLoaded(true)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && isLoaded) {
      localStorage.setItem('sweet-crumbs-cart', JSON.stringify(cart))
    }
  }, [cart, isLoaded])

  const handleAddToCart = useCallback((item: MenuItem) => {
    setCart(prevCart => addToCart(prevCart, item))
  }, [])

  const handleRemoveFromCart = useCallback((id: number) => {
    setCart(prevCart => removeFromCart(prevCart, id))
  }, [])

  const handleUpdateQuantity = useCallback((id: number, delta: number) => {
    setCart(prevCart => updateQuantity(prevCart, id, delta))
  }, [])

  const handleClearCart = useCallback(() => {
    setCart([])
  }, [])

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return {
    cart,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    updateQuantity: handleUpdateQuantity,
    clearCart: handleClearCart,
    cartCount,
    cartTotal,
    isLoaded
  }
}
