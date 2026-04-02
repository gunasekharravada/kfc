import React from 'react';
import burger from "../images/burger.webp";
import kfcbucket1 from "../images/kfcbucket1.png";
import snacks from "../images/snacks.webp";
import chickenroll from "../images/chickenroll.jpg";
import fries1 from "../images/fries1.png";
import popcorn from"../images/popcorn.png";
import veg from"../images/veg.png";
import cooldrink3 from"../images/cooldrink3.jpg";
import crispychicken from"../images/crispychicken.png";
import boxmeal from"../images/boxmeal.png";


const test = () => {
  return (
   <div className="menubartitle"> 
    <h1>Food Menu</h1>
    <div className="menubar">
      <div className="food-card">
  <div className="food-card-inner">

    {/* Front */}
    <div className="food-card-front">
      <img src={burger} alt="Chicken" />
      <h3>BURGERS</h3>
    </div>

    {/* Back */}
    <div className="food-card-back">
      <h3>BURGERS</h3>
      <p>₹199</p>
      <button>Order Now</button>
    </div>

  </div>
</div>

<div className="food-card1">
  <div className="food-card-inner1">

    {/* Front */}
    <div className="food-card-front1">
      <img src={kfcbucket1} alt="Chicken1" />
      <h3>CHICKEN BUCKETS</h3>
    </div>

    {/* Back */}
    <div className="food-card-back1">
      <h3>CHICKEN BUCKETS</h3>
      <p>₹499</p>
      <button>Order Now</button>
    </div>

  </div>
</div>
<div className="food-card2">
  <div className="food-card-inner2">

    {/* Front */}
    <div className="food-card-front2">
      <img src={snacks} alt="Chicken2" />
      <h3>SNACKS</h3>
    </div>

    {/* Back */}
    <div className="food-card-back2">
      <h3> SNACKS</h3>
      <p>₹299</p>
      <button>Order Now</button>
    </div>

  </div>
</div>
<div className="food-card3">
  <div className="food-card-inner3">

    {/* Front */}
    <div className="food-card-front3">
      <img src={chickenroll} alt="Chicken3" />
      <h3>CHICKEN ROLL</h3>
    </div>

    {/* Back */}
    <div className="food-card-back3">
      <h3>CHICKEN ROLL</h3>
      <p>₹99</p>
      <button>Order Now</button>
    </div>

  </div>
</div>
<div className="food-card4">
  <div className="food-card-inner4">

    {/* Front */}
    <div className="food-card-front4">
      <img src={fries1} alt="Chicken4" />
      <h3>FRIES</h3>
    </div>

    {/* Back */}
    <div className="food-card-back4">
      <h3>FRIES</h3>
      <p>₹199</p>
      <button>Order Now</button>
    </div>

  </div>
</div>
<div className="food-card5">
  <div className="food-card-inner5">

    {/* Front */}
    <div className="food-card-front5">
      <img src={popcorn} alt="Chicken5" />
      <h3>POPCORN CHICKEN</h3>
    </div>

    {/* Back */}
    <div className="food-card-back5">
      <h3>POPCORN CHICKEN</h3>
      <p>₹199</p>
      <button>Order Now</button>
    </div>

  </div>
</div>
<div className="food-card6">
  <div className="food-card-inner6">

    {/* Front */}
    <div className="food-card-front6">
      <img src={crispychicken} alt="Chicken6" />
      <h3>STRIPS</h3>
    </div>

    {/* Back */}
    <div className="food-card-back6">
      <h3>STRIPS</h3>
      <p>₹299</p>
      <button>Order Now</button>
    </div>

  </div>
</div>
<div className="food-card7">
  <div className="food-card-inner7">

    <div className="food-card-front7">
      <img src={boxmeal} alt="Chicken7" />
      <h3>BOX MEAL</h3>
    </div>

    <div className="food-card-back7">
      <h3>BOX MEAL</h3>
      <p>₹499</p>
      <button>Order Now</button>
    </div>

  </div>
</div>
<div className="food-card8">
  <div className="food-card-inner8">

    <div className="food-card-front8">
      <img src={veg} alt="Chicken8" />
      <h3>VEG</h3>
    </div>

    <div className="food-card-back8">
      <h3>VEG</h3>
      <p>₹199</p>
      <button>Order Now</button>
    </div>

  </div>
</div>
<div className="food-card9">
  <div className="food-card-inner9">

    <div className="food-card-front9">
      <img src={cooldrink3} alt="Chicken9" />
      <h3>COOL DRINK</h3>
    </div>

    <div className="food-card-back9">
      <h3>COOL DRINK</h3>
      <p>₹99</p>
      <button>Order Now</button>
    </div>

  </div>
</div>
    </div>
    </div>
  )
}

export default test
