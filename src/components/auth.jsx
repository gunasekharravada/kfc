import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>{isLogin ? "Login" : "Signup"}</h2>

        <form>
          {!isLogin && (
            <input type="text" placeholder="Enter Name" required />
          )}

          <input type="email" placeholder="Enter Email" required />

          <input type="password" placeholder="Enter Password" required />

          <button type="submit">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Signup" : " Login"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default Auth;