import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="container"
      style={{ position: 'relative', width: '50%', overflow: 'hidden' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={product.image} alt={product.title} className="image" style={{ opacity: 1, display: 'block', width: '100%', height: 'auto', transition: '0.5s ease', backfaceVisibility: 'hidden' }} />
      <div className="middle" style={{ transition: '0.5s ease', opacity: hovered ? 1 : 0, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', msTransform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <div className="text" style={{ backgroundColor: '#04AA6D', color: 'white', fontSize: '16px', padding: '16px 32px' }}>Add to Cart</div>
      </div>
    </div>
  );
};

export default ProductCard;
