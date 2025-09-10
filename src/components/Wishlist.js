import React from 'react';
import './Wishlist.css';

const Wishlist = ({ wishlistItems, onRemoveFromWishlist }) => (
  <section className="wishlist-section">
    <h2>My Wishlist</h2>
    {wishlistItems.length === 0 ? (
      <p className="empty-wishlist">Your wishlist is empty.</p>
    ) : (
      <div className="wishlist-grid">
        {wishlistItems.map((item, idx) => (
          <div className="wishlist-card" key={idx}>
            <img src={item.image} alt={item.name} className="wishlist-img" />
            <h3>{item.name}</h3>
            <p className="wishlist-price">₹{item.price}</p>
            <button className="remove-wishlist-btn" onClick={() => onRemoveFromWishlist(idx)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    )}
  </section>
);

export default Wishlist;
