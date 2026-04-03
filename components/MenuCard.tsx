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
            className="btn-add-cart add-to-cart-btn"
            data-product={JSON.stringify(item).replace(/'/g, "&apos;")}
            onClick={() => onAddToCart(item)}
          >
            <i className="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
