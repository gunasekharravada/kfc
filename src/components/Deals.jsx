import React from 'react';
import bannerimg from "../images/bannerimg.jpg";
import styleimg from "../images/styleimg.png";

const Deals = () => {
  return (
    <div>
   <div className="banner">
      <img src={bannerimg} alt="banner" className="banner-img" />
      <div className="overlay">
        <h1>SAVE MORE AS YOU ORDER</h1>
        
      </div>
    </div>

    </div>
  );
};

export default Deals;
