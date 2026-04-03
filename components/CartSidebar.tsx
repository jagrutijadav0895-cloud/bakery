'use client'

import Image from 'next/image'
import { CartItem } from '@/types'

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
  cartItems: CartItem[]
  onUpdateQuantity: (id: number, delta: number) => void
  onRemove: (id: number) => void
  cartTotal: number
  onCheckout: () => void
}

export default function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemove,
  cartTotal,
  onCheckout
}: CartSidebarProps) {
  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? 'active' : ''}`}
        id="cartOverlay"
        onClick={onClose}
      ></div>
      <div className={`cart-sidebar ${isOpen ? 'active' : ''}`} id="cartSidebar">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="cart-close" id="cartClose" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="cart-items" id="cartItems">
          {cartItems.length === 0 ? (
            <p className="cart-empty">Your cart is empty</p>
          ) : (
            cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <div className="cart-item-controls">
                    <button
                      className="qty-btn qty-minus"
                      data-id={item.id}
                      onClick={() => onUpdateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="cart-item-qty">{item.quantity}</span>
                    <button
                      className="qty-btn qty-plus"
                      data-id={item.id}
                      onClick={() => onUpdateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                    <button
                      className="cart-remove"
                      data-id={item.id}
                      onClick={() => onRemove(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-footer" id="cartFooter">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-price" id="totalPrice">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <button className="cart-checkout-btn" onClick={onCheckout}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
