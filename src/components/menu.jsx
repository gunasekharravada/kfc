import React from "react";
import "./menu.css";
import Allinonebucket from "../images/Allinonebucket.png";
import  Goldburger from"../images/Goldburger.png";
import Burger from"../images/burger.webp";
import Veg2 from"../images/veg2.webp";

const categories = [
  "EPIC BUCKET OF THE DAY",
  "GOLD EDITION",
  "BOX MEALS",
  "VARIETY BUCKETS",
  "VEG",
  "CHICKEN BUCKETS",
  "BURGERS",
  "SNACKS",
  "RICE BOWLZ",
  "BEVERAGE & DESSERTS",
];
const menuData = {
  epic: [
    {
      name: "ALL IN ONE BUCKET",
      desc: "1 Leg, 1 Hot & Crispy, 2 Wings, 2 Strips, 1 Zinger Fillet, 3 Dips & Pepsi 475ml",
      img: Allinonebucket,
      type: "Non Veg",
    },
  ],
  gold: [
    {
      name: "CHICKEN ZINGER & FRIES",
      desc: "Cheesy Chicken Zinger + Fries",
      img: Goldburger,
      type: "Non Veg",
    },
    {
      name: "CHICKEN ZINGER",
      desc: "Crispy Chicken Burger",
      img: Burger,
      type: "Non Veg",
    },
    {
      name: "VEG ZINGER",
      desc: "Cheesy Veg Burger",
      img: Veg2,
      type: "Veg",
    },
  ],

};
  
const Menu = () => {
  return (
    <div className="menu1">
      
      {/* Sidebar */}
      <div className="sidebar1">
        <h2>KFC MENU</h2>
        {categories.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      {/* Content */}
      <div className="content1">

        {/* EPIC */}
        <h2 className="section-title1">EPIC BUCKET OF THE DAY</h2>
        <div className="cards1">
          {menuData.epic.map((item, i) => (
            <Card item={item} key={i} />
          ))}
        </div>

        {/* GOLD */}
        <h2 className="section-title1">GOLD EDITION</h2>
        <div className="cards1">
          {menuData.gold.map((item, i) => (
            <Card item={item} key={i} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Menu;

/* Card Component */
const Card = ({ item }) => {
  return (
    <div className="card1">
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.desc}</p>

      <div className="bottom1">
        <span className={item.type === "Veg1" ? "veg1" : "nonveg1"}>
          {item.type}
        </span>
        <button className="button1">+</button>
      </div>
    </div>
  );
};