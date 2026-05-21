import React from "react";
import zingerburger from"../images/zingerburger.png";
import crispychicken2 from "../images/crispychicken2.jpg";
import Fries1 from "../images/fries1.png";
import Chickenroll from "../images/chickenroll.jpg";
import Popcorn from "../images/popcorn.png";
import Cooldrink3 from "../images/Cooldrink3.jpg";
import  Offercard2 from '../images/offercard2.png';
import  Offercard1 from '../images/Offercard1.png';
import  Veg2 from '../images/Veg2.webp';
import Kfcrewards from '../images/Kfcrewards.jpeg';
import "./deals.css";

const offersData = [
  {
    id: 1,
    title: "FREE CLASSIC ZINGER BURGER",
    desc: "Min. Order Value 499",
    img: zingerburger, 
  },
  {
    id: 2,
    title: "2 PC HOT & CRISPY CHICKEN @ RS 99",
    desc: "Min. Order Value 699",
    img: crispychicken2,
  },
  {
    id: 3,
    title: "UPTO RS 100 OFF ON FIRST ORDERS",
    desc: "Min. Order Value 299",
    img: Offercard1,
  },
  {
    id: 4,
    title: "FREE DELIVERY ON FIRST 3ORDERS",
    desc: "Min Order Value 399",
    img: Offercard2,
  },
  {
    id: 5,
    title: "FREE FRIES",
    desc: "Min. Order Value 499",
    img: Fries1,
  },
  {
    id: 6,
    title: "FREE VEG",
    desc: "Min. Order Value 399",
    img: Veg2,
  },
  {
    id: 7,
    title: "FREE DOUBLE CHICKEN ROLL",
    desc: "Min. Order Value 999",
    img: Chickenroll,
  },
  {
    id: 8,
    title: "FREE POPCORN",
    desc: "Min. Order Value 999",
    img: Popcorn,
  },
    {
    id: 8,
    title: "FREE PEPSI",
    desc: "Min. Order Value 199",
    img: Cooldrink3,
  },
    {
    id: 9,
    title: "KFC REWARDS",
    desc: "Min. Order Value 799",
    img: Kfcrewards,
  },
  {
    id: 10,
    title: "KFC REWARDS",
    desc: "Min. Order Value 999",
    img: Kfcrewards,
  },
  {
    id: 10,
    title: "KFC REWARDS",
    desc: "Min. Order Value Above 1299",
    img: Kfcrewards,
  },
];

const Offers = () => {
  const handleAddToCart = (item) => {
    console.log(" to cart:", item);
  };

  return (
    <div className="offers-container">
      <h2>🍴Combo Deals🧋</h2>
      <h1>Pick your favourite bucket everything in one!</h1>

      <div className="offers-grid">
        {offersData.map((item,index) => (
          <div key={`offer-${index}`} className="card">
            {/* IMAGE SECTION */}
            <div className="image-box">
              <img src={item.img} alt={item.title} />
            </div>

            {/* TEXT */}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            {/* BUTTONS */}
            <button className="view-btn">View Details</button>

            {/* 🛒 ADD TO CART BUTTON */}
            <button className="cart-btn"
              onClick={() => handleAddToCart(item)}
            >
              Apply Offer
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;