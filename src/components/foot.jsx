import React from 'react';
import "./foot.css";
import logo from "../images/logo.webp";

const Foot = () => {
  return (
    <footer className="footer" id="about">
      <div className="footer-wrapper">

        {/* Logo */}
        <div className="footer-logo-section">
          <img
            src={logo}
            alt="KFC"
            className="footer-logo"
          />
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h4>Legal</h4>
          <p>Terms and</p>
          <p>Conditions</p>
          <p>Privacy Center</p>
          <p>Disclaimer</p>
          <p>Caution Notice</p>
        </div>

        {/* KFC India */}
        <div className="footer-column">
          <h4>KFC India</h4>
          <p>About KFC</p>
          <p>KFC Care</p>
          <p>Careers</p>
          <p>Our Golden Past</p>
          <p>Responsible</p>
          <p>Disclosure</p>
        </div>

        {/* KFC Food */}
        <div className="footer-column">
          <h4>KFC Food</h4>
          <p>Menu</p>
          <p>Order Lookup</p>
          <p>Gift Card</p>
          <p>Nutrition &</p>
          <p>Allergen</p>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h4>Support</h4>
          <p>Get Help</p>
          <p>Contact Us</p>
          <p>KFC Feedback</p>
          <p>Privacy Center</p>
        </div>

        {/* Find KFC */}
        <div className="find-kfc">
          <span className="location-icon">📍</span>
          <span><a href="https://restaurants.kfc.co.in/" target="_blank" >Find A KFC</a></span>
        </div>

        {/* App Buttons */}
        <div className="store-buttons">
          <a href="https://play.google.com/store/apps/details?id=com.kfc.mobile" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play"
            />
          </a>

          <a href="https://apps.apple.com/app/kfc/id1448342587" target="_blank" rel="noopener noreferrer">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
            />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          Copyright © KFC Corporation 2026 All rights reserved build
          pwa-2509-1.1_b7b0fc5b
        </p>

        <div className="social-icons" id="contact">
          <a href="https://www.instagram.com/kfcindia/" target="_blank" rel="noopener noreferrer">
            <div className="icon">📷</div>
          </a>
          <a href="https://www.facebook.com/KFCIndia/" target="_blank" rel="noopener noreferrer">
            <div className="icon">f</div>
          </a>
          <a href="https://twitter.com/KFCIndia/" target="_blank" rel="noopener noreferrer">
            <div className="icon">🐦</div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Foot
