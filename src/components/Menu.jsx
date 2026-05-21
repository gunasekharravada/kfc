import React from "react";
import "./Menu.css";
import Allinonebucket from "../images/Allinonebucket.png";
import Goldburger from "../images/Goldburger.png";
import Burger from "../images/burger.webp";
import Veg2 from "../images/veg2.webp";
import zingerboxmeal1 from "../images/zingerboxmeal1.webp";
import vegboxmeal from "../images/vegboxmeal.png";
import boxmeal from "../images/boxmeal.png";
import familybucket1 from "../images/familybucket1.png";
import minibucket1 from "../images/minibucket1.jpg";
import chickenroll from "../images/chickenroll.jpg";
import vegboxmeal1 from "../images/vegboxmeal1.jpg";
import Vegzinger1 from "../images/Vegzinger1.png";
import familybucket from "../images/familybucket.png";
import chickenbucket from "../images/chickenbucket.jpg";
import hotwingsbucket from "../images/hotwingsbucket.jpg";
import smoke from "../images/smoke.jpg";
import crunchy from "../images/crunchy.webp";
import cooldrink1 from "../images/cooldrink1.webp";
import cooldrink2 from "../images/cooldrink2.png";
import cooldrink3 from "../images/cooldrink3.jpg";
import cheeseburger from "../images/cheeseburger.png";
import spicy from "../images/spicy.png";
import doublepattyburger from "../images/doublepattyburger.jpg";
import chickenwings from "../images/chickenwings.png";
import fries1 from "../images/fries1.png";
import popcorn from "../images/popcorn.png";
import crispychicken from "../images/crispychicken.png";
import vegnuggets from "../images/vegnuggets.png";
import ricebolwz from "../images/ricebolwz.png";
import spicyricebowl from "../images/spicyricebowl.png";
import vegricebowl from "../images/vegricebowl.png";
import classicchikken from "../images/classicchicken.webp";
import cheesericebowl from "../images/cheesericebowl.png";
import sevenup from "../images/sevenup.webp";
import chocolateshake from "../images/chocolateshake.png";
import coffie from "../images/coffie.jpg";
import vennela from "../images/vennela.jpg";
/* Sidebar Categories */
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

/* Menu Data */
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

  boxMeals: [
    { name: "Zinger Box Meal", desc: "Burger + Fries + Drink", img: zingerboxmeal1, type: "Non Veg" },
    { name: "Veg Box Meal", desc: "Veg Burger + Fries", img: vegboxmeal, type: "Veg" },
    { name: "Chicken Meal", desc: "Chicken + Drink", img: boxmeal, type: "Non Veg" },
  ],

  varietyBuckets: [
    { name: "Family Bucket", desc: "Big combo bucket", img: familybucket1, type: "Non Veg" },
    { name: "Party Bucket", desc: "Large combo", img: Allinonebucket, type: "Non Veg" },
    { name: "Mini Bucket", desc: "Small combo", img: minibucket1, type: "Non Veg" },
  ],

  veg:[
   { name: "Veg Burger", desc: "Delicious veg burger", img: Veg2, type: "Veg" },
   { name: "Gold Edition-Veg", desc: "Cheesy veg burger", img:Goldburger, type: "Veg" },
   {name: "Veg Roller", desc: "Spicy veg wrap", img: chickenroll, type: "Veg" },
   { name: "Veg Zinger", desc: "Crispy veg burger", img: Vegzinger1, type: "Veg" },
   { name: "Veg Box Meal", desc: "Veg Burger + Fries", img: vegboxmeal1, type: "Veg" },


  
],

chickenBuckets: [
  {
    name: "Chicken Bucket",
    desc: "Crispy chicken pieces",
    img: chickenbucket,
    type: "Non Veg",
  },
  {
    name: "Hot Wings Bucket",
    desc: "Spicy crispy wings bucket",
    img: hotwingsbucket,
    type: "Non Veg",
  },
  {
    name: "Family Chicken Bucket",
    desc: "Perfect meal for family",
    img: familybucket,
    type: "Non Veg",
  },
  {
    name: "Smoky Chicken Bucket",
    desc: "Smoky flavored chicken",
    img: smoke,
    type: "Non Veg",
  },
  {
    name: "Crunchy Bucket",
    desc: "Extra crunchy chicken pieces",
    img: crunchy,
    type: "Non Veg",
  },
],

