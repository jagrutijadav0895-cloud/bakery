'use client'

import { MenuItem } from '@/types'
import Image from 'next/image'

interface MenuCardProps {
  item: MenuItem
  onAddToCart: (item: MenuItem) => void
}

export default function MenuCard({ item, onAddToCart }: MenuCardProps) {
  return (
    <div className="menu-card" data-category={item.category}>
      <div className="menu-card-image">
        <Image
          src={item.image}
          alt={item.name}
          width={400}
          height={250}
          priority={false}
        />
        {item.badge && <span className="menu-card-badge">{item.badge}</span>}
      </div>
      <div className="menu-card-content">
        <h3 className="menu-card-title">{item.name}</h3>
        <p className="menu-card-description">{item.description}</p>
        <div className="menu-card-footer">
          <span className="menu-card-price">${item.price.toFixed(2)}</span>
          <button
            className="btn-add-cart"
            data-product={JSON.stringify(item).replace(/'/g, "&apos;")}
            onClick={() => onAddToCart(item)}
          >
            <svg
              className="add-to-cart-icon"
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
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
