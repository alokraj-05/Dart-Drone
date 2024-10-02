import React from 'react';
import "./hero.css";
import drone_video6 from '../../assets/drone6_animation.mp4'
import mainDrone from '../../assets/mainImg.jpeg'
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function Hero() {
  return (
    <section classNameName="hero">
      <div className="main">
        <section className="video-two">
          <div className="main-image">
            <img src={mainDrone} className='droneImg' />
          </div>

          <div className="gradient-overlay"></div>


          <div className="content-2">
            <div className="left">
              <h1>
                <span>Drone</span>
                <span>School</span>
              </h1>
              <p>Learn to fly a drone like a pro</p>
            </div>
            <div className="right">
              <p>
                As a drone maker, my passion lies in crafting innovative aerial solutions that revolutionize industries and inspire curiosity. With meticulous attention to detail, I engineer drones that not only excel in performance but also serve as educational tools, inviting individuals to delve into the intricacies of unmanned aerial vehicles (UAVs)
              </p>
            </div>
          </div>
        </section>
      </div>

    </section>
  );
}

export default Hero;