burgers: [
  {
    name: "Chicken Burger",
    desc: "Juicy chicken burger",
    img: Burger,
    type: "Non Veg",
  },
  {
    name: "Cheese Burger",
    desc: "Burger loaded with cheese",
    img: cheeseburger,
    type: "Non Veg",
  },
  {
    name: "Spicy Zinger Burger",
    desc: "Hot and spicy chicken burger",
    img: spicy,
    type: "Non Veg",
  },
  {
    name: "Veggie Burger",
    desc: "Delicious veg patty burger",
    img: Veg2,
    type: "Veg",
  },
  {
    name: "Double Patty Burger",
    desc: "Double chicken patty burger",
    img: doublepattyburger,
    type: "Non Veg",
  },
],

snacks: [
  {
    name: "Chicken Wings",
    desc: "Spicy wings",
    img: chickenwings,
    type: "Non Veg",
  },
  {
    name: "French Fries",
    desc: "Crispy salted fries",
    img: fries1,
    type: "Veg",
  },
  {
    name: "Chicken Popcorn",
    desc: "Crunchy chicken popcorn",
    img: popcorn,
    type: "Non Veg",
  },
  {
    name: "Veg Nuggets",
    desc: "Crispy veg nuggets",
    img: vegnuggets,
    type: "Veg",
  },
  {
    name: "Chicken Strips",
    desc: "Tender crispy strips",
    img: crispychicken,
    type: "Non Veg",
  },
],

riceBowlz: [
  {
    name: "Rice Bowl",
    desc: "Rice + Chicken gravy",
    img: ricebolwz,
    type: "Non Veg",
  },
  {
    name: "Spicy Rice Bowl",
    desc: "Spicy chicken rice combo",
    img: spicyricebowl,
    type: "Non Veg",
  },
  {
    name: "Veg Rice Bowl",
    desc: "Rice with veg curry",
    img: vegricebowl,
    type: "Veg",
  },
  {
    name: "Cheesy Rice Bowl",
    desc: "Cheese mixed rice bowl",
    img: cheesericebowl,
    type: "Non Veg",
  },
  {
    name: "Classic Chicken Rice",
    desc: "Classic rice and chicken",
    img: classicchikken,
    type: "Non Veg",
  },
],

beverages: [
  {
    name: "Pepsi",
    desc: "Cold drink",
    img: cooldrink1,
    type: "Veg",
  },
  {
    name: "7UP",
    desc: "Refreshing lemon drink",
    img: sevenup,
    type: "Veg",
  },
  {
    name: "Chocolate Shake",
    desc: "Creamy chocolate shake",
    img: chocolateshake,
    type: "Veg",
  },
  {
    name: "Coffie",
    desc: "Chilled coffee drink",
    img: coffie,
    type: "Veg",
  },
  {
    name: "Pepsi Drink",
    desc: "Vanilla ice cream dessert",
    img: vennela,
    type: "Veg",
  },
],
};

/* Section Mapping */
const sections = [
  { title: "EPIC BUCKET OF THE DAY", key: "epic" },
 { title: "GOLD EDITION", key: "gold" },
  { title: "BOX MEALS", key: "boxMeals" },
  { title: "VARIETY BUCKETS", key: "varietyBuckets" },
  { title: "VEG", key: "veg" },
  { title: "CHICKEN BUCKETS", key: "chickenBuckets" },
  { title: "BURGERS", key: "burgers" },
  { title: "SNACKS", key: "snacks" },
  { title: "RICE BOWLZ", key: "riceBowlz" },
  { title: "BEVERAGE & DESSERTS", key: "beverages" },
];

const Menu = () => {
  return (
    <div className="menu1" id="deals">

      {/* Sidebar */}
      <div className="sidebar1">
        <h2>KFC MENU</h2>
        {categories.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      {/* Content */}
      <div className="content1">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="section-title1">{section.title}</h2>

            <div className="cards1">
              {menuData[section.key].map((item, i) => (
                <Card item={item} key={i} />
              ))}
            </div>
          </div>
        ))}
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
        <span className={item.type === "Veg" ? "veg1" : "nonveg1"}>
          {item.type}
        </span>
        <button className="button1">+</button>
      </div>
    </div>
  );
};