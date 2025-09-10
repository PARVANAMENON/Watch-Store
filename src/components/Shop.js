import React, { useState } from 'react';
import './Shop.css';

const categories = [
  { name: 'Men', key: 'men' },
  { name: 'Women', key: 'women' },
  
];

const products = [
  { name: 'Titan Men Classic', price: 4999, category: 'men', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa7b344a2/images/Titan/Catalog/90110WL04_1.jpg?sw=360&sh=360' },
  
  { name: 'Titan Men Sport', price: 8999, category: 'men', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcw1LURqu8D5fZdphtrJT0_kwCHjk410TYw&s' },
  
  { name: 'Titan Regalia', price: 18999, category: 'men', image: 'https://img.tatacliq.com/images/i17//437Wx649H/MP000000022273463_437Wx649H_202405140040561.jpeg' },
  { name: 'Titan Ceramic Fusion', price: 9999, category: 'men', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5f683ff2/images/Titan/Catalog/90148KD06_1.jpg?sw=800&sh=800' },
  { name: 'Titan Round', price: 6999, category: 'men', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1dc0c680/images/Titan/Catalog/90148KD03_1.jpg?sw=600&sh=600' },
  { name: 'Titan QNP9441', price: 20999, category: 'men', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4cf4967e/images/Titan/Catalog/9441YM01_1.jpg?sw=600&sh=600' },
  { name: 'Titan Neo Splash', price: 8999, category: 'men', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1888ad40/images/Titan/Catalog/1805QM01_1.jpg?sw=800&sh=800' },
  


  { name: 'Titan Women Classic', price: 4999, category: 'women', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfb8dc766/images/Titan/Catalog/2644KM02_1.jpg?sw=360&sh=360' },
  
  { name: 'Titan Women Sport', price: 8999, category: 'women', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcw1LURqu8D5fZdphtrJT0_kwCHjk410TYw&s' },
  
  { name: 'Titan Regalia', price: 18999, category: 'women', image: 'https://zimsonwatches.com/cdn/shop/articles/blog_banner.png?v=1710138580&width=1100' },
  { name: 'Titan Ceramic Fusion', price: 9999, category: 'men', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5f683ff2/images/Titan/Catalog/90148KD06_1.jpg?sw=800&sh=800' },
  { name: 'Titan Round', price: 6999, category: 'women', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw43a02c87/images/Titan/Catalog/95141WM01_1.jpg?sw=800&sh=800' },
  { name: 'Titan QNP9441', price: 20999, category: 'women', image: 'https://www.titancompany.in/sites/default/files/1340x600_9.jpg' },
  { name: 'Titan Neo Splash', price: 8999, category: 'women', image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10832046/2022/6/20/6785df74-582b-4d16-929d-21cd788263fb1655728846453-Titan-Women-Silver-Toned-Analogue-Watch-2593SM01-27616557288-1.jpg' },
  { name: 'Titan Maritime ', price: 6999, category: 'women', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMvbkYm85D1kcvm8Hb7gOzkiBUVIx_xg24A&s' },
   { name: 'Titan Square ', price: 7999, category: 'women', image: 'https://cdn1.jewelxy.com/live/img/business_product/360x360/1WlQTUKD33_20230404163854.jpg' },
  
];

const Shop = ({ onAddToCart, onAddToWishlist, onBuyNow }) => {
  const [selectedCategory, setSelectedCategory] = useState('men');
  const [orders, setOrders] = useState([]);

  const handleBuyNow = (product) => {
    setOrders([...orders, product]);
    if (onBuyNow) onBuyNow(product);
    alert(`Order placed for ${product.name}!`);
  };

  return (
    <section className="shop-section">
      <h2>Shop by Category</h2>
      <div className="shop-categories">
        {categories.map(cat => (
          <button
            key={cat.key}
            className={`shop-category-btn${selectedCategory === cat.key ? ' active' : ''}`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="shop-products-grid">
        {products.filter(p => p.category === selectedCategory).map((product, idx) => (
          <div className="shop-product-card" key={idx}>
            <img src={product.image} alt={product.name} className="shop-product-img" />
            <h3>{product.name}</h3>
            <p className="shop-product-price">₹{product.price}</p>
            <div className="shop-product-actions">
              <button className="shop-buy-btn" onClick={() => handleBuyNow(product)}>
                Buy Now
              </button>
              <button className="add-cart-btn" onClick={() => onAddToCart && onAddToCart(product)}>
                Add to Cart
              </button>
              <button className="add-wishlist-btn" title="Add to Wishlist" onClick={() => onAddToWishlist && onAddToWishlist(product)}>
                <span role="img" aria-label="wishlist">❤️</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="shop-orders">
        <h3>My Orders</h3>
        {orders.length === 0 ? (
          <p className="shop-empty-orders">No orders yet.</p>
        ) : (
          <ul className="shop-orders-list">
            {orders.map((order, idx) => (
              <li key={idx}>{order.name} - ₹{order.price}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Shop;
