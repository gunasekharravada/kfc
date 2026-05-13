import React from 'react';
import swiggy from "../images/swiggy.webp";
import zomato from "../images/zomato.webp";
import kfc from "../images/kfc.webp";

const Hero = () => {
  return (
    <div className="hero" id='home'>
  <div className="hero-left">
    <span>TASTE THE BEST <br/> KFC CHICKEN.</span>

    <p>
      KFC was founded by Colonel Harland Sanders (1890–1980), an entrepreneur who began selling fried chicken 
      from his roadside restaurant in Corbin, Kentucky, during the Great Depression. Sanders identified the potential of the restaurant-franchising concept, and the first "Kentucky Fried Chicken" franchise opened in South Salt Lake, Utah, in 1952. KFC popularized
       chicken in the fast-food industry, diversifying the market by challenging the established dominance of the hamburger.
    </p>

    <div className="buttons">
      <button className="btn3">ORDER NOW</button>
      <button className="btn4">KFC CHICKEN</button>
    </div>

    <p className="delivery-text">Also Available on</p>

    <div className="delivery-icons">
      <a href="https://www.swiggy.com"><img src={swiggy}/></a>
      <a href="https://www.zomato.com"><img src={zomato}/></a>
    </div>
  </div>

  <div className="hero-right">
    <img src={kfc} className="hero-image"/>
  </div>

</div>

 

  );
}; 
export default Hero
