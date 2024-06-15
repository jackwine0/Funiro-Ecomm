import React from "react";
import "../../css/ProductRange.css"; 

const ProductRange = () => {
  const categories = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/duicyr28v/image/upload/v1718156043/Image-living_room_covrvb.png",
      title: "Dinning",
      link: "/shop/dinning"
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/duicyr28v/image/upload/v1601234567/Mask_Group_hwfbcn.jpg",
      title: "Living Room",
      link: "/shop/living-room"
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/duicyr28v/image/upload/v1601234567/Mask_Group_2_qmwync.jpg",
      title: "Bedroom",
      link: "/shop/bedroom"
    },
  ];

  return (
    <div className="homepage">
      <h1 className="heading">Browse The Range</h1>
      <p className="paragraph">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, error.
      </p>
      <div className="directory-menu">
        {categories.map((category) => (
          <div className="menu-item" key={category.id}>
            <div
              className="background-image"
              style={{ backgroundImage: `url(${category.image})` }}
            />
            <div className="content">
              <h1 className="title">{category.title}</h1>
              
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ProductRange;
