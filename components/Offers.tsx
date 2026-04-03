'use client'

import { MenuItem } from '@/types'
import OfferCard from './OfferCard'

interface OffersProps {
  onAddToCart: (item: MenuItem) => void
}

export default function Offers({ onAddToCart }: OffersProps) {
  const offers = [
    {
      item: {
        id: 101,
        name: "Birthday Bundle",
        description: "Custom cake + 24 cupcakes + party pack",
        price: 69.99,
        category: "cakes",
        image: "https://images.unsplash.com/photo-1531198058175-a1b5099b2a47?auto=format&fit=crop&w=600&h=400&q=80",
        badge: "Best Value"
      } as MenuItem,
      originalPrice: 89.99,
      salePrice: 69.99,
      badge: "Best Value",
      featured: true
    },
    {
      item: {
        id: 102,
        name: "Morning Delight Box",
        description: "6 assorted pastries + coffee bundle",
        price: 27.99,
        category: "pastries",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&h=400&q=80",
        badge: null
      } as MenuItem,
      originalPrice: 34.99,
      salePrice: 27.99,
      badge: "-20%"
    },
    {
      item: {
        id: 103,
        name: "Cookie Collection",
        description: "12 gourmet cookies in gift box",
        price: 21.24,
        category: "cookies",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&h=400&q=80",
        badge: null
      } as MenuItem,
      originalPrice: 24.99,
      salePrice: 21.24,
      badge: "-15%"
    }
  ]

  return (
    <section className="offers" id="offers">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Limited Time</span>
          <h2 className="section-title">Special Offers</h2>
        </div>
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <OfferCard
              key={offer.item.id}
              item={offer.item}
              originalPrice={offer.originalPrice}
              salePrice={offer.salePrice}
              badge={offer.badge}
              featured={offer.featured}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
