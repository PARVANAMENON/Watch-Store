import React from 'react';

import './Cart.css';
const products = [
  {
    name: 'Titan Classic',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Titan Premium',
    price: 7499,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Titan Summer Edition',
    price: 5299,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Titan Edge',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Titan Octane',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Titan Raga',
    price: 7999,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Titan Neo',
    price: 4599,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80',
  },
];

const ProductCatalogue = ({ onAddToCart, onAddToWishlist, onBuyNow }) => {
  return (
    <section className="products-section">
      <div className="deals-offers-banner">
        <span role="img" aria-label="offer">🔥</span> Deals & Offers: Up to 30% OFF on select Titan Watches! <span role="img" aria-label="watch">⌚</span>
      </div>
      <h2>Featured Titan Watches</h2>
      <div className="products-row-horizontal">
        {products.map((product, idx) => (
          <div className="product-card grid-item" key={idx}>
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            <div className="product-actions">
              <button className="buy-now-btn" onClick={() => onBuyNow && onBuyNow(product)}>
                Buy Now
              </button>
              <button className="add-cart-btn" onClick={() => onAddToCart(product)}>
                Add to Cart
              </button>
              <button className="add-wishlist-btn heart-btn" title="Add to Wishlist" onClick={() => onAddToWishlist && onAddToWishlist(product)}>
                <span className="heart-icon" role="img" aria-label="wishlist">❤️</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCatalogue;
