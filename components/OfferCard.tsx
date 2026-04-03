'use client'

import { MenuItem } from '@/types'
import Image from 'next/image'

interface OfferCardProps {
  item: MenuItem
  originalPrice: number
  salePrice: number
  badge: string
  featured?: boolean
  onAddToCart: (item: MenuItem) => void
}

export default function OfferCard({
  item,
  originalPrice,
  salePrice,
  badge,
  featured = false,
  onAddToCart
}: OfferCardProps) {
  return (
    <div className={`offer-card ${featured ? 'offer-featured' : ''}`}>
      <div className="offer-badge">{badge}</div>
      <div className="offer-image">
        <Image
          src={item.image}
          alt={item.name}
          width={600}
          height={200}
          priority={false}
        />
      </div>
      <div className="offer-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="offer-price">
          <span className="original-price">${originalPrice.toFixed(2)}</span>
          <span className="sale-price">${salePrice.toFixed(2)}</span>
        </div>
        <button
          className="btn btn-primary add-to-cart-btn"
          data-product={JSON.stringify({
            ...item,
            price: salePrice
          }).replace(/'/g, "&apos;")}
          onClick={() => onAddToCart({ ...item, price: salePrice })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
