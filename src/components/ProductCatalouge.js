import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios';
import './ProductCatalouge.css';

const ProductCatalogue = ({ onAddToCart, onAddToWishlist, onBuyNow }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance.get('products/')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        // Optional fallback data (if backend is down)
        setProducts([
          {
            name: 'Titan Classic',
            price: 4999,
            image: 'https://assets.ajio.com/medias/sys_master/root/20240529/aZUE/6656e5d816fd2c6e6a378496/-473Wx593H-4934048560-multi-MODEL.jpg',
          },
          {
            name: 'Titan Premium',
            price: 7499,
            image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa7b344a2/images/Titan/Catalog/90110WL04_1.jpg?sw=360&sh=360',
          },
          // You can add more fallback items
        ]);
      });
  }, []);

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
