import React from 'react';
import logo from "../images/logo.webp";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul>
        <li><a href="">MENU</a></li>
        <li><a href="">DEALS</a></li>
        <li><a href="">OFFERS</a></li>
        <li><a href="">LOCATION</a></li>
        <li><a href="">ABOUT</a></li>
        <li><a href="">CONTACT</a></li>
      </ul>
      <button className='btn1'>Order now</button>
      <button className='btn2'> Sign in</button>
    </div>
    
  );
};

export default Navbar;
