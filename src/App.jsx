import React from 'react';
import Intro from './Components/intro/intro';
import NavBar from './Components/navigation-bar/navBar';
// import './index.css';
import Hero from './Components/Hero/hero';
import AboutUs from './Components/AboutUs/aboutUs';
import Work from './Components/work/work';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';

function App() {
  return (
    <div>
      <Intro/>
      <NavBar/>
      <Hero/>
      <AboutUs/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
