import React from 'react';
import bannerimg from "../images/bannerimg.jpg";
import styleimg from "../images/styleimg.png";

const Deals = () => {
  return (
   <div className="banner" id="offers">
      <img src={bannerimg} alt="banner" className="banner-img" />
      <div className="overlay">
        <h1>SAVE MORE AS YOU ORDER</h1>
        
      </div>
    </div>
  );
};

export default Deals;
