import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, onRemove, onCheckout, onIncreaseQty, onDecreaseQty }) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, idx) => (
            <li key={idx} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">₹{item.price}</span>
                <div className="cart-qty-controls">
                  <button className="qty-btn" onClick={() => onDecreaseQty && onDecreaseQty(idx)} title="Decrease quantity">-</button>
                  <span className="cart-qty">{item.qty || 1}</span>
                  <span className="cart-item-price">
  ₹{item.price} x {item.qty || 1} = ₹{(item.price * (item.qty || 1)).toFixed(2)}
</span>
                  <button className="qty-btn" onClick={() => onIncreaseQty && onIncreaseQty(idx)} title="Increase quantity">+</button>
                </div>
                <button className="remove-btn" onClick={() => onRemove(idx)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button className="checkout-btn" onClick={onCheckout}>Checkout</button>
      )}
    </div>
  );
};

export default Cart;