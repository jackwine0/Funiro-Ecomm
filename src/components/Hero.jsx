import React from "react";
import "../css/Hero.css"; 

const Hero = () => {
  return (
    <div className="page-container">
      <div className="background-container"></div>
      <div className="content-container">
        <div className="text-container">
          <strong><p>New Arrival</p></strong>
          <h1 className="title">Discover Our New Collection</h1>
          <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cumque possimus maiores unde repudiandae exercitationem veniam. Quisquam aut suscipit nemo!</p>
          <a
            className="buy-button"
            href="/shop"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
