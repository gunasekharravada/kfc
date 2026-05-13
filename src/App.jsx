import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Scroll from "./components/scroll";
import Hero from "./components/Hero";
import Test from "./components/test";
import Deals from "./components/deals";
import Temp from "./components/temp";
import Menu from "./components/menu";
import Foot from "./components/foot";

import Login from "./components/login";
import Signup from "./components/signup";

import "./app.css";

const Home = () => {
  return (
    <>
      <Scroll />
      <Hero />
      <Test />
      <Deals />
      <Temp />
      <Menu />
      <Foot />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;