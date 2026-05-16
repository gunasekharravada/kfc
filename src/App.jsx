import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Scroll from "./components/Scroll";
import Hero from "./components/Hero";
import Test from "./components/Test";
import Deals from "./components/Deals";
import Temp from "./components/Temp";
import Menu from "./components/Menu";
import Foot from "./components/Foot";
import Login from "./components/Login";


import "./App.css";

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