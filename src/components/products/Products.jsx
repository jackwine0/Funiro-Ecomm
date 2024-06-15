import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Products.css';

const PRODUCTS = [
  { id: 1, image: 'https://res.cloudinary.com/duicyr28v/image/upload/v1718276284/cea7d268-7e91-453c-ad02-2a627daeed5e_dd4nke.jpg', title: 'Aria Accent Chair', price: '$19.99', description: 'Some text about the jeans..' },
  { id: 2, image: 'https://res.cloudinary.com/duicyr28v/image/upload/v1718276283/Who_wants_an_avocado_inspired_ball_chair_and_swing_chair_in_their_home__foxv9t.jpg', title: 'Avocado chair', price: '$19.99', description: 'Some text about the jeans..' },
  { id: 3, image: 'https://res.cloudinary.com/duicyr28v/image/upload/v1718276283/Wooden_Chair_Showing_Movement_and_Material_Conscious_Design_cvzeyu.jpg', title: 'Vogue Velvet Chair', price: '$199.99', description: 'Some text about the jeans..' },
  { id: 4, image: 'https://res.cloudinary.com/duicyr28v/image/upload/v1718276283/Who_wants_a_shell_inspired_chaise_in_their_home__If_so_we_can_make_it_%EF%B8%8F_d38zev.jpg', title: 'Shell chair', price: '$19.99', description: 'Some text about the jeans..' },
  { id: 5, image: 'https://res.cloudinary.com/duicyr28v/image/upload/v1718276283/Oversized_Chaise_Lounge_Chairs_-_Foter_jlhdlz.jpg', title: 'Orion Office Chair', price: '$19.99', description: 'Some text about the jeans..' },
  { id: 6, image: 'https://res.cloudinary.com/duicyr28v/image/upload/v1718391748/Panton_Chair_Anniversary_Competition_and_Charity_Auction_lwaqmh.jpg', title: 'Eden Dining Chair', price: '$19.99', description: 'Some text about the jeans..' },
  { id: 7, image: 'https://res.cloudinary.com/duicyr28v/image/upload/v1718391739/It_s_back_The_Range_chair_that_caused_a_shopping_frenzy_last_year_is_now_available_in_navy_ajjpzi.jpg', title: 'Classic Club Chair', price: '$19.99', description: 'Some text about the jeans..' },
  { id: 8, image: 'https://res.cloudinary.com/duicyr28v/image/upload/v1718391739/Wave_-_Stratum_Bespoke_bgwdal.jpg', title: 'Infinity Console Table', price: '$19.99', description: 'Some text about the jeans..' },
  // Product data...
];

const ITEMS_PER_PAGE = 8;

const Products = React.memo(() => {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate('/shop');
    };

  const handleAddToCart = () => {
    navigate('/shop');
  };

  const handleCardHover = (id, show) => {
    const card = document.getElementById(`card-${id}`);
    if (card) {
      const button = card.querySelector('.addToCartButton');
      if (button) {
        button.style.display = show ? 'block' : 'none';
      }
    }
  };

  return (
    <section className="products-container">
      <h2>Our Products</h2>
      <div className="grid-container">
        {PRODUCTS.slice(0, visibleItems).map(product => (
          <div 
            key={product.id} 
            className="product-card" 
            id={`card-${product.id}`} 
            onMouseEnter={() => handleCardHover(product.id, true)} 
            onMouseLeave={() => handleCardHover(product.id, false)}
          >
            <img src={product.image} alt={product.title} className="product-image" />
            <p className="product-title">{product.title}</p>
            <p className="product-price">{product.price}</p>
            <button className="addToCartButton" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="show-more-container">
        <button onClick={handleShowMore} className="show-more-button">Show More</button>
      </div>
    </section>
  );
});

export default Products;
