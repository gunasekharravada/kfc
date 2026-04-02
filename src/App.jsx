import React from 'react';
import Navbar from './components/Navbar';
import "./app.css";
import Scroll from './components/scroll';
import Hero from './components/Hero';
import Test from './components/test';
import Deals from './components/deals';
import Temp from './components/temp';
import Menu from './components/menu';

const App = () => {
  return( 
    <div>
      <Navbar />
      <Scroll />
      <Hero/>
      <Test/>
      <Deals/>
      <Temp/>
      <Menu/>
      </div>
   );   
};

export default App
