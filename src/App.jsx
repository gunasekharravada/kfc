import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Scroll from "./components/Scroll";
import Hero from "./components/Hero";
import test from "./components/test";
import Deals from "./components/Deals";
import temp from "./components/temp";
import menu from "./components/menu";
import foot from "./components/foot";

import login from "./components/login";
import signup from "./components/signup";

import "./App.css";

const Home = () => {
  return (
    <>
      <Scroll />
      <Hero />
      <test />
      <Deals />
      <temp />
      <menu />
      <foot />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;