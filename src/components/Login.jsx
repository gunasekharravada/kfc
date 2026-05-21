import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

import { auth } from "../firebase/firebaseconfig";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleAuth = async () => {

    try {

      if (isSignup) {

        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        navigate("/");

      } else {

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        navigate("/");
      }

    } catch (error) {

      alert(error.message);

    }
  };

  return (

    <div className="login-container">

      <div className="login-header">

        <div>

          <span className="close-btn">✕</span>

          <h1>
            {isSignup ? "Sign Up" : "Login"}
          </h1>

          <p>

            {isSignup ? (
              <>
                Already have an account?{" "}
                <span
                  className="create-account"
                  onClick={() => setIsSignup(false)}
                >
                  Login
                </span>
              </>
            ) : (
              <>
                or{" "}
                <span
                  className="create-account"
                  onClick={() => setIsSignup(true)}
                >
                  create an account
                </span>
              </>
            )}

          </p>

          <div className="line"></div>

        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png"
          alt="food"
          className="food-image"
        />

      </div>

      <input
        type="email"
        placeholder="Enter Email"
        className="phone-input"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        className="phone-input"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="login-btn"
        onClick={handleAuth}
      >
        {isSignup ? "CREATE ACCOUNT" : "LOGIN"}
      </button>

      <p className="terms">
        By clicking, I accept the
        <span> Terms & Conditions </span>
        &
        <span> Privacy Policy</span>
      </p>

    </div>
  );
}

export default Login;