'use client'

import { useState } from 'react'
import { MenuItem } from '@/types'
import { useCart } from '@/lib/useCart'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Offers from '@/components/Offers'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CartSidebar from '@/components/CartSidebar'
import ThemeToggle from '@/components/ThemeToggle'

export default function HomePage() {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
    isLoaded
  } = useCart()

  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleCheckout = () => {
    alert('Thank you for your order! Total: $' + cartTotal.toFixed(2))
    clearCart()
    setIsCartOpen(false)
  }

  if (!isLoaded) {
    // Prevent hydration mismatch by not rendering until cart is loaded
    return null
  }

  return (
    <>
      <ThemeToggle />
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        cartTotal={cartTotal}
        onCheckout={handleCheckout}
      />

      <main>
        <Hero />
        <About />
        <Menu onAddToCart={addToCart} />
        <Offers onAddToCart={addToCart} />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
