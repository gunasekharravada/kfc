import React, { useState, useEffect } from 'react';

import logo from "../images/logo.webp";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { auth } from "../firebase/firebaseconfig";
import profileicon from "../images/profileicon.webp";
import {onAuthStateChanged,signOut} from "firebase/auth";

const Navbar = () => {

  const [user, setUser] = useState(null);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {

        setUser(currentUser);

      }
    );

    return () => unsubscribe();

  }, []);

 const handleLogout = async () => {

  await signOut(auth);

  navigate("/");

};

  const handleSearch = () => {

    const value = search.toLowerCase();

    let sectionId = "";

    if (value === "burger") {
      sectionId = "burger";
    }

    else if (value === "snacks") {
      sectionId = "snacks";
    }

    else if (value === "chickenbucket") {
      sectionId = "chickenbucket";
    }

    else if (value === "chickenroll") {
      sectionId = "chickenroll";
    }

    else if (value === "fries") {
      sectionId = "fries";
    }

    else if (value === "popcorn") {
      sectionId = "popcorn";
    }

    else if (value === "drinks") {
      sectionId = "drinks";
    }

    const section = document.getElementById(sectionId);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    } else {

      alert("Item not found");

    }
  };

  return (

    <div className="navbar">

      <img src={logo} alt="" />

      <ul>
        <li><a href="#menu">MENU</a></li>
        <li><a href="#deals">DEALS</a></li>
        <li><a href="#offers">OFFERS</a></li>

        <li>
          <a href="https://restaurants.kfc.co.in/">
            LOCATION
          </a>
        </li>

        <li><a href="#about">ABOUT</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      {/* SEARCH */}

      <div className="search-box">

        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && handleSearch()
          }
        />

        <button onClick={handleSearch}>
          🔍
        </button>

      </div>

      {/* CART BUTTON */}

<div className="cart-container">

  <button className="cart-btn">

    <FaShoppingCart className="cart-icon" />

    <span>Cart</span>

  </button>

</div>
      {/* USER SECTION */}

      {user ? (

        <div
          className="profile-container"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >

        <img src={
    profileicon
  } alt="profile"className="profile-icon"
/>

          {showMenu && (

            <div className="profile-menu">

              <p>
                <Link to="/profile">
                  Profile
                </Link>
              </p>

              <p>Orders</p>

              <p>Favourites</p>

              <p onClick={handleLogout}>
                Logout
              </p>

            </div>

          )}

        </div>

      ) : (

        <button className='btn1'>

          <Link to="/signin">
            Log In
          </Link>

        </button>

      )}

    </div>
  );
};

export default Navbar;