'use client'

import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

interface NavbarProps {
  cartCount: number
  onCartClick: () => void
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      setIsScrolled(currentScroll > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
  }

  return (
    <nav
      className="navbar"
      id="navbar"
      style={{
        boxShadow: isScrolled ? '0 5px 20px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="nav-container">
        <a href="#home" className="nav-brand">
          <i className="fas fa-bread-slice"></i>
          Sweet Crumbs
        </a>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#menu" className="nav-link">Menu</a></li>
          <li><a href="#offers" className="nav-link">Offers</a></li>
          <li><a href="#testimonials" className="nav-link">Reviews</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <div className="nav-actions">
          <button className="cart-btn" id="cartBtn" onClick={onCartClick}>
            <svg
              className="cart-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              />
              <path
                d="M3 6h18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              />
              <path
                d="M16 10a4 4 0 0 1-8 0"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              />
            </svg>
            <span className="cart-count" id="cartCount">{cartCount}</span>
          </button>
          <button
            className="mobile-menu-btn"
            id="mobileMenuBtn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  )
}
