import React from "react";
import "./navBar.css";
import "../utility/utility.css";
import logo from "../../assets/logo.png";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import crown from "../../assets/crown.png";

function NavBar() {
  const navRef = useRef(null);
  const navItemsRef = useRef('nav');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      gsap.fromTo('nav', { y: -100 }, { y: 0, duration: 1 });
      gsap.fromTo(['#Home', '#nav-about', '#photography-videography', '#nav-work', '#nav-contact', '#Plans'], { y: -100, opacity: 0, delay: 0.5 }, { y: 0, opacity: 1, duration: 1, stagger: 0.5 });
    }, 3200);

    return () => clearTimeout(timer);
  }, []);


  React.useEffect(() => {
    const hamburger = document.querySelector('svg');
    const navContent = document.querySelector('.nav-content-ul');

    const toggleNav = () => {
      const currentRight = navContent.style.right;
      navContent.style.right = currentRight === '0px' ? '-30rem' : '0';
    };

    hamburger.addEventListener('click', toggleNav);

    return () => hamburger.removeEventListener('click', toggleNav);
  }, []);


  return (
    <header className="">
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>
            <a href="#">
              DART<span>Drones</span>
            </a>
          </h1>
        </div>
        <div className="nav-content">
          {/* <i className="hamburger fa-solid fa-bars"></i>
        <i class="hamburger fa-solid fa-xmark"></i> */}
          <section className="hamburger">
            <label >
              <input type="checkbox" />
              <svg viewBox="0 0 32 32" >
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </section>
          <ul className="nav-content-ul">
            <a href="#" id="Home">Home</a>
            <a href="#aboutus" id="nav-about">About us</a>
            <a href="#work" id="nav-work">Work</a>
            <a href="#contact" id="nav-contact">Contact</a>
            <a href="" id="Plans">Plans <img src={crown} alt="premimum" /></a>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
