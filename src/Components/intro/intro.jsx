import React from "react";
import "./intro.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function Intro() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();
      tl.from(['.first-heading', '.second-heading'], {
        opacity: 0,
        duration: 1,
        y: 100,
        stagger: 0.5,
      });
      tl.to("h2", { x: 100, opacity: 0, delay: 1 }).to(".intro-main", {
        opacity: 0,
        delay: 0.2,
        duration: 0.5,
      });
    }, comp)

    return () => ctx.revert();
  }, []);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const introMain = document.querySelector('.intro-main');
      if (introMain) {
        introMain.style.zIndex = '1';
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={comp}>
      <div className="intro-main" ref={comp}>
        <div className="intro-heading">
          <h2 className="first-heading">
            DART <span>-</span>
          </h2>
          <h2 className="second-heading">DRONES</h2>
        </div>
      </div>
    </div>
  );
}

export default Intro;
