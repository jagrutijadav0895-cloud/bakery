'use client'

import { useState } from 'react'
import { menuItems, categories } from '@/lib/menuData'
import { MenuItem } from '@/types'
import MenuCard from './MenuCard'

interface MenuProps {
  onAddToCart: (item: MenuItem) => void
}

export default function Menu({ onAddToCart }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Menu</span>
          <h2 className="section-title">What&apos;s Fresh Today</h2>
        </div>

        <div className="menu-categories">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              data-category={category}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="menu-grid" id="menuGrid">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}
